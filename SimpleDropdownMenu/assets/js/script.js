function show(anyValue) {
    document.querySelector(".textBox").value = anyValue;
}

let dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", ()=> {
    dropdown.classList.toggle('active');
});

