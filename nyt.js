$(document).ready(function () {
    var apiKey = "0ff2f5d8344a49bcb162ef10a7a98a91";

    $("#search").on("click", function () {
        event.preventDefault();

        var searchTerm = $("#query").val();
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': apiKey,
            'q': searchTerm
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            console.log(result.response.docs);
            JSON.stringify(result.response.docs[0]);
            var output = $("<p>").text(result.response.docs[0]);
            // console.log(result);
            $("#returnedResponse").prepend(output);

        }).fail(function (err) {
            throw err;
            // console.log(result);

        });  
    });
        

});