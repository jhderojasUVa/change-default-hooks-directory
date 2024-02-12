const { execSync } = require('child_process');

const cli = (cmd) => execSync(cmd).toString().trim();

const validNames = /HEAD|^[a-z0-9-]*\/[a-z0-9-]*$/;
const branchName = cli('git rev-parse --abbrev-ref HEAD');
const branchNameIsValid = validNames.test(branchName);

if (!branchNameIsValid) {
  console.log(`Branch name '${branchName}' is not valid`);
  console.log('Please use lowercase alphanumeric words separated by hyphens');
  process.exit(1);
}