//fetching dog picture data
function getDogImage(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("outputImg").src = data.message;
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}

getDogImage();

//function to reload page onclick of button
function reloadPage(){
    getDogImage();
}

//The user will enter a cocktail. Get a cocktail name, photo and
//instructions and place them in the DOM
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0]);
        document.getElementById("drinkName").innerText = data.drinks[0].strDrink;
        //document.getElementById("drinkImg").src = data.drinks[0].strDrinkThumb;
    })
    .catch(err => {
        console.log(`error ${err}`);
    });