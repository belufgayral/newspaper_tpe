"use strict";

console.log("inicia el programa");

function emptyTable(){
    let tabla = document.querySelector("#tabla");
    tabla.innerHTML = `<tr>
    <th>Bosque</th>
    <th>Ciudad más cercana</th>
    <th>Prefectura</th>
    <th>Prod. de arroz (kg)</th>
    <th>Id</th>
    </tr>`;
}
function fillTable(object){
    let tabla = document.querySelector("#tabla");
    tabla.innerHTML +=      `<tr>
                                <td> ${object.bosque} </td>
                                <td> ${object.ciudad} </td>
                                <td> ${object.prefectura} </td>
                                <td> ${object.arroz} </td>
                                <td> ${object.id} </td>
                            </tr>`;
}    

document.querySelector("#btn-post").addEventListener("click", postData);
document.querySelector("#btn-post3").addEventListener("click", postDatax3);
document.querySelector("#btn-delete").addEventListener("click", deleteOneFilaOfData);
document.querySelector("#btn-put").addEventListener("click", putOneFilaOfData);
document.querySelector("#btn-filter").addEventListener("click", filterRiceData);

getDataRest();

async function getDataRest(){
    const url = 'https://60c9025f7dafc90017ffbf52.mockapi.io/objects/samuraisenso';
    try {
        let res = await fetch(url);
        let tableArrayOfObjects = await res.json();
        console.log(tableArrayOfObjects);
            if (res.status == 200){
                console.log("Datos obtenidos!");
            }
            for (const object of tableArrayOfObjects) {
                fillTable(object);
            
            }             
    } catch (error){
        console.log("Ha ocurrido algo mal!");
    }
    
}

async function postData(){
        const url = 'https://60c9025f7dafc90017ffbf52.mockapi.io/objects/samuraisenso'; 
        let form = document.querySelector("#form-table");
        let formData = new FormData(form);

        let objectTable = {
            "bosque": formData.get('bosque'),
            "ciudad": formData.get('ciudad'),
            "prefectura": formData.get('prefectura'),
            "arroz": parseInt(formData.get('arroz'))
        }
        console.log(objectTable);
    try {
        let res = await fetch (url, {
            "method": "POST",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(objectTable)
        });
        if(res.status == 201){
            console.log("Datos cargados!");
            emptyTable();
            let res = await fetch(url);
            let tableArrayOfObjects = await res.json();
            for (const object of tableArrayOfObjects) {
                fillTable(object);                                                 
            }
        }
    } catch (error){
        console.log("Something went wrong!");
    }
}

async function postDatax3(){
    let timer = setTimeout(postData, 0); 
    let timer2 = setTimeout(postData, 1500); 
    let timer3 = setTimeout(postData, 3000);
}

async function deleteOneFilaOfData(){
    const url = 'https://60c9025f7dafc90017ffbf52.mockapi.io/objects/samuraisenso';
    let form = document.querySelector("#form-table");
    let formData = new FormData(form);
    let idEdit = formData.get('edit');
    try {
        let res = await fetch (`${url}/${idEdit}`, {
            "method": "DELETE"
        });
        if (res.status == 200) {
            console.log("Datos eliminados!");
            emptyTable();
            let res = await fetch(url);
            let tableArrayOfObjects = await res.json();
            for (const object of tableArrayOfObjects) {
                fillTable(object);
            }
        }
    } catch(error) {
        console.error();
    }
}

async function putOneFilaOfData(){
    const url = 'https://60c9025f7dafc90017ffbf52.mockapi.io/objects/samuraisenso';
    let form = document.querySelector("#form-table");
    let formData = new FormData(form);
    let idEdit = formData.get('edit');
    let objectTable = {
            "bosque": formData.get('bosque'),
            "ciudad": formData.get('ciudad'),
            "prefectura": formData.get('prefectura'),
            "arroz": parseInt(formData.get('arroz'))
    }
    console.log(objectTable);
    try {
        let res = await fetch(`${url}/${idEdit}`, {
            "method": "PUT",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(objectTable)
        });
        if(res.status == 200){
            console.log("Datos modificados!");
            emptyTable();
            let res = await fetch(url);
            let tableArrayOfObjects = await res.json();
            for (const object of tableArrayOfObjects) {
                fillTable(object);
            }
        }
    } catch (error) {
        console.error();
        }
}

async function filterRiceData(){
        const url = 'https://60c9025f7dafc90017ffbf52.mockapi.io/objects/samuraisenso';
        let form = document.querySelector("#form-table");
        let formData = new FormData(form);
        let arrozIndicado = parseInt(formData.get('edit'));
    try {
        let res = await fetch(url);
        let tableArrayOfObjects = await res.json();
        if (res.status == 200){
            emptyTable();
            for (const object of tableArrayOfObjects) {
                if (object.arroz < arrozIndicado) {
                    fillTable(object);
                }
            }
        }      
    } catch (error){
        console.log("Ha ocurrido algo mal!");
    }
}

//OTRA COSA, NADA QUE VER CON LA TABLA//

document.querySelector(".menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".buttons").classList.toggle("show");
}