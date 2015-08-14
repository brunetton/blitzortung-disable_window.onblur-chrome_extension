#!/bin/sh

# Generate zip file for extension

version=`sed -n '/"version"/s/"version": "\(.*\)",/\1/p' manifest.json | xargs`
self=`basename $0`
files_to_compress=`ls *.* -1 | grep -v .zip | grep -v $self | grep -v grep -v .svg | xargs`

zip disable_window.onblur-$version.zip $files_to_compress
