$(document).ready(function () {

    var numbeoQueryURL= "https://corsbridge.herokuapp.com/https%3A%2F%2Fwww.numbeo.com%2Fapi%2Fcity_prices%3Fapi_key%3D4n7468zewaj81z%26query%3D" + location;
    var numbeoAPIKey= "4n7468zewaj81z";
    var location = "";


        //get inputs
        location = $("#city-input").val().trim()
        keyword = $("#job-input").val();
        console.log("location: " + location);
        console.log("keyword: " + keyword);

        $("#city-input").val("");

        var url = getURL("city.html", keyword, location)

        window.location.href = url
    })

    function getURL(html, location) {
        return html + "&location=" + location;
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


    function displayCityStats() {
        keyword =
            $.ajax({
                url: url + key,
                beforeSend: function (request) {
                    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                },
                method: "GET",
                data: params
            }).then(function (response) {
                console.log(response);



                for (var i = 0; i < response.city.length; i++) {

                    var cityData = $("#data-table");
                    var tRow = $("<tr>");
                    var priceData = $("<p>").text(response.prices)

                    // var locationLink = $("<a>").text(response.jobs[i].location);
                    // locationLink.attr("href", "city.html?keyword=" + response.jobs[i].title + "&location=" + response.jobs[i].location);
                    // // console.log("location link: " + locationLink.attr("href"));
                    // var jobLocationTd = $("<td>");
                    // jobLocationTd.append(locationLink);

                    // tRow.append(jobTitleTd, jobLocationTd);
                    // jobTable.append(tRow);


                }

            });
    }
    displayCityStats()

    function sortResults(response) {

    }

    function displayCityJobs() {
        keyword =
            $.ajax({
                url: numbeoQueryURL,
                beforeSend: function (request) {
                    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                },
                method: "GET",
                data: params
            }).then(function (response) {
                console.log(response);

                //this is not right, I don't think a for loop is needed but I'm not sure how to display the data.


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
  
    displayCityJobs();

    function getParams(keyword, location, radius, pageNum) {
        return "{keywords: '" + keyword + "', location: '" + location + "', radius: '" + radius + "', page: '" + pageNum + "'}";
    }
})