let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
]; 

const titre = document.querySelector("h1");
etudiants.forEach((etudiant,index) => {
    let moyen = 0;
    let nbrNotes= 0;
    titre.innerHTML+="<p>##########DEBUT etudiant##########</p>";
    const contente = document.createElement("p");
    titre.innerHTML+="<p>Etudiant :"+ etudiant.nom+" "+etudiant.prenom+"<br/></p>";
    titre.appendChild(contente);
    for (const [key, value] of Object.entries(etudiant.matieres)) {
        titre.innerHTML+="<p> "+`${key}`+" : "+`${value}`+" / 20 <br/></p>";
        titre.appendChild(contente)
        moyen+=parseInt(`${value}`)
        nbrNotes++;
      }
    titre.innerHTML+="<p> La moyenne est de "+(moyen/nbrNotes).toFixed(2)+"</p>"
    titre.innerHTML+="<p>##########FIN etudiant##########</p>"
});