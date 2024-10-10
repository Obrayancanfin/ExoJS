let imgpkmn= document.querySelector("img.pokemon")
let nbrpkmn=document.querySelector("input.nbrpkmn").getAttribute("value")
let buttonNext=document.querySelector("button.NextBouton")
let buttonPrevious=document.querySelector("button.PreviousBouton")
let affichageNom =document.querySelector("p.Nom")
let affichageType =document.querySelector("p.Type")
let nompkmn ;
let typeNom;
let imageType;
async function getData(nbrpkmn) {
    const url = "https://tyradex.vercel.app/api/v1/pokemon/"+`${nbrpkmn}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();

        // nompkmn=encodeURIComponent(json.name.jap)

        nompkmn=json.name.en.toLowerCase();
        imgpkmn.src="https://projectpokemon.org/images/normal-sprite/"+`${nompkmn}`+".gif"

        imgpkmn.setAttribute("alt",`${nompkmn}`)
        affichageNom.textContent="Nom : "+`${nompkmn}`
        affichageType.innerHTML = `Type : `
        for (const type of json.types) {
        imageType=type.image
        typeNom=type.name
        affichageType.innerHTML +=`<img src="${imageType}" alt="${typeNom}"> ${typeNom} `
        }
        affichageType.innerHTML +=`</p>`
    } catch (error) {
        console.error(error.message);
    }
}

data = getData(nbrpkmn);

buttonNext.addEventListener("click",()=>{
    if (nbrpkmn>1025){
        buttonNext.setAttribute("disabled", false)
    }else {
        buttonNext.removeAttribute("disabled");
        nbrpkmn++

        getData(nbrpkmn)
    }
})

buttonPrevious.addEventListener("click",()=>{
    if (nbrpkmn<=1){
        buttonPrevious.setAttribute("disabled", false)
    }else {
        buttonPrevious.removeAttribute("disabled");
        nbrpkmn--

        getData(nbrpkmn)
    }
})
