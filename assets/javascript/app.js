
//relevant variables needed aka global variables to pull from

//https://www.numbeo.com
//API for info on pretty much any info relating to various INTERNATIONAL cities
// /api/city_prices_raw?api_key=your_api_key&query=Belgrade

var numbeoQueryURL = "https://www.numbeo.com/api/city_prices?api_key=" + numbeoAPIKey + "&query=Belgrade";
var numbeoAPIKey = "4n7468zewaj81z";


// var numbeoQueryURL= "https://www.numbeo.com/api/city_prices_raw?api_key=4n7468zewaj81z&query=Tucson";
// var numbeoAPIKey= "4n7468zewaj81z";


//https://www.zillow.com
//API for information on housing/rentals/real estate
var zillowQueryURL = "http://www.zillow.com/webservice/GetZestimate.htm?zws-id=X1-ZWz1gaa4c3vvnv_13bwv&";
var zillowAPIKey = "X1-ZWz1gaa4c3vvnv_13bwv";


//https://www.indeed.com
//API for job listings and relevant job info
var joobleQueryURL = "https://us.jooble.org/api/";
var joobleAPIKey = "833f7ad1-53cf-45ed-9fa3-6c578291a28c";

//https://europass.cedefop.europa.eu/stats-api/to other potential API to use
//http://api.elance.com/api
//http://www.careerjet.com/partners/api/


//https://www.eventful.com
//API to get info on events in given cities
var eventfulQueryURL = "http://eventful.com/oauth/authorize?oauth_token=";
var eventfulAPIKey = "KdNhpLh2wR3FMTL6";


// https://theysaidso.com/api
//API for inspirational quotes of the day for people to follow their bliss
var quotesQueryURL = "https://quotes.rest/qod.json";
var quotesAPIKey = "";
//I don't think an API key is necessary on this bad boy


//must click to enter website, first page = travel photo and inspo quote 
//Maybe use free photo API to generate new travel(city)-themed photos for front page daily as well




// Get the input field
// var input = document.getElementById("myInput");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
// 		// Cancel the default action, if needed
// 		event.preventDefault();
// 		// Number 13 is the "Enter" key on the keyboard
// 		if (event.keyCode === 13) {
//   	// Trigger the button element with a click
//   	document.getElementById("myBtn").click();
// 		}
// });

// function displayImg (){
// for (var i = 0; i<images.length; i++);
// 	//image shown will be front-i.jpg
// 	//images need to be sized down to fit page, also change opacity 
// }

// function ajaxCall (){
$.ajax({
  url: numbeoQueryURL,
  method: "GET"
}).then(function (response) {
  console.log(numeboQueryURL);
  console.log(response);

  //create space for quote to go on page

  // var cityDiv = $("<div>");
  // var city = $("<p id= quote>").text(response);
  // var author = $("<p id= author>").text(response);
  // $("#inspirational-quote").append(response);
});
// }


//   $(document).ready(function){
//   ajaxCall();
// }


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
  var author = $("<p id= author>").text("-" + response.contents.quotes[0].author);
  $("#inspirational-quote").append(quote, author);
});
