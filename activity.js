// let num= Math.random();
// console.log(num*6);

let btn=document.querySelector("button");
let div= document.querySelector("div");
let heading = document.querySelector("h1");

btn.addEventListener("click", function (){
    let value = getRandomColor();

    heading.innerText = value;
    console.log("heading was changed");
    
    div.style.backgroundColor = value;
    console.log("color is changed");
});

// btn.addEventListener("click", function(){
//     let value = getRandomColor();
//     heading.innerText = value;
//     console.log("heading was changed");
// });

// generate random color;
function getRandomColor(){
    let red= Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
};
