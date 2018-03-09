
//relevant variables needed aka global variables to pull from

//https://www.numbeo.com
//API for info on pretty much any info relating to various INTERNATIONAL cities
var numbeoQueryURL= "https://www.numbeo.com/api?api_key=";
var numbeoAPIKey= "4n7468zewaj81z";


//https://www.zillow.com
//API for information on housing/rentals/real estate
var zillowQueryURL= "http://www.zillow.com/webservice/GetZestimate.htm?zws-id=X1-ZWz1gaa4c3vvnv_13bwv&";
var zillowAPIKey= "X1-ZWz1gaa4c3vvnv_13bwv";


//https://www.indeed.com
//API for job listings and relevant job info
var indeedQueryURL= "";
var indeedAPIKey= "";


//https://www.eventful.com
//API to get info on events in given cities
var eventfulQueryURL= "http://eventful.com/oauth/authorize?oauth_token=";
var eventfulAPIKey="KdNhpLh2wR3FMTL6";


// https://theysaidso.com/api
//API for inspirational quotes of the day for people to follow their bliss
var quotesQueryURL= "http://quotes.rest/qod.json";
var quotesAPIKey= "";
//I don't think an API key is necessary on this bad boy


//must click to enter website, first page = travel photo and inspo quote 
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
        	var quote = $("<p>").text(response.contents.quotes[0].quote);
        	var author = $("<p>").text(response.contents.quotes[0].author);
        	quoteDiv.append(quote, author);
        });

