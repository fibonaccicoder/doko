var numbeoAPIKey= "4n7468zewaj81z";
var numbeoQueryURL= "https://corsbridge.herokuapp.com/https%3A%2F%2Fwww.numbeo.com%2Fapi%2Fcity_prices%3Fapi_key%3D4n7468zewaj81z%26query%3DBelgrade";

$.ajax({
    url: numbeoQueryURL,
    beforeSend: function (request) {
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.setRequestHeader("origin", )
    },
    method: "POST"
}).then(function (response) {
    console.log(numbeoQueryURL);
    console.log(response);
});

//set up display tabs for city-info-panel
function cityInfo(event, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}