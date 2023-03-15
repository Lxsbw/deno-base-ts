#!/bin/bash

appName=$1
action=$2
appPath=$3

if [ ${action} = "start" ]; then
  pm2 start ${appPath} --interpreter="deno" --interpreter-args="run --allow-net --allow-read" --name=${appName}
else
  pm2 stop ${appName}
  pm2 delete ${appName}
fi;
