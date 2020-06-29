#!/bin/bash

data_dir="../FL_RAW/DATA/"

for ini_raw in $(find "$data_dir" -name "*.ini"); do
    echo "Converting $ini_raw"
    output=$(echo | ./bini.exe "$ini_raw") # Little hack to send an empty line to stdin, forcing an exit if it errors
    if ! echo "$output" | grep Error > /dev/null; then
        ini_clean=${ini_raw#"$data_dir"}
        ini_clean="DATA/${ini_clean}"
        dir_clean=$(dirname "$ini_clean")
        mkdir -p "$dir_clean"
        readable_ini_output="${ini_raw}.txt"
        mv "$readable_ini_output" "$ini_clean"
    else
        echo "Skipping file $ini_raw because it doesn't seem to be a BINI"
    fi
done