let variable = document.getElementById('variable')
let choix = document.getElementById('choix')
let inconnue = document.getElementById('inconnue')
let bouton = document.getElementById('bouton')
let resultat =document.getElementById('resultat')

function selection(outil) {
    choix.innerHTML = `${outil}`
}

function randomordi() {
    let tableaux = ['pierre', 'feuille', 'ciseau']
    let element = Math.floor(Math.random() * 3)

    inconnue.innerHTML = tableaux[element]
    gagnant()

    if (choix.innerHTML == "..."){ 

        inconnue.innerHTML = "..."
    }
}

function refresh(){
    location.reload(true);
}

function gagnant(){
if  (choix.innerHTML == 'pierre' && inconnue.innerHTML == 'ciseau'){

    resultat.innerHTML = 'gagner';
    resultat.style.color='green';
}

else if (choix.innerHTML == 'ciseau' && inconnue.innerHTML == 'pierre'){
    resultat.innerHTML = 'perdu';
    resultat.style.color='red';
}

else if (choix.innerHTML == 'feuille' && inconnue.innerHTML == 'pierre'){
    resultat.innerHTML = 'gagner';
    resultat.style.color='green';
}

else if (choix.innerHTML == 'pierre' && inconnue.innerHTML == 'feuille'){
    resultat.innerHTML = 'perdu';
    resultat.style.color='red';
}
else if (choix.innerHTML == 'ciseau' && inconnue.innerHTML == 'feuille'){
    resultat.innerHTML = 'gagner';
    resultat.style.color='green';
}
else if (choix.innerHTML == 'feuille' && inconnue.innerHTML == 'ciseau'){
    resultat.innerHTML = 'perdu';
    resultat.style.color='red';
}

else if (choix.innerHTML == 'feuille' && inconnue.innerHTML == 'feuille'){
    resultat.innerHTML = 'égalitée';
    resultat.style.color='black';
}

else if (choix.innerHTML == 'ciseau' && inconnue.innerHTML == 'ciseau'){
    resultat.innerHTML = 'égalitée';
    resultat.style.color='black';

}

else if (choix.innerHTML == 'pierre' && inconnue.innerHTML == 'pierre'){
    resultat.innerHTML = 'égalitée';
    resultat.style.color='black';

}





}



