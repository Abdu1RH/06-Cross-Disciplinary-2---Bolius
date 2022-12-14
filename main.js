//UDB020: Boligpriser efter område, ejendomskategori og priser
// Enhed : Kr. pr. m2

let data =
[
    {
        Kommune: "København",
        Postnummer: 2100,
        ParcelEllerRækkehuse: 64034,
        Ejerlejlighed: 55018,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja",

    },
    {
        Kommune: "Frederiksberg",
        Postnummer: 1800,
        ParcelEllerRækkehuse: 93739,
        Ejerlejlighed: 63459,
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja",
    },
    {
        Kommune: "Dragør",
        Postnummer: 2791,
        ParcelEllerRækkehuse: 52678,
        Ejerlejlighed: 38333,
        KæresteEllerPartner: "Ja",
        Bil: "Ja"
    },
    {
        Kommune: "Tårnby",
        Postnummer: 2770,
        ParcelEllerRækkehuse: 39620,
        Ejerlejlighed: 38057,
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Albertslund",
        Postnummer: 2620,
        ParcelEllerRækkehuse: 27484,
        Ejerlejlighed: 21980,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja"
    },
    {
        Kommune: "Ballerup",
        Postnummer: 2750,
        ParcelEllerRækkehuse: 36322,
        Ejerlejlighed: 29655,
        BarnEllerBørn: "Ja",
        Bil: "Ja"
    },
    {
        Kommune: "Brøndby",
        Postnummer: 2660,
        ParcelEllerRækkehuse: 33517,
        Ejerlejlighed: 25873,
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja",
    },
    {
        Kommune: "Gentofte",
        Postnummer: 2820,
        ParcelEllerRækkehuse: 87976,
        Ejerlejlighed: 59006,
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Kæledyr: "Ja",
    },
    {
        Kommune: "Gladsaxe",
        Postnummer: 2860,
        ParcelEllerRækkehuse: 54860,
        Ejerlejlighed: 33090,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Glostrup",
        Postnummer: 2600,
        ParcelEllerRækkehuse: 33626,
        Ejerlejlighed: 31334,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Kæledyr: "Ja",
    },
    {
        Kommune: "Herlev",
        Postnummer: 2730,
        ParcelEllerRækkehuse: 36661,
        Ejerlejlighed: 31721,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
    },
    {
        Kommune: "Hvidovre",
        Postnummer: 2650,
        ParcelEllerRækkehuse: 36578,
        Ejerlejlighed: 33775,
        Bil: "Ja"
    },
    {
        Kommune: "Høje-Taastrup",
        Postnummer: 2630,
        ParcelEllerRækkehuse: 28664,
        Ejerlejlighed: 29035,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"

    },
    {
        Kommune: "Ishøj",
        Postnummer: 2635,
        ParcelEllerRækkehuse: 24516,
        Ejerlejlighed: 28003,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"

    },
    {
        Kommune: "Lyngby-Taarbæk",
        Postnummer: 2800,
        ParcelEllerRækkehuse: 57800,
        Ejerlejlighed: 40371,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"

    },
    {
        Kommune: "Rødovre",
        Postnummer: 2610,
        ParcelEllerRækkehuse: 36360,
        Ejerlejlighed: 35364,
        Kæledyr: "Ja",
        Cykel: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"

    },
    {
        Kommune: "Vallensbæk",
        Postnummer: 2625,
        ParcelEllerRækkehuse: 32167,
        Ejerlejlighed: 27329,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja"
    },
    {
        Kommune: "Allerød",
        Postnummer: 3450,
        ParcelEllerRækkehuse: 34354,
        Ejerlejlighed: 27109,
        BarnEllerBørn: "Ja",
        Bil: "Ja"

    },
    {
        Kommune: "Egedal",
        Postnummer: 3650,
        ParcelEllerRækkehuse: 26872,
        Ejerlejlighed: 32829,
        BarnEllerBørn: "Ja",
        Bil: "Ja"

    },
    {
        Kommune: "Fredensborg",
        Postnummer: 3480,
        ParcelEllerRækkehuse: 32076,
        Ejerlejlighed: 25350,
        BarnEllerBørn: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja"

    },
    {
        Kommune: "Frederikssund",
        Postnummer: 3600,
        ParcelEllerRækkehuse: 21333,
        Ejerlejlighed: 23913,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja"
    },
    {
        Kommune: "Halsnæs",
        Postnummer: 3310,
        ParcelEllerRækkehuse: 21986,
        Ejerlejlighed: 19632,
        Bil: "Ja"
    },
    {
        Kommune: "Furesø",
        Postnummer: 3670,
        ParcelEllerRækkehuse: 40761,
        Ejerlejlighed: 32010,
        BarnEllerBørn: "Ja",
        Bil: "Ja",

    },
    {
        Kommune: "Gribskov",
        Postnummer: 3200,
        ParcelEllerRækkehuse: 26415,
        Ejerlejlighed: 16579,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Helsingør",
        Postnummer: 3000,
        ParcelEllerRækkehuse: 33283,
        Ejerlejlighed: 28942,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja"

    },
    {
        Kommune: "Hillerød",
        Postnummer: 3400,
        ParcelEllerRækkehuse: 32765,
        Ejerlejlighed: 30141,
        KæresteEllerPartner: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Hørsholm",
        Postnummer: 2970,
        ParcelEllerRækkehuse: 60545,
        Ejerlejlighed: 39319,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Cykel: "Ja"

    },
    {
        Kommune: "Rudersdal",
        Postnummer: 2840,
        ParcelEllerRækkehuse: 52031,
        Ejerlejlighed: 40476,
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Bornholm",
        Postnummer: 3700,
        ParcelEllerRækkehuse: 11823,
        Ejerlejlighed: 20884,
        Bil: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Greve",
        Postnummer: 2670,
        ParcelEllerRækkehuse: 31451,
        Ejerlejlighed: 29167,
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Køge",
        Postnummer: 4600,
        ParcelEllerRækkehuse: 25264,
        Ejerlejlighed: 35928,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Lejre",
        Postnummer: 4320,
        ParcelEllerRækkehuse: 24289,
        Ejerlejlighed: 32789,
        Bil: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Roskilde",
        Postnummer: 4000,
        ParcelEllerRækkehuse: 30086,
        Ejerlejlighed: 32519,
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Solrød",
        Postnummer: 2680,
        ParcelEllerRækkehuse: 32298,
        Ejerlejlighed: 28542,
        Kæledyr: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja"

    },
    {
        Kommune: "Faxe",
        Postnummer: 4640,
        ParcelEllerRækkehuse: 14945,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Guldborgsund",
        Postnummer: 4862,
        ParcelEllerRækkehuse: 9647,
        Ejerlejlighed: 8838,
        Bil: "Ja",
        OffentligTransport: "Ja",
        Kæledyr: "Ja",
    },
    {
        Kommune: "Holbæk",
        Postnummer: 4300,
        ParcelEllerRækkehuse: 18046,
        Ejerlejlighed: 17418,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Kalundborg",
        Postnummer: 4400,
        ParcelEllerRækkehuse: 10090,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Lolland",
        Postnummer: 4900,
        ParcelEllerRækkehuse: 6723,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Næstved",
        Postnummer: 4700,
        ParcelEllerRækkehuse: 13349,
        Ejerlejlighed: 14682,
        Kæledyr: "Ja",
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Odsherred",
        Postnummer: 4500,
        ParcelEllerRækkehuse: 11658,
        Ejerlejlighed: 12737,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Ringsted",
        Postnummer: 4100,
        ParcelEllerRækkehuse: 17139,
        Ejerlejlighed: 0,
        Kæledyr: "Ja",
        KæresteEllerPartner: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Slagelse",
        Postnummer: 4200,
        ParcelEllerRækkehuse: 13150,
        Ejerlejlighed: 11920,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Sorø",
        Postnummer: 4180,
        ParcelEllerRækkehuse: 15219,
        Ejerlejlighed: 12750,
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Stevns",
        Postnummer: 4673,
        ParcelEllerRækkehuse: 19136,
        Ejerlejlighed: 20641,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Vordingborg",
        Postnummer: 4760,
        ParcelEllerRækkehuse: 12344,
        Ejerlejlighed: 13125,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Assens",
        Postnummer: 5610,
        ParcelEllerRækkehuse: 9811,
        Ejerlejlighed: 0,
        Kæledyr: "Ja",
        BarnEllerBørn: "Ja",
        Cykel: "Ja",

    },
    {
        Kommune: "Faaborg-Midtfyn",
        Postnummer: 5600,
        ParcelEllerRækkehuse: 10657,
        Ejerlejlighed: 14792,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Kerteminde",
        Postnummer: 5300,
        ParcelEllerRækkehuse: 16342,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",

    },
    {
        Kommune: "Langeland",
        Postnummer: 5900,
        ParcelEllerRækkehuse: 7652,
        Ejerlejlighed: 15076,
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Middelfart",
        Postnummer: 5500,
        ParcelEllerRækkehuse: 15420,
        Ejerlejlighed: 44091,
        Bil: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Nordfyns",
        Postnummer: 5450,
        ParcelEllerRækkehuse: 9637,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        Kæledyr: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Nyborg",
        Postnummer: 5800,
        ParcelEllerRækkehuse: 11420,
        Ejerlejlighed: 26835,
        Bil: "Ja",
        Cykel: "Ja",
        Kæledyr: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Odense",
        Postnummer: 5000,
        ParcelEllerRækkehuse: 20452,
        Ejerlejlighed: 24332,
        BarnEllerBørn: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Svendborg",
        Postnummer: 5881,
        ParcelEllerRækkehuse: 15923,
        Ejerlejlighed: 44985,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        Kæledyr: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Ærø",
        Postnummer: 5970,
        ParcelEllerRækkehuse: 13762,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Billund",
        Postnummer: 7190,
        ParcelEllerRækkehuse: 12398,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Esbjerg",
        Postnummer: 6700,
        ParcelEllerRækkehuse: 15564,
        Ejerlejlighed: 19146,
        Kæledyr: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Fanø",
        Postnummer: 6720,
        ParcelEllerRækkehuse: 16340,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Fredericia",
        Postnummer: 7000,
        ParcelEllerRækkehuse: 17672,
        Ejerlejlighed: 15629,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Haderslev",
        Postnummer: 6070,
        ParcelEllerRækkehuse: 9148,
        Ejerlejlighed: 12061,
        Bil: "Ja",
        Cykel: "Ja",
        Kæledyr: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Kolding",
        Postnummer: 6000,
        ParcelEllerRækkehuse: 17208,
        Ejerlejlighed: 15569,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Sønderborg",
        Postnummer: 6400,
        ParcelEllerRækkehuse: 10213,
        Ejerlejlighed: 15765,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Tønder",
        Postnummer: 6240,
        ParcelEllerRækkehuse: 6812,
        Ejerlejlighed: 11422,
        Kæledyr: "Ja",
        Bil: "Ja",
    },
    {
        Kommune: "Varde",
        Postnummer: 6682,
        ParcelEllerRækkehuse: 8339,
        Ejerlejlighed: 15524,
        Kæledyr: "Ja",
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja"

    },
    {
        Kommune: "Vejen",
        Postnummer: 6510,
        ParcelEllerRækkehuse: 9595,
        Kæledyr: "Ja",
        Ejerlejlighed: 0,
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Vejle",
        Postnummer: 7100,
        ParcelEllerRækkehuse: 18100,
        Ejerlejlighed: 18898,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Aabenraa",
        Postnummer: 6200,
        ParcelEllerRækkehuse: 12512,
        Ejerlejlighed: 26146,
        Kæledyr: "Ja",
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Favrskov",
        Postnummer: 8881,
        ParcelEllerRækkehuse: 15786,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        Cykel: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Hedensted",
        Postnummer: 8722,
        ParcelEllerRækkehuse: 12642,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Horsens",
        Postnummer: 8700,
        ParcelEllerRækkehuse: 16003,
        Ejerlejlighed: 19977,
        Kæledyr: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Norddjurs",
        Postnummer: 8500,
        ParcelEllerRækkehuse: 7714,
        Ejerlejlighed: 0,
        Bil: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Odder",
        Postnummer: 8300,
        ParcelEllerRækkehuse: 15654,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Randers",
        Postnummer: 8920,
        ParcelEllerRækkehuse: 12387,
        Ejerlejlighed: 14776,
        Kæledyr: "Ja",
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Samsø",
        Postnummer: 8305,
        ParcelEllerRækkehuse: 15255,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja"
    },
    {
        Kommune: "Silkeborg",
        Postnummer: 8600,
        ParcelEllerRækkehuse: 18535,
        Ejerlejlighed: 34876,
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Skanderborg",
        Postnummer: 8660,
        ParcelEllerRækkehuse: 24096,
        Ejerlejlighed: 28356,
        BarnEllerBørn: "Ja",
    },
    {
        Kommune: "Syddjurs",
        Postnummer: 8400,
        ParcelEllerRækkehuse: 15797,
        Ejerlejlighed: 21639,
        Kæledyr: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Århus",
        Postnummer: 8210,
        ParcelEllerRækkehuse: 35190,
        Ejerlejlighed: 38716,
        BarnEllerBørn: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Herning",
        Postnummer: 7400,
        ParcelEllerRækkehuse: 13901,
        Ejerlejlighed: 25651,
        Kæledyr: "Ja",
        KæresteEllerPartner: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Holstebro",
        Postnummer: 7500,
        ParcelEllerRækkehuse: 15108,
        Ejerlejlighed: 19651,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Ikast-Brande",
        Postnummer: 8430,
        ParcelEllerRækkehuse: 11525,
        Kæledyr: "Ja",
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja"
    },
    {
        Kommune: "Lemvig",
        Postnummer: 7620,
        ParcelEllerRækkehuse: 7985,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        Cykel: "Ja",
        Kæledyr: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Ringkøbing-Skjern",
        Postnummer: 6950,
        ParcelEllerRækkehuse: 9454,
        Kæledyr: "Ja",
        Ejerlejlighed: 19728,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommune: "Skive",
        Postnummer: 7800,
        ParcelEllerRækkehuse: 8118,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"

    },
    {
        Kommune: "Struer",
        Postnummer: 7600,
        ParcelEllerRækkehuse: 10969,
        BarnEllerBørn: "Ja",
        Ejerlejlighed: 15899,
        Kæledyr: "Ja",
        Bil: "Ja"
    },
    {
        Kommune: "Viborg",
        Postnummer: 8800,
        ParcelEllerRækkehuse: 13468,
        Ejerlejlighed: 8887,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja"
    },
    {
        Kommune: "Brønderslev",
        Postnummer: 9700,
        ParcelEllerRækkehuse: 9939,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        Bil: "Ja"
    },
    {
        Kommune: "Frederikshavn",
        Postnummer: 9900,
        ParcelEllerRækkehuse: 11210,
        Ejerlejlighed: 21397,
        KæresteEllerPartner: "Ja",
        Bil: "Ja"
    },
    {
        Kommune: "Hjørring",
        Postnummer: 9800,
        ParcelEllerRækkehuse: 10143,
        Ejerlejlighed: 14975
    },
   {
        Kommune: "Jammerbugt",
        Postnummer: 9440,
        ParcelEllerRækkehuse: 9431,
        Ejerlejlighed: 23010,
        Kæledyr: "Ja",
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"

   },
    {
        Kommune: "Læsø",
        Postnummer: 4900,
        ParcelEllerRækkehuse: 6780,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"

    },
    {
        Kommune: "Mariagerfjord",
        Kæledyr: "Ja",
        Postnummer: 9500,
        ParcelEllerRækkehuse: 10977,
        Ejerlejlighed: 0,
        Bil: "Ja"

    },
    {
        Kommune: "Morsø",
        Postnummer: 7900,
        ParcelEllerRækkehuse: 5823,
        Ejerlejlighed: 29872,
        BarnEllerBørn: "Ja",
        Bil: "Ja"

    },
    {
        Kommune: "Rebild",
        Postnummer: 9520,
        ParcelEllerRækkehuse: 15427,
        Ejerlejlighed: 0,
        Bil: "Ja"

    },
    {
        Kommune: "Thisted",
        Postnummer: 7700,
        ParcelEllerRækkehuse: 10226,
        Kæledyr: "Ja",
        Ejerlejlighed: 13161,
        Bil: "Ja"
    },
    {
        Kommune: "Vesthimmerlands",
        Postnummer: 9640,
        ParcelEllerRækkehuse: 8115,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja",
    },
    {
        Kommune: "Aalborg",
        Postnummer: 9000,
        ParcelEllerRækkehuse: 18291,
        Kæledyr: "Ja",
        BarnEllerBørn: "Ja",
        Ejerlejlighed: 27615,
        Cykel: "Ja",
        OffentligTransport: "Ja"
    }
]
console.log(data)

