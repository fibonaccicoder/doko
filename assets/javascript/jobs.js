$(document).ready(function () {

    // initial variables
    var url = "https://us.jooble.org/api/";
    var key = "5bbea2df-0017-4a1f-abdc-58ac3dceac09";
    var keyword = "";
    var location = "";
    var radius = "50";
    var pageNum = 1;
    var urlVariables = getQueryVariables();
    console.log(urlVariables);
    var params = getParams(urlVariables[0], urlVariables[1], radius, pageNum);
    console.log(params);


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

    // takes the inputs from choice.html and saves them as variables
    $("#search").on("click", function () {
        //prevent the page from refreshing
        event.preventDefault();

        //get inputs from choice.html
        location = $("#city-input").val().trim()
        keyword = $("#job-input").val();
        console.log("location: " + location);
        console.log("keyword: " + keyword);

        // empties the input fields on choice.html
        $("#city-input").val("");
        $("#job-input").val("");

        var url = getURL("jobs.html", keyword, location)
        window.location.href = url
    })
    $("#explore").on("click", function () {
        //prevent the page from refreshing
        event.preventDefault();

        //get inputs from choice.html
        location = $("#city-input").val().trim()
        keyword = $("#job-input").val();
        console.log("location: " + location);
        console.log("keyword: " + keyword);

        // empties the input fields on choice.html
        $("#city-input").val("");
        $("#job-input").val("");

        var url = getURL("city.html", keyword, location)
        window.location.href = url
    })

    // this stores the location and keyword to the the URL to load the job listings on jobs.html
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

    function getParams(keyword, location, radius, pageNum) {
        return "{keywords: '" + keyword + "', location: '" + location + "', radius: '" + radius + "', page: '" + pageNum + "'}";
    }

    // displays the jobs on jobs.html
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

                    var jobTable = $("#job-table");
                    var tRow = $("<tr>");
                    var jobLink = $("<a>").text(response.jobs[i].title)
                    jobLink.attr("href", response.jobs[i].link);
                    jobLink.attr('target', '_blank');
                    var jobTitleTd = $("<td>");
                    jobTitleTd.append(jobLink);

                    var locationLink = $("<a>").text(response.jobs[i].location);
                    locationLink.attr("href", "city.html?keyword=" + response.jobs[i].title + "&location=" + response.jobs[i].location);
                    // console.log("location link: " + locationLink.attr("href"));
                    var jobLocationTd = $("<td>");
                    jobLocationTd.append(locationLink);

                    tRow.append(jobTitleTd, jobLocationTd);
                    jobTable.append(tRow);
                }

            });
    }

    function displayCityJobs() {
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
        console.log("params: " + params);
    }
    displayJobs();
    displayCityJobs();

    // future function that will sort the job listings by city and return the number of listings for each city
    function sortResults(response) {

    }
})