//---------------------------------------------Vars---------------------------------------------
const auth          = firebase.auth();                          //Firebase Auth object
const initUser      = document.querySelectorAll(".initUser");   //Select forms
const singInForm    = initUser[0];                              //Select form of singIn
const singUpForm    = initUser[1];                              //Select form of singUp

//---------------------------------------------Functions---------------------------------------------

function hideModal(modalId) {                   //function for hide modal with id

    if (modalId[0] != "#") {

        modalId = "#" + modalId;

    }

    $(modalId).modal('hide');

}

function captureUserAuthData(form) {            //capture user credential of form

    let userAuthData            = {};
        userAuthData.email      = form[0].value;
        userAuthData.password   = form[1].value;

    return userAuthData;

}

function registerNewUser(){                     //Register function

    let user = captureUserAuthData(singUpForm);
    let modalId = "singUpModal";
    
    auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(userCredential => {
            console.log(userCredential);
        })
        .then(() => {
            alert("Success!");
            singUpForm.reset();
            hideModal(modalId);
        }, () => {
            alert("Try another email");
            singUpForm.reset();
        })

}

function initSession() {                        //Start session

    let user = captureUserAuthData(singInForm);
    let modalId = "singInModal";
    
    auth
        .signInWithEmailAndPassword(user.email, user.password)
        .then(userCredential => {
            console.log(userCredential);
        })
        .then(() => {
            alert("Success!");
            singInForm.reset();
            hideModal(modalId);
        }, () => {
            alert("Invalid email or password");
            singInForm.reset();
        })
}

//-----------------------------------------------Events-----------------------------------------------

singUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    registerNewUser();
});

singInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    initSession();
});