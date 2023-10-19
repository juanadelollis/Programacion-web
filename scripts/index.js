let app = Vue.createApp({ 
    data: function(){ 
        return {
            showMenuButton: true,
            showNav: true,
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

