//EXO14

// console.log("EXO14")
// console.log("")

// let identité = (prenom,nom) => prenom+" "+nom;

// let prenom = prompt("Entre votre prénom");
// let nom = prompt("Entre votre nom");

// console.log(identité(prenom,nom))

// EXO15

// console.log("EXO15")
// console.log("")

// let soustraire = (a,b) => "Je soustrais "+a+" et "+b+"\n"+"Resultat : "+(a-b)
// let a = prompt("Saisir la valeur a :")
// let b = prompt("Saisir la valeur b :")

// console.log(soustraire(a,b))

//EXO16

// console.log("EXO16")
// console.log("")

// let heure = prompt("Entre une heure : ")
// let quelleHeure= (heure = "12H00" ) => {
//     if (heure===undefined || heure==="") {
//     console.log('Il est 12H00')
//     }else{
//         console.log("il est "+heure)
//     }}

// quelleHeure(heure)

//EXO17

// console.log("EXO17")
// console.log("")

// let ask = (question,yes,no) => confirm(question)?yes():no()

// ask(
//     "Do you agree?",
//     function () {
//         alert("You agreed.");
//     },
//     function () {
//         alert("You canceled the execution.");
//     });

//EXO18

// console.log("EXO18")
// console.log("")
// let mot = prompt("Entrée une chaine de caractére :");
// mot=mot.replace(/\s/g, '');
// let motReverse = mot.split("").reverse().join("");
// console.log(motReverse)
// console.log(mot==motReverse)

//EXO19

// let mot = prompt("Entrer un mot :")
// mot = mot.split("")
// let lettre = prompt("Entrer une lettre :")
// let cpt = 0 ;
// mot.forEach((element) => {
//     if(element==lettre){
//         cpt++;
//     }
// });
// console.log(cpt) 

//EXO20

// console.log("EXO20")
// console.log("")

// let tab = []
// let cpt = 0;

// for (let index = 0; index < 10; index++) {
//     tab.push(prompt("Entrer le nombre numero "+(index+1)));
// }

// tab.map((element,index)=>console.log("\t".repeat(index)+element))
// tab=[]

// for (let index = 0; index < 10; index++) {
//     tab.push(Math.floor(Math.random()*99));
// }

// tab.map((element,index)=>console.log("\t".repeat(index)+element))



//EXO21

// console.log("EXO21")
// console.log("")

// let nbr = prompt('Saisir taille tableau :')
// let tab =[]
// for (let index = 0; index < nbr; index++) {
//     let nbr=Math.floor(Math.random()*50)
//     tab.push(nbr)
//     console.log("Le nombre "+tab[index]+" "+(tab[index]%2==0?"est pair":"est impair"))
// }

//EXO22

// console.log("EXO22")
// console.log("")

let menu = ()=>{
let max=0;
let min=20;
let moyen= 0;
let tab =[]
console.log("1 : Saisie fixe")
console.log("2 : Saisie jusqu'à note négative")
let mode = prompt("Choisir un mode de saisie : ")
console.log("Votre choix : "+mode);
switch (mode) {
    case "1":
        let nbrNotes =prompt("Combien de notes ? ")
        console.log("Combien de notes ? "+nbrNotes)
        while (tab.length < nbrNotes) {
            let saisie = prompt("Veuillez entrer une note entre 0 et 20 compris : ")
            if(saisie>20 || saisie<0){

                console.log("ERREUR, veuillez réessayer :")
                continue;
            }

            if(saisie<min){
                min=saisie
            }
            if(saisie>max){
                max=saisie
            }
            moyen+=parseInt(saisie);
            tab.push(saisie)
            console.log("Veuillez entrer une note entre 0 et 20 compris : "+saisie)
        }
        moyen=moyen/tab.length;
        console.log("Fin de Saisie !")
        console.log("")
        console.log("La note maximal est "+max)
        console.log("La note minimal est "+min)
        console.log("La moyenne est "+moyen)

        break;
    case "2":

        let saisie = prompt("Veuillez entrer une note entre 0 et 20 compris : ")
        while (0>=saisie) {
            
           
            if(saisie>20){
                console.log("ERREUR, veuillez réessayer :")
                continue;
            }
            if(saisie<min){
                min=saisie
            }
            if(saisie>max){
                max=saisie
            }
            moyen+=saisie
            tab.push(saisie)
            console.log("Veuillez entrer une note entre 0 et 20 compris : "+saisie)
            
        }
        moyen=parseInt(moyen)/tab.length
        console.log("Fin de Saisie !")
        console.log("")
        console.log("La note maximal est "+max)
        console.log("La note minimal est "+min)
        break;
    case null:
        menu()
    }

}

menu()