#!/bin/bash
echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"
# Git pull
git pull
# Build the project.
hugo --ignoreCache # if using a theme, replace with `hugo -t <YOURTHEME>`
# Go To Public folder
cd public
# checkout Master
git checkout master
# Add changes to git.
git add .
# Commit changes.
msg="rebuilding site `date`"
if [[ $# -eq 1 ]]
  then msg="$1"
fi
git commit -m "$msg"
# Push source and build repos.
git push
# Come Back up to the Project Root
cd ..
git checkout development
git add public
git commit -m "Updated submodule"