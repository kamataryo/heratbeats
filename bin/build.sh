#!/bin/bash
set -e

RED='\033[1;31m'
GREEN='\033[1;32m'
WHITE='\033[1;37m'
CYAN='\033[1;36m'
NC='\033[0m'

INFO="${CYAN}[info]${NC}"
FATAL="${RED}[fatal]${NC}"

SPLIT='=================================================='

echo ${SPLIT}

git diff-index --quiet HEAD -- || (
  echo -e "${FATAL} Uncommit change is found. Please commit at first." &&
  echo ${SPLIT} &&
  exit 1
)

if [[ $NODE_ENV == '' ]]; then
  echo -e "${INFO} ${RED}NODE_ENV${NC}=${WHITE}production${NC} ${GREEN}[default]${NC}"
  NODE_ENV=production
else
  echo -e "${INFO} ${RED}NODE_ENV${NC}=${WHITE}${NODE_ENV}${NC}"
fi

./node_modules/.bin/rimraf dist
echo -e "${INFO} building the project.."
NODE_ENV=$NODE_ENV \
  ./node_modules/.bin/webpack -p || (
    echo -e "${FATAL} build failed." &&
    echo ${SPLIT} &&
    exit 2
  )
echo -e "${INFO} build successed!"

VERSION=$(node -e "console.log(require('./package.json').version)")
REVISION=$(git log -n 1 --format=%H)
SHORT_REV=${REVISION:0:7}
echo -e "${INFO} VERSION=${VERSION}"
echo -e "${INFO} REVISION=${SHORT_REV}"
echo '=================================================='
