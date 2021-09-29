function sayHello() {
    alert("hello");
}

const buttons = document.querySelectorAll('.say-hello');
buttons.forEach(button => {
    button.addEventListener('click', sayHello);
})