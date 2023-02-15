let vegetarian = false;
let vegan = false;
let glutenFree = false;
let kosher = false;
let halal = false;
let lowSodium = false;
let pescatarian = false;


const isVegetarianHandler = () => {
    const value = document.querySelector('#is_vegetarian').checked;
    if (value) {
        vegetarian = true;
    }
    else {
        vegetarian = false;
    }
}

const isVeganHandler = () => {
    const value = document.querySelector('#is_vegan').checked;
    if (value) {
        vegan = true;
    }
    else {
        vegan = false;
    }
}

const isGfHandler = () => {
    const value = document.querySelector('#is_gluten_free').checked;
    if (value) {
        glutenFree = true;
    }
    else {
        glutenFree = false;
    }
}

const isKosherHandler = () => {
    const value = document.querySelector('#is_kosher').checked;
    if (value) {
        kosher = true;
    }
    else {
        kosher = false;
    }
}

const isHalalHandler = () => {
    const value = document.querySelector('#is_halal').checked;
    if (value) {
        halal = true;
    }
    else {
        halal = false;
    }
}

const isLowSodiumHandler = () => {
    const value = document.querySelector('#is_lowsodium').checked;
    if (value) {
        lowSodium = true;
    }
    else {
        lowSodium = false;
    }
}

const isPescatarianHandler = () => {
    const value = document.querySelector('#is_pescatarian').checked;
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