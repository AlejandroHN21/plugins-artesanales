
//..............................................................
//codigo del slider 1 

let contador = 0 ;

const itemImg = Array.from(document.querySelectorAll(".container_item"));
const izquierda = document.querySelector(".izquierda");
const derecha = document.querySelector(".derecha");

izquierda.addEventListener("click",prev);
derecha.addEventListener("click",next);

function next(event){
  if(event){
      if(contador == 2){
          contador = 0;
      }else{
          contador++;
      }
  }

  for(i = 0 ; i < itemImg.length; i++){
      itemImg[i].classList.remove("active_slider");
      itemImg[contador].classList.add("active_slider")
  }
}

function prev(event){
    if(event){
        if(contador == 0){
            contador = 2;
        }else{
            contador--;
        }
    }
  
    for(i = 0 ; i < itemImg.length; i++){
        itemImg[i].classList.remove("active_slider");
        itemImg[contador].classList.add("active_slider")
    }
  }

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// codigo slider2 
const container2 = document.querySelector(".container2");
const itemImg2 = document.querySelectorAll(".container_item2");
const izquierda2 = document.querySelector(".izquierda2");
const derecha2 = document.querySelector(".derecha2");

derecha2.addEventListener("click",()=>{
  container2.scrollLeft += container2.offsetWidth;
});

izquierda2.addEventListener("click",()=>{
    container2.scrollLeft -= container2.offsetWidth;
});

//...................................................
//::::::::::::::::::::::::::::::::::::::::::::::::::




// codigo selección de imagen 

const principalIMG = document.querySelector(".principal-img");
const imgSelect = document.querySelectorAll(".img-select");

const imagenes = Array.from(imgSelect);
    for(let imagen of imagenes){
        imagen.addEventListener("click",()=>{
            principalIMG.src = imagen.src;
        })
    }
//::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::


// tabs 

const contenedorTabs = document.querySelector(".cont-anclas");
const tabs = Array.from(document.querySelectorAll(".ancla"));
const itemsContenido = Array.from(document.querySelectorAll(".item-contenido")); 

contenedorTabs.addEventListener("click",(e)=>{
     e.preventDefault();
     if(e.target){
         const index = tabs.indexOf(e.target);
         
         //remover y activar la clase actvadora en el tab seleccionado
         tabs.map(element => element.classList.remove("active_ancla"));
         tabs[index].classList.add("active_ancla");
         
         //contenido que se sincroniza y cambia dinamicamente con el tab seleccionado
         itemsContenido.map(content => content.classList.remove("active_tab"));
         itemsContenido[index].classList.add("active_tab");

     }
});

//::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::



// codigo ventana modal ventana modal

const btnView = document.querySelector(".view");
const ventanaModal = document.querySelector(".modal");
const close = document.querySelector(".close-modal");
btnView.addEventListener("click",()=>{
    ventanaModal.classList.add("active-modal");
})

close.addEventListener("click",()=>{
    ventanaModal.classList.remove("active-modal");
});

// .................................................
// .................................................



// notificacion con push js

window.addEventListener('load', ()=>{
    Push.Permission.request();
});

const btnNoti = document.querySelector(".btn-noti");
btnNoti.addEventListener("click",()=>{
    Push.create("Notificación JS",{
        body: "Las notificaciones suelen usarse para atraer clientes",
        icon: "img/computer.png",
        timeout: 5000,
        onClick: function(){
            window.location = "https://developer.mozilla.org/es/docs/Web/JavaScript";
        }
    })
})
// ..................................................
// ..................................................



// galeria

 const containerTipos = document.querySelector(".cont-selection-img");
 console.log(containerTipos);
 const selectTipos = Array.from(document.querySelectorAll(".tipo"));
 console.log(selectTipos);
 const itemGaleria = Array.from(document.querySelectorAll(".item-galeria"));
 console.log(itemGaleria);

 containerTipos.addEventListener("click",(e)=>{
    e.preventDefault();

    const indice = selectTipos.indexOf(e.target);
    selectTipos.map(tiposImg => tiposImg.classList.remove("active-tipo"));
    selectTipos[indice].classList.add("active-tipo");

    const dataAtributo = selectTipos[indice].getAttribute("data-tipo");
    for(let x = 0; x < itemGaleria.length; x++){
        itemGaleria[x].style.display = "none";

        if(itemGaleria[x].getAttribute("data-id") === dataAtributo){
            itemGaleria[x].style.display = "block";
        }

        if(dataAtributo == 'todo'){
            itemGaleria[x].style.display = "block";
        }

    }
 })

//....................................................
//....................................................