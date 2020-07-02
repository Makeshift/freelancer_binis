# Freelancer Bini's in Ini Format

This repo contains:
* `bini.exe`, a little commandline program by Mario Brito that converts Freelancer bini files to human-readable ini.
* `convert_all.sh`, a script I wrote that will take a Freelancer `DATA` directory and duplicate its folder layout with all `.ini` files made human-readable (Warning: It ain't quick. I made it with the intention of only running it once).
* `fl_release`, containing all `.ini` files found in the Freelancer 1.0/1.1 `DATA` directory (as found on the original game disc, product version 1.0.0.0, file version 1.0.1223.11) converted into human-readable `.ini`.
* `fl_beta`, containing all the `.ini` files found in the Freelancer Beta 1 `DATA` directory (Product version is 1.0.0.1, file version 1.0.0.874) converted into human-readable `.ini`.
* `SYSTEM_NAMES.txt` - Just a list of all the friendly system names and their counterpart when referred to in the files
* `NICKNAME_HASHES.txt` - A list of all `nickname`'s found in FL1.0's `.ini`'s plus their CRC hash counterpart that FL sometimes uses
* `search_hash_list` - A little NodeJS script that will extract anything that looks like a hash from a given string, and convert all found hashes into their slightly-more-friendly nicknames.