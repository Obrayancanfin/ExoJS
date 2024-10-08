let bouton =document.querySelector("#btn-submit")
let nom=document.querySelector("#dog-name")
let race=document.querySelector("#dog-breed")
let age=document.querySelector("#dog-age")
let selectChien=document.querySelector("#dog-select")
let selectOutput=document.querySelector('#selectOutput')
let listeChien=[]
let val=1

bouton.addEventListener("click",()=>{

    listeChien.push([nom.value,race.value,age.value])
   
    let contente = document.createElement('option')
    contente.setAttribute( "value" , `${val}`)
    contente.innerHTML=`${nom.value}</option>`
    selectChien.appendChild(contente)
    val++
})

let paragraphe = document.createElement("p")

selectChien.addEventListener("change",()=>{
    if(selectChien.value!=0){
        paragraphe.textContent=`Vous avez selectionné le chien avec l'ID: `+selectChien.value    
    }else{
        paragraphe.textContent=""
    }
})
selectOutput.appendChild(paragraphe)
