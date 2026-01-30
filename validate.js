document.addEventListener("DOMContentLoaded", function () { 
    const button = document.querySelector("button[type='submit']");
    const msgLengthBlock = document.getElementById("msgLength");

    button.addEventListener("click", function (event) {
        event.preventDefault(); 

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();

        let nameRegex = /^[A-Za-zА-Яа-яІіЇїЄє'’\s]+$/;
        if (!nameRegex.test(name)) {
            alert("Поле 'Ім’я' може містити лише українські або англійські літери");
            return;
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Поле 'Електронна пошта' має бути у форматі name@example.com");
            return;
        }

        let phoneRegex = /^[0-9+\-\s()]+$/;
        if (!phoneRegex.test(phone)) {
            alert("Поле 'Телефон' може містити лише цифри, '+', '-', '(', ')' та пробіли");
            return;
        }

        let msgLen = message.length;
        msgLengthBlock.innerText = "Довжина повідомлення: " + msgLen + " символів";

        alert("Форма заповнена, протягом 7 днів Вам нададуть відповідь.");
    });

});