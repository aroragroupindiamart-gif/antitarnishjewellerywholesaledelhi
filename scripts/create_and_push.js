const fs = require('fs');
const https = require('https');
const { execSync } = require('child_process');

// Read credentials from desktop file
const credContent = fs.readFileSync('C:\\Users\\DELL\\Desktop\\AIKonvert.txt', 'utf-8');

let token = '';
let owner = '';

credContent.split('\n').forEach(line => {
  const trimmed = line.trim();
  if (trimmed.startsWith('GITHUB_PAT=')) {
    token = trimmed.split('=')[1].trim();
  }
  if (trimmed.startsWith('GITHUB_OWNER=')) {
    owner = trimmed.split('=')[1].trim();
  }
});

if (!token) {
  console.error('No GITHUB_PAT found in AIKonvert.txt');
  process.exit(1);
}

const repoName = 'antitarnishjewellerywholesaledelhi';
console.log(`Target Owner: ${owner || 'authenticated user'}`);
console.log(`Repository Name: ${repoName}`);

function githubApiRequest(path, method, body) {
  return new Promise((resolve, reject) => {
    const postData = body ? JSON.stringify(body) : null;
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: path,
      method: method,
      headers: {
        'User-Agent': 'NodeJS-Antigravity-Agent',
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        ...(postData && {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        })
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve({ statusCode: res.statusCode, data: JSON.parse(data) });
        } catch (e) {
          resolve({ statusCode: res.statusCode, raw: data });
        }
      });
    });

    req.on('error', (err) => reject(err));
    if (postData) req.write(postData);
    req.end();
  });
}

async function main() {
  try {
    // 1. Get authenticated user
    const userRes = await githubApiRequest('/user', 'GET');
    if (userRes.statusCode !== 200) {
      console.error('Failed to authenticate with GitHub token:', userRes);
      process.exit(1);
    }
    const authUsername = userRes.data.login;
    console.log(`Authenticated as GitHub user: ${authUsername}`);

    // Check if repo exists
    const targetOwner = owner || authUsername;
    const checkRepo = await githubApiRequest(`/repos/${targetOwner}/${repoName}`, 'GET');
    
    let repoUrl = '';
    if (checkRepo.statusCode === 200) {
      console.log(`Repository ${targetOwner}/${repoName} already exists!`);
      repoUrl = checkRepo.data.clone_url;
    } else {
      console.log(`Creating repository ${repoName}...`);
      // Determine if creating under org or personal user
      let createEndpoint = '/user/repos';
      let payload = {
        name: repoName,
        description: 'Dedicated high-converting acquisition satellite for Arora Group Wholesale (Delhi Hub)',
        private: false, // public or private, let's keep it clean
        auto_init: false
      };

      if (owner && owner !== authUsername) {
        // Check if owner is an org
        const orgRes = await githubApiRequest(`/orgs/${owner}`, 'GET');
        if (orgRes.statusCode === 200) {
          createEndpoint = `/orgs/${owner}/repos`;
        }
      }

      const createRes = await githubApiRequest(createEndpoint, 'POST', payload);
      if (createRes.statusCode !== 201 && createRes.statusCode !== 200) {
        console.error('Failed to create repo:', createRes);
        process.exit(1);
      }
      console.log(`Repository created successfully: ${createRes.data.html_url}`);
      repoUrl = createRes.data.clone_url;
    }

    // Now push code to repo
    // Authenticated remote URL
    const authRemoteUrl = `https://${authUsername}:${token}@github.com/${targetOwner}/${repoName}.git`;
    
    // Commit all current changes first
    execSync('git add .', { stdio: 'inherit' });
    try {
      execSync('git commit -m "feat: complete antitarnishjewellerywholesaledelhi.com platform with automated drip feed engine"', { stdio: 'inherit' });
    } catch (e) {
      console.log('No new changes to commit.');
    }

    // Set branch to main
    execSync('git branch -M main', { stdio: 'inherit' });

    // Check remote
    try {
      execSync('git remote remove origin', { stdio: 'ignore' });
    } catch (e) {}

    execSync(`git remote add origin https://github.com/${targetOwner}/${repoName}.git`, { stdio: 'inherit' });

    console.log('Pushing code to GitHub repository...');
    // Push using authenticated remote
    execSync(`git push -u "${authRemoteUrl}" main --force`, { stdio: 'inherit' });

    console.log(`\nSUCCESS! Code pushed to https://github.com/${targetOwner}/${repoName}`);
  } catch (err) {
    console.error('Error during execution:', err);
    process.exit(1);
  }
}

main();
