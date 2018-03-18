//city.html background image generator
var keyword = "";

$(document).ready(function () {

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: keyword,
            tagmode: "any",
            format: "json"
        },
        function (data) {
            var rnd = Math.floor(Math.random() * data.items.length);

            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

            var pic = $("<img>");
            pic.attr("src", image_src);
            pic.addClass("city-image");
            $("#cityImage").append(pic);

            // $('#cityImage').css('background-image', "url('" + image_src + "')");

        });

});