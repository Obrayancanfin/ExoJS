import { Vehicule } from "../../Exercice_24ter/module/Vehicule.js";


export class Moto extends Vehicule{
    name="Moto"
    constructor(marque,modele,kilometrage,annee){   
        super(marque,modele,kilometrage,annee)
    }
}