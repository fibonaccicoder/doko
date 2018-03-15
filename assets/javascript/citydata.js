var numbeoAPIKey= "4n7468zewaj81z";
var numbeoQueryURL= "https://corsbridge.herokuapp.com/https%3A%2F%2Fwww.numbeo.com%2Fapi%2Fcity_prices%3Fapi_key%3D4n7468zewaj81z%26query%3D" + location;


 //get inputs
 location = $("#city-input").val().trim()
 keyword = $("#job-input").val();
 console.log("location: " + location);
 console.log("keyword: " + keyword);

 $("#city-input").val("");

 var url = getURL("city.html", keyword, location)

 window.location.href = url


})

function getURL(html, keyword, location) {
 return html + "&location=" + location;

}

var urlVariables = getQueryVariables();
console.log(urlVariables);

var params = getParams(urlVariables[0], urlVariables[1], radius, pageNum);
console.log(params);

function getQueryVariables() {
 var query = window.location.search.substring(1);
 var vars = query.split("&");


 console.log(vars);
 for (var i = 0; i < vars.length; i++) {
     var pair = vars[i].split("=");
     vars[i] = pair[1];

     // if (pair[0] == variable) { return pair[1]; }
 }
 return (vars);
}


$.ajax({
    url: numbeoQueryURL,
    beforeSend: function (request) {
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.setRequestHeader("origin", )
    },
    method: "GET"
}).then(function (response) {
    console.log(numbeoQueryURL);
    console.log(response);
});