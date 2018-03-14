$(document).ready(function () {
    //jobs

    var url = "https://us.jooble.org/api/";
    var key = "833f7ad1-53cf-45ed-9fa3-6c578291a28c";
    var keyword = "web development";
    var location = "";
    var radius = "50";
    // var salary = "25000";
    var pageNum = 1;


    var params = getParams(keyword, location, radius, pageNum);
    console.log(params);

    function displayJobs() {
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