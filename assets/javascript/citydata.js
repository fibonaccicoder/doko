var numbeoAPIKey= "4n7468zewaj81z";
var numbeoQueryURL= "https://www.numbeo.com:8008/api/city_prices?api_key="+numbeoAPIKey+"&query=Belgrade";

$.ajax({
    url:numbeoQueryURL,
    beforeSend: function(request){
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    },
    method:"POST"
}).then(function(response){
    console.log(numbeoQueryURL);
    console.log(response);
});