import { Vehicule } from "../../Exercice_24ter/module/Vehicule.js";

export class Voiture extends Vehicule{
    clim;
    name="Voiture"
    constructor(marque,modele,annee,kilometrage,clim){
        super(marque,modele,kilometrage,annee)
        this.clim=clim
    }

    display(){
        let content=document.createElement("p")
        content.innerHTML+=`<p> ${this.name} : ${this.marque} - ${this.modele} - ${this.annee} -${this.kilometrage} - ${this.clim}</b> </p>`
        document.body.appendChild(content)
    }
}