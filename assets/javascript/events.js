// //event listings

// $(document).ready(function () {

//     var url = "http://eventful.com/oauth/authorize?oauth_token=";
//     var key = "KdNhpLh2wR3FMTL6";
//     var location = "l=";
//     var keyword = "q=";
//     var category = "c=";


// function searchEvents() {

//     keyword = $.ajax({
//         url: url + key,
//         beforeSend: function(request) {
//             request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         },
//         method: "POST",
//         data: params
//     }).then(function (response) {
//         console.log(response);
//         for (var i=0; i<response.events.length; i++) {
//             var tBody = $("tBody");
//             var tRow = $("<tr>");
//             var eventLink = $("<a>").text(response.events[i].title)
//             eventLink.attr("href", response.events[i].link);eventLink.attr("target", "_blank");
//             var eventTitleTd = $("<td>");
//             eventTitleTd.append(eventLink);

//             tRow.append(eventTitleTd);
//             tBody.append(tRow);
//         }
//     });
//     console.log("params: " + params);
// }

// $("#Events").on("click", function () {
//     url = getURL()
// })

// }

function searchEvents(location) {
    var queryURL = "https://corsbridge.herokuapp.com/http%3A%2F%2Feventful.com%2Foauth%2Fauthorize%3Foauth_token%3D" + location + "&KdNhpLh2wR3FMTL6";
    $.ajax({
        url: queryURL,
        method: "POST"
    }).then(function (response) {
        console.log(response);


        $("#event-listings").empty();
        $("#event-listings").append();
    });
}

$("#select-location").on("click", function (event) {
    event.preventDefault();
    var inputLocation = $("#location-input").val().trim();
    searchEvents(inputLocation);
})

// http://api.eventful.com/rest/events/search?...&keywords=books&location=San+Diego&date=Future
// http://eventful.com/events?q=hiphop&l=San+Diego&t=This+Weekend&c=music


// What: The 'what' argument, also called 'q' or 'keywords', is used to search by any aspect of an event that isn't part of the category, location or time.

// http://eventful.com/events?q=music
// Where: The 'where' argument, also called 'l' or 'location', is used to search by city, region, postal code (ZIP), country, street address, or venue. It's often used in concert with the 'within' and 'units' parameters to do a radius search.

// http://eventful.com/events?q=music&l=San+Diego