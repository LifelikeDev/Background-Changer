const button = document.querySelector('button');
const body = document.querySelector('body');
const display = document.querySelector('div');


button.addEventListener('click', () => {
    const randColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random().toFixed(2) * 1})`;
    body.style.background = randColor ;

    display.innerText = `This color is ${randColor}`;

    console.log(randColor);

    // document.body.style.background = randomBackground();
    // console.log(randomBackground.value);
});



// function randomBackground() {

//     return `rgb(${Math.floor(Math.random() * 255)}, 
//     ${Math.floor(Math.random() * 255)}, 
//     ${Math.floor(Math.random() * 255)})`;

    
// }

