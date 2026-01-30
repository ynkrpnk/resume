$(function() {

    $("#resumeForm").on("submit", function(e) {
        e.preventDefault(); 
        let errors = [];

        let name = $("#name").val().trim();
        if (!/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/.test(name) || name === "") {
            errors.push("Поле 'Ім’я' може містити лише українські або англійські літери.");
        }

        let email = $("#email").val().trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push("Поле 'Електронна пошта' повинно відповідати формату symbols@symbols.symbols");
        }

        let phone = $("#phone").val().trim();
        if (!/^[0-9+\-\s()]+$/.test(phone) || phone === "") {
            errors.push("Поле 'Телефон' може містити лише цифри, пробіли та символи + - ( )");
        }

        if (errors.length > 0) {
            alert("Помилки перевірки:\n\n" + errors.join("\n"));
        } else {
            alert("Форма успішно пройшла перевірку!");
        }
    });

    $("#message").on("input", function() {
        let length = $(this).val().length;
        $("#msgLength").text("Довжина повідомлення: " + length + " символів");
    });

});
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const navMenu = document.querySelector("nav");

  menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});
