//---------------------------------------------Vars---------------------------------------------
const auth          = firebase.auth();                          //Firebase Auth object
const initUser      = document.querySelectorAll(".initUser");   //Select forms
const singInForm    = initUser[0];                              //Select form of singIn
const singUpForm    = initUser[1];                              //Select form of singUp

//---------------------------------------------Functions---------------------------------------------

function resetModal(form, modalBox) {
    
}

function captureUserAuthData(form) {

    let userAuthData            = {};
        userAuthData.email      = form[0].value;
        userAuthData.password   = form[1].value;

    return userAuthData;

}

function registerNewUser(){

    let user = captureUserAuthData(singUpForm);
    
    resetModal(singUpForm, singUpModal)

    auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(userCredential => {
            console.log("Hello new user");
        })

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