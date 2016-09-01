#!/usr/bin/env bash

# Remap generated istanbul coverage .js to .ts sources
./node_modules/.bin/remap-istanbul -i coverage/coverage.json -o coverage -t html

touch coverage/summary.txt
# Calculate coverage average using the summary that was written by istanbul
./node_modules/.bin/coverage-average coverage/summary.txt

printf "\nSummary written to:\n  - coverage/coverage.json\n  - coverage/summary.txt\n"
