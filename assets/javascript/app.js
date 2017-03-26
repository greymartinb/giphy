//global variables//







$("#start").on("click", function(event) { 
    event.preventDefault();
    var userInput = $("#userInput").val();
    if(userInput === ""){
    	alert("type something first!");
    }
    else{
    console.log(userInput)
    $("#buttonSection").append("<button class= 'giphy'>" +userInput+ " </button>" );}
});


$("#clear").on("click", function(event) { 
    event.preventDefault();
    $("#giphySection").empty();
});








$(document).on("click", ".giphy", function(event) {
	var giphyInput = $(this).html();
	console.log('thathappened')


    var url = "http://api.giphy.com/v1/gifs/search?q=";
    url += '&' + $.param({
    	'q': giphyInput,
      'api_key': "dc6zaTOxFJmzC",
      'rating': "pg-13",
      'limit':10
    });
$.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    for(i = 0; i < 10; i++) {
    console.log(i);

  $("#giphySection").append("<div class = 'holder'> <h4> Rating of below image : " + result.data[i].rating +  "</h4><img class= 'image' src= '" + result.data[i].images.fixed_height_still.url + "' data-still= '" + result.data[i].images.fixed_height_still.url + "' data-animate= '"+ result.data[i].images.fixed_height.url + "' data-state = 'still'  ></div>");
}
    }).fail(function(err) {
      throw err;

    });
});

$(document).on("click", ".image",function() {
	console.log('something happened');
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      } else {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");

      }
    });





