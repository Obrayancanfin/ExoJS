import { Voiture } from "../module/Voiture.js";


let voiture = new Voiture("BMW","Serie 1" ,90)

voiture.afficher();
for (let i = 0; i < 2; i++) {
voiture.accelere();
voiture.afficher();
}

let voiture1 = new Voiture("Mercedes","GLB" ,100)
for (let i = 0; i < 2; i++) {
    voiture1.accelere();
    voiture1.afficher();
    }

    for (let i = 0; i < 2; i++) {
        voiture1.tourne();
        voiture1.afficher();
        }
    x