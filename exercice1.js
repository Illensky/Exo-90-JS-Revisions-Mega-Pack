let nomVoiture = "Peugeot";
let x = 50;
let z = 5;
let w = 10;
let d = z+w;
alert(d);
let [prenom,nom,age] = ["john","doe",35];
let [k,i] = [5, 10]
i = i + k;
let txt = "une longue phrase";
let longueur = txt.length;
let str1 = "bonjour";
let str2 = "le monde";

let listeVoitures = ["Renault","Volvo","Citroen"];
let maVoiture = listeVoitures[1];

listeVoitures.pop()
listeVoitures.push("Ferrari")
listeVoitures[0] = "ford";

let rNumber = Math.random();
let fNumber = 1.45;
fNumber = Math.round(fNumber);

let nombre1 = 10;
let nombre2 = 5;

if (nombre1 > nombre2) {
    alert("nombreUn est supérieur à nombreDeux")
}

let nombre3 = 10;
let nombre4 = 10;

if (nombre3 === nombre4) {
    alert("nombreTrois est égal à nombreQuatre");
}

if (nombre1 !== nombre2) {
    alert("nombreUn n'est pas égal à nombreDeux");
}

for (let i = 0; i < 10; i++){
    console.log(i);
}

let fruits = [ "pomme","banane","poire"];

for (let fruit of fruits){
    console.log(fruit);
}
i = 0;
while (i<10){
    console.log(i)
    i++
}

i = 0
while (i<10){
    console.log(i)
    i+=2
}

for (let i = 0; i < 11; i++){
    if (i === 5){
        alert("Le message de votre choix")
    }
}

alert(listeVoitures.length);
alert(str1 + str2);
alert(longueur);
alert((10 *5).toString());
alert((10/2).toString());
alert((15%9).toString());

document.querySelector("#demo").innerHTML = "z vaux" + z.toString() + ", w vaux" + w.toString() + ", le résultat est : " + (z+w).toString() + ".";
function maFonction () {
    alert("Salut tout le monde !");
}
maFonction();

function maFonctionDeRetour() {
    return "Bonjour!"
}

document.querySelector("#demoRetour").innerHTML = maFonctionDeRetour()
document.querySelector("#monBoutton").addEventListener("click", function (){
    alert(`"heu affiche une boite d'alerte pour la dixieme fois nanananininanana j'vous fais faire s'que je veux tfassons c'est moi le chef" - Jérôme - 03/12/21 - Exo 90`)
})
document.querySelector("#changeSurOver").addEventListener("mouseover", function (){
    this.style.backgroundColor = "red";
})
