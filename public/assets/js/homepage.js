var vegetarian = false;
var vegan = false;
var glutenFree = false;
var kosher = false;
var halal = false;
var lowSodium = false;
var pescatarian = false;

function isVegetarianHandler() {
    var value = document.querySelector('#is_vegetarian').checked;
    if (value) {
        vegetarian = true;
    }
    else {
        vegetarian = false;
    }
}

function isVeganHandler() {
    var value = document.querySelector('#is_vegan').checked;
    if (value) {
        vegan = true;
    }
    else {
        vegan = false;
    }
}

function isGfHandler() {
    var value = document.querySelector('#is_gluten_free').checked;
    if (value) {
        glutenFree = true;
    }
    else {
        glutenFree = false;
    }
}

function isKosherHandler() {
    var value = document.querySelector('#is_kosher').checked;
    if (value) {
        kosher = true;
    }
    else {
        kosher = false;
    }
}

function isHalalHandler() {
    var value = document.querySelector('#is_halal').checked;
    if (value) {
        halal = true;
    }
    else {
        halal = false;
    }
}

function isLowSodiumHandler() {
    var value = document.querySelector('#is_lowsodium').checked;
    if (value) {
        lowSodium = true;
    }
    else {
        lowSodium = false;
    }
}

function isPescatarianHandler() {
    var value = document.querySelector('#is_pescatarian').checked;
    if (value) {
        pescatarian = true;
    }
    else {
        pescatarian = false;
    }
}

document.querySelector('#is_vegetarian').addEventListener('click', isVegetarianHandler);
document.querySelector('#is_vegan').addEventListener('click', isVeganHandler);
document.querySelector('#is_gluten_free').addEventListener('click', isGfHandler);
document.querySelector('#is_kosher').addEventListener('click', isKosherHandler);
document.querySelector('#is_halal').addEventListener('click', isHalalHandler);
document.querySelector('#is_lowsodium').addEventListener('click', isLowSodiumHandler);
document.querySelector('#is_pescatarian').addEventListener('click', isPescatarianHandler);