var vegetarian = true;
var vegan = true;
var glutenFree = true;
// var kosher = false;
// var halal = false;
// var lowSodium = false;
// var pescatarian = false;


function collapseAll(){
    var elements = document.getElementsByClassName('vegetarian_vegan_gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'visibility:collapse');
    }
    elements = document.getElementsByClassName('vegetarian_gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'visibility:collapse');
    }
    elements = document.getElementsByClassName('vegan_gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'visibility:collapse');
    }
    elements = document.getElementsByClassName('vegetarian_vegan_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'visibility:collapse');
    }
    elements = document.getElementsByClassName('vegetarian_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'visibility:collapse');
    }
    elements = document.getElementsByClassName('vegan_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'visibility:collapse');
    }
    elements = document.getElementsByClassName('gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'visibility:collapse');
    }
}
function dietaryCheckBoxClick(){
    vegetarian = document.querySelector('#is_vegetarian').checked;
    vegan = document.querySelector('#is_vegan').checked;
    glutenFree = document.querySelector('#is_gluten_free').checked;

    collapseAll();
    var elements;
    if(vegetarian && vegan && glutenFree){
        elements = document.getElementsByClassName('vegetarian_vegan_gluten_free_class');
    }else if(vegetarian && glutenFree){
        elements = document.getElementsByClassName('vegetarian_gluten_free_class');
    }else if(vegan && glutenFree){
        elements = document.getElementsByClassName('vegan_gluten_free_class');
    }else if(vegetarian && vegan){
        elements = document.getElementsByClassName('vegetarian_vegan_class');
    }else if(vegetarian){
        elements = document.getElementsByClassName('vegetarian_class');
    }else if(vegan){
        elements = document.getElementsByClassName('vegan_class');
    }else if(glutenFree){
        elements = document.getElementsByClassName('gluten_free_class');
    }

    if (elements != []){
        for (let index = 0; index < elements.length; index++) {
            elements[index].setAttribute('style', 'visibility:visible');
        }
    }
}

document.querySelector('#is_vegetarian').addEventListener('click', dietaryCheckBoxClick);
document.querySelector('#is_vegan').addEventListener('click', dietaryCheckBoxClick);
document.querySelector('#is_gluten_free').addEventListener('click', dietaryCheckBoxClick);