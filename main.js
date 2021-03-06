// Need loginFunctions.js & simpleFunctions.js to work
//---------------------------------------------Vars---------------------------------------------
const initUser          = document.querySelectorAll(".initUser");       //Select forms
const singInForm        = initUser[0];                                  //Select form of singIn
const singUpForm        = initUser[1];                                  //Select form of singUp
const logoutButton      = document.querySelector("#logoutButton");      //Select logout Button
const navLinks          = document.querySelectorAll(".nav-link");       //Select all nav-link
const singInNavLink     = navLinks[0];
const singUpNavLink     = navLinks[1];
const logoutNavLink     = navLinks[2];
const postsContainer    = document.getElementById("allPostContainer");

//---------------------------------------------Functions---------------------------------------------

function writePosts(snapshot) {
    let write = "";
    snapshot.forEach(doc => {
        let post = doc.data()
        let article = `
            <li class="list-group-item list-group-item-action">
                <h3>${post.title}</h3>
                <section>${post.body}</section>
                <p>${post.author}</p>
            </li>
        `;
        write += article;
    });
    postsContainer.innerHTML = write;
}

//-----------------------------------------------Events-----------------------------------------------

// Buttons
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

// auth event...
auth.onAuthStateChanged((user) => {
    if (user) {
        switchNavLinks();
        firestore.collection("allPosts")
                 .get()
                 .then((snapshot) => {
                     writePosts(snapshot);
                 })
    } else {
        postsContainer.innerHTML = "";
    }
});