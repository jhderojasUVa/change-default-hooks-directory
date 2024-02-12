# change-default-hooks-directory
A small example about how to change and run git hooks in a different directory.

# Repository organization

The hooks are on different directories depending the language you want to use, currently:

- Python: `githooks-python`
- Bash: `githooks-bash`

# How to make git able to use them

Use the next command:

`git config --local core.hooksPath <PATH OF THE HOOKS>`

Example:

- Python: `git config --local core.hooksPath ./githooks-python`
- Bash: `git config --local core.hooksPath ./githooks-bash`

# Security and Permission Control

Set the hooks with those rights:

`chmod -R 755 <PATH TO HOOKS>`

## Python

You need to install `pre-commit` and `conventional-commits-check` by using pip.

`pip install pre-commit`

### Possible problems

| Problem | Cause | Solution |
| ------- | ----- | -------- |
| Unable to find `pip` | `pip` is not installed or maybe you have `pip3` installed | You can make an alias for `pip3` to `pip` (`alias pip=pip3`). Also check that `python` is installed on your system. |
| After installing `pre-commit` the command doesn't work | The `pip` installed commands is not on your path | Add it to the systems or user path |

