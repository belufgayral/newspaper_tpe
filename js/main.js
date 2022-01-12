//esto es para el menu desplegble
document.querySelector(".menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".buttons").classList.toggle("show");
}