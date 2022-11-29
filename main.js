//UDB020: Boligpriser efter område, ejendomskategori og priser
// Enhed : Kr. pr. m2

const data =
[
    {
        "Kommuner": "København",
        "Parcel/rækkehuse": 64034,
        "Ejerlejlighed": 55018
    },
    {
        "Kommuner": "Frederiksberg",
        "Parcel/rækkehuse": 93739,
        "Ejerlejlighed": 63459
    },
    {
        "Kommuner": "Dragør",
        "Parcel/rækkehuse": 52678,
        "Ejerlejlighed": 38333
    },
    {
        "Kommuner": "Tårnby",
        "Parcel/rækkehuse": 39620,
        "Ejerlejlighed": 38057
    },
    {
        "Kommuner": "Albertslund",
        "Parcel/rækkehuse": 27484,
        "Ejerlejlighed": 21980
    },
    {
        "Kommuner": "Ballerup",
        "Parcel/rækkehuse": 36322,
        "Ejerlejlighed": 29655
    },
    {
        "Kommuner": "Brøndby",
        "Parcel/rækkehuse": 33517,
        "Ejerlejlighed": 25873
    },
    {
        "Kommuner": "Gentofte",
        "Parcel/rækkehuse": 87976,
        "Ejerlejlighed": 59006
    },
    {
        "Kommuner": "Gladsaxe",
        "Parcel/rækkehuse": 54860,
        "Ejerlejlighed": 33090
    },
    {
        "Kommuner": "Glostrup",
        "Parcel/rækkehuse": 33626,
        "Ejerlejlighed": 31334
    },
    {
        "Kommuner": "Herlev",
        "Parcel/rækkehuse": 36661,
        "Ejerlejlighed": 31721
    },
    {
        "Kommuner": "Hvidovre",
        "Parcel/rækkehuse": 36578,
        "Ejerlejlighed": 33775
    },
    {
        "Kommuner": "Høje-Taastrup",
        "Parcel/rækkehuse": 28664,
        "Ejerlejlighed": 29035
    },
    {
        "Kommuner": "Ishøj",
        "Parcel/rækkehuse": 24516,
        "Ejerlejlighed": 28003
    },
    {
        "Kommuner": "Lyngby-Taarbæk",
        "Parcel/rækkehuse": 57800,
        "Ejerlejlighed": 40371
    },
    {
        "Kommuner": "Rødovre",
        "Parcel/rækkehuse": 36360,
        "Ejerlejlighed": 35364
    },
    {
        "Kommuner": "Vallensbæk",
        "Parcel/rækkehuse": 32167,
        "Ejerlejlighed": 27329
    },
    {
        "Kommuner": "Allerød",
        "Parcel/rækkehuse": 34354,
        "Ejerlejlighed": 27109
    },
    {
        "Kommuner": "Egedal",
        "Parcel/rækkehuse": 26872,
        "Ejerlejlighed": 32829
    },
    {
        "Kommuner": "Fredensborg",
        "Parcel/rækkehuse": 32076,
        "Ejerlejlighed": 25350
    },
    {
        "Kommuner": "Frederikssund",
        "Parcel/rækkehuse": 21333,
        "Ejerlejlighed": 23913
    },
    {
        "Kommuner": "Halsnæs",
        "Parcel/rækkehuse": 21986,
        "Ejerlejlighed": 19632
    },
    {
        "Kommuner": "Furesø",
        "Parcel/rækkehuse": 40761,
        "Ejerlejlighed": 32010
    },
    {
        "Kommuner": "Gribskov",
        "Parcel/rækkehuse": 26415,
        "Ejerlejlighed": 16579
    },
    {
        "Kommuner": "Helsingør",
        "Parcel/rækkehuse": 33283,
        "Ejerlejlighed": 28942
    },
    {
        "Kommuner": "Hillerød",
        "Parcel/rækkehuse": 32765,
        "Ejerlejlighed": 30141
    },
    {
        "Kommuner": "Hørsholm",
        "Parcel/rækkehuse": 60545,
        "Ejerlejlighed": 39319
    },
    {
        "Kommuner": "Rudersdal",
        "Parcel/rækkehuse": 52031,
        "Ejerlejlighed": 40476
    },
    {
        "Kommuner": "Bornholm",
        "Parcel/rækkehuse": 11823,
        "Ejerlejlighed": 20884
    },
    {
        "Kommuner": "Greve",
        "Parcel/rækkehuse": 31451,
        "Ejerlejlighed": 29167
    },
    {
        "Kommuner": "Køge",
        "Parcel/rækkehuse": 25264,
        "Ejerlejlighed": 35928
    },
    {
        "Kommuner": "Lejre",
        "Parcel/rækkehuse": 24289,
        "Ejerlejlighed": 32789
    },
    {
        "Kommuner": "Roskilde",
        "Parcel/rækkehuse": 30086,
        "Ejerlejlighed": 32519
    },
    {
        "Kommuner": "Solrød",
        "Parcel/rækkehuse": 32298,
        "Ejerlejlighed": 28542
    },
    {
        "Kommuner": "Faxe",
        "Parcel/rækkehuse": 14945,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Guldborgsund",
        "Parcel/rækkehuse": 9647,
        "Ejerlejlighed": 8838
    },
    {
        "Kommuner": "Holbæk",
        "Parcel/rækkehuse": 18046,
        "Ejerlejlighed": 17418
    },
    {
        "Kommuner": "Kalundborg",
        "Parcel/rækkehuse": 10090,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Lolland",
        "Parcel/rækkehuse": 6723,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Næstved",
        "Parcel/rækkehuse": 13349,
        "Ejerlejlighed": 14682
    },
    {
        "Kommuner": "Odsherred",
        "Parcel/rækkehuse": 11658,
        "Ejerlejlighed": 12737
    },
    {
        "Kommuner": "Ringsted",
        "Parcel/rækkehuse": 17139,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Slagelse",
        "Parcel/rækkehuse": 13150,
        "Ejerlejlighed": 11920
    },
    {
        "Kommuner": "Sorø",
        "Parcel/rækkehuse": 15219,
        "Ejerlejlighed": 12750
    },
    {
        "Kommuner": "Stevns",
        "Parcel/rækkehuse": 19136,
        "Ejerlejlighed": 20641
    },
    {
        "Kommuner": "Vordingborg",
        "Parcel/rækkehuse": 12344,
        "Ejerlejlighed": 13125
    },
    {
        "Kommuner": "Assens",
        "Parcel/rækkehuse": 9811,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Faaborg-Midtfyn",
        "Parcel/rækkehuse": 10657,
        "Ejerlejlighed": 14792
    },
    {
        "Kommuner": "Kerteminde",
        "Parcel/rækkehuse": 16342,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Langeland",
        "Parcel/rækkehuse": 7652,
        "Ejerlejlighed": 15076
    },
    {
        "Kommuner": "Middelfart",
        "Parcel/rækkehuse": 15420,
        "Ejerlejlighed": 44091
    },
    {
        "Kommuner": "Nordfyns",
        "Parcel/rækkehuse": 9637,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Nyborg",
        "Parcel/rækkehuse": 11420,
        "Ejerlejlighed": 26835
    },
    {
        "Kommuner": "Odense",
        "Parcel/rækkehuse": 20452,
        "Ejerlejlighed": 24332
    },
    {
        "Kommuner": "Svendborg",
        "Parcel/rækkehuse": 15923,
        "Ejerlejlighed": 44985
    },
    {
        "Kommuner": "Ærø",
        "Parcel/rækkehuse": 13762,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Billund",
        "Parcel/rækkehuse": 12398,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Esbjerg",
        "Parcel/rækkehuse": 15564,
        "Ejerlejlighed": 19146
    },
    {
        "Kommuner": "Fanø",
        "Parcel/rækkehuse": 16340,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Fredericia",
        "Parcel/rækkehuse": 17672,
        "Ejerlejlighed": 15629
    },
    {
        "Kommuner": "Haderslev",
        "Parcel/rækkehuse": 9148,
        "Ejerlejlighed": 12061
    },
    {
        "Kommuner": "Kolding",
        "Parcel/rækkehuse": 17208,
        "Ejerlejlighed": 15569
    },
    {
        "Kommuner": "Sønderborg",
        "Parcel/rækkehuse": 10213,
        "Ejerlejlighed": 15765
    },
    {
        "Kommuner": "Tønder",
        "Parcel/rækkehuse": 6812,
        "Ejerlejlighed": 11422
    },
    {
        "Kommuner": "Varde",
        "Parcel/rækkehuse": 8339,
        "Ejerlejlighed": 15524
    },
    {
        "Kommuner": "Vejen",
        "Parcel/rækkehuse": 9595,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Vejle",
        "Parcel/rækkehuse": 18100,
        "Ejerlejlighed": 18898
    },
    {
        "Kommuner": "Aabenraa",
        "Parcel/rækkehuse": 12512,
        "Ejerlejlighed": 26146
    },
    {
        "Kommuner": "Favrskov",
        "Parcel/rækkehuse": 15786,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Hedensted",
        "Parcel/rækkehuse": 12642,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Horsens",
        "Parcel/rækkehuse": 16003,
        "Ejerlejlighed": 19977
    },
    {
        "Kommuner": "Norddjurs",
        "Parcel\/rækkehuse": 7714,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Odder",
        "Parcel/rækkehuse": 15654,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Randers",
        "Parcel/rækkehuse": 12387,
        "Ejerlejlighed": 14776
    },
    {
        "Kommuner": "Samsø",
        "Parcel/rækkehuse": 15255,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Silkeborg",
        "Parcel/rækkehuse": 18535,
        "Ejerlejlighed": 34876
    },
    {
        "Kommuner": "Skanderborg",
        "Parcel/rækkehuse": 24096,
        "Ejerlejlighed": 28356
    },
    {
        "Kommuner": "Syddjurs",
        "Parcel/rækkehuse": 15797,
        "Ejerlejlighed": 21639
    },
    {
        "Kommuner": "Århus",
        "Parcel/rækkehuse": 35190,
        "Ejerlejlighed": 38716
    },
    {
        "Kommuner": "Herning",
        "Parcel/rækkehuse": 13901,
        "Ejerlejlighed": 25651
    },
    {
        "Kommuner": "Holstebro",
        "Parcel/rækkehuse": 15108,
        "Ejerlejlighed": 19651
    },
    {
        "Kommuner": "Ikast-Brande",
        "Parcel/rækkehuse": 11525,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Lemvig",
        "Parcel/rækkehuse": 7985,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Ringkøbing-Skjern",
        "Parcel/rækkehuse": 9454,
        "Ejerlejlighed": 19728
    },
    {
        "Kommuner": "Skive",
        "Parcel/rækkehuse": 8118,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Struer",
        "Parcel/rækkehuse": 10969,
        "Ejerlejlighed": 15899
    },
    {
        "Kommuner": "Viborg",
        "Parcel/rækkehuse": 13468,
        "Ejerlejlighed": 8887
    },
    {
        "Kommuner": "Brønderslev",
        "Parcel/rækkehuse": 9939,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Frederikshavn",
        "Parcel/rækkehuse": 11210,
        "Ejerlejlighed": 21397
    },
    {
        "Kommuner": "Hjørring",
        "Parcel/rækkehuse": 10143,
        "Ejerlejlighed": 14975
    },
    {
        "Kommuner": "Jammerbugt",
        "Parcel/rækkehuse": 9431,
        "Ejerlejlighed": 23010
    },
    {
        "Kommuner": "Læsø",
        "Parcel/rækkehuse": 6780,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Mariagerfjord",
        "Parcel/rækkehuse": 10977,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Morsø",
        "Parcel/rækkehuse": 5823,
        "Ejerlejlighed": 29872
    },
    {
        "Kommuner": "Rebild",
        "Parcel/rækkehuse": 15427,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Thisted",
        "Parcel/rækkehuse": 10226,
        "Ejerlejlighed": 13161
    },
    {
        "Kommuner": "Vesthimmerlands",
        "Parcel/rækkehuse": 8115,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Aalborg",
        "Parcel/rækkehuse": 18291,
        "Ejerlejlighed": 27615
    }
]

console.log(data)