$(document).ready(function () {
    //jobs

    var url = "https://us.jooble.org/api/";
    var key = "3671dd18-dbc4-4dc5-8cad-62eacf822971";
    var keyword = "web development";
    var location = "";
    var radius = "50";
    // var salary = "25000";
    var pageNum = 1;

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

    $("#page-number").text("Page " + pageNum);

    console.log("Page: " + pageNum);
    $(".submit").on("click", function () {
        //prevent the page from refreshing
        event.preventDefault();

        //get inputs
        location = $("#city-input").val().trim()
        keyword = $("#job-input").val();
        console.log("location: " + location);
        console.log("keyword: " + keyword);

        $("#job-input").val("");

        var url = getURL("jobs.html", keyword, location)

        window.location.href = url


    })

    function getURL(html, keyword, location) {
        return html + "?keyword=" + keyword + "&location=" + location;

    }

    var urlVariables = getQueryVariables();
    console.log(urlVariables);

    var params = getParams(urlVariables[0], urlVariables[1], radius, pageNum);
    console.log(params);

    function getQueryVariables() {
        var query = window.location.search.substring(1);
        var vars = query.split("&");


        console.log(vars);
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            vars[i] = pair[1];

            // if (pair[0] == variable) { return pair[1]; }
        }
        return (vars);
    }


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

                    var tBody = $("tBody");
                    var tRow = $("<tr>");
                    var jobLink = $("<a>").text(response.jobs[i].title)
                    jobLink.attr("href", response.jobs[i].link);
                    jobLink.attr('target', '_blank');
                    var jobTitleTd = $("<td>");
                    jobTitleTd.append(jobLink);

                    var locationLink = $("<a>").text(response.jobs[i].location);
                    locationLink.attr("href", "city.html?keyword=tucson" + "&location=" + response.jobs[i].location);
                    // console.log("location link: " + locationLink.attr("href"));
                    var jobLocationTd = $("<td>");
                    jobLocationTd.append(locationLink);

                    tRow.append(jobTitleTd, jobLocationTd);
                    tBody.append(tRow);


                }

            });
    }
    displayJobs()

    function sortResults(response) {

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

                    var tBody = $("tBody");
                    var tRow = $("<tr>");
                    var jobLink = $("<a>").text(response.jobs[i].title)
                    jobLink.attr("href", response.jobs[i].link);
                    jobLink.attr('target', '_blank');
                    var jobTitleTd = $("<td>");
                    jobTitleTd.append(jobLink);

                    tRow.append(jobTitleTd);
                    tBody.append(tRow);


                }

            });
        console.log("params: " + params);
    }

    $("#Jobs").on("click", function () {
        url = getURL("city.html", keyword, location)

        window.location.href = url
        params = getParams(urlVariables[0], urlVariables[1], radius, pageNum);
        displayCityJobs();
    })

    function getParams(keyword, location, radius, pageNum) {
        return "{keywords: '" + keyword + "', location: '" + location + "', radius: '" + radius + "', page: '" + pageNum + "'}";
    }
})