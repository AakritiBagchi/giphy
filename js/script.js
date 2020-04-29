// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    let userInput = $("#search-term").val();
    let url= "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=pg" + "&api_key=";
    let apiKey= "rQrXp8Skecms5IYqoh0BS4HeQW9L35LY";
    let urlWithKey = url + apiKey;
    
    
    fetch(urlWithKey)
    .then(function(response) {
        console.log(response.json());
      return response.json();
    })
    .then(function(json) {
      var pic_url = data.data[0].images.downsized_large.url;
      console.log(json);
        $('.container').append('<img src="' + pic_url + '">');
    });
    
    
});
