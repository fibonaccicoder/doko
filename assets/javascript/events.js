$(document).ready(function () {

    var urlVariables = getQueryVariables();
    // this takes the variables back out of the URL
    function getQueryVariables() {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        console.log(vars);
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            vars[i] = pair[1];
        }
        return (vars);
        searchEvents(vars);

        console.log("vars " + vars);
        console.log("urlVariables " + urlVariables);
    }

    function searchEvents() {
        var location = urlVariables[1];
        var queryURL = "http://api.eventful.com/json/events/search?app_key=KdNhpLh2wR3FMTL6&keywords=music&location=" + location + "&date=Future";
        $.ajax({
            url: 'https://corsbridge.herokuapp.com/' + encodeURIComponent(queryURL),
            method: "GET",
            dataType: 'json'
        }).then(function (response) {
            console.log("events" + response);

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
    searchEvents();
    // $("#select-location").on("click", function (event) {
    //     event.preventDefault();

    //     var inputLocation = $("#location-input").val().trim();
    //     searchEvents(inputLocation);
    // });

    function getParams(keyword, location, radius, pageNum) {
        return "{keywords: '" + keyword + "',  location: '" + location + "', radius: '" + radius + "', page: '" + pageNum + "'}";
    }
});