/*
function check () {

    const Question1 = document.questionbox.Question1.value;

    const Question2 = document.questionbox.Question2.value;

    if (Question1 === 2000-2999) {
        "Postnummer" > 2000 <
    }

}
 */

const button = document.querySelector('#button');
//console.log(button)
button.addEventListener("click", function (){
    //console.log("Indsend klikket")

    const userinput = {}

    userinput.postNr = document.querySelector("#postNr").value*1

    userinput.indkomst = document.querySelector("#indkomst").value*1


    userinput.kæreste = document.querySelector("#KærestePartner").checked

    userinput.barn =document.querySelector("#Barn-børn").checked

    userinput.kæledyr =document.querySelector("#Kæledyr").checked

    userinput.bil =document.querySelector("#Bil").checked

    //userinput.bil1 = document.querySelector("#Bil1").checked

    userinput.offentligTransport = document.querySelector("#OffentligTransport").checked

    userinput.cykel = document.querySelector("#Cykel").checked

    userinput.ingen = document.querySelector("#Ingenaffølgende").checked ?? false

    console.log(userinput)
    const filteredResults = results(data, userinput);

    const filteredPrices = results1(filteredResults, userinput)
    //console.log("************************************")
    //console.log(filteredPrices)

    const filteredQuestions = results2(filteredPrices, userinput)
    //console.log(filteredQuestions)
})


