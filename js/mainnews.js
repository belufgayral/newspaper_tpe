//Para la NOTICIA PRINCIPAL
//tomo los elementos del html para poder asociar las partes del html con las funciones a crear
document.getElementById("prefectures-war").addEventListener("click", warMap);
document.getElementById("prefectures-all").addEventListener("click", japanMap);
document.getElementById("prefecture-kioto").addEventListener("click", kiotoMap);
//creo las tres funciones donde cada una modificará las imagenes presentadas y un text descriptivo debajo
function warMap(){
    document.getElementById("japan-map").src="images/prefectures-war.png";
    document.querySelector("#newinfo").innerHTML = "En rojo la liga de prefecturas con el clan Taira y el Emperador."
    + " En azul la liga de prefecturas unidas al clan Minamoto. En naranja una actual prefectura en disputa. En verde las prefecturas que se decidirán luego de la batalla de Shizuoka."
    + " En naranja la única prectura que se declaró neutral. En blanco las prefecturas que no se han manifestado en relación al conflicto.";
}

function japanMap(){
    document.getElementById("japan-map").src="images/prefectures-all.png";
    document.querySelector("#newinfo").innerHTML = "Todas las prefecturas del islote.";
}

function kiotoMap(){
    document.getElementById("japan-map").src="images/prefectures-kioto.png";
    document.querySelector("#newinfo").innerHTML = "Kyoto, sede imperial del Emperador.";
}

document.querySelector(".menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".buttons").classList.toggle("show");
}
