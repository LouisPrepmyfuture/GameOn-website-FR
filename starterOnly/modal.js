function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
let form = document.getElementById("reserve");
let contentMessage = document.getElementById("content-message");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal
function closeModal() {
  modalbg.style.display = "none";
  form.style.display = "block";
  contentMessage.style.display = "none";
}

// lance un message flash
function showFlash(valeur) { 
  let p = document.getElementById("message");
  p.innerHTML = valeur
  contentMessage.style.display = "flex";
  form.style.display = "none";
  launchModal()
}


// si il y a un message flash, affiche le message
if(sessionStorage.flash === 1 ){
  showFlash(sessionStorage.message)
  sessionStorage.flash = 0;
  sessionStorage.message = "";
}

// supprime une list d'element
function supListElement (list){
  for(let i = 0;list.length > i; i++){
    list[i].remove()
  }
}

// regarde si un check est check dans une liste de check
function isChecked(list){
  console.log(list)
  for(let i = 0;list.length > i; i++){
    if(list[i].checked){
      return true;
    }
  }
  return false
}

// regarde si un formulaire est valide ou non
function validate(){
  let first = document.getElementById("first");
  let last = document.getElementById("last");
  let email = document.getElementById("email");
  let location = document.getElementsByName("location");
  let cdn = document.getElementById("cdn");
  let Erreur = ""
  Erreur = new Object();

  //sup les erreur presedante 
    supListElement(document.querySelectorAll(".erreur"))

  
  if(!first.value || first.value.length < 1 ){
    Erreur.first = "Veuillez entrer 2 caractères ou plus pour le champ du prénom"
  }

  if(!last.value){
    Erreur.last = "Veuillez entrer  le champ du nom"
  }


  if(!email.value){
    Erreur.email = "Veuillez entrer l'email"
  }

  if(isChecked(location) == false){
    Erreur.location = "Veuillez choisir un tournoi."
  }
  if(cdn.checked  == false){
    Erreur.cdn = "Veuillez accepter le cdv"
    console.log(Erreur)
  }

  if( Object.keys(Erreur).length != 0){
    e = document.querySelectorAll(".erreur")
  
    Object.entries(Erreur).forEach(([clé, valeur]) => {
       let newSpan = document.createElement("span")
       newSpan.className = "erreur";
       newSpan.innerHTML = valeur
       document.getElementById(clé).after(newSpan)  
    });
    return false;
  }

  sessionStorage.setItem('flash', 1);
  sessionStorage.setItem('message', "message test");

  return true;
}
