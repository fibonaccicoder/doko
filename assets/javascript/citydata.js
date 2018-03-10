var numbeoAPIKey= "4n7468zewaj81z";
var numbeoQueryURL= "https://www.numbeo.com/api?api_key="+numbeoAPIKey;

$.ajax({
    url:numbeoQueryURL,
    method:"GET"
}).then(function(response){
    console.log(numbeoQueryURL);
    console.log(response);
});