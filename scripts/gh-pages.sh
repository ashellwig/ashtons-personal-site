#!/usr/bin/env sh

set -e

# build
yarn run build
cd dist

# deploy
git init
git add -A
git commit -m 'deploy to github pages'
git push -f git@github.com:ashellwig/ashellwig.github.io.git master

cd -
