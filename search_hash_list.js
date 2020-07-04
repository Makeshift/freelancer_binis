const SEARCH_STRING = `
equip = 3147921549, , 1
equip = 3088051465, HpShield01, 1
equip = 2779996489, , 1
equip = 2723858309, , 1
equip = 2799531210, , 1
equip = 2736134149, HpCM01, 1
cargo = 2210881030, 20, , , 0
equip = 2265531853, HpHeadlight, 1
equip = 2802020621, HpRunningLight01, 1
equip = 2802020621, HpRunningLight02, 1
equip = 2802020621, HpRunningLight05, 1
equip = 2500775748, HpContrail01, 1
equip = 2500775748, HpContrail02, 1
equip = 2494027655, HpDockLight01, 1
equip = 2494027655, HpDockLight02, 1
cargo = 2797456458, 1, , , 0
cargo = 2797456458, 1, , , 0
cargo = 2759792129, 1, , , 0
cargo = 2759792129, 1, , , 0
cargo = 2759792129, 1, , , 0
cargo = 2759792129, 1, , , 0
equip = 2851656000, HpThruster01, 1
28516561400
`.trim();


const SYSTEM_NAMES = [
    {BR01: "New London"},
    {BR02: "Manchester"},
    {BR03: "Cambridge"},
    {BR04: "Leeds"},
    {BR05: "Dublin"},
    {BR06: "Edinburgh"},
    {BW01: "Omega-3"},
    {BW02: "Omega-5"},
    {BW03: "Omega-7"},
    {BW04: "Omega-11"},
    {BW05: "Sigma-13"},
    {BW06: "Sigma-17"},
    {BW07: "Sigma-19"},
    {BW08: "Tau-23"},
    {BW09: "Tau-29"},
    {BW10: "Tau-31"},
    {EW01: "Tau-37"},
    {EW02: "Omicron Beta"},
    {EW03: "Omega-41"},
    {EW04: "Omicron Theta"},
    {EW05: "Unknown (1)"},
    {EW06: "Unknown (2)"},
    {HI01: "Omicron Alpha"},
    {HI02: "Omicron Gamma"},
    {IW01: "Bering"},
    {IW02: "Hudson"},
    {IW03: "Magellan"},
    {IW04: "Cortez"},
    {IW05: "Kepler"},
    {IW06: "Galileo"},
    {KU01: "New Tokyo"},
    {KU02: "Shikoku"},
    {KU03: "Kyushu"},
    {KU04: "Honshu"},
    {KU05: "Hokkaido"},
    {KU06: "Chugoku"},
    {KU07: "Tohoku"},
    {LI01: "New York"},
    {LI02: "California"},
    {LI03: "Colorado"},
    {LI04: "Texas"},
    {LI05: "Alaska"},
    {RH01: "New Berlin"},
    {RH02: "Hamburg"},
    {RH03: "Stuttgart"},
    {RH04: "Frankfurt"},
    {RH05: "Dresden"},
    {ST01: "Omnicron Minor"},
    {ST02: "Nav Map Not Available"},
    {ST02C: "Nomad Lair"},
    {ST03: "Dyson Sphere"},
    {ST03B: "Nomad City"}
]

const fs = require('fs').promises;

const replaceManyStr = (obj, sentence) => obj.reduce((f, s) => `${f}`.replace(new RegExp(Object.keys(s)[0], 'gi'), s[Object.keys(s)[0]]), sentence);

async function go() {
    let db = (await fs.readFile("NICKNAME_HASHES.txt")).toString().split("\n")
    const db_lookup = {};
    for (let i = 8; i < db.length-1; i++) {
        let splitItem = db[i].split(/\s+/);
        db_lookup[splitItem[3]] = {
            name: splitItem[0],
            from_path: splitItem[1],
            hex: splitItem[2],
            id: splitItem[3]
        }
    }
    db = null;



    let regexp = RegExp(/\d{10}/, 'g');
    let matches = SEARCH_STRING.matchAll(regexp);
    for (const match of matches) {
        let item = db_lookup[Number(match[0])];
        if (item) {
            console.log(JSON.stringify(item));
        } else {
            console.log(`${Number(match[0])} not found in DB.`)
        }
    }
}

go();