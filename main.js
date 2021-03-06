// Need loginFunctions.js & simpleFunctions.js to work

//---------------------------------------------Vars---------------------------------------------

// Forms vars
const initUser              = document.querySelectorAll(".initUser");
const singInForm            = initUser[0];
const singUpForm            = initUser[1];
// Modal buttons
const logoutButton          = document.querySelector("#logoutButton");
const navLinks              = document.querySelectorAll(".nav-link");
const singInNavLink         = navLinks[0];
const singUpNavLink         = navLinks[1];
const logoutNavLink         = navLinks[2];
const googleButtons         = document.getElementsByClassName("google-buttons");
const googleSingInButton    = googleButtons[0];
const googleSingUpButton    = googleButtons[1];
const facebookButtons       = document.getElementsByClassName("facebook-buttons");
const facebookSingInButton  = facebookButtons[0];
const facebookSingUpButton  = facebookButtons[1];
// Posts container
const postsContainer        = document.getElementById("allPostContainer");
// Providers
const GoogleProvider = new firebase.auth.GoogleAuthProvider();

//---------------------------------------------Functions---------------------------------------------

function writePosts(snapshot) {
    let write = "";
    snapshot.forEach(doc => {
        let post = doc.data()
        let article = `
            <li class="list-group-item list-group-item-action">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <h6>${post.author}</h6>
            </li>
        `;
        write += article;
    });
    postsContainer.innerHTML = write;
}

function singInWith(provider) {
    auth.signUpWithPopup(provider)
        .then(() => {
            hideModal("singUpModal");
            singInForm.reset();
        })
        .then(() => {
            alert("Try with sign in");
        })
}

//-----------------------------------------------Events-----------------------------------------------

// Buttons events
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
            postsContainer.innerHTML = "";
        })
})

googleSingInButton.addEventListener("click", () => {
    singInWith(GoogleProvider);
});

googleSingUpButton.addEventListener("click", () => {
    singInWith(GoogleProvider);
});

//facebookSingInButton.addEventListener("click", );
//facebookSingUpButton.addEventListener("click", );

// auth event...
auth.onAuthStateChanged((user) => {
    if (user) {
        switchNavLinks();
        firestore.collection("allPosts")
                 .get()
                 .then((snapshot) => {
                     writePosts(snapshot);
                 })
    }
});