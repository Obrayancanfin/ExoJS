import { Contact } from "../module/Contact.js"

let contacts = []
    document.getElementById('formContact').addEventListener('submit', (event) => {
    event.preventDefault();
    let titre = document.querySelector('input[name="titre"]:checked').value;
    let nom = document.querySelector('input[name="nom"]').value;
    let prenom = document.querySelector('input[name="prenom"]').value;
    let dateNaissance = document.querySelector('input[name="dateNaissance"]').value;
    let telephone = document.querySelector('input[name="telephone"]').value;
    let email = document.querySelector('input[name="email"]').value;
    contacts.push(new Contact(titre, nom, prenom, dateNaissance, telephone, email));
    afficherContacts();
    event.target.reset();
})

function afficherContacts(){
    let tableau = document.getElementById("result");
    tableau.innerHTML = ``;

    contacts.forEach(contact=> {
        tableau.innerHTML += `<tr>
            <td>${contact.titre}</td>
            <td>${contact.nom}</td>
            <td>${contact.prenom}</td>
            <td>${contact.dateNaissance}</td>
            <td>${contact.telephone}</td>
            <td>${contact.email}</td>
        </tr>`;
    });
}