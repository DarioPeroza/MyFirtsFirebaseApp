//---------------------------------------------Vars---------------------------------------------
const auth          = firebase.auth();                          //Firebase Auth object
const initUser      = document.querySelectorAll(".initUser");   //Select forms
const singInForm    = initUser[0];                              //Select form of singIn
const singUpForm    = initUser[1];                              //Select form of singUp

//---------------------------------------------Functions---------------------------------------------

function hideModal(id) {

    if (id[0] != "#") {
        id = "#" + id;
    }

    $(id).modal('hide');

}

function resetForm(form) {

    form.reset('hide');

}

function captureUserAuthData(form) {

    let userAuthData            = {};
        userAuthData.email      = form[0].value;
        userAuthData.password   = form[1].value;

    return userAuthData;

}

function registerNewUser(){

    let user = captureUserAuthData(singUpForm);
    let modal = "singUpModal";
    let userCreated = Boolean;
        userCreated = false;
    
    auth
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(userCredential => {
        userCreated = true;
    })
    
    if (userCreated) {
        hideModal(modal);
    } else {
        alert("Invalid Email");
    }

    resetForm(singUpForm);

}

function getRegisterUser(email, password) {
    console.log("Hello old user");
}

//-----------------------------------------------Events-----------------------------------------------

singUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    registerNewUser();
});

singInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getRegisterUser();
});