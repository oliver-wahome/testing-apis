/**
 * GETTING THE TODAY'S ASTRONOMY PICTURE
 */
//this function fetches data of the current APOD(Astronomy Picture of the Day) from NASA API.
//It then adds that information to html elements to be output to the DOM
function getAPOD(){
    let url = 'https://api.nasa.gov/planetary/apod?api_key=GTgDxMg6JEfbQPwYdlLPfygL8XDmEVWp8HWkzNnm';
    document.getElementById("apodTitle").innerText = 'Today\'s Astronomy Picture';

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
        });
}
//this statement calls the getAPOD function onload of the window
window.addEventListener('load', getAPOD);

/**
 *  GETTING THE ASTRONOMY PICTURE OF A SELECTED DATE
 */
function getAPofSelectedDate(){
    const apodDate = document.getElementById("dateInput").value;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let apodDateStr = `${apodDate.substring(8)}/${months[Number(apodDate.substring(5,7))-1]}/${apodDate.substring(0,4)}`;
    let url = 'https://api.nasa.gov/planetary/apod?api_key=GTgDxMg6JEfbQPwYdlLPfygL8XDmEVWp8HWkzNnm';

    document.getElementById("apodTitle").innerText = 'The Astronomy Picture from ' + apodDateStr;

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
        });
}
//this statement calls the getAPofSelectedDate function onclick of dateInputBtn
document.getElementById("dateInputBtn").addEventListener('click', getAPofSelectedDate);