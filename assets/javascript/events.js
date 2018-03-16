$(document).ready(function () {


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
    var queryURL = "http://api.eventful.com/json/events/search?app_key=KdNhpLh2wR3FMTL6&keywords=music&location=" + location + "&date=Future";
    $.ajax({
        url: 'https://corsbridge.herokuapp.com/' + encodeURIComponent(queryURL),
        method: "GET",
        dataType: 'json'
    }).then(function (response) {
        console.log(response);


        $("#event-listings").empty();
        $("#event-listings").append();

        for (var i=0; i<response.events.length; i++) {
                        var tBody = $("tBody");
                        var tRow = $("<tr>");
                        var eventLink = $("<a>").text(response.events[i].title)
                        eventLink.attr("href", response.events[i].link);eventLink.attr("target", "_blank");
                        var eventTitleTd = $("<td>");
                        eventTitleTd.append(eventLink);
            
                        tRow.append(eventTitleTd);
                        tBody.append(tRow);
    });
}

$("#select-location").on("click", function (event) {
    event.preventDefault();

    var inputLocation = $("#location-input").val().trim();
    searchEvents(inputLocation);
});

});
