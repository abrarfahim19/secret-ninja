## Git Commands to manage the control.

### Before making any changes to the main branch create a new branch

Create a new Branch with `git branch <branchName>`

Go to the new Branch with `git checkout <branchName>`

### Add the changes to the new branch and commit and push

`git add .`

`git commit -m 'The change in new branch'`

`git push`

### Merge the branches

`git checkout main`

`git merge <branchName>`

## For working remotely

====================================================================

_User 1_
Create a new Branch with `git branch <branchName1>`

Go to the new Branch with `git checkout <branchName1>`

`git add .`

`git commit -m 'The change in branch1'`

`git push`

====================================================================

_User 2_
Create a new Branch with `git branch <branchName2>`

Go to the new Branch with `git checkout <branchName2>`

`git add .`

`git commit -m 'The change in branch2'`

`git push`

====================================================================

- Make pull request in the browser.
- merge without the conflict.

### Say the marge was branchName1 ==> branchName2

We want the marge back in local brancName2 we can do it like this

`git branch -r`

`git checkout origin/<branchName2>` to see the changes does work

`git checkout <branchName2>` to revert back to the local branch

`git merge origin/<branchName2>` to merge the branches

====================================================================

`git branch --delete <localBranchName>`
`git push origin --delete <remoteBranchName>`
