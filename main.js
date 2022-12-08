//UDB020: Boligpriser efter område, ejendomskategori og priser
// Enhed : Kr. pr. m2

let data =
[
    {
        Kommuner: "København",
        Postnummer: 2100,
        ParcelEllerRækkehuse: 64034,
        Ejerlejlighed: 55018
    },
    {
        Kommuner: "Frederiksberg",
        Postnummer: 1800,
        ParcelEllerRækkehuse: 93739,
        Ejerlejlighed: 63459
    },
    {
        Kommuner: "Dragør",
        Postnummer: 2791,
        ParcelEllerRækkehuse: 52678,
        Ejerlejlighed: 38333
    },
    {
        Kommuner: "Tårnby",
        Postnummer: 2770,
        ParcelEllerRækkehuse: 39620,
        Ejerlejlighed: 38057
    },
    {
        Kommuner: "Albertslund",
        Postnummer: 2620,
        ParcelEllerRækkehuse: 27484,
        "Ejerlejlighed": 21980
    },
    {
        Kommuner: "Ballerup",
        Postnummer: 2750,
        ParcelEllerRækkehuse: 36322,
        Ejerlejlighed: 29655
    },
    {
        Kommuner: "Brøndby",
        Postnummer: 2660,
        ParcelEllerRækkehuse: 33517,
        Ejerlejlighed: 25873
    },
    {
        Kommuner: "Gentofte",
        Postnummer: 2820,
        ParcelEllerRækkehuse: 87976,
        Ejerlejlighed: 59006
    },
    {
        Kommuner: "Gladsaxe",
        Postnummer: 2860,
        ParcelEllerRækkehuse: 54860,
        Ejerlejlighed: 33090
    },
    {
        Kommuner: "Glostrup",
        Postnummer: 2600,
        ParcelEllerRækkehuse: 33626,
        Ejerlejlighed: 31334
    },
    {
        Kommuner: "Herlev",
        Postnummer: 2730,
        ParcelEllerRækkehuse: 36661,
        Ejerlejlighed: 31721
    },
    {
        Kommuner: "Hvidovre",
        Postnummer: 2650,
        ParcelEllerRækkehuse: 36578,
        Ejerlejlighed: 33775
    },
    {
        Kommuner: "Høje-Taastrup",
        Postnummer: 2630,
        ParcelEllerRækkehuse: 28664,
        Ejerlejlighed: 29035
    },
    {
        Kommuner: "Ishøj",
        Postnummer: 2635,
        ParcelEllerRækkehuse: 24516,
        Ejerlejlighed: 28003
    },
    {
        Kommuner: "Lyngby-Taarbæk",
        Postnummer: 2800,
        ParcelEllerRækkehuse: 57800,
        Ejerlejlighed: 40371
    },
    {
        Kommuner: "Rødovre",
        Postnummer: 2610,
        ParcelEllerRækkehuse: 36360,
        Ejerlejlighed: 35364
    },
    {
        Kommuner: "Vallensbæk",
        Postnummer: 2625,
        ParcelEllerRækkehuse: 32167,
        Ejerlejlighed: 27329
    },
    {
        Kommuner: "Allerød",
        Postnummer: 3450,
        ParcelEllerRækkehuse: 34354,
        Ejerlejlighed: 27109
    },
    {
        Kommuner: "Egedal",
        Postnummer: 3650,
        ParcelEllerRækkehuse: 26872,
        Ejerlejlighed: 32829
    },
    {
        Kommuner: "Fredensborg",
        Postnummer: 3480,
        ParcelEllerRækkehuse: 32076,
        Ejerlejlighed: 25350
    },
    {
        Kommuner: "Frederikssund",
        Postnummer: 3600,
        ParcelEllerRækkehuse: 21333,
        Ejerlejlighed: 23913
    },
    {
        Kommuner: "Halsnæs",
        Postnummer: 3310,
        ParcelEllerRækkehuse: 21986,
        Ejerlejlighed: 19632
    },
    {
        Kommuner: "Furesø",
        Postnummer: 3670,
        ParcelEllerRækkehuse: 40761,
        Ejerlejlighed: 32010
    },
    {
        Kommuner: "Gribskov",
        Postnummer: 3200,
        ParcelEllerRækkehuse: 26415,
        Ejerlejlighed: 16579
    },
    {
        Kommuner: "Helsingør",
        Postnummer: 3000,
        ParcelEllerRækkehuse: 33283,
        Ejerlejlighed: 28942
    },
    {
        Kommuner: "Hillerød",
        Postnummer: 3400,
        ParcelEllerRækkehuse: 32765,
        Ejerlejlighed: 30141
    },
    {
        Kommuner: "Hørsholm",
        Postnummer: 2970,
        ParcelEllerRækkehuse: 60545,
        Ejerlejlighed: 39319
    },
    {
        Kommuner: "Rudersdal",
        Postnummer: 2840,
        ParcelEllerRækkehuse: 52031,
        Ejerlejlighed: 40476
    },
    {
        Kommuner: "Bornholm",
        Postnummer: 3700,
        ParcelEllerRækkehuse: 11823,
        Ejerlejlighed: 20884
    },
    {
        Kommuner: "Greve",
        Postnummer: 2670,
        ParcelEllerRækkehuse: 31451,
        Ejerlejlighed: 29167
    },
    {
        Kommuner: "Køge",
        Postnummer: 4600,
        ParcelEllerRækkehuse: 25264,
        Ejerlejlighed: 35928
    },
    {
        Kommuner: "Lejre",
        Postnummer: 4320,
        ParcelEllerRækkehuse: 24289,
        Ejerlejlighed: 32789
    },
    {
        Kommuner: "Roskilde",
        Postnummer: 4000,
        ParcelEllerRækkehuse: 30086,
        Ejerlejlighed: 32519
    },
    {
        Kommuner: "Solrød",
        Postnummer: 2680,
        ParcelEllerRækkehuse: 32298,
        Ejerlejlighed: 28542
    },
    {
        Kommuner: "Faxe",
        Postnummer: 4640,
        ParcelEllerRækkehuse: 14945,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Guldborgsund",
        Postnummer: 4862,
        ParcelEllerRækkehuse: 9647,
        Ejerlejlighed: 8838
    },
    {
        Kommuner: "Holbæk",
        Postnummer: 4300,
        ParcelEllerRækkehuse: 18046,
        Ejerlejlighed: 17418
    },
    {
        Kommuner: "Kalundborg",
        Postnummer: 4400,
        ParcelEllerRækkehuse: 10090,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Lolland",
        Postnummer: 4900,
        ParcelEllerRækkehuse: 6723,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Næstved",
        Postnummer: 4700,
        ParcelEllerRækkehuse: 13349,
        Ejerlejlighed: 14682
    },
    {
        Kommuner: "Odsherred",
        Postnummer: 4500,
        ParcelEllerRækkehuse: 11658,
        Ejerlejlighed: 12737
    },
    {
        Kommuner: "Ringsted",
        Postnummer: 4100,
        ParcelEllerRækkehuse: 17139,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Slagelse",
        Postnummer: 4200,
        ParcelEllerRækkehuse: 13150,
        Ejerlejlighed: 11920
    },
    {
        Kommuner: "Sorø",
        Postnummer: 4180,
        ParcelEllerRækkehuse: 15219,
        Ejerlejlighed: 12750
    },
    {
        Kommuner: "Stevns",
        Postnummer: 4673,
        ParcelEllerRækkehuse: 19136,
        Ejerlejlighed: 20641
    },
    {
        Kommuner: "Vordingborg",
        Postnummer: 4760,
        ParcelEllerRækkehuse: 12344,
        Ejerlejlighed: 13125
    },
    {
        Kommuner: "Assens",
        Postnummer: 5610,
        ParcelEllerRækkehuse: 9811,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Faaborg-Midtfyn",
        Postnummer: 5600,
        ParcelEllerRækkehuse: 10657,
        Ejerlejlighed: 14792
    },
    {
        Kommuner: "Kerteminde",
        Postnummer: 5300,
        ParcelEllerRækkehuse: 16342,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Langeland",
        Postnummer: 5900,
        ParcelEllerRækkehuse: 7652,
        Ejerlejlighed: 15076
    },
    {
        Kommuner: "Middelfart",
        Postnummer: 5500,
        ParcelEllerRækkehuse: 15420,
        Ejerlejlighed: 44091
    },
    {
        Kommuner: "Nordfyns",
        Postnummer: 5450,
        ParcelEllerRækkehuse: 9637,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Nyborg",
        Postnummer: 5800,
        ParcelEllerRækkehuse: 11420,
        Ejerlejlighed: 26835
    },
    {
        Kommuner: "Odense",
        Postnummer: 5000,
        ParcelEllerRækkehuse: 20452,
        Ejerlejlighed: 24332
    },
    {
        Kommuner: "Svendborg",
        Postnummer: 5881,
        ParcelEllerRækkehuse: 15923,
        Ejerlejlighed: 44985
    },
    {
        Kommuner: "Ærø",
        Postnummer: 5970,
        ParcelEllerRækkehuse: 13762,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Billund",
        Postnummer: 7190,
        ParcelEllerRækkehuse: 12398,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Esbjerg",
        Postnummer: 6700,
        ParcelEllerRækkehuse: 15564,
        Ejerlejlighed: 19146
    },
    {
        Kommuner: "Fanø",
        Postnummer: 6720,
        ParcelEllerRækkehuse: 16340,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Fredericia",
        Postnummer: 7000,
        ParcelEllerRækkehuse: 17672,
        Ejerlejlighed: 15629
    },
    {
        Kommuner: "Haderslev",
        Postnummer: 6070,
        ParcelEllerRækkehuse: 9148,
        Ejerlejlighed: 12061
    },
    {
        Kommuner: "Kolding",
        Postnummer: 6000,
        ParcelEllerRækkehuse: 17208,
        Ejerlejlighed: 15569
    },
    {
        Kommuner: "Sønderborg",
        Postnummer: 6400,
        ParcelEllerRækkehuse: 10213,
        Ejerlejlighed: 15765
    },
    {
        Kommuner: "Tønder",
        Postnummer: 6240,
        ParcelEllerRækkehuse: 6812,
        Ejerlejlighed: 11422
    },
    {
        Kommuner: "Varde",
        Postnummer: 6682,
        ParcelEllerRækkehuse: 8339,
        Ejerlejlighed: 15524
    },
    {
        Kommuner: "Vejen",
        Postnummer: 6510,
        ParcelEllerRækkehuse: 9595,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Vejle",
        Postnummer: 7100,
        ParcelEllerRækkehuse: 18100,
        Ejerlejlighed: 18898
    },
    {
        Kommuner: "Aabenraa",
        Postnummer: 6200,
        ParcelEllerRækkehuse: 12512,
        Ejerlejlighed: 26146
    },
    {
        Kommuner: "Favrskov",
        Postnummer: 8881,
        ParcelEllerRækkehuse: 15786,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Hedensted",
        Postnummer: 8722,
        ParcelEllerRækkehuse: 12642,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Horsens",
        Postnummer: 8700,
        ParcelEllerRækkehuse: 16003,
        Ejerlejlighed: 19977
    },
    {
        Kommuner: "Norddjurs",
        Postnummer: 8500,
        ParcelEllerRækkehuse: 7714,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Odder",
        Postnummer: 8300,
        ParcelEllerRækkehuse: 15654,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Randers",
        Postnummer: 8920,
        ParcelEllerRækkehuse: 12387,
        Ejerlejlighed: 14776
    },
    {
        Kommuner: "Samsø",
        Postnummer: 8305,
        ParcelEllerRækkehuse: 15255,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Silkeborg",
        Postnummer: 8600,
        ParcelEllerRækkehuse: 18535,
        Ejerlejlighed: 34876
    },
    {
        Kommuner: "Skanderborg",
        Postnummer: 8660,
        ParcelEllerRækkehuse: 24096,
        Ejerlejlighed: 28356
    },
    {
        Kommuner: "Syddjurs",
        Postnummer: 8400,
        ParcelEllerRækkehuse: 15797,
        Ejerlejlighed: 21639
    },
    {
        Kommuner: "Århus",
        Postnummer: 8210,
        ParcelEllerRækkehuse: 35190,
        Ejerlejlighed: 38716
    },
    {
        Kommuner: "Herning",
        Postnummer: 7400,
        ParcelEllerRækkehuse: 13901,
        Ejerlejlighed: 25651
    },
    {
        Kommuner: "Holstebro",
        Postnummer: 7500,
        ParcelEllerRækkehuse: 15108,
        Ejerlejlighed: 19651
    },
    {
        Kommuner: "Ikast-Brande",
        Postnummer: 8430,
        ParcelEllerRækkehuse: 11525,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Lemvig",
        Postnummer: 7620,
        ParcelEllerRækkehuse: 7985,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Ringkøbing-Skjern",
        Postnummer: 6950,
        ParcelEllerRækkehuse: 9454,
        Ejerlejlighed: 19728
    },
    {
        Kommuner: "Skive",
        Postnummer: 7800,
        ParcelEllerRækkehuse: 8118,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Struer",
        Postnummer: 7600,
        ParcelEllerRækkehuse: 10969,
        Ejerlejlighed: 15899
    },
    {
        Kommuner: "Viborg",
        Postnummer: 8800,
        ParcelEllerRækkehuse: 13468,
        Ejerlejlighed: 8887
    },
    {
        Kommuner: "Brønderslev",
        Postnummer: 9700,
        ParcelEllerRækkehuse: 9939,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Frederikshavn",
        Postnummer: 9900,
        ParcelEllerRækkehuse: 11210,
        Ejerlejlighed: 21397
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
        Ejerlejlighed: 23010
    },
    {
        Kommuner: "Læsø",
        Postnummer: 4900,
        ParcelEllerRækkehuse: 6780,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Mariagerfjord",
        Postnummer: 9500,
        ParcelEllerRækkehuse: 10977,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Morsø",
        Postnummer: 7900,
        ParcelEllerRækkehuse: 5823,
        Ejerlejlighed: 29872
    },
    {
        Kommuner: "Rebild",
        Postnummer: 9520,
        ParcelEllerRækkehuse: 15427,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Thisted",
        Postnummer: 7700,
        ParcelEllerRækkehuse: 10226,
        Ejerlejlighed: 13161
    },
    {
        Kommuner: "Vesthimmerlands",
        Postnummer: 9640,
        ParcelEllerRækkehuse: 8115,
        Ejerlejlighed: 0
    },
    {
        Kommuner: "Aalborg",
        Postnummer: 9000,
        ParcelEllerRækkehuse: 18291,
        Ejerlejlighed: 27615
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
bbbu
 */







const button = document.querySelector('#button');
console.log(button)
button.addEventListener("click", function (){
    console.log("Indsend klikket")

    const postNr = document.querySelector("#postNr").value
     console.log(postNr)

   const indkomst =document.querySelector("#indkomst").value
      console.log(indkomst)
})

//Postnummer
function checkIfAvailable(Post) {
    let postNummer = data.map((hus)=>{
        return hus.Postnummer;
    })
    console.log(postNummer.indexOf(parseInt(Post)))
    return( postNummer.indexOf(parseInt(Post)) != -1 )
}

function validatePost() {
    let post = document.getElementById("postNr").value;
    let response = ""
    if (checkIfAvailable(post)) {
        response = "Tilgængelige bolig findes i området";
    } else {
        response = "Desværre, ingen tilgængelige bolig i området";
    }
    document.getElementById("response").innerHTML = response;
}

    let anbefaletbolig = data.filter(data => data.Postnummer === "2670");
    console.log(anbefaletbolig);