//Postnummer
function checkIfAvailable(Post) {
    let postNummer = data.map((hus)=>{
        return hus.Postnummer;
    })
    //console.log(postNummer.indexOf(parseInt(Post)))
    return(postNummer.indexOf(parseInt(Post)) != -1)
}


function validatePost() {
    let post = document.getElementById("postNr").value;
    let response = ""
    if (checkIfAvailable(post)) {
        response = "Tilgængelige boliger findes i området";
    } else {
        response = "Desværre, ingen tilgængelige boliger i området";
    }
    document.getElementById("response").innerHTML = response;
}


/*
answer = {
    income: 25000,
}
 */

/*
function results(data, answer) {
    const maxRent = 0.45 * answer.income

    return data
        .filter((datum) => datum.ParcelEllerRækkehuse <= maxRent)


}

 */
function results(data, answer) {
    const userPostnummer = answer.postNr
    //console.log(userPostnummer)

    const minPostnummer = (answer.postNr*1) - 500
    console.log(minPostnummer)

    const Maxpostnummer = (answer.postNr*1) + 500
    console.log(Maxpostnummer)

    const userIndkomst = answer.indkomst
    console.log(userIndkomst)

    //console.log(answer)

    let x = data.filter((datum) => datum.Postnummer > minPostnummer).filter((datum) => datum.Postnummer < Maxpostnummer)
    //console.log(x)

    return data
        //.filter((datum) => datum.Postnummer > minPostnummer)
        //.filter((datum) => datum.Postnummer < Maxpostnummer)

        .filter(function(datum) {return datum.Postnummer > minPostnummer && datum.Postnummer < Maxpostnummer})

}



