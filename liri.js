console.log("Hello, my name is LIRI. What can I do for you?");

var request = require('request');
var fs = require('fs');
var spotify = require('spotify');
var Twitter = require('twitter');
var keys = require('./keys.js');
var argument = process.argv[2];
var value = process.argv[3];
var dataText = process.argv[4];



if(argument === "my-tweets"){
  var client = new Twitter({
  consumer_key: 'UxinKuYQKzny44aewlenAGjVF',
  consumer_secret: 'Es5d5SF3VZybedyZnsEZmK3XU0fYtuNuurDoI3byIXMkpWBGuS',
  access_token_key: '887062624428593152-Iq5HD0u2S5DQJmrTmyhMEJqqD0OTqCK',
  access_token_secret: 'c4MjDnr8kJfmeDXmEyajbrEoA1jpXvunKYFvDTSoQux0P',
});


function Twitter(){
var params = {screen_name: 'floritechi', count:10};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
    console.log(error)
  
    
}

else{

    tweets.forEach(function(tweet){
                var tweetOutput = "Tweet: " + tweet.text + "\n" +
                    "Published: " + tweet.created_at + "\n";
               
                logText(tweetOutput)



})

    
}



if(argument === "movie-this"){ 
    console.log(process.argv);
    var movieTitle = process.argv[3];
    request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=40e9cece",function (error, response, body){
        
        if(process.argv[3]){
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Release Year: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                console.log("Country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Tomatorating);

       
        }else{
            request("http://www.omdbapi.com/?t=mr+nobody+&y=&plot=short&apikey=40e9cece",function(error, response,body){
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Release Year: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                console.log("Country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Tomatorating);
            
            })
        }
    })
    outputText();
}


if(argument === "spotify-this-song"){
    var songTitle = process.argv[3];
    spotify.search({ type: 'track', query: songTitle }, function(err, data){
        
        if(process.argv[3]){
            var data = data.tracks.items;
            for(var i = 0; i < data.length; i++){
                
                console.log(data[i].name);
                console.log(data[i].album.href); 
                console.log(data[i].album.name); 
                console.log(data[i].preview_url); 
            
                for(var o = 0; j < data[i].artists.length; o++){
                    console.log(data[i].artists[o].name); 
                }
            }
        }else{
            spotify.search({ type: 'track', query: "Oops, I did it again"}, function(err, data){
                var data = data.tracks.items;
                console.log(data[0].name); 
                console.log(data[0].album.href); 
                console.log(data[0].album.name); 
                console.log(data[0].preview_url); 
                console.log(data[0].artists[0].name); 
            });
        }
    });
    outputText();
}


if(argument === "do-what-it-says"){
    fs.readFile('random.txt', "utf8", function(err, data){
        console.log(data);
    });
    outputText();
}   
function outputText(){
    fs.appendFile('log.txt', 'Argument: ' + argument + '. Movie or Song Title: ' + value + '. Movie or Song info: ' + dataText + '.'); 
}