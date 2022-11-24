/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// //URL API
//  const url = "https://platzi-avo.vercel.app/api/avo";

//  /*Web API Fetch

//  La utilizamos para traer recursos desde cualquier otro sitio web

//  Lo unico que tenemos que pasarle es nuestra url

//  1. Nos conectaremos al servidor

//  */

// window
//     .fetch(url)
// /*2. Procesar la respuesta y despues la convertimos en JSON
//     Fetch es algo que nos devuelve una promesa asi que
//     trabajaremos con promesas para obtener la respuesta
//     y transformarla en JSON

// */
//     .then(respuesta => respuesta.json())

//  /*3.
//  Luego de que convirtamos la respuesta en JSON lo que obtenemos
//  ahora es informacion y la obtenemos concatenando otra promesa

//  Cuando tengamos el JSON  tendremos esa informacion que
//  nos servira para renderizar esa info en nuestro navegador*/
//     .then(responseJson =>{

//         const todosLosItems = [];
//         /*recorremos cada uno de los elementos que estan en arrays
//         con un forEach

//         */

//         responseJson.data.forEach(item => {
//         /*atraves del parametro de la funcion del forEach accedemos
//         a los elementos de la respuesta json*/

//     //creamos nuestros elementos
//         const imagen = document.createElement('img');

//         const titulo = document.createElement('h2');

//         const precio = document.createElement('div');

//     // cremos el contenedor donde vamos a poner nuestros elementos

//         const container = document.createElement('div');

//     /*agregamos los elementos a un contenedor

//         container.appendChild(imagen);
//         container.appendChild(titulo);
//         container.appendChild(precio);

//     */

//         container.append(imagen,titulo,precio);

//     //agregamos el contenedor en nuestro body
//         //document.body.appendChild(container);
//         todosLosItems.push(container);

//             console.log(item.name);

//         });

//         document.body.append(...todosLosItems)

//     });

// /*RESUMEN: NOS CONECTAMOS A UNA API QUE ES UN PUENTE CON LA INFORMACION
//   DE UN SERVIDOR Y ESE SERVIDOR NOS DEVUELVE ESA INFORMACION, Y UTILIZAMOS
//   UN CICLO POR CADA UNO DE LOS ELEMENTOS QUE NOS DEVUELVE ESE SERVIDOR
//   CREAMOS NODOS Y SE LOS AGREGAMOS AL FINAL A NUESTRO HTML*/

// /*RETO PARA MEJORAR ESTE CODIGO  Y ES HACERLO CON ASYNC Y AWAIT EN VES
//   DE PROMESAS */```

/* // utilizando async / await

const url = "https://platzi-avo.vercel.app/api/avo";

//web api
async function fetchData() {
  const response = await fetch(url),
  data = await response.json(),
  allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    // create title
    const title = document.createElement("h2");
    // create price
    const price = document.createElement("div");

    const container = document.createElement("div");
    container.append(image, title, price);

    allItems.push(container);
  });

  document.body.append(...allItems)
}

fetchData();  */

// utilizando promesas
/* 
const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app");

// appNode.style.display = "flex";
// appNode.style.flexWrap = "wrap";
// appNode.style.margin = "0 auto";
// appNode.style.justifyContent = "center";


const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
};

// api llamada Intenatonal
// sirve para dar formato a monedas y fechas

window
  .fetch(`${baseUrl}/api/avo`)

  .then((respuesta) => respuesta.json())

  .then((responseJson) => {
    const todosLosItems = [];
    responseJson.data.forEach((item) => {
      const imagen = document.createElement("img");
      imagen.src = `${baseUrl}${item.image}`; 
      imagen.className =
        // "md:h-24 md:w-24 h-20 w-20 rounded-full m-8 md:mr-6 ";
        "h-20 w-20 m-8 rounded-full";

      const title = document.createElement("h2");
      title.textContent = item.name;
      // title.style = 'font-size:2rem'
      // title.style.fontSize = '2rem';
      // title.className = "muy-grande"; 
      title.className = "text-1xl text-gray-900 font-bold m-8";

      const price = document.createElement("div");
      // price.textContent = item.price;
      price.className = "text-white text-2xl m-8 ";
      price.textContent = formatPrice(item.price);

      const container = document.createElement("div");
      container.append(imagen, title, price);
      container.className =
        "container flex flex-row mx-auto w-full items-center justify-center  rounded-lg shadow";

      todosLosItems.push(container);
   });

    appNode.append(...todosLosItems);
  });  
  
  */

/* otro mas----------------------------------------------------
(async() => {
  const url = `https://platzi-avo.vercel.app/api/avo`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const todosLosItems = [];
  data.data.forEach((items)=> {
    const image = document.createElement('img');
    image.src = `https://platzi-avo.vercel.app/${items.image}`;
    

    const title = document.createElement('h2');
    price.textContent = items.name;

    const price = document.createElement('p');
    const container = document.createElement('div');

    container.append(image,title,price);
    items.push(container)
  });

  todosLosItems(...items)
})();
*/


const getDataAvo = async() => {
  try {
  
    const baseUrl = "https://platzi-avo.vercel.app";
    const url = "https://platzi-avo.vercel.app/api/avo";
    const response = await fetch(`${baseUrl}/api/avo`);

    const appNode = document.querySelector("#app");

    const formatPrice =(price) =>{
      const newPrice = window.Intl.NumberFormat("en-EN",{
        style: "currency",
        currency: "USD"
      }).format(price)

      return newPrice;
    }
    
    console.log(response);
    
    const data = await response.json();
       console.log(data);
    
    const todosLosItems = [];
    data.data.forEach(item => {
  
      const imagen =document.createElement('img');
      imagen.src = `${baseUrl}${item.image}`;
      imagen.className =
        "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
      
      const title = document.createElement("h2");
      title.textContent = item.name;
      
      const price = document.createElement("div");
      price.className = "bg-white rounded-lg p-6 hover:bg-gray-300"
      price.textContent = formatPrice(item.price);
      
      const container = document.createElement('div')
      container.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
      container.append(imagen, title, price);
      
      todosLosItems.push(container);

    });
    
    appNode.append(...todosLosItems);
    
  }catch(error) {
    console.log(error);
  }

}

getDataAvo(); 

/* const API = "https://platzi-avo.vercel.app/api/avo"

// WEB API
async function fetchData(urlAPI) { //siempre async antes de function
  const response = await fetch(urlAPI); //hacemos uso del await y llamamos el fetch(promesa), como argumento la url
  const data = await response.json(); //hacemos uso del await, para esperar a que los datos transformandolos en json
  return data; //retorna la información que nos trae de nuestra API.
}

(async () => {
  try{
    const pageApi = await fetchData(API);
    const allitems = [];
    const itemName = pageApi.data.forEach((item) => {
      //crear imagen
      const image = document.createElement("img");
      //crear título
      const tittle = document.createElement("h2");
      //crear precio
      const price = document.createElement("div");
      //contenedor
      const container = document.createElement("div");
      container.append(image, tittle, price);
    
      allitems.push(container);

      document.body.append(...allitems);

    }
   
      
  } catch(error){
    console.log(error);
  };
  
})(); */