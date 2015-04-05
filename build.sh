#!/usr/bin/env bash

echo "CREATE BUILD"
echo $pwd
rm -rf web/output && (cd web && meteor build --debug --directory output)

echo "NPM INSTALL"
(cd web/output/bundle/programs/server && npm install)

echo "UPDATE WITH CACHE"
rm -rf web/output/bundle/programs/server/node_modules/fibers && cp -r cache/node_modules/fibers web/output/bundle/programs/server/node_modules/fibers
rm -rf web/output/bundle/programs/server/npm/donaldaverill_serialport/node_modules/serialport && cp -r cache/node_modules/serialport web/output/bundle/programs/server/npm/donaldaverill_serialport/node_modules/serialport