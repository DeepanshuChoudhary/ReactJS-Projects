let char = document.querySelector('h1');

window.addEventListener("keydown", (val) => {
    // console.log(val.key)
    if(val.key === " ") {
        char.textContent = "space"
    } else {
        char.textContent = val.key      
    }
})