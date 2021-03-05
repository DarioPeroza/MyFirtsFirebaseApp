// Register function ------------------------------------------------------------------------------

function registerNewUser(){

    let user = captureUserAuthData(singUpForm);
    let modalId = "singUpModal";
    
    auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
            singUpForm.reset();
            hideModal(modalId);
        }, () => {
            alert("Try another email");
            singUpForm.reset();
        })

}

// Start session ------------------------------------------------------------------------------------

function initSession() {

    let user = captureUserAuthData(singInForm);
    let modalId = "singInModal";
    
    auth
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => {
            singInForm.reset();
            hideModal(modalId);
        }, () => {
            alert("Invalid email or password");
            singInForm.reset();
        })
}