function results1(data, answer){

    console.log("Inside results1");
    console.log(data);
    const minEjerlejlighedspris = (answer.indkomst*1) - 10000
    console.log(minEjerlejlighedspris)

    const maxEjerlejlighedspris = (answer.indkomst*1) + 10000
    console.log(maxEjerlejlighedspris)

    const minParcelEllerRækkehusePris = (answer.indkomst*1) - 10000
    console.log(minParcelEllerRækkehusePris)

    const maxParcelEllerRækkehusePris = (answer.indkomst*1) + 10000
    console.log(maxParcelEllerRækkehusePris)

        /*
        console.log("Virker dette??")
        console.log(minEjerlejlighedspris)
        console.log(data[0].Ejerlejlighed);
        console.log(data.filter((datum) => datum.Ejerlejlighed.Ejerlejlighed != minEjerlejlighedspris))
        console.log("Efter??")
        */

/*
    let filterEjerlejlighed = data.filter((datum) => datum.Ejerlejlighed > minEjerlejlighedspris)//
    let filterMaxEjerlejlighed = data.filter((datum) => datum.Ejerlejlighed < maxEjerlejlighedspris)
        //console.log(filterEjerlejlighed)
        //console.log(filterMaxEjerlejlighed)

    let filterParcelellerRækkehus = data.filter((datum) => datum.ParcelEllerRækkehuse > minParcelEllerRækkehusePris)
    let filterMaxParcelellerRækkehus = data.filter((datum) => datum.ParcelEllerRækkehuse < maxParcelEllerRækkehusePris)
        //console.log(filterParcelellerRækkehus)
        //console.log(filterMaxParcelellerRækkehus)

 */
    let resultforMinEjerlejlighedspris = data.filter(function(datum) {
        return datum.Ejerlejlighed > minEjerlejlighedspris && datum.ParcelEllerRækkehuse > minParcelEllerRækkehusePris
    })
    console.log("resultforMinEjerlejlighedspris");
    //console.log(resultforMinEjerlejlighedspris);

    let resultforMaxEjerlejlighedspris = resultforMinEjerlejlighedspris.filter(function(datum) {
        return datum.Ejerlejlighed < maxEjerlejlighedspris && datum.ParcelEllerRækkehuse < maxParcelEllerRækkehusePris
    })
    // Det nyeste array
    console.log("resultforMaxEjerlejlighedspris")
    console.log(resultforMaxEjerlejlighedspris);
    /*
    let resultforminParcelEllerRækkehusePris = resultforMaxEjerlejlighedspris.filter(function(datum) {return datum.ParcelEllerRækkehuse > minParcelEllerRækkehusePris})
    console.log(resultforminParcelEllerRækkehusePris)

    let resultformaxParcelEllerRækkehusePris = resultforminParcelEllerRækkehusePris.filter(function(datum) {return datum.ParcelEllerRækkehuse < maxParcelEllerRækkehusePris})
    console.log(resultformaxParcelEllerRækkehusePris)
    */
    return resultforMinEjerlejlighedspris;

    /*


    let resultforminParcelEllerRækkehusePris = data.filter(function(datum) {return datum.Ejerlejlighed < maxEjerlejlighedspris})
    console.log(resultforminParcelEllerRækkehusePris)
    return resultforminParcelEllerRækkehusePris

    let resultformaxParcelEllerRækkehusePris = data.filter(function(datum) {return datum.ParcelEllerRækkehuse < maxParcelEllerRækkehusePris})
    console.log(resultformaxParcelEllerRækkehusePris)
    return resultformaxParcelEllerRækkehusePris*/

}


