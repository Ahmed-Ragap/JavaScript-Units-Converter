//select input
let input = document.querySelector('#input')
//select unit of grams
let grams = document.querySelector('.grams')
//select unit of kilograms
let kilograms = document.querySelector('.kilograms')
//select unit of ounces
let ounces = document.querySelector('.ounces')
//select all span elements
let allSpan = document.querySelectorAll('span')
let iputVal = input.value
//select main_content html element div
let contai = document.querySelector('#main_content')
contai.style = 'opacity:0'
//add even for input
input.addEventListener("input", function () {
    //change pairent css style 
    contai.style = 'opacity:1'
    grams.innerHTML = this.value * 1000000 

    kilograms.innerHTML = this.value * 1000
    
    ounces.innerHTML = this.value * 32150.75
})


// ATTENTION PLES
 
// not complete yet  will add some validation to input to write onlay number not string