/**
 * Webapp with Pagination
 */

/**
 * Deklaration der Variablen
 */
let index;
let artists = undefined;

/**
 * Ausgabe zeigen
 */
function showUI(){
    //artist
    let htmlObj = document.getElementById("artist");
    htmlObj.innerHTML =
        `Artist Name: ${artists.artistname}<br>`+
        `First Name: ${artists.firstname}<br>`+
        `Last Name: ${artists.lastname}<br>`+
        `Nationality: ${artists.nationality}`;

    //Family
    htmlObj = document.getElementById("family");
    htmlObj.innerHTML =
        `Parents: ${artists.family.parents}<br>`+
        `Wife/Husband: ${artists.family.wh}<br>`+
        `Siblings: ${artists.family.siblings}`;

    //Museum
    htmlObj = document.getElementById("museum");
    //clear
    htmlObj.innerHTML = "";
    //set
    artists.museum.famousmuseum.forEach(modulid => {
        htmlObj.innerHTML += `${modulid}<br>`;
    });

    //Famous Works
    htmlObj = document.getElementById("famousworks");
    //clear
    htmlObj.innerHTML = "";
    //set
    artists.works.famousworks.forEach(modulid => {
        htmlObj.innerHTML += `${modulid}<br>`;
    });

}


/**
 * Nächster Eintrag (Record) zeigen
 */
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (artistList.length-1 > index){
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    artists = artistList[index];
    //zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index grösser als das Minimum ist
        if (index > 0){
            //... vermindere den index um 1
            index--;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    artists = artistList[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (artists === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    artists = artistList[index];
    //zeige den Eintrag
    showUI();
}


let namen = {
    name1: "Moira Lenz",
    name2: "Isalena Sutter",
    getfullnamen() {
        return `${this.name1} ${this.name2}`;
    }
}
htmlObj = document.getElementById("namen");
htmlObj.innerHTML = 
        `${namen.getfullnamen()}`;
