$(document).ready(function () {

    function searchEvents(location) {
        var queryURL = "http://api.eventful.com/json/events/search?app_key=KdNhpLh2wR3FMTL6&keywords=music&location=" + location + "&date=Future";
        $.ajax({
            url: 'https://corsbridge.herokuapp.com/' + encodeURIComponent(queryURL),
            method: "GET",
            dataType: 'json'
        }).then(function (response) {
            console.log(response);

            for (var i = 0; i < response.events.event.length; i++) {
                var cityEvents = $("#city-events")
                var tRow = $("<tr>");
                var eventLink = $("<a>").text(response.events.event[i].title)
                eventLink.attr("href", response.events.event[i].url);
                eventLink.attr("target", "_blank");
                var eventTitleTd = $("<td>");
                eventTitleTd.append(eventLink);


                tRow.append(eventTitleTd);
                cityEvents.append(tRow);

                console.log(response);
            }
        });
    }

    $("#select-location").on("click", function (event) {
        event.preventDefault();

        var inputLocation = $("#location-input").val().trim();
        searchEvents(inputLocation);
    });

});