function results2(data, answer){
    let kæresteEllerPartnerTilstede;
    if(answer.kæreste === true){
        kæresteEllerPartnerTilstede = "Ja";
    }
    console.log(kæresteEllerPartnerTilstede)

    let BarnElBørntilstede;
    if (answer.barn === true){
        BarnElBørntilstede = "Ja";
    }
    console.log(BarnElBørntilstede)

    let Kæledyrtilstede;
    if (answer.kæledyr === true){
        Kæledyrtilstede = "Ja";
    }
    console.log(Kæledyrtilstede)

    let BilTilstede;
    if (answer.bil === true){
        BilTilstede = "Ja";
    }
    console.log(BilTilstede)

    let OffentligTransportTilstede;
    if (answer.offentligTransport === true){
        OffentligTransportTilstede = "Ja";
    }
    console.log(OffentligTransportTilstede)

    let CykelTilstede;
    if (answer.cykel === true){
        CykelTilstede = "Ja";
    }
    console.log(CykelTilstede)


    let resultforKæresteElPartner = data.filter((datum) => datum.KæresteEllerPartner === kæresteEllerPartnerTilstede);
    console.log(resultforKæresteElPartner);
    return resultforKæresteElPartner;

    let resultforBarnElBørn = data.filter((datum) => datum.BarnEllerBørn === BarnElBørntilstede);
    console.log(resultforBarnElBørn)
    return resultforBarnElBørn

    let resultforKæledyr = data.filter((datum) => datum.Kæledyr === Kæledyrtilstede)
    console.log(resultforKæledyr)
    return resultforKæledyr

    let resultforBil = data.filter((datum) => datum.Bil === BilTilstede)
    console.log(resultforBil)
    return resultforBil

    let resultforoffTransport = data.filter((datum) => datum.OffentligTransport === OffentligTransportTilstede)
    console.log(resultforoffTransport)
    return resultforoffTransport

    let resultforCykel = data.filter((datum) => datum.Cykel === CykelTilstede)
    console.log(resultforCykel)
    return resultforCykel

}


window.addEventListener("load", async () => {
    await toggleVisibility()
    })


