<<<<<<< HEAD
var numbeoAPIKey = "4n7468zewaj81z";
var numbeoQueryURL = "https://corsbridge.herokuapp.com/https%3A%2F%2Fwww.numbeo.com%2Fapi%2Fcity_prices%3Fapi_key%3D4n7468zewaj81z%26query%3D";
=======
var numbeoAPIKey= "4n7468zewaj81z";
var numbeoQueryURL= "https://corsbridge.herokuapp.com/https%3A%2F%2Fwww.numbeo.com%2Fapi%2Fcity_prices%3Fapi_key%3D4n7468zewaj81z%26query%3DBelgrade";
>>>>>>> c54c7dfcedc5c77d40940c3dce1808cd25998df6

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