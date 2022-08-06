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
let message = false;
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
   for(let i = 0;formData.length > i; i++){
    formData[i].style.opacity = 0;
  }
}


// regarde si un check est check 
function isChecked(list){
  for(let i = 0;list.length > i; i++){
    if(list[i].checked){
      return true;
    }
  }
  return false
}

// affiche les erreuur du formulaire
 function showErrorForm(element, message) {
  element.parentNode.dataset.error = message ; 
  element.parentNode.dataset.errorVisible = "true" ; 
  element.parentNode.classList.add("erreur");
 }

//  nettoi les erreurs du formulaire
 function cleanErrorForm(element) {
  element.dataset.error = "" ; 
  element.dataset.errorVisible = "false" ; 
  element.classList.remove("erreur");
 }

// regarde si un formulaire est valide ou non
function validate(event){
  event.preventDefault();
  let first = document.getElementById("first");
  let last = document.getElementById("last");
  let email = document.getElementById("email");
  let location = document.getElementsByName("location");
  let cdn = document.getElementById("cdn");
  let birthdate = document.getElementById("birthdate");
  let reguliareEmail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  let reguliareDate = /^(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(\/|-|\.)(?:0?[13578]|1[02])\1(?:31))|(?:(\/|-|\.)(?:0?[13-9]|1[0-2])\2(?:29|30)))$|^(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/|-|\.)0?2\3(?:29)$|^(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:0?[1-9]|1\d|2[0-8])$/gm
  let reguliareNb = /[0-9]/;
  let reguliaretxt = /[a-zA-Z]/
  let nbError = 0;

  const formDatas = document.querySelectorAll(".formData");

  for(let i = 0;formDatas.length > i; i++){
    cleanErrorForm(formDatas[i]);
  }

  // gatheck007@gmail.com
  
  
  if(!first.value || first.value.length < 1 ){
    showErrorForm(first, "Veuillez entrer 2 caractères ou plus pour le champ du prénom")
    nbError++
  } else if(!reguliaretxt.test(first.value)){
    showErrorForm(first, "Le prénom n'est pas valide")
    nbError++
  }

  if(!last.value || last.length < 1 ){
    showErrorForm(last, "Veuillez entrer 2 caractères ou plus pour le champ du nom")
    nbError++
  } else if(!reguliaretxt.test(last.value)){
    showErrorForm(last, "Le Nom n'est pas valide")
    nbError++
  }
  
  
  if(!email.value){
    showErrorForm(email, "Vous devez entrer votre date de naissance.")
    nbError++
  }else if(!reguliareEmail.test(email.value)){
    showErrorForm(email, " L'adresse mail n'est pas valide")
    nbError++
  }
     
  if(!birthdate.value){
    showErrorForm(birthdate, "Vous devez entrer votre date de naissance.")
    nbError++
  }else if(!reguliareDate.test(birthdate.value)){
      showErrorForm(birthdate, " L'adresse mail n'est pas valide (ex: 01/12/2020)")
      nbError++
    }

  if(isChecked(location) == false){
    showErrorForm(document.getElementById("location1"), "Vous devez choisir une option.")
    nbError++
  }
  
  if(cdn.checked  == false){
    showErrorForm(cdn, "Vous devez vérifier que vous acceptez les termes et conditions.")
    nbError++
  }
  
  if(nbError > 0){
    return false;
  }
  return  showMesage();
    
}


// Affiche le message de validation
 function showMesage(){
  for(let i = 0;formData.length > i; i++){
    formData[i].style.opacity = 0;
  }
  if(message == true){
    return true
  }
  message = true
  document.getElementById("valid").style.display = "block" ;
  return false;
}

  
 

