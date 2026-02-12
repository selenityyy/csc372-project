// get the div using its unique ID
const loc = document.getElementById("loc");
// msg to display if a location has not been found
const msg = "Unable to get your location.";

// a function that receives a position object as its argument
function success(position) {
    // save user data using longitude and latitude
    // use sessionStorage object
    sessionStorage.setItem("longitude", position.coords.longitude);
    sessionStorage.setItem("latitude", position.coords.latitude);

    // overwrite var to contain a second largest heading: "Location Data"
    msg = '<h2>Location Data</h2>';
    // third largest heading that says "Longitude: <user_longitude>, where <user_longitude> should be replaced with the user’s longitude."
    msg += '<h3>Longitude: ' + position.coords.longitude + '</h3>';
    // another third largest
    msg += '<h3>Latitude: ' + position.coords.latitude + '</h3>';
    // paragraph that says "Your location data has been saved! Reload the page to see."
    msg += '<p>Your location data has been saved! Reload the page to see.</p>';
    // overwrite
    loc.innerHTML = msg;
}

function fail() {
    loc.textContent = msg;
    console.log (msg.code);
}

function displaySessionData(longitude, latitude) {
    // overwrite var to contain a second largest heading: "Location Data"
    msg = '<h2>Location Data</h2>';
    // third largest heading that says "Longitude: <user_longitude>, where <user_longitude> should be replaced with the user’s longitude."
    msg += '<h3>Longitude: ' + longitude + '</h3>';
    // another third largest
    msg += '<h3>Latitude: ' + latitude + '</h3>';
    // paragraph 
    msg += '<p>Reusing your saved location data.</p>';
    // overwrite
    loc.innerHTML = msg;
}

// check if the storage obj does not contain a value for longitutde or latitude
// if it doesn't, check if the browser supports the geolocation api
// ask user permission
// if not, update div to contain error msg

if (!sessionStorage.getItem("longitude") || !sessionStorage.getItem("latitude")) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);
        loc.textContent = "Checking location...";
    } else {
        loc.textContent = msg;
    }
} else {
    displaySessionData(sessionStorage.getItem("longitude"), sessionStorage.getItem("latitude"));
}