$(function(){
    // create variables and assign them to DOM elements
    var inputEl = $('#cityInput');
    var searchEl = $('#searchBtn');
    var nameEl = $('currentIcon');
    var TempEl = $('#temp');
    var HumidityEl = $('#humidity')
    var WindEl = $('#windSpeed')
    var UvIndexEl = $('#uvIndex')


    function getWeather(cityName){

        // This is our API Key
        var APIKey = "f998023e0971bedf360a81521fc328a4";
        userInput = '';
        // Here we build URL to query the API
        var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        })
    }

    getWeather();
})
    //