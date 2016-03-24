var countClik = Math.ceil(1*Math.random());
var uitvoerCount = document.getElementById('aantal');
var totalCount = countClik;
var uitvoerHart = document.getElementById('waardering');
var deHarten = document.querySelectorAll('.non');

//functie voor precentage hart kleur
function kleurHart(hartNummer, procent) {
    var naam = 'h' + hartNummer;
    procent = Math.min(procent, 100);
    document.getElementById(naam).style.width = procent+'%';
}

//kleurHart(3,50);
// for loop voor kleur harten
function kleurDeHarten(waardering){
    for(var i=1; i<6; i++){
        kleurHart(i, waardering*100);
        waardering --;
    }
}

//roep funtie aan
//random uitvoeren in document
function uitvoeren(){
//aantal kliks
uitvoerCount.innerHTML = countClik;
// gemidelde rating
uitvoerHart.innerHTML = Math.ceil(10*totalCount/countClik)/10;
//in gelkeurde harten met gemidelde rating als %
kleurDeHarten(Math.ceil(10*totalCount/countClik)/10);
}
uitvoeren();
//funtie voor  de click
function doeClick(){
    
    countClik ++;
    var number= this.getAttribute('data-role');
    totalCount += parseInt(number);
    uitvoeren();
}
for(var i=0; i<deHarten.length; i++){
    deHarten[i].addEventListener('click', doeClick);
}