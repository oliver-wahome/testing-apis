document.getElementById("dateInputBtn").addEventListener('click', getApod);

function getApod(){

    const apodDate = document.getElementById("dateInput").value;
    console.log(choice);

    const url = 'https://api.nasa.gov/planetary/apod?api_key=GTgDxMg6JEfbQPwYdlLPfygL8XDmEVWp8HWkzNnm';

    fetch(url)
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
}