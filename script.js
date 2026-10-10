const tema = document.getElementById("tema");

tema.addEventListener("click", function() {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        tema.textContent = "☀️ Modo Claro";
    } else {
        tema.textContent = "🌙 Dark Mode";
    }
});

function comprar(carro) {
    alert("Você demonstrou interesse no: " + carro);
}