$(document).ready(function () {
    //jobs

    var url = "https://us.jooble.org/api/";
    var key = "833f7ad1-53cf-45ed-9fa3-6c578291a28c";
    var keyword = "web development";
    var location = "";
    var radius = "50";
    // var salary = "25000";
    var pageNum = 1;


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
                    var jobTitleTd = $("<td>").text(response.jobs[i].title);
                    var jobLocationTd = $("<td>").text(response.jobs[i].location);

                    tRow.append(jobTitleTd, jobLocationTd);
                    tBody.append(tRow);

                    console.log(response.jobs[0].title);

                }

            });
    }
    displayJobs()

    function sortResults(response) {

    }

    function getParams(keyword, location, radius, pageNum) {
        return "{keywords: '" + keyword + "', location: '" + location + "', radius: '" + radius + "', page: '" + pageNum + "'}";
    }
})