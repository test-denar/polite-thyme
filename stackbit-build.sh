#!/usr/bin/env bash

set -e
set -o pipefail
set -v

initialGitHash=$(git rev-list --max-parents=0 HEAD)
node ./studio-build.js $initialGitHash &

curl -s -X POST https://dev-api.stackbit.com/project/5de501e94d7ff6001b919473/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://dev-api.stackbit.com/pull/5de501e94d7ff6001b919473
curl -s -X POST https://dev-api.stackbit.com/project/5de501e94d7ff6001b919473/webhook/build/ssgbuild > /dev/null
gatsby build
wait

curl -s -X POST https://dev-api.stackbit.com/project/5de501e94d7ff6001b919473/webhook/build/publish > /dev/null
echo "Stackbit-build.sh finished build"
