$(document).ready(function () {

    // initial variables
    var url = "https://us.jooble.org/api/";
    var key = "5bbea2df-0017-4a1f-abdc-58ac3dceac09";
    var keyword = "";
    var location = "";
    var radius = "50";
    var pageNum = 1;
    var urlVariables = getQueryVariables();
    console.log("test" + urlVariables);
    var params = getParams(urlVariables[0], urlVariables[1], radius, pageNum);
    console.log(params);
    location = urlVariables[1];

    // alert(typeof location)

    // var cityNameDisplay = location;
    // $(".city-name").text(cityNameDisplay.replace("%20", " "));
    // console.log("city name = " + cityNameDisplay);

    $(".city-name").text(location);

    // takes the inputs from choice.html and saves them as variables
    function getInputs(html) {
        //prevent the page from refreshing
        event.preventDefault();

        //get inputs from choice.html
        location = $("#city-input").val().trim();
        keyword = $("#job-input").val();
        console.log("location: " + location);
        console.log("keyword: " + keyword);

        // empties the input fields on choice.html
        $("#city-input").val("");
        $("#job-input").val("");

        var url = getURL(html, keyword, location)
        window.location.href = url
    }
    // this takes the inputs and leads to city.html
    $("#explore").on("click", function () {
        getInputs("city.html");
    })
    // this takes the inputs and leads to jobs.html
    $("#search").on("click", function () {
        getInputs("jobs.html");
    })


    // this stores the location and keyword to the the URL
    function getURL(html, keyword, location) {
        return html + "?keyword=" + keyword + "&location=" + location;
    }

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
    }

    // This section displays the contents of jobs.html

    // This gets the parameters for the jooble ajax call
    function getParams(keyword, location, radius, pageNum) {
        return "{keywords: '" + keyword + "', location: '" + location + "', radius: '" + radius + "', page: '" + pageNum + "'}";
    }

    // this function either increments or decrements pageNum and then displays the new page of jobs
    function changePageNum(newPage) {
        $("#page-number").empty();
        $("#page-number").text("Page " + pageNum);
        $("tBody").empty();
        params = getParams(urlVariables[0], urlVariables[1], radius, pageNum);
        console.log("params: " + params);
        displayJobs();
    }

    $("#next-button").on("click", function () {
        changePageNum(pageNum++);
    })

    $("#previous-button").on("click", function () {
        changePageNum(pageNum--);
    })
    // display the page number on the page
    $("#page-number").text("Page " + pageNum);


    // displays the jobs on jobs.html and on city.html-job tab
    function displayJobs() {
        keyword =
            $.ajax({
                url: url + key,
                beforeSend: function (request) {
                    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                },
                method: "POST",
                data: params
            }).then(function (response) {
                console.log(response);

                for (var i = 0; i < response.jobs.length; i++) {

                    // stores job title on jobs.html
                    var jobTable = $("#job-table");
                    var tRow = $("<tr>");
                    var jobLink = $("<a>").text(response.jobs[i].title)
                    jobLink.attr("href", response.jobs[i].link);
                    jobLink.attr('target', '_blank');
                    var jobTitleTd = $("<td>");
                    jobTitleTd.append(jobLink);

                    // stores job location on jobs.html
                    var locationLink = $("<a>").text(response.jobs[i].location);
                    locationLink.attr("href", "city.html?keyword=" + response.jobs[i].title + "&location=" + response.jobs[i].location);
                    var jobLocationTd = $("<td>");
                    jobLocationTd.append(locationLink);

                    // displays job title and location on jobs.html
                    tRow.append(jobTitleTd, jobLocationTd);
                    jobTable.append(tRow);

                    // stores and displays job title on city.html-job tab
                    var cityJobs = $("#city-jobs");
                    var tRow = $("<tr>");
                    var jobLink = $("<a>").text(response.jobs[i].title)
                    jobLink.attr("href", response.jobs[i].link);
                    jobLink.attr('target', '_blank');
                    var jobTitleTd = $("<td>");
                    jobTitleTd.append(jobLink);
                    tRow.append(jobTitleTd);
                    cityJobs.append(tRow);
                }
            });
    }
    displayJobs();

    // future function that will sort the job listings by city and return the number of listings for each city
    function sortResults(response) {}


    // This makes runNumbeo and searchEvents work
    function encodeAndCorsBridge(url) {
        return "https://corsbridge.herokuapp.com/" + encodeURIComponent(url)
    }

    // displays the events tab on city.html
    function searchEvents() {
        var queryURL = "http://api.eventful.com/json/events/search?app_key=KdNhpLh2wR3FMTL6&keywords=music&location=" + location + "&date=Future";
        $.ajax({
            url: 'https://corsbridge.herokuapp.com/' + encodeURIComponent(queryURL),
            method: "GET",
            dataType: 'json'
        }).then(function (response) {
            console.log("events: " + response);

            for (var i = 0; i < response.events.event.length; i++) {
                var cityEvents = $("#city-events")
                var tRow = $("<tr>");
                var eventLink = $("<a>").text(response.events.event[i].title)
                eventLink.attr("href", response.events.event[i].url);
                eventLink.attr("target", "_blank");
                var eventTitleTd = $("<td>");
                eventTitleTd.append(eventLink);


                var eventTimeTd = $("<td>");
                var startTime = response.events.event[i].start_time;
                eventTimeTd.text(moment(startTime).format('MMMM Do YYYY'));
                tRow.append(eventTitleTd, eventTimeTd);
                cityEvents.append(tRow);
                console.log(response);

            }

        });
    }
    searchEvents();


    // this function generates and displays the city stats
    function runNumbeo() {
        var numbeoAPIKey = "4n7468zewaj81z";
        var unencodedNumbeoURL = 'https://www.numbeo.com/api/city_prices?api_key=' + numbeoAPIKey + '&query=' + location;
        var numbeoQueryURL = encodeAndCorsBridge(unencodedNumbeoURL);
        $.ajax({
            url: numbeoQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            var index = [21, 36, 25, 27, 37, 39, 0, 3, 7, 19];

            // 22, 30, 40, 41

            for (var i = 0; i < index.length; i++) {
                var cityStats = $("#city-stats");
                var tRow = $("<tr>");
                var nameTD = $("<td>").text(response.prices[index[i]].item_name);
                var priceTD = $("<td>").text("$ " + response.prices[index[i]].average_price.toFixed(2));
                console.log("index" + index);
                tRow.append(nameTD, priceTD);
                cityStats.append(tRow);
            }
        });
    }
    runNumbeo();

})