var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

function clickEventListner(){
    outputDiv.innerText="sandy mandy is "
+txtInput.value;};
btnTranslate.addEventListener("click", 
clickEventListner)