const arreglo = JSON.parse(localStorage.getItem('data')) || [];
const itemContainer = document.querySelector('.item-container');
// Paso 1 capturar el comentario
const comentario=(event)=>{
    if(event.key == "Enter" && event.target.value != ""){
        const data = {
            text : event.target.value,
            like: 0
        };
        arreglo.unshift(data);
        // saveLocalStorage(arreglo)
        event.target.value= "";
        localStorage.setItem('data', JSON.stringify(arreglo));
        mostarItem()

    }
}


// Paso 3 mostrar los comentarios en el HTML que estan en el localstorage cuando inicia la pagina
const mostar = ()=>{
    const dataLocalStorage = JSON.parse(localStorage.getItem('data')) || '';
    // const  dataLocalStorage = arreglo;
    if(dataLocalStorage.length >= 1){
        dataLocalStorage.map((data, i )=>{
            console.log(data)
            const item = document.createElement("div");
            item.className = 'item'; 
            item.innerHTML = `
                <p class="text">${data.text}</p>
                <button class="btn-like">${data.like} Likes</button>
            `
        itemContainer.appendChild(item);


        })
    }
}
// 4 Mostrar el elemento guardado del formulario
const mostarItem = ()=>{
    // const  dataLocalStorage = arreglo;
    if(arreglo.length >= 1){
            const item = document.createElement("div");
            item.className = 'item'; 
            item.innerHTML = `
                <p class="text">${arreglo[0].text}</p>
                <button class="btn-like">${arreglo[0].like} Likes</button>
            `;
        itemContainer.insertAdjacentElement("afterbegin", item);
        click()
    }
}

const click =()=>{
    const  btn = document.querySelectorAll('.btn-like');
    console.log(btn)
    btn.forEach((btn, i )=>{
        btn.addEventListener('click', ()=>{
            const btnLike = document.querySelectorAll('.btn-like');
            arreglo[i].like += 1;
            btnLike[i].textContent = arreglo[i].like + ' Likes';
            // console.log("Arreglo", arreglo)
            localStorage.setItem('data', JSON.stringify(arreglo));
        })
    })
}
mostar();
click()
