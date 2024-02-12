const { execSync } = require('child_process');

const cli = (cmd) => execSync(cmd).toString().trim();

const validNames = /HEAD|^(feat|fix|hotfix|bug|docs|style|refactor|ref|chore)\/(US|DE|TA)[0-9]{7,}-[a-z0-9-]+$/;
const branchName = cli('git rev-parse --abbrev-ref HEAD');
const branchNameIsValid = validNames.test(branchName);

if (!branchNameIsValid) {
    console.log('** Branch naming error **');
    console.log(`Branch name '${branchName}' is not valid`);
    console.log('Please use lowercase alphanumeric words separated by hyphens');
    process.exit(1);
}