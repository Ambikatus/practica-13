import {tarjeta} from "./tarjeta.js";
const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
//creamos las funciones asincronas con la linea async, asincronas para esperar a que la direccion nos de una respuesta para poder realizar el resto del programa
window.onload = async() =>{
    //await para decirle que espere a que termine de ejecutarse la funcion
    await getPokemones();
}

const getPokemones = async() =>{
    let tabla = '';
    //metodos GET (por default),POST,PUT,DELETE
    const peticion =  await fetch(url);
    if(peticion.ok){
        const data = await peticion.json();
        const pokemones = data.results;
       
        pokemones.forEach(async (pok,i) => {
           //let img = await getImagen(pok.url);
           const pokecard = new tarjeta(3,pok.name,pok.url);
           let card = await pokecard.mostrar();
            document.querySelector('#root').innerHTML += card;
        }); 
    }
}