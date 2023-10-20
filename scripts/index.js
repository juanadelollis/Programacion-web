let app = Vue.createApp({ 
   data: function(){ 
         return {
             showMenuButton: true,
             showNav: false,
             // showNav: window.innerWidth > 769 ? true: false,
             // showMenuButton: window.innerWidth > 769 ? false: true,
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

//Menu hamburguesa
// function menuHamb(){
//     const menu = document.querySelector(`menu-icon`);
//     const list = document.querySelector(`nav-bar`);
// }

// menu.addEventListener('click', ()=> list.classList.toggle(`nav-bar-show`))
    
// document.querySelector(".menu-icon").addEventListener("click", () => {
//     document.querySelector(".nav-bar").classList.toggle("-show");
// });

