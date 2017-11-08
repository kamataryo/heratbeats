#!/bin/bash
set -e

RED='\033[1;31m'
GREEN='\033[1;32m'
WHITE='\033[1;37m'
CYAN='\033[1;36m'
NC='\033[0m'

INFO="${CYAN}[info]${NC}"

echo '=================================================='
echo -e "${INFO} Starting dev server.."

if [[ $NODE_ENV == '' ]]; then
  echo -e "${INFO} ${RED}NODE_ENV${NC}=${WHITE}development${NC} ${GREEN}[default]${NC}"
  NODE_ENV=development
else
  echo -e "${INFO} ${RED}NODE_ENV${NC}=${WHITE}${NODE_ENV}${NC}"
fi
echo '=================================================='

NODE_ENV=$NODE_ENV \
API_ENV=$API_ENV \
DEBUG=$DEBUG \
  webpack-dev-server --progress --colors --inline --watch
