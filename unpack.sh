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
    echo "Unpacking data/ ..."
    find ./data -type f -iname "*.xz" -exec xz -d -k {} \;
}

function filter() {
    local fname=$1
    if [ ! -f "${fname}" ]; then
        echo "Cannot filter non-existent file ..."
        exit 3
    fi
    echo "Filtering ${fname} ..."
    cat ${fname}|egrep -v '^(\.|\-|\%)' > ${fname}.1
    mv ${fname}.1 ${fname}
}

function combine() {
    olddir=$(pwd)
    for datadir in $(find ./data -type d -mindepth 1); do
        cd ${datadir}
        echo "Working on ${datadir} ..."
        big_fname=$(ls *.txt|sed -E 's/[0-9]+\./\./g'|head -n 1)
        rm -f ${big_fname}
        for fname in $(ls *.txt|grep '[0-9][0-9|a-z]\.txt'); do
            cat $fname >> $big_fname
            rm $fname
        done
        filter $big_fname
        cd ${olddir}
    done
}


# MAIN
test_xz
test_lfs
lfs_pull
unpack
combine
