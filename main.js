let nav = document.querySelector('#navbarNav')    
let logo = document.querySelector('#navbar-logo')

window.onscroll = function () {
    if(this.scrollY > 50){
        nav.classList.add('bg-white')
        nav.classList.add('navbar-light')
        logo.src = 'images/bakery-color.png'
    }else{
        nav.classList.remove('bg-white')

        nav.classList.remove('navbar-light')
        logo.src = 'images/bakery-light-1.png'
    }
}