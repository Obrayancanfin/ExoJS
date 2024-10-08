import { Moto } from "../module/Moto.js";
import { Vehicule } from "../module/Vehicule.js";
import { Voiture } from "../module/Voiture.js";



let vehicule = new Vehicule("Renault","Kangoo","240.000km","2003")

let voiture = new Voiture("Renault","Kangoo","240.000km","2003","Climatisée")

let moto = new Moto("BMW","R1150R ROSTER","65000km","2005")

vehicule.display();
voiture.display();
moto.display();