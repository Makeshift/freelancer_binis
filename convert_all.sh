#!/bin/bash

data_dir="../FREELANCER_BETA_1/installed/data/"
output_folder="fl_beta"

for ini_raw in $(find "$data_dir" -name "*.ini"); do
    echo "Converting $ini_raw"
    output=$(echo | ./bini.exe "$ini_raw") # Little hack to send an empty line to stdin, forcing an exit if it errors
    ini_clean=${ini_raw#"$data_dir"}
    ini_clean="${output_folder}/DATA/${ini_clean}"
    dir_clean=$(dirname "$ini_clean")
    mkdir -p "$dir_clean"
    if ! echo "$output" | grep Error > /dev/null; then
        readable_ini_output="${ini_raw}.txt"
        mv "$readable_ini_output" "$ini_clean"
    else
        echo "File $ini_raw isn't a bini - Copying as is"
        cp "$ini_raw" "$ini_clean"
    fi
done