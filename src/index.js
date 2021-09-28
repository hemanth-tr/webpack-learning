function sayHello() {
    alert("Hello");
}

function addElement() {
    const button = document.createElement('button');
    button.onclick = sayHello;

    return button;
}

document.body.appendChild(addElement());