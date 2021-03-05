// Function for hide modal with id -----------------------------------------------------------------

function hideModal(modalId) {

    if (modalId[0] != "#") {

        modalId = "#" + modalId;

    }

    $(modalId).modal('hide');

}

// Capture user credential of form ------------------------------------------------------------------

function captureUserAuthData(form) {

    let userAuthData            = {};
        userAuthData.email      = form[0].value;
        userAuthData.password   = form[1].value;

    return userAuthData;

}

// Switch disabled class ----------------------------------------------------------------------------

function switchDisabled(navLink) {
    
    let disabled    = "nav-link disabled";
    let active      = "nav-link";

    if (navLink.className == disabled) {
        navLink.className = active;
    } else {
        navLink.className = disabled;
    }

}

function switchNavLinks() {
    switchDisabled(logoutNavLink);
    switchDisabled(singUpNavLink);
    switchDisabled(singInNavLink);
}