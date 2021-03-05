// Need loginFunctions.js & simpleFunctions.js to work
//---------------------------------------------Vars---------------------------------------------
const initUser      = document.querySelectorAll(".initUser");       //Select forms
const singInForm    = initUser[0];                                  //Select form of singIn
const singUpForm    = initUser[1];                                  //Select form of singUp
const logoutButton  = document.querySelector("#logoutButton");      //Select logout Button
const navLinks      = document.querySelectorAll(".nav-link");       //Select all nav-link
const singInNavLink = navLinks[0];
const singUpNavLink = navLinks[1];
const logoutNavLink = navLinks[2];

//---------------------------------------------Functions---------------------------------------------

auth.onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
        switchNavLinks();
    } else {
        console.log("User does not exist");
    }
});

//-----------------------------------------------Events-----------------------------------------------

singUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    registerNewUser();
});

singInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    initSession();
});

logoutButton.addEventListener("click", (e) => {
    (e).preventDefault();
    auth.signOut()
        .then(() => {
        switchNavLinks();
        })
})