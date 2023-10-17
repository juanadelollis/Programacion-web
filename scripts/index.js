// const menuButton = document.getElementById("menu")

// const nav = document.getElementById("nav-bar")

// const closeButton = document.getElementById("close")

// // cuando mi usuairo hace click sobre el menu hamb quiero q se ejecute una funcion

// menuButton.addEventListener("click", function(){
//     nav.style.display = "inline-block"
//     closeButton.style.display = "inline-block"
//     menuButton.style.display = none
// })


// closeButton.addEventListener("click", function(){
//     nav.style.display = ""
//     menuButton.style.display = ""
//     closeButton.style.display = ""
// })


let app = Vue.createApp({ //objeto con dos propiedades data y methods
    data: function(){ //adentro tiene variables
        return {
            showNav: window.innerWidth > 769 ? true: false,
            showMenuButton: window.innerWidth > 769 ? false: true,
            showCloseButton: false,
        }
    },
    methods:{
        toggleNav(){
            this.showNav = !this.showNav
            this.showMenuButton = !this.showMenuButton
            this.showCloseButton = !this.showCloseButton
        }
    }
});
app.mount("#app")

// FORMULARIO
const form = document.getElementById('form');   //* capturamos el form*//

form.addEventListener('submit', function(event){
    event.preventDefault();  // Evita el envío del formulario para procesar los datos en JavaScript

    // Datos personales
    const fullname = document.getElementById('fullname').value.trim(); // lo almacenamos en una vairable y capturamos el valor
    const email = document.getElementById('email').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const date = document.getElementById('date').value.trim();
    const eventType = document.getElementById('event-type').value;
    const message = document.getElementById('message').value.trim();

    //Validaciones
    if(fullname == " "){
        alert("Escribi tu nombre")
          return
    }

    if(!fullname.includes(" ")){
        alert("Ingresa tu nombre y apellido")
        return
    }

    if(!email.includes("@")){
        alert("Ingresa un mail valido")
        return
    }
    
    // Mostrar resultados en la consola 
    console.log("Nombre y Apellido:", fullname);
    console.log("Email:", email);
    console.log("Teléfono:", telephone);
    console.log("Fecha:", date);
    console.log("Tipo de Evento:", eventType);
    console.log("Comentarios:", message);


    const cliente = {
        name: fullname,
        email: email,
        telephone: telephone,
        date: date,
        eventType: eventType,
        message: message,
    }
    console.log("cliente", cliente)

    //queremos guardar los datos
    localStorage.setItem("cliente", JSON.stringify(cliente)) //primero una key y despues lo que quero guardar
});

function getCliente(){
    const clienteLocalStorage = JSON.parse(localStorage.getItem("cliente")) //te lo devuelve como string y vos queres un objeto
    console.log(clienteLocalStorage)
}