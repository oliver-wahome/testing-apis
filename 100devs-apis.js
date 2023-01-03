/*
    DOG API JAVASCRIPT CODE
*/
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
// END //

/*
    THE COCKTAIL DB AP JAVASCRIPT CODE
*/
//The user will enter a cocktail. Get a cocktail name, photo and instructions and place them in the DOM
document.getElementById("submitDrinkBtn").addEventListener('click', getDrink);

//function to get drink from input and fetch data from cocktaildb api
function getDrink(){
    let drink = document.getElementById("drinkInput").value;
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    document.getElementById("drinkRow").innerHTML = '';

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks);

            data.drinks.forEach(drink => {
                var content = '';
                console.log(drink.strDrink);

                content += '<div class="row w-75 border rounded py-2 mb-3 bg-light">';
                    content += '<div class="col-md-6 d-flex flex-column align-items-center">';
                        content += '<h5 id="drinkName">'+drink.strDrink+'</h5>';
                        content += '<img class="my-3 rounded" style="object-fit:cover; height:200px; width:200px;" src="'+drink.strDrinkThumb+'" alt="drink-image" id="drinkImg" />';
                    content += '</div>';
                    content += '<div class="col-md-6 d-flex align-items-center justify-content-center">';
                        content += '<p class="col-9 text-center" id="drinkInstructions">'+drink.strInstructions+'</p>';
                    content += '</div>';
                content += '</div>';

                document.getElementById("drinkRow").innerHTML += content;
            });
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}
// END  //