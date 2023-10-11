const form = document.getElementById('form');   //* capturamos el form*//

form.addEventListener('submit', function(event){
    event.preventDefault();  // Evita el envío del formulario para procesar los datos en JavaScript

    // Datos personales
    const fullname = document.getElementById('fullname').value.trim(); // lo almacenamos en una vairable y capturamos el valor
    const email = document.getElementById('email').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const date = document.getElementById('date').value.trim();
    const eventType = document.getElementById('eventType').value;
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
    
   // const startDate = document.getElementById('start-date').value;


    // Mostrar resultados en la consola 
    console.log("Nombre y Apellido:", fullname);
    console.log("Email:", email);
    console.log("Teléfono:", telephone);
    console.log("Fecha:", date);
    console.log("Tipo de Evento:", eventType);
    console.log("Comentarios:", message);

    // console.log("Fecha del evento:", startDate);


    const cliente = {
        name: fullname,
        email: email,
        telephone: telephone,
        date: date,
        eventType: eventType,
        message: message,
       // startDate: startDate,
    }
    console.log("cliente", cliente)

    //queremos guardar los datos
    localStorage.setItem("cliente", JSON.stringify(cliente)) //primero una key y despues lo que quero guardar
});

function getCliente(){
    const clienteLocalStorage = JSON.parse(localStorage.getItem("cliente")) //te lo devuelve como string y vos queres un objeto
    console.log(clienteLocalStorage)
}