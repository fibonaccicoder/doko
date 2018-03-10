var numbeoAPIKey= "4n7468zewaj81z";
var numbeoQueryURL= "https://www.numbeo.com/api/city_prices?api_key="+numbeoAPIKey+"&query=Belgrade";

$.ajax({
    url:numbeoQueryURL,
    method:"GET"
}).then(function(response){
    console.log(numbeoQueryURL);
    console.log(response);
});