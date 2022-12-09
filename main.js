//UDB020: Boligpriser efter område, ejendomskategori og priser
// Enhed : Kr. pr. m2

let data =
[
    {
        Kommuner: "København",
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
        Kommuner: "Frederiksberg",
        Postnummer: 1800,
        ParcelEllerRækkehuse: 93739,
        Ejerlejlighed: 63459,
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja",
    },
    {
        Kommuner: "Dragør",
        Postnummer: 2791,
        ParcelEllerRækkehuse: 52678,
        Ejerlejlighed: 38333,
        KæresteEllerPartner: "Ja",
        Bil: "Ja"
    },
    {
        Kommuner: "Tårnby",
        Postnummer: 2770,
        ParcelEllerRækkehuse: 39620,
        Ejerlejlighed: 38057,
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Albertslund",
        Postnummer: 2620,
        ParcelEllerRækkehuse: 27484,
        Ejerlejlighed: 21980,
        BarnEllerBørn: "Ja",
        Bil: "Ja"
    },
    {
        Kommuner: "Ballerup",
        Postnummer: 2750,
        ParcelEllerRækkehuse: 36322,
        Ejerlejlighed: 29655,
        BarnEllerBørn: "Ja",
        Bil: "Ja"
    },
    {
        Kommuner: "Brøndby",
        Postnummer: 2660,
        ParcelEllerRækkehuse: 33517,
        Ejerlejlighed: 25873,
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja",
    },
    {
        Kommuner: "Gentofte",
        Postnummer: 2820,
        ParcelEllerRækkehuse: 87976,
        Ejerlejlighed: 59006,
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Kæledyr: "Ja",
    },
    {
        Kommuner: "Gladsaxe",
        Postnummer: 2860,
        ParcelEllerRækkehuse: 54860,
        Ejerlejlighed: 33090,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Glostrup",
        Postnummer: 2600,
        ParcelEllerRækkehuse: 33626,
        Ejerlejlighed: 31334,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Kæledyr: "Ja",
    },
    {
        Kommuner: "Herlev",
        Postnummer: 2730,
        ParcelEllerRækkehuse: 36661,
        Ejerlejlighed: 31721,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
    },
    {
        Kommuner: "Hvidovre",
        Postnummer: 2650,
        ParcelEllerRækkehuse: 36578,
        Ejerlejlighed: 33775,
        Bil: "Ja"
    },
    {
        Kommuner: "Høje-Taastrup",
        Postnummer: 2630,
        ParcelEllerRækkehuse: 28664,
        Ejerlejlighed: 29035,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"

    },
    {
        Kommuner: "Ishøj",
        Postnummer: 2635,
        ParcelEllerRækkehuse: 24516,
        Ejerlejlighed: 28003,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"

    },
    {
        Kommuner: "Lyngby-Taarbæk",
        Postnummer: 2800,
        ParcelEllerRækkehuse: 57800,
        Ejerlejlighed: 40371,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"

    },
    {
        Kommuner: "Rødovre",
        Postnummer: 2610,
        ParcelEllerRækkehuse: 36360,
        Ejerlejlighed: 35364,
        Kæledyr: "Ja",
        Cykel: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"

    },
    {
        Kommuner: "Vallensbæk",
        Postnummer: 2625,
        ParcelEllerRækkehuse: 32167,
        Ejerlejlighed: 27329,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja"
    },
    {
        Kommuner: "Allerød",
        Postnummer: 3450,
        ParcelEllerRækkehuse: 34354,
        Ejerlejlighed: 27109,
        BarnEllerBørn: "Ja",
        Bil: "Ja"

    },
    {
        Kommuner: "Egedal",
        Postnummer: 3650,
        ParcelEllerRækkehuse: 26872,
        Ejerlejlighed: 32829,
        BarnEllerBørn: "Ja",
        Bil: "Ja"

    },
    {
        Kommuner: "Fredensborg",
        Postnummer: 3480,
        ParcelEllerRækkehuse: 32076,
        Ejerlejlighed: 25350,
        BarnEllerBørn: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja"

    },
    {
        Kommuner: "Frederikssund",
        Postnummer: 3600,
        ParcelEllerRækkehuse: 21333,
        Ejerlejlighed: 23913,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja"
    },
    {
        Kommuner: "Halsnæs",
        Postnummer: 3310,
        ParcelEllerRækkehuse: 21986,
        Ejerlejlighed: 19632,
        Bil: "Ja"
    },
    {
        Kommuner: "Furesø",
        Postnummer: 3670,
        ParcelEllerRækkehuse: 40761,
        Ejerlejlighed: 32010,
        BarnEllerBørn: "Ja",
        Bil: "Ja",

    },
    {
        Kommuner: "Gribskov",
        Postnummer: 3200,
        ParcelEllerRækkehuse: 26415,
        Ejerlejlighed: 16579,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Helsingør",
        Postnummer: 3000,
        ParcelEllerRækkehuse: 33283,
        Ejerlejlighed: 28942,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja"

    },
    {
        Kommuner: "Hillerød",
        Postnummer: 3400,
        ParcelEllerRækkehuse: 32765,
        Ejerlejlighed: 30141,
        KæresteEllerPartner: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Hørsholm",
        Postnummer: 2970,
        ParcelEllerRækkehuse: 60545,
        Ejerlejlighed: 39319,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Cykel: "Ja"

    },
    {
        Kommuner: "Rudersdal",
        Postnummer: 2840,
        ParcelEllerRækkehuse: 52031,
        Ejerlejlighed: 40476,
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Bornholm",
        Postnummer: 3700,
        ParcelEllerRækkehuse: 11823,
        Ejerlejlighed: 20884,
        Bil: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Greve",
        Postnummer: 2670,
        ParcelEllerRækkehuse: 31451,
        Ejerlejlighed: 29167,
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Køge",
        Postnummer: 4600,
        ParcelEllerRækkehuse: 25264,
        Ejerlejlighed: 35928,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Lejre",
        Postnummer: 4320,
        ParcelEllerRækkehuse: 24289,
        Ejerlejlighed: 32789,
        Bil: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Roskilde",
        Postnummer: 4000,
        ParcelEllerRækkehuse: 30086,
        Ejerlejlighed: 32519,
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Solrød",
        Postnummer: 2680,
        ParcelEllerRækkehuse: 32298,
        Ejerlejlighed: 28542,
        Kæledyr: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja"

    },
    {
        Kommuner: "Faxe",
        Postnummer: 4640,
        ParcelEllerRækkehuse: 14945,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Guldborgsund",
        Postnummer: 4862,
        ParcelEllerRækkehuse: 9647,
        Ejerlejlighed: 8838,
        Bil: "Ja",
        OffentligTransport: "Ja",
        Kæledyr: "Ja",
    },
    {
        Kommuner: "Holbæk",
        Postnummer: 4300,
        ParcelEllerRækkehuse: 18046,
        Ejerlejlighed: 17418,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Kalundborg",
        Postnummer: 4400,
        ParcelEllerRækkehuse: 10090,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Lolland",
        Postnummer: 4900,
        ParcelEllerRækkehuse: 6723,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Næstved",
        Postnummer: 4700,
        ParcelEllerRækkehuse: 13349,
        Ejerlejlighed: 14682,
        Kæledyr: "Ja",
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Odsherred",
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
        Kommuner: "Ringsted",
        Postnummer: 4100,
        ParcelEllerRækkehuse: 17139,
        Ejerlejlighed: 0,
        Kæledyr: "Ja",
        KæresteEllerPartner: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Slagelse",
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
        Kommuner: "Sorø",
        Postnummer: 4180,
        ParcelEllerRækkehuse: 15219,
        Ejerlejlighed: 12750,
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Stevns",
        Postnummer: 4673,
        ParcelEllerRækkehuse: 19136,
        Ejerlejlighed: 20641,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Vordingborg",
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
        Kommuner: "Assens",
        Postnummer: 5610,
        ParcelEllerRækkehuse: 9811,
        Ejerlejlighed: 0,
        Kæledyr: "Ja",
        BarnEllerBørn: "Ja",
        Cykel: "Ja",

    },
    {
        Kommuner: "Faaborg-Midtfyn",
        Postnummer: 5600,
        ParcelEllerRækkehuse: 10657,
        Ejerlejlighed: 14792,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Kerteminde",
        Postnummer: 5300,
        ParcelEllerRækkehuse: 16342,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",

    },
    {
        Kommuner: "Langeland",
        Postnummer: 5900,
        ParcelEllerRækkehuse: 7652,
        Ejerlejlighed: 15076,
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Middelfart",
        Postnummer: 5500,
        ParcelEllerRækkehuse: 15420,
        Ejerlejlighed: 44091,
        Bil: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Nordfyns",
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
        Kommuner: "Nyborg",
        Postnummer: 5800,
        ParcelEllerRækkehuse: 11420,
        Ejerlejlighed: 26835,
        Bil: "Ja",
        Cykel: "Ja",
        Kæledyr: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Odense",
        Postnummer: 5000,
        ParcelEllerRækkehuse: 20452,
        Ejerlejlighed: 24332,
        BarnEllerBørn: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Svendborg",
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
        Kommuner: "Ærø",
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
        Kommuner: "Billund",
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
        Kommuner: "Esbjerg",
        Postnummer: 6700,
        ParcelEllerRækkehuse: 15564,
        Ejerlejlighed: 19146,
        Kæledyr: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Fanø",
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
        Kommuner: "Fredericia",
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
        Kommuner: "Haderslev",
        Postnummer: 6070,
        ParcelEllerRækkehuse: 9148,
        Ejerlejlighed: 12061,
        Bil: "Ja",
        Cykel: "Ja",
        Kæledyr: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Kolding",
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
        Kommuner: "Sønderborg",
        Postnummer: 6400,
        ParcelEllerRækkehuse: 10213,
        Ejerlejlighed: 15765,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Tønder",
        Postnummer: 6240,
        ParcelEllerRækkehuse: 6812,
        Ejerlejlighed: 11422,
        Kæledyr: "Ja",
        Bil: "Ja",
    },
    {
        Kommuner: "Varde",
        Postnummer: 6682,
        ParcelEllerRækkehuse: 8339,
        Ejerlejlighed: 15524,
        Kæledyr: "Ja",
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja"

    },
    {
        Kommuner: "Vejen",
        Postnummer: 6510,
        ParcelEllerRækkehuse: 9595,
        Kæledyr: "Ja",
        Ejerlejlighed: 0,
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Vejle",
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
        Kommuner: "Aabenraa",
        Postnummer: 6200,
        ParcelEllerRækkehuse: 12512,
        Ejerlejlighed: 26146,
        Kæledyr: "Ja",
        BarnEllerBørn: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Favrskov",
        Postnummer: 8881,
        ParcelEllerRækkehuse: 15786,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        Cykel: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Hedensted",
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
        Kommuner: "Horsens",
        Postnummer: 8700,
        ParcelEllerRækkehuse: 16003,
        Ejerlejlighed: 19977,
        Kæledyr: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Norddjurs",
        Postnummer: 8500,
        ParcelEllerRækkehuse: 7714,
        Ejerlejlighed: 0,
        Bil: "Ja",
        Kæledyr: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Odder",
        Postnummer: 8300,
        ParcelEllerRækkehuse: 15654,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Randers",
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
        Kommuner: "Samsø",
        Postnummer: 8305,
        ParcelEllerRækkehuse: 15255,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja"
    },
    {
        Kommuner: "Silkeborg",
        Postnummer: 8600,
        ParcelEllerRækkehuse: 18535,
        Ejerlejlighed: 34876,
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Skanderborg",
        Postnummer: 8660,
        ParcelEllerRækkehuse: 24096,
        Ejerlejlighed: 28356,
        BarnEllerBørn: "Ja",
    },
    {
        Kommuner: "Syddjurs",
        Postnummer: 8400,
        ParcelEllerRækkehuse: 15797,
        Ejerlejlighed: 21639,
        Kæledyr: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Århus",
        Postnummer: 8210,
        ParcelEllerRækkehuse: 35190,
        Ejerlejlighed: 38716,
        BarnEllerBørn: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Herning",
        Postnummer: 7400,
        ParcelEllerRækkehuse: 13901,
        Ejerlejlighed: 25651,
        Kæledyr: "Ja",
        KæresteEllerPartner: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Holstebro",
        Postnummer: 7500,
        ParcelEllerRækkehuse: 15108,
        Ejerlejlighed: 19651,
        KæresteEllerPartner: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Ikast-Brande",
        Postnummer: 8430,
        ParcelEllerRækkehuse: 11525,
        Kæledyr: "Ja",
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja"
    },
    {
        Kommuner: "Lemvig",
        Postnummer: 7620,
        ParcelEllerRækkehuse: 7985,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        Cykel: "Ja",
        Kæledyr: "Ja",
        OffentligTransport: "Ja"
    },
    {
        Kommuner: "Ringkøbing-Skjern",
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
        Kommuner: "Skive",
        Postnummer: 7800,
        ParcelEllerRækkehuse: 8118,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        Bil: "Ja",
        Cykel: "Ja",
        OffentligTransport: "Ja"

    },
    {
        Kommuner: "Struer",
        Postnummer: 7600,
        ParcelEllerRækkehuse: 10969,
        BarnEllerBørn: "Ja",
        Ejerlejlighed: 15899,
        Kæledyr: "Ja",
        Bil: "Ja"
    },
    {
        Kommuner: "Viborg",
        Postnummer: 8800,
        ParcelEllerRækkehuse: 13468,
        Ejerlejlighed: 8887,
        KæresteEllerPartner: "Ja",
        BarnEllerBørn: "Ja",
        Bil: "Ja"
    },
    {
        Kommuner: "Brønderslev",
        Postnummer: 9700,
        ParcelEllerRækkehuse: 9939,
        Ejerlejlighed: 0,
        BarnEllerBørn: "Ja",
        Bil: "Ja"
    },
    {
        Kommuner: "Frederikshavn",
        Postnummer: 9900,
        ParcelEllerRækkehuse: 11210,
        Ejerlejlighed: 21397,
        KæresteEllerPartner: "Ja",
        Bil: "Ja"
    },
    {
        Kommuner: "Hjørring",
        Postnummer: 9800,
        ParcelEllerRækkehuse: 10143,
        Ejerlejlighed: 14975
    },
   {
        Kommuner: "Jammerbugt",
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
        Kommuner: "Læsø",
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
        Kommuner: "Mariagerfjord",
        Kæledyr: "Ja",
        Postnummer: 9500,
        ParcelEllerRækkehuse: 10977,
        Ejerlejlighed: 0,
        Bil: "Ja"

    },
    {
        Kommuner: "Morsø",
        Postnummer: 7900,
        ParcelEllerRækkehuse: 5823,
        Ejerlejlighed: 29872,
        BarnEllerBørn: "Ja",
        Bil: "Ja"

    },
    {
        Kommuner: "Rebild",
        Postnummer: 9520,
        ParcelEllerRækkehuse: 15427,
        Ejerlejlighed: 0,
        Bil: "Ja"

    },
    {
        Kommuner: "Thisted",
        Postnummer: 7700,
        ParcelEllerRækkehuse: 10226,
        Kæledyr: "Ja",
        Ejerlejlighed: 13161,
        Bil: "Ja"
    },
    {
        Kommuner: "Vesthimmerlands",
        Postnummer: 9640,
        ParcelEllerRækkehuse: 8115,
        Ejerlejlighed: 0,
        KæresteEllerPartner: "Ja",
        Kæledyr: "Ja",
        Bil: "Ja",
    },
    {
        Kommuner: "Aalborg",
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
console.log(button)
button.addEventListener("click", function (){
    console.log("Indsend klikket")

    const userinput = {}

    userinput.postNr = document.querySelector("#postNr").value

   userinput.indkomst =document.querySelector("#indkomst").value



    userinput.kæreste =document.querySelector("#kæreste-partner").checked

    userinput.barn =document.querySelector("#Barn-børn").checked

    userinput.kæledyr =document.querySelector("#Kæledyr").checked

    userinput.bil =document.querySelector("#Bil").checked

    userinput.bil1 = document.querySelector("#Bil1").checked

    userinput.offentligTransport = document.querySelector("#OffentligTransport").checked

    userinput.cykel = document.querySelector("#Cykel").checked

    userinput.ingen = document.querySelector("#Ingenaffølgende").checked ?? false

    console.log(userinput)

    const filteredResults = results(data, userinput)

    console.log(filteredResults)
})


//Postnummer
function checkIfAvailable(Post) {
    let postNummer = data.map((hus)=>{
        return hus.Postnummer;
    })
    console.log(postNummer.indexOf(parseInt(Post)))
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
    const EjerlejlighedPris = 20000
    const ParcelEllerRækkehusePris = 40000
    const BilTilstede = "Ja"
    const CykelTilstede = "Ja"
    const OffentligTransportTilstede = "Ja"

    return data
        .filter((datum) => datum.Ejerlejlighed <= EjerlejlighedPris)
        .filter((datum) => datum.ParcelEllerRækkehuse <= ParcelEllerRækkehusePris)
        .filter((datum) => datum.Bil <= BilTilstede )
        .filter((datum) => datum.Cykel <= CykelTilstede )
        .filter((datum) => datum.OffentligTransport <= OffentligTransportTilstede)

}


