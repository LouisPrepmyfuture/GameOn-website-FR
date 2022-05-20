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


// regarde si un check est check dans une liste de check
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

 function cleanErrorForm(element) {
  element.dataset.error = "" ; 
  element.dataset.errorVisible = "false" ; 
  element.classList.remove("erreur");
 }

// regarde si un formulaire est valide ou non
function validate(){
  let first = document.getElementById("first");
  let last = document.getElementById("last");
  let email = document.getElementById("email");
  let location = document.getElementsByName("location");
  let cdn = document.getElementById("cdn");
  let birthdate = document.getElementById("birthdate");
  let reguliareEmail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  let nbError = 0;

  const formDatas = document.querySelectorAll(".formData");

  for(let i = 0;formDatas.length > i; i++){
    console.log(cleanErrorForm(formDatas[i]))
    cleanErrorForm(formDatas[i]);
  }
  
  
  if(!first.value || first.value.length < 1 ){
    showErrorForm(first, "Veuillez entrer 2 caractères ou plus pour le champ du prénom")
    nbError++
  } 
  if(!last.value || last.length < 1 ){
    showErrorForm(last, "Veuillez entrer 2 caractères ou plus pour le champ du nom")
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
  }
  if(isChecked(location) == false){
    showErrorForm(document.getElementById("location1"), "Vous devez choisir une option.")
    nbError++
  }
  
  if(cdn.checked  == false){
    showErrorForm(cdn, "Vous devez vérifier que vous acceptez les termes et conditions.")
    nbError++
  }
  console.log(nbError)
  if(nbError > 0){
    return false;
  }
    
  return true;
    
}
