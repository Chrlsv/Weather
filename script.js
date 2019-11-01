
var apiKey = "a5ed3aaeead78ade2a07e3ca8255b612" ;
//var cityInput = $('#cityInput').val();
var uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey ;
//var weatherURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityInput + "&appid=" + apiKey;

// search button on click WEATHER
$("#search").on('click', function () {
    event.preventDefault();
    console.log("search");
// Call the weather API  - Forecast
    $.ajax({
        url: weatherURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        console.log(weatherURL);
    });
});

// Call the weather API  - UV
$("#search").on('click', function () {
    event.preventDefault();
    console.log("search");

    $.ajax({
        url: uvURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        console.log(uvURL);
    });
});

// city history to local storage.
function storeCity(city) {
    var currentCity = $('<li>').text(city);
    currentCity.attr({type: 'button', class:'storeCity', name:city});
    $('#cities').append(currentCity);
    localStorage.setItem(city, city);
};