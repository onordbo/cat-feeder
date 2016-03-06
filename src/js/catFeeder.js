//API Call
var getGif = function (){
   var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC");
   xhr.done(function(response) {
       countGIF =  response.data.length;                               //Count all the gifs
       gifIndex = Math.floor(Math.random() * countGIF);                //Index gifs
       gifURL = response.data[gifIndex].images.fixed_height.url;       //Retrieve a gif based on random index
       $('#giveCat').attr('src', gifURL);                              //Set image source retrieved gif url
       console.log("API call successful. Displaying:", gifURL);
   });
}

//Initial gif load
getGif();