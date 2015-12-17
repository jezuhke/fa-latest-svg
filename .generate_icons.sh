#!/bin/bash

set -o errexit # Exit on error

npm install

fa2svg --dir svg

svgo -f svg

cd svg

renamer --find 'fa-' --replace '' *
