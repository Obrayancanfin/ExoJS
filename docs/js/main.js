let imgpkmn= document.querySelector("img.pokemon")
let nbrpkmn=document.querySelector("input.nbrpkmn").getAttribute("value")
let buttonNext=document.querySelector("button.NextBouton")
let buttonPrevious=document.querySelector("button.PreviousBouton")
let buttonShiny =document.querySelector("button.ShinyBouton")
let affichageNombre=document.querySelector("p.nbrpkmn")
let affichageNomFr =document.querySelector("p.NomFr")
let affichageNomEn =document.querySelector("p.NomEn")
let affichageNomJp =document.querySelector("p.NomJp")
let affichageType =document.querySelector("p.Type")
let nompkmn ;
let nompkmnen ;
let nompkmnjap ;
let isShiny=true
let shiny='normal'
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
        
        nompkmnjap=json.name.jp
        nompkmnen=json.name.en.toLowerCase();
        nompkmnfr=json.name.fr
        if(nbrpkmn==83){
            nompkmnen='farfetchd'
        }
        imgpkmn.src='https://projectpokemon.org/images/'+`${shiny}`+'-sprite/'+`${nompkmnen}`+".gif"
        nompkmnen=json.name.en;
        imgpkmn.setAttribute("alt",`${nompkmn}`)

        affichageNombre.textContent="Numéro : "+`${nbrpkmn}`
        affichageNomFr.textContent="Nom (fr) : "+`${nompkmnen}`
        affichageNomEn.textContent="Nom (en) : "+`${nompkmnfr}`
        affichageNomJp.textContent="Nom (jp) : "+`${nompkmnjap}`

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


buttonShiny.addEventListener("click",()=> {
    (isShiny)? shiny="normal": shiny="shiny"
    isShiny=!isShiny
    console.log(shiny)

    getData(nbrpkmn)
})
