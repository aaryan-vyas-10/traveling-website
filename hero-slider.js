const images =
    [
        "img/main.jpg",
        "img/slider-2.jpg",
        "img/slider-3.jpg"
    ];

let index = 0;
console.log("index : ,", index);
const hero = document.querySelector('.hero');

function showImg(index) {
    hero.style.backgroundImage = `linear-gradient(rgba(32, 35, 38, 0.5)), url('${images[index]}')`
}


document.querySelector('.leftArrow').addEventListener('click', () => {
    // left arrow are use to the decrise the index of the img array 
    // in this this -1 from the current the array index if now we are at the 0 index and i click on the left arrow then 0 -1 =  -1 then our condition becom true then it go to last img
    index = index - 1;
    console.log("left arrow click : ", index);
    if (index < 0) {
        index = images.length - 1;
    }
    showImg(index);
});


// right arrow are use for the inacree the index value 
// in this when we are at last 2 index then we click right then it become the 2 + 1 our if condtion is true imgges.left and index same or greter then go to the first img
document.querySelector('.rightArrow').addEventListener('click', () => {
    index = index + 1;

    if (index >= images.length) {
        index = 0;
    }

    showImg(index);
    console.log("right arrow : ", index);
});

// Auto-change image every 5 seconds
// set-interval in the javascript built-in function that run the another function repetadly after  a spcefied time    
// syntax :
// setIntervla(function,miliseconds) -> 1000ms = 1second
setInterval(() => {
    index = index + 1;
    console.log("setInterval : ", index);
    if (index >= images.length) {
        index = 0;
    }
    showImg(index);
}, 5000);

showImg(index);