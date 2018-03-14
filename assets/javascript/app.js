//relevant variables needed aka global variables to pull from

//https://www.numbeo.com
//API for info on pretty much any info relating to various INTERNATIONAL cities
// /api/city_prices_raw?api_key=your_api_key&query=Belgrade

var numbeoAPIKey = "4n7468zewaj81z";
var numbeoQueryURL = "https://cors-anywhere.herokuapp.com/https://www.numbeo.com/api/city_prices?api_key=" + numbeoAPIKey + "&query=Belgrade";
console.log(numbeoQueryURL);

// var numbeoQueryURL= "https://www.numbeo.com/api/city_prices_raw?api_key=4n7468zewaj81z&query=Tucson";
// var numbeoAPIKey= "4n7468zewaj81z";

//https://www.zillow.com
//API for information on housing/rentals/real estate
var zillowAPIKey = "X1-ZWz1gaa4c3vvnv_13bwv";
var zillowQueryURL = "http://www.zillow.com/webservice/GetZestimate.htm?zws-id=X1-ZWz1gaa4c3vvnv_13bwv&";


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


// function ajaxCall (){
$.ajax({
  url: numbeoQueryURL,
  method: "GET",
  beforeSend: function (request) {
    request.setRequestHeader("origin", "https://fibonaccicoder.github.io/doko/");
  }
}).then(function (response) {
  console.log(numeboQueryURL);
  console.log(response);

});

//set up display tabs for city-info-panel
function cityInfo(event, tabName) {
  // Declare all variables
  var i, tabcontent, tablink;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}