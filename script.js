const box = document.getElementById("box");


document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    box.style.top = mouseY + "px";
    box.style.left = mouseX + "px";
})








