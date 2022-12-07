//UDB020: Boligpriser efter område, ejendomskategori og priser
// Enhed : Kr. pr. m2

const data =
[
    {
        "Kommuner": "København",
        "Postnummer": 2100,
        "Parcel/rækkehuse": 64034,
        "Ejerlejlighed": 55018
    },
    {
        "Kommuner": "Frederiksberg",
        "Postnummer": 1800,
        "Parcel/rækkehuse": 93739,
        "Ejerlejlighed": 63459
    },
    {
        "Kommuner": "Dragør",
        "Postnummer": 2791,
        "Parcel/rækkehuse": 52678,
        "Ejerlejlighed": 38333
    },
    {
        "Kommuner": "Tårnby",
        "Postnummer": 2770,
        "Parcel/rækkehuse": 39620,
        "Ejerlejlighed": 38057
    },
    {
        "Kommuner": "Albertslund",
        "Postnummer": 2620,
        "Parcel/rækkehuse": 27484,
        "Ejerlejlighed": 21980
    },
    {
        "Kommuner": "Ballerup",
        "Postnummer": 2750,
        "Parcel/rækkehuse": 36322,
        "Ejerlejlighed": 29655
    },
    {
        "Kommuner": "Brøndby",
        "Postnummer": 2660,
        "Parcel/rækkehuse": 33517,
        "Ejerlejlighed": 25873
    },
    {
        "Kommuner": "Gentofte",
        "Postnummer": 2820,
        "Parcel/rækkehuse": 87976,
        "Ejerlejlighed": 59006
    },
    {
        "Kommuner": "Gladsaxe",
        "Postnummer": 2860,
        "Parcel/rækkehuse": 54860,
        "Ejerlejlighed": 33090
    },
    {
        "Kommuner": "Glostrup",
        "Postnummer": 2600,
        "Parcel/rækkehuse": 33626,
        "Ejerlejlighed": 31334
    },
    {
        "Kommuner": "Herlev",
        "Postnummer": 2730,
        "Parcel/rækkehuse": 36661,
        "Ejerlejlighed": 31721
    },
    {
        "Kommuner": "Hvidovre",
        "Postnummer": 2650,
        "Parcel/rækkehuse": 36578,
        "Ejerlejlighed": 33775
    },
    {
        "Kommuner": "Høje-Taastrup",
        "Postnummer": 2630,
        "Parcel/rækkehuse": 28664,
        "Ejerlejlighed": 29035
    },
    {
        "Kommuner": "Ishøj",
        "Postnummer": 2635,
        "Parcel/rækkehuse": 24516,
        "Ejerlejlighed": 28003
    },
    {
        "Kommuner": "Lyngby-Taarbæk",
        "Postnummer": 2800,
        "Parcel/rækkehuse": 57800,
        "Ejerlejlighed": 40371
    },
    {
        "Kommuner": "Rødovre",
        "Postnummer": 2610,
        "Parcel/rækkehuse": 36360,
        "Ejerlejlighed": 35364
    },
    {
        "Kommuner": "Vallensbæk",
        "Postnummer": 2625,
        "Parcel/rækkehuse": 32167,
        "Ejerlejlighed": 27329
    },
    {
        "Kommuner": "Allerød",
        "Postnummer": 3450,
        "Parcel/rækkehuse": 34354,
        "Ejerlejlighed": 27109
    },
    {
        "Kommuner": "Egedal",
        "Postnummer": 3650,
        "Parcel/rækkehuse": 26872,
        "Ejerlejlighed": 32829
    },
    {
        "Kommuner": "Fredensborg",
        "Postnummer": 3480,
        "Parcel/rækkehuse": 32076,
        "Ejerlejlighed": 25350
    },
    {
        "Kommuner": "Frederikssund",
        "Postnummer": 3600,
        "Parcel/rækkehuse": 21333,
        "Ejerlejlighed": 23913
    },
    {
        "Kommuner": "Halsnæs",
        "Postnummer": 3310,
        "Parcel/rækkehuse": 21986,
        "Ejerlejlighed": 19632
    },
    {
        "Kommuner": "Furesø",
        "Postnummer": 3670,
        "Parcel/rækkehuse": 40761,
        "Ejerlejlighed": 32010
    },
    {
        "Kommuner": "Gribskov",
        "Postnummer": 3200,
        "Parcel/rækkehuse": 26415,
        "Ejerlejlighed": 16579
    },
    {
        "Kommuner": "Helsingør",
        "Postnummer": 3000,
        "Parcel/rækkehuse": 33283,
        "Ejerlejlighed": 28942
    },
    {
        "Kommuner": "Hillerød",
        "Postnummer": 3400,
        "Parcel/rækkehuse": 32765,
        "Ejerlejlighed": 30141
    },
    {
        "Kommuner": "Hørsholm",
        "Postnummer": 2970,
        "Parcel/rækkehuse": 60545,
        "Ejerlejlighed": 39319
    },
    {
        "Kommuner": "Rudersdal",
        "Postnummer": 2840,
        "Parcel/rækkehuse": 52031,
        "Ejerlejlighed": 40476
    },
    {
        "Kommuner": "Bornholm",
        "Postnummer": 3700,
        "Parcel/rækkehuse": 11823,
        "Ejerlejlighed": 20884
    },
    {
        "Kommuner": "Greve",
        "Postnummer": 2670,
        "Parcel/rækkehuse": 31451,
        "Ejerlejlighed": 29167
    },
    {
        "Kommuner": "Køge",
        "Postnummer": 4600,
        "Parcel/rækkehuse": 25264,
        "Ejerlejlighed": 35928
    },
    {
        "Kommuner": "Lejre",
        "Postnummer": 4320,
        "Parcel/rækkehuse": 24289,
        "Ejerlejlighed": 32789
    },
    {
        "Kommuner": "Roskilde",
        "Postnummer": 4000,
        "Parcel/rækkehuse": 30086,
        "Ejerlejlighed": 32519
    },
    {
        "Kommuner": "Solrød",
        "Postnummer": 2680,
        "Parcel/rækkehuse": 32298,
        "Ejerlejlighed": 28542
    },
    {
        "Kommuner": "Faxe",
        "Postnummer": 4640,
        "Parcel/rækkehuse": 14945,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Guldborgsund",
        "Postnummer": 4862,
        "Parcel/rækkehuse": 9647,
        "Ejerlejlighed": 8838
    },
    {
        "Kommuner": "Holbæk",
        "Postnummer": 4300,
        "Parcel/rækkehuse": 18046,
        "Ejerlejlighed": 17418
    },
    {
        "Kommuner": "Kalundborg",
        "Postnummer": 4400,
        "Parcel/rækkehuse": 10090,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Lolland",
        "Postnummer": 4900,
        "Parcel/rækkehuse": 6723,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Næstved",
        "Postnummer": 4700,
        "Parcel/rækkehuse": 13349,
        "Ejerlejlighed": 14682
    },
    {
        "Kommuner": "Odsherred",
        "Postnummer": 4500,
        "Parcel/rækkehuse": 11658,
        "Ejerlejlighed": 12737
    },
    {
        "Kommuner": "Ringsted",
        "Postnummer": 4100,
        "Parcel/rækkehuse": 17139,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Slagelse",
        "Postnummer": 4200,
        "Parcel/rækkehuse": 13150,
        "Ejerlejlighed": 11920
    },
    {
        "Kommuner": "Sorø",
        "Postnummer": 4180,
        "Parcel/rækkehuse": 15219,
        "Ejerlejlighed": 12750
    },
    {
        "Kommuner": "Stevns",
        "Postnummer": 4673,
        "Parcel/rækkehuse": 19136,
        "Ejerlejlighed": 20641
    },
    {
        "Kommuner": "Vordingborg",
        "Postnummer": 4760,
        "Parcel/rækkehuse": 12344,
        "Ejerlejlighed": 13125
    },
    {
        "Kommuner": "Assens",
        "Postnummer": 5610,
        "Parcel/rækkehuse": 9811,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Faaborg-Midtfyn",
        "Postnummer": 5600,
        "Parcel/rækkehuse": 10657,
        "Ejerlejlighed": 14792
    },
    {
        "Kommuner": "Kerteminde",
        "Postnummer": 5300,
        "Parcel/rækkehuse": 16342,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Langeland",
        "Postnummer": 5900,
        "Parcel/rækkehuse": 7652,
        "Ejerlejlighed": 15076
    },
    {
        "Kommuner": "Middelfart",
        "Postnummer": 5500,
        "Parcel/rækkehuse": 15420,
        "Ejerlejlighed": 44091
    },
    {
        "Kommuner": "Nordfyns",
        "Postnummer": 5450,
        "Parcel/rækkehuse": 9637,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Nyborg",
        "Postnummer": 5800,
        "Parcel/rækkehuse": 11420,
        "Ejerlejlighed": 26835
    },
    {
        "Kommuner": "Odense",
        "Postnummer": 5000,
        "Parcel/rækkehuse": 20452,
        "Ejerlejlighed": 24332
    },
    {
        "Kommuner": "Svendborg",
        "Postnummer": 5881,
        "Parcel/rækkehuse": 15923,
        "Ejerlejlighed": 44985
    },
    {
        "Kommuner": "Ærø",
        "Postnummer": 5970,
        "Parcel/rækkehuse": 13762,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Billund",
        "Postnummer": 7190,
        "Parcel/rækkehuse": 12398,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Esbjerg",
        "Postnummer": 6700,
        "Parcel/rækkehuse": 15564,
        "Ejerlejlighed": 19146
    },
    {
        "Kommuner": "Fanø",
        "Postnummer": 6720,
        "Parcel/rækkehuse": 16340,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Fredericia",
        "Postnummer": 7000,
        "Parcel/rækkehuse": 17672,
        "Ejerlejlighed": 15629
    },
    {
        "Kommuner": "Haderslev",
        "Postnummer": 6070,
        "Parcel/rækkehuse": 9148,
        "Ejerlejlighed": 12061
    },
    {
        "Kommuner": "Kolding",
        "Postnummer": 6000,
        "Parcel/rækkehuse": 17208,
        "Ejerlejlighed": 15569
    },
    {
        "Kommuner": "Sønderborg",
        "Postnummer": 6400,
        "Parcel/rækkehuse": 10213,
        "Ejerlejlighed": 15765
    },
    {
        "Kommuner": "Tønder",
        "Postnummer": 6240,
        "Parcel/rækkehuse": 6812,
        "Ejerlejlighed": 11422
    },
    {
        "Kommuner": "Varde",
        "Postnummer": 6682,
        "Parcel/rækkehuse": 8339,
        "Ejerlejlighed": 15524
    },
    {
        "Kommuner": "Vejen",
        "Postnummer": 6510,
        "Parcel/rækkehuse": 9595,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Vejle",
        "Postnummer": 7100,
        "Parcel/rækkehuse": 18100,
        "Ejerlejlighed": 18898
    },
    {
        "Kommuner": "Aabenraa",
        "Postnummer": 6200,
        "Parcel/rækkehuse": 12512,
        "Ejerlejlighed": 26146
    },
    {
        "Kommuner": "Favrskov",
        "Postnummer": 8881,
        "Parcel/rækkehuse": 15786,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Hedensted",
        "Postnummer": 8722,
        "Parcel/rækkehuse": 12642,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Horsens",
        "Postnummer": 8700,
        "Parcel/rækkehuse": 16003,
        "Ejerlejlighed": 19977
    },
    {
        "Kommuner": "Norddjurs",
        "Postnummer": 8500,
        "Parcel/rækkehuse": 7714,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Odder",
        "Postnummer": 8300,
        "Parcel/rækkehuse": 15654,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Randers",
        "Postnummer": 8920,
        "Parcel/rækkehuse": 12387,
        "Ejerlejlighed": 14776
    },
    {
        "Kommuner": "Samsø",
        "Postnummer": 8305,
        "Parcel/rækkehuse": 15255,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Silkeborg",
        "Postnummer": 8600,
        "Parcel/rækkehuse": 18535,
        "Ejerlejlighed": 34876
    },
    {
        "Kommuner": "Skanderborg",
        "Postnummer": 8660,
        "Parcel/rækkehuse": 24096,
        "Ejerlejlighed": 28356
    },
    {
        "Kommuner": "Syddjurs",
        "Postnummer": 8400,
        "Parcel/rækkehuse": 15797,
        "Ejerlejlighed": 21639
    },
    {
        "Kommuner": "Århus",
        "Postnummer": 8210,
        "Parcel/rækkehuse": 35190,
        "Ejerlejlighed": 38716
    },
    {
        "Kommuner": "Herning",
        "Postnummer": 7400,
        "Parcel/rækkehuse": 13901,
        "Ejerlejlighed": 25651
    },
    {
        "Kommuner": "Holstebro",
        "Postnummer": 7500,
        "Parcel/rækkehuse": 15108,
        "Ejerlejlighed": 19651
    },
    {
        "Kommuner": "Ikast-Brande",
        "Postnummer": 8430,
        "Parcel/rækkehuse": 11525,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Lemvig",
        "Postnummer": 7620,
        "Parcel/rækkehuse": 7985,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Ringkøbing-Skjern",
        "Postnummer": 6950,
        "Parcel/rækkehuse": 9454,
        "Ejerlejlighed": 19728
    },
    {
        "Kommuner": "Skive",
        "Postnummer": 7800,
        "Parcel/rækkehuse": 8118,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Struer",
        "Postnummer": 7600,
        "Parcel/rækkehuse": 10969,
        "Ejerlejlighed": 15899
    },
    {
        "Kommuner": "Viborg",
        "Postnummer": 8800,
        "Parcel/rækkehuse": 13468,
        "Ejerlejlighed": 8887
    },
    {
        "Kommuner": "Brønderslev",
        "Postnummer": 9700,
        "Parcel/rækkehuse": 9939,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Frederikshavn",
        "Postnummer": 9900,
        "Parcel/rækkehuse": 11210,
        "Ejerlejlighed": 21397
    },
    {
        "Kommuner": "Hjørring",
        "Postnummer": 9800,
        "Parcel/rækkehuse": 10143,
        "Ejerlejlighed": 14975
    },
    {
        "Kommuner": "Jammerbugt",
        "Postnummer": 9440,
        "Parcel/rækkehuse": 9431,
        "Ejerlejlighed": 23010
    },
    {
        "Kommuner": "Læsø",
        "Postnummer": 4900,
        "Parcel/rækkehuse": 6780,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Mariagerfjord",
        "Postnummer": 9500,
        "Parcel/rækkehuse": 10977,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Morsø",
        "Postnummer": 7900,
        "Parcel/rækkehuse": 5823,
        "Ejerlejlighed": 29872
    },
    {
        "Kommuner": "Rebild",
        "Postnummer": 9520,
        "Parcel/rækkehuse": 15427,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Thisted",
        "Postnummer": 7700,
        "Parcel/rækkehuse": 10226,
        "Ejerlejlighed": 13161
    },
    {
        "Kommuner": "Vesthimmerlands",
        "Postnummer": 9640,
        "Parcel/rækkehuse": 8115,
        "Ejerlejlighed": 0
    },
    {
        "Kommuner": "Aalborg",
        "Postnummer": 9000,
        "Parcel/rækkehuse": 18291,
        "Ejerlejlighed": 27615
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
    console.log("knappen klikket")
})
document.getElementById("postNr").addEventListener("input", () => console.log(document.getElementById("postNr").value));


console.log("buttonclick")


function checkIfAvailable(Post)
{
    let postNummer = ["2100","1800","2791","2770","2620","2750","2660","2820","2860","2600","2730","2650","2630","2635","2800","2610","2625","3450","3650","3480","3600","3310","3670","3200","3000","3400","2970","2840","3700","2670","4600","4320","4000","2680","4640","4862","4400","4900","4700","4500","4100","4200","4180","4673","4760","5610","5600","5300","5900","5500","5450","5800","5000","5881","5970","7190","6700","6720","7000","6070","6000","6400","6240","6682","6510","7100","6200","8881","8722","8700","8500","8300","8920","8305","8600","8660","8400","8210","7400","7500","8430","7620","6950","7800","7600","8800","9700","9900","9800","9440","4900","9500","7900","9520","7700","9640","9000"]
    return( postNummer.indexOf(Post) >= "" )
}

function validatePost()
{
    let post = document.getElementById("postNr").value;
    let respons =""
    if(checkIfAvailable(post))
    {
        respons="Tilgængelige bolig findes i området";
    }
    else
    {
        respons="Desværre, ingen tilgængelige bolig i området";
    }
    document.getElementById("respons").innerHTML = respons;
}