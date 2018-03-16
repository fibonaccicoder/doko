// //event listings

$(document).ready(function () {


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
    var queryURL = "https://corsbridge.herokuapp.com/http://www.api.eventful.com/rest/events/search?app_key=KdNhpLh2wR3FMTL6&keywords=music&location=" location + "&date=Future";

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
});

});
