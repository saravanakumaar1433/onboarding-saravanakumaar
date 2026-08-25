# Module 03 - GitHub Repository Setup and Source Control Practice

## Developer Details

- Developer: Saravanakumaar
- Repository: onboarding-saravanakumaar
- Status: Done

---

## Objective

Understand and practice GitHub source control workflow including branching, commits, push, pull requests and conflict resolution.

---

## Concept Checkpoint

| Topic | Developer Status | Mentor Sign-off |
|---------|---------|---------|
| Git clone, branch, commit, push and pull | Done |
| GitHub Flow and reviewer approval | Done  |
| Meaningful commits and PR descriptions | Done |

---

## Repository Setup

Repository Name:
- onboarding-saravanakumaar

Repository Contents:
- README.md
- docs folder
- Module documentation

---

## Git Commands Practiced

```bash
git checkout -b task/m03-github-source-control
Git branch
git add . git commit -m "M03 GitHub source control practice completed" 
git push -u origin task/m03-github-source-control
git push -u origin main
git remote -v 
git pull
git push origin --delete m03-github-source-control
git log --oneline
git reset --soft HEAD~1
