
function defined(object) {
    return (typeof object !== "undefined");
}

/*
 * This method sets an attribute "name" to "value" on 
 * sessionStorage.session object.
 */
function setSessionStorage(name, value) {

    var sessionObject = {};

    if (defined(sessionStorage.session)) {
        sessionObject = jQuery.parseJSON(sessionStorage.session);
    }

    if (name === "sessionKey") {
        if (sessionObject[name] !== value) {
            sessionStorage.clear();
        }
    }

    sessionObject[name] = value;
    sessionStorage.session = JSON.stringify(sessionObject);
}

/*
 * This method gets an attribute from the sessionStorage.session
 * object.
 */
function getSessionStorage(name) {
    var sessionObject = jQuery.parseJSON(sessionStorage.session);

    return sessionObject[name];
}

/*
 * Delete the sessionStorage.
 * 
 */
function deleteSessionStorage() {
    if (defined(sessionStorage.session)) {
        delete sessionStorage.session;
    }
}