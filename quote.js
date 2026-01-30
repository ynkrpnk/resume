document.addEventListener("DOMContentLoaded", function () {

    const quotes = [
        "Ти ніколи не програєш, поки не перестанеш намагатися. - Альберт Ейнштейн",
        "Єдиний спосіб зробити велику справу — любити те, що ти робиш. - Стів Джобс",
        "Вір у себе, навіть коли ніхто інший не вірить. - Мерлін Монро",
        "Майбутнє належить тим, хто вірить у красу своєї мрії. - Елеонор Рузвельт",
        "Не важливо, скільки разів ти впав — важливо, скільки разів ти піднявся. - Конфуцій"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    const footer = document.querySelector("footer");
    const quoteBlock = document.createElement("p");
    quoteBlock.textContent = quote;
    quoteBlock.style.fontStyle = "italic";
    quoteBlock.style.marginTop = "10px";
    quoteBlock.style.color = "#ccc";

    footer.appendChild(quoteBlock);
});
