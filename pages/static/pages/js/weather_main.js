var tem;
var city;
var weath;
var weatherIcon;
var cels;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);

}

function showPosition(pos) {
    f(pos.coords.latitude, pos.coords.longitude);
}

function f(lat, lon) {

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        type: 'GET',
        data: {
            APPID: '92486e93a8fd35ee17aeb60c1ac229ff',
            lat: lat,
            lon: lon,

        },

        success: function (response) {
            console.log(response);
            // console.log(response.coord.lat);
            weatherIcon = response.weather[0].icon;
            city = response.name;
            tem = Math.round((response.main.temp * 9 / 5) - 459.67);
            weath = response.weather[0].description;
            cels = Math.round((tem - 32) * 5 / 9);
            // console.log(response.weather[0].description);
            document.getElementById('city').innerHTML = (city);
            document.getElementById('temp').innerHTML = ('the temperature is ' + tem + ' °F');
            document.getElementById('weather').innerHTML = (weath);
            changeBackground();
            document.getElementById("icon").style.backgroundImage = "url('http://openweathermap.org/img/w/" + weatherIcon + ".png')";

        }

    });
}

$('#myLoc').click(function () {

    console.log('lolololol');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    }

    function showPosition(pos) {
        console.log('hahahaha');
        f(pos.coords.latitude, pos.coords.longitude);
    }

    function f(lat, lon) {
        console.log('memememem');
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            type: 'GET',
            data: {
                APPID: '92486e93a8fd35ee17aeb60c1ac229ff',
                lat: lat,
                lon: lon,

            },

            success: function (response) {
                console.log(response);
                weatherIcon = response.weather[0].icon;
                city = response.name;
                tem = Math.round((response.main.temp * 9 / 5) - 459.67);
                weath = response.weather[0].description;
                cels = Math.round((tem - 32) * 5 / 9);
                // console.log(response.weather[0].description);
                document.getElementById('city').innerHTML = (city);
                if ($('input[name="toggle"]').is(':checked')) {
                document.getElementById('temp').innerHTML = 'the temperature is ' + cels + ' °C';

                } else {
                    document.getElementById('temp').innerHTML = ('the temperature is ' + tem + ' °F');
                }
                document.getElementById('weather').innerHTML = (weath);
                changeBackground();
                document.getElementById("icon").style.backgroundImage = "url('http://openweathermap.org/img/w/" + weatherIcon + ".png')";

            }

        })
    }
});

$('#submit').click(function () {

    event.preventDefault();
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        type: 'GET',
        data: {
            q: $('#cityChoice').val(),
            APPID: '92486e93a8fd35ee17aeb60c1ac229ff'
            // lat: lat,
            // lon: lon,

        },

        success: function (response) {

            // console.log(response);
            // console.log(response.coord.lat);
            weatherIcon = response.weather[0].icon;
            city = response.name;
            tem = Math.round((response.main.temp * 9 / 5) - 459.67);
            weath = response.weather[0].description;
            cels = Math.round((tem - 32) * 5 / 9);
            // console.log(response.weather[0].description);
            document.getElementById('city').innerHTML = (city);
                if ($('input[name="toggle"]').is(':checked')) {
                document.getElementById('temp').innerHTML = 'the temperature is ' + cels + ' °C';

                } else {
                    document.getElementById('temp').innerHTML = ('the temperature is ' + tem + ' °F');
                }
            document.getElementById('weather').innerHTML = (weath);
            changeBackground();
            // console.log(weatherIcon);
            document.getElementById("icon").style.backgroundImage = "url('http://openweathermap.org/img/w/" + weatherIcon + ".png')";



        }


    });

    var form = document.getElementById("cityChoice");
    form.value = '';


    });

// $('#submit').click(function () {
//
//     event.preventDefault();


f();

$("#toggle").change(function () {
    // var cels = Math.round((tem - 32) * 5 / 9);
    if ($('input[name="toggle"]').is(':checked')) {
        document.getElementById('temp').innerHTML = 'the temperature is ' + cels + ' °C';

    } else {
        document.getElementById('temp').innerHTML = ('the temperature is ' + tem + ' °F');
    }

});

function changeBackground() {
    var string = weath;

    if (string.includes('cloud')) {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')";
    }
    if (string.includes('rain')) {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')";
    }
    if (string.includes('drizzle')) {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')";
    }
    if (string.includes('sun')) {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?w=1260&h=750&auto=compress&cs=tinysrgb')";
    }
    if (string.includes('clear')) {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')";
    }
    if (string.includes('snow')) {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/60561/winter-snow-nature-60561.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')";
    }
    if (string.includes('smoke')) {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/345043/pexels-photo-345043.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')";
    }
    if (string.includes('storm')) {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/371838/pexels-photo-371838.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')";
    }
    if (string.includes('haze')) {
        document.body.style.backgroundImage = "url('http://img.wennermedia.com/social/gettyimages-73909114-ea10777f-1b8d-4abf-854b-aa3db47b294f.jpg')";
    }
    if (string.includes('mist')) {
        document.body.style.backgroundImage = "url('https://static.pexels.com/photos/4827/nature-forest-trees-fog.jpeg')";
    }
};
