// https://theysaidso.com/api
//API for inspirational quotes of the day for people to follow their bliss
var quotesQueryURL = "https://quotes.rest/qod.json";
var quotesAPIKey = "";
//I don't think an API key is necessary on this bad boy

//display random images of cities and places in US on homepage--one image per load
function changeRandomImage() {
    var imageArray = ["assets/images/albuquerque.jpg", "assets/images/anchorage.jpg", "assets/images/baltimore.jpg", "assets/images/boston.jpg", "assets/images/boulder.jpg", "assets/images/cadillacranch.jpg", "assets/images/cheyenne.jpg", "assets/images/chicago.jpg", "assets/images/crestedbutte.jpg", "assets/images/detroit.jpg", "assets/images/detroit2.jpg", "assets/images/horseshoebend.jpeg", "assets/images/losangeles.jpg", "assets/images/maui.jpg", "assets/images/memphis.jpg", "assets/images/memphis2.jpg", "assets/images/miami.jpg", "assets/images/minneapolis.jpg", "assets/images/missoula.jpg", "assets/images/newhampshire.jpg", "assets/images/neworleans.jpg", "assets/images/portland.jpg", "assets/images/puertorico.jpg", "assets/images/sandiego.jpg", "assets/images/sanfran.jpg", "assets/images/savannah.jpg", "assets/images/seattle.jpg", "assets/images/sedona.jpg", "assets/images/taos.jpg", "assets/images/washingtondc.jpg", ]
    var randomImage = Math.floor(Math.random() * imageArray.length);
    document.body.background = imageArray[randomImage];
}
changeRandomImage();

//create space for quote to go on page
$.ajax({
    url: quotesQueryURL,
    method: "GET"
}).then(function (response) {
    console.log(quotesQueryURL);
    console.log(response);
    console.log(response.contents.quotes[0].quote);
    console.log(response.contents.quotes[0].author);

    //create space for quote to go on page
    var quoteDiv = $("<div>");
    var quote = $("<p id= quote>").text(response.contents.quotes[0].quote);
    // var quote1 = quote.toUpperCase();
    var author = $("<p id= author>").text("-" + response.contents.quotes[0].author);
    $("#inspirational-quote").append(quote, author);
});