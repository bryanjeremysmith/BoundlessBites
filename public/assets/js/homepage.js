var vegetarian = true;
var vegan = true;
var glutenFree = true;

function collapseAll(){
    var elements = document.getElementsByClassName('vegetarian_vegan_gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:none');
    }
    elements = document.getElementsByClassName('vegetarian_gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:none');
    }
    elements = document.getElementsByClassName('vegan_gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:none');
    }
    elements = document.getElementsByClassName('vegetarian_vegan_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:none');
    }
    elements = document.getElementsByClassName('vegetarian_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:none');
    }
    elements = document.getElementsByClassName('vegan_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:none');
    }
    elements = document.getElementsByClassName('gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:none');
    }
}

function displayAll(){
    var elements = document.getElementsByClassName('vegetarian_vegan_gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:true');
    }
    elements = document.getElementsByClassName('vegetarian_gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:true');
    }
    elements = document.getElementsByClassName('vegan_gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:true');
    }
    elements = document.getElementsByClassName('vegetarian_vegan_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:true');
    }
    elements = document.getElementsByClassName('vegetarian_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:true');
    }
    elements = document.getElementsByClassName('vegan_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:true');
    }
    elements = document.getElementsByClassName('gluten_free_class');
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'display:true');
    }
}

function dietaryCheckBoxClick(){
    vegetarian = document.querySelector('#is_vegetarian').checked;
    vegan = document.querySelector('#is_vegan').checked;
    glutenFree = document.querySelector('#is_gluten_free').checked;

    collapseAll();
    var elements;
    if(vegetarian && vegan && glutenFree){
        //1
        elements = document.getElementsByClassName('vegetarian_vegan_gluten_free_class');
        SetElementsVisible(elements);
    }else if(vegetarian && glutenFree){
        //3
        elements = document.getElementsByClassName('vegetarian_gluten_free_class');
        SetElementsVisible(elements);
    }else if(vegan && glutenFree){
        //3
        elements = document.getElementsByClassName('vegan_gluten_free_class');
        SetElementsVisible(elements);
    }else if(vegetarian && vegan){
        //3
        elements = document.getElementsByClassName('vegetarian_vegan_class');
        SetElementsVisible(elements);
    }else if(vegetarian){
        //4
        elements = document.getElementsByClassName('vegetarian_class');
        SetElementsVisible(elements);
        elements = document.getElementsByClassName('vegetarian_gluten_free_class');
        SetElementsVisible(elements);
        elements = document.getElementsByClassName('vegetarian_vegan_class');
        SetElementsVisible(elements);
        elements = document.getElementsByClassName('vegetarian_vegan_gluten_free_class');
        SetElementsVisible(elements);
    }else if(vegan){
        //4
        elements = document.getElementsByClassName('vegan_class');
        SetElementsVisible(elements);
        elements = document.getElementsByClassName('vegan_gluten_free_class');
        SetElementsVisible(elements);
        elements = document.getElementsByClassName('vegetarian_vegan_class');
        SetElementsVisible(elements);
        elements = document.getElementsByClassName('vegetarian_vegan_gluten_free_class');
        SetElementsVisible(elements);
    }else if(glutenFree){
        //4
        elements = document.getElementsByClassName('gluten_free_class');
        SetElementsVisible(elements);
        elements = document.getElementsByClassName('vegetarian_gluten_free_class');
        SetElementsVisible(elements);
        elements = document.getElementsByClassName('vegan_gluten_free_class');
        SetElementsVisible(elements);
        elements = document.getElementsByClassName('vegetarian_vegan_gluten_free_class');
        SetElementsVisible(elements);
    }else{
        displayAll();
    }
}

function SetElementsVisible(elements) {
    for (let index = 0; index < elements.length; index++) {
        elements[index].setAttribute('style', 'visibility:visible');
    }
}

document.querySelector('#is_vegetarian').addEventListener('click', dietaryCheckBoxClick);
document.querySelector('#is_vegan').addEventListener('click', dietaryCheckBoxClick);
document.querySelector('#is_gluten_free').addEventListener('click', dietaryCheckBoxClick);

dietaryCheckBoxClick()