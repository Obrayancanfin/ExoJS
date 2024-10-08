export class Vehicule {
    name = "Vehicule";
    constructor(marque,modele,kilometrage,annee){
        this.marque=marque
        this.modele=modele
        this.kilometrage=kilometrage
        this.annee=annee
    }

    display(){
        let content=document.createElement("p")
        content.innerHTML+=`<p> ${this.name} : ${this.marque} - ${this.modele} -${this.kilometrage} - ${this.annee}</b> </p>`
        document.body.appendChild(content)
    }
}