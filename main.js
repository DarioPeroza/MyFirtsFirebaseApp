//---------------------------------------------Vars---------------------------------------------
const auth          = firebase.auth();                          //Firebase Auth object
const initUser      = document.querySelectorAll(".initUser");   //Select forms
const singInForm    = initUser[0];                              //Select form of singIn
const singUpForm    = initUser[1];                              //Select form of singUp

//---------------------------------------------Functions---------------------------------------------

function captureForm(form, isNewUser = true) {

    if(isNewUser){
        console.log("New user:");
    }

    if (!isNewUser) {
        console.log("Register user:");
    }

    console.log(form[0].value);
    console.log(form[1].value);
}

//-----------------------------------------------Events-----------------------------------------------

singUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    captureForm(singUpForm);
});

singInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    captureForm(singInForm, false);
});