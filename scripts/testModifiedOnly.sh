#!/bin/bash

if git diff --name-only | grep '\.gql' &> /dev/null; then
  yarn run test:unit
else
  lastCommit=$(git rev-parse HEAD)
  # Used changedSince instead of onlyChanged because of ignoring stage file by the last one
  yarn run test:unit --changedSince="$lastCommit"
fi
