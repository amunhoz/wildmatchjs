#!/bin/bash
neon build --release
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
rm $SCRIPT_DIR/native/target -R