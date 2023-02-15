let vegetarian = false;
let vegan = false;
let glutenFree = false;
let kosher = false;
let halal = false;
let lowSodium = false;
let pescatarian = false;


const isVegetarianHandler = () => {
    const value = document.querySelector('#box').checked;
    if (value) {
        vegetarian = true;
    }
    else {
        vegetarian = false;
    }
}

const isVeganHandler = () => {
    const value = document.querySelector('#box').checked;
    if (value) {
        vegetarian = true;
    }
    else {
        vegetarian = false;
    }
}

const isGfHandler = () => {
    const value = document.querySelector('#box').checked;
    if (value) {
        vegetarian = true;
    }
    else {
        vegetarian = false;
    }
}

document.querySelector('#is_kosher').addEventListener('click', isKosherHandler);
//document.querySelector('#veganBox').addEventListener('click', isVegetarianHandler);
//document.querySelector('#gfBox').addEventListener('click', isVegetarianHandler);