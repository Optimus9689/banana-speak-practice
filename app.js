var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
console.log(txtInput)

function clickEventListner(){
    console.log("clicked");
    console.log('input:',txtInput.value);
};
btnTranslate.addEventListener("click", 
clickEventListner)