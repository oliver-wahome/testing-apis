fetch("https://api.nasa.gov/planetary/apod?api_key=GTgDxMg6JEfbQPwYdlLPfygL8XDmEVWp8HWkzNnm")
    .then(res => res.json())
    .then(data => {
        console.log(data);

        document.getElementById("apodImage").src = data.hdurl;
        document.getElementById("apodName").innerText = data.title;
        document.getElementById("apodDescription").innerText = data.explanation;
    })
    .catch(err => {
        console.log(`err ${err}`);
    })