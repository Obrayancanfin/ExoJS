let imgpkmn = document.querySelector("img.pokemon")
let nbrpkmn = document.querySelector("input.nbrpkmn").getAttribute("value")
let buttonNext = document.querySelector("button.NextBouton")
let buttonPrevious = document.querySelector("button.PreviousBouton")
let buttonShiny = document.querySelector("button.ShinyBouton")
let affichageNombre = document.querySelector("p.nbrpkmn")
let affichageNomFr = document.querySelector("p.NomFr")
let affichageNomEn = document.querySelector("p.NomEn")
let affichageNomJp = document.querySelector("p.NomJp")
let affichageType = document.querySelector("p.Type")
let nompkmn;
let nompkmnen;
let nompkmnjap;
let isShiny = true
let isShiny9g = true
let shiny = "normal"
let shiny9g ="regular"
let typeNom;
let imageType;
async function getData(nbrpkmn) {
    const url = "https://tyradex.vercel.app/api/v1/pokemon/" + `${nbrpkmn}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();

        nompkmnjap = json.name.jp
        nompkmnen = json.name.en.toLowerCase()
        nompkmnen = nompkmnen.replace(/\s/g, '');
        nompkmnen = nompkmnen.replace("'", '');
        nompkmnfr = json.name.fr
        imgpkmn.style.width='30%';
        imgpkmn.style.top= "13%";
        imgpkmn.style.left="8%";
     
        if (nbrpkmn == (29) || nbrpkmn == (32)) {
            if (nbrpkmn ==29) {
                nompkmnen='nidoran_f'
            }else{
                nompkmnen='nidoran_m'
            }
        }
        
        imgpkmn.src ='https://projectpokemon.org/images/sprites-models/swsh-'+ `${shiny}` +'-sprites/'+`${nompkmnen}`+'.gif'
    
        if (nbrpkmn == 892) {
            imgpkmn.src="https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/urshifu.gif"
        }
        if (nbrpkmn == 894) {
            imgpkmn.src="https://t.ly/YfGLS";
        }
        if (nbrpkmn == 895) {
            imgpkmn.src="https://t.ly/oXxJZ";
        }
        if (nbrpkmn>=1000) {
            imgpkmn.src="https://projectpokemon.org/images/sprites-models/sv-sprites-regular/"+nbrpkmn+".png"
        }
        nompkmnen = json.name.en;
        imgpkmn.setAttribute("alt", `${nompkmn}`)

        affichageNombre.textContent = "Numéro : " + `${nbrpkmn}`
        affichageNomFr.textContent = "Nom (fr) : " + `${nompkmnen}`
        affichageNomEn.textContent = "Nom (en) : " + `${nompkmnfr}`
        affichageNomJp.textContent = "Nom (jp) : " + `${nompkmnjap}`

        affichageType.innerHTML = `Type : `
        for (const type of json.types) {
            imageType = type.image
            typeNom = type.name
            affichageType.innerHTML += `<img src="${imageType}" alt="${typeNom}"> ${typeNom} `
        }
        affichageType.innerHTML += `</p>`
    } catch (error) {
        console.error(error.message);
    }
}

data = getData(nbrpkmn);


function navigate(direction) {
    if (direction === "next") {
        if (nbrpkmn > 1025) {
            buttonNext.setAttribute("disabled", false);
        } else {
            buttonNext.removeAttribute("disabled");
            nbrpkmn++;
            buttonPrevious.removeAttribute("disabled");
        }
    } else if (direction === "previous") {
        if (nbrpkmn <= 1) {
            buttonPrevious.setAttribute("disabled", true);
        } else {
            buttonPrevious.removeAttribute("disabled");
            nbrpkmn--;
            buttonNext.removeAttribute("disabled");   
        }
    }
    getData(nbrpkmn);
}

buttonNext.addEventListener("click", () => {
    navigate("next");
})

buttonPrevious.addEventListener("click", () => {
    navigate("previous");
})

function setShiny() {
    (isShiny) ? shiny = `normal` : shiny = `shiny`;
    (isShiny9g)? shiny9g = `regular` : shiny9g = `shiny`;
    isShiny = !isShiny
    isShiny9g= !isShiny9g
    console.log(shiny9g)
    getData(nbrpkmn)
}

buttonShiny.addEventListener("click", () => {
    setShiny();
})

document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' ) {
        setShiny();
    } else if (e.key === 'ArrowLeft') {
        navigate("previous");
    } else if (e.key === 'ArrowRight') {
        navigate("next");
    }
})