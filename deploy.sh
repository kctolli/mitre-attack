#!/bin/bash
echo "Mitre Attack - Deployment --- `date +%m`/`date +%d`/`date +%Y` `date +%r`"
cd ~/mitre-attack

bun lint
bun lint:fix

# Git Update
git status
git pull 
git add . 
git commit -m "Deploy --- `date +%m`/`date +%d`/`date +%Y` `date +%r`"
git push
