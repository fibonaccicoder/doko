var numbeoAPIKey = "4n7468zewaj81z";
var numbeoQueryURL = "https://corsbridge.herokuapp.com/https%3A%2F%2Fwww.numbeo.com%2Fapi%2Fcity_prices%3Fapi_key%3D4n7468zewaj81z%26query%3D";

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