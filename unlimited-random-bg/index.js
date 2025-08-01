const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;

// console.log(randomColor());
const startChangingColor = function() {
intervalId = setInterval(changeBgColor, 1000);
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }

};


const stopChangingColor = function() {
    clearInterval(intervalId);
    // document.body.style.backgroundColor = 'black'; // Reset to black or any default color
};


window.onload = function() {
    document.body.style.backgroundColor = 'black'; // Set initial background color
    changeBgColor(); // Change color immediately on load
}
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);