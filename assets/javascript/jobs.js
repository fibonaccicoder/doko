//jobs

var url = "https://us.jooble.org/api/";
var key = "833f7ad1-53cf-45ed-9fa3-6c578291a28c";;
var params = "{keywords: 'any', location: 'Tucson'}"

// //create xmlHttpRequest object
// var http = new XMLHttpRequest();
// //open connection. true - asynchronous, false - synchronous
// http.open("POST", url + key, true);

// //Send the proper header information
// http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// //Callback when the state changes
// http.onreadystatechange = function () {
//     if (http.readyState == 4 && http.status == 200) {
//         console.log(http.responseText);
//     }
// }
// //Send request to the server
// http.send(params);

$.ajax({
    url: url + key,
    beforeSend: function (request) {
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    },
    method: "POST",
    data: params
}).then(function (response) {
    console.log(response);
});