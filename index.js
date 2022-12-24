window.onload = function(){
    //initializing my emailjs with my public key from my account
    emailjs.init('user_LUOmJ5y5Wt6QBzhWy3cya');

    document.getElementById("emailForm").addEventListener('submit', function(event) {
        event.preventDefault();
        //generating a random five digit number for the contact-number variable
        this.contact_number.value =  Math.random() * 100000 | 0;
        //these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function(){
                console.log('SUCCESS');
            }, function(error){
                console.log('FAILED...', error);
            });
    });
}



//function to output weather data from weatherapi.com depending on city input
function getCityWeatherData(){
    //getting city name
    var city = document.getElementById("cityInput").value;
    console.log(city);


    $.getJSON('http://api.weatherapi.com/v1/current.json?key=2e7f2c25ccc4417c80272145222312&q='+city+'&aqi=yes', function(data){
        //outputting city name
        document.getElementById("city").innerText = "country: " + data.location.country + "\nregion: " + data.location.region + "\ncity: " + data.location.name;
        
        //outputting weather image
        document.getElementById("weatherImage").src = data.current.condition.icon;
        document.getElementById("weatherImage").style.display = "block";
        
        //outputting weather description
        document.getElementById("weatherDescription").innerText = data.current.condition.text;
        
        //outputting temperature
        document.getElementById("temperature").innerText = data.current.temp_c + "\u00B0C";
        console.log(data);
    })
}

//getting a user's ip and location data from geoiplookup api when they access the webpage
function getLocation(){
    const successCallback = (position) => {
        var accuracy = position.coords.accuracy;
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        document.getElementById("locationData").innerText = "accuracy: "+accuracy+"\nlatitude: "+latitude+" longitude: "+longitude;
    }

    const errorCallback = (error) => {
        var output = document.getElementById("locationData");
        switch(error.code) {
            case error.PERMISSION_DENIED:
                output.innerHTML = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                output.innerHTML = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                output.innerHTML = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                output.innerHTML = "An unknown error occurred.";
                break;
        }
        
    }

    //checking if geolocation is supported
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
    else {
        document.getElementById("locationData").innerText = 'geolocation not available';
    }
}

//using flutterwave api to process user payments on click of pay button
function makePayment(){
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-21171b57354ec9becc73ecc5a6eee09b-X",
        tx_ref: "titanic-48981487343MDI0NzMx",
        amount: 5100,
        currency: "KES",
        payment_options: "card, mobilemoneyghana, ussd",
       // redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
        meta: {
          consumer_id: 23,
          consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
          email: "rose@unsinkableship.com",
          phone_number: "08102909304",
          name: "Rose DeWitt Bukater",
        },
    
        callback: function(data){ 
            console.log(data);
    
        },
    
        customizations: {
          title: "The Titanic Store",
          description: "Payment for an awesome cruise",
          logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
        },
    });
}

