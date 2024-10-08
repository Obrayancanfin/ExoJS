export class Voiture {
    constructor(marque, modele, vitesse){
        this.marque = marque; 
        this.modele = modele; 
        this.vitesse = vitesse;
    }
    afficher(){
        let content=document.createElement("p")
        content.innerHTML+=`<p> La voiture <b>${this.marque} ${this.modele} </b> avance desormais à <b> ${this.vitesse} km/h </b> </p>`
        document.body.appendChild(content)
    }

    accelere(){
        this.vitesse+=10;
    }
    tourne(){
        this.vitesse-=5
    }
}
