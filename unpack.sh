#!/bin/bash

function test_xz() {
    if [ "$(which xz)" == "" ]; then
        echo "No XZ found. Get yours at https://tukaani.org/xz/"
        exit 1
    fi
}

function test_lfs() {
    if [ "$(which git-lfs)" == "" ]; then
        echo "No git-lfs found. Get yours at https://git-lfs.github.com/"
        exit 3
    fi
}

function lfs_pull() {
    git lfs pull
}

function unpack() {
    find ./data -type f -iname "*.xz" -exec xz -d -k {} \;
}

function combine() {
    olddir=$(pwd)
    for datadir in $(find ./data -type d -mindepth 1); do
        cd ${datadir}
        big_fname=$(ls *.txt|sed 's/[0-9]//g'|head -n 1)
        for fname in $(ls *.txt|grep '[0-9]\.txt'); do
            cat $fname >> $big_fname
            rm $fname
        done
        cd ${olddir}
    done
}


# MAIN
test_xz
test_lfs
lfs_pull
unpack
combine
