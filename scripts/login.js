let userApp = Vue.createApp({
    data: function(){
        return {
            nameApp: 'Iniciar sesión',
            usuarioIngresado:{
                usuario: "",
                contrasena: ""
            },
            usuarios: [
                {
                    nombre: 'juana',
                    contrasena: "1234"
                },
                {
                    nombre: 'tomas',
                    contrasena: "45657"
                }
            ]
        }
    },
    methods: { //creamos un objetos con funciones (métodos)
        buscarUsuario: function(e){
            e.preventDefault();
            console.log(this.usuarioIngresado.usuario);
            console.log(this.usuarioIngresado.contrasena);
            this.usuarios.forEach(usuario => {
                console.log(usuario);
                if(this.usuarioIngresado.usuario == usuario.nombre && this.usuarioIngresado.contrasena == usuario.contrasena){
                    console.log("Acceso concedido")
                }
            }); 
        },  
    }
})
userApp.mount('#userApp') //para montar la aplicación y poder manipular el dom