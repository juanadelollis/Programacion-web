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