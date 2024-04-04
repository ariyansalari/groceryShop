let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active')
    navBar.classList.remove('active')
    shoppinCart.classList.remove('active')
    loginForm.classList.remove('active')
}
let shoppinCart =document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=()=>{
    shoppinCart.classList.toggle('active')
    navBar.classList.remove('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
}
let loginForm =document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active')
    navBar.classList.remove('active')
    shoppinCart.classList.remove('active')
    searchForm.classList.remove('active')
}
let navBar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navBar.classList.toggle('active')
    shoppinCart.classList.remove('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
}

window.onscroll=()=>{
    navBar.classList.remove('active')
    shoppinCart.classList.remove('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')


}
// window.onclick=()=>{
//     navBar.classList.remove('active')
//     shoppinCart.classList.remove('active')
//     loginForm.classList.remove('active')
//     searchForm.classList.remove('active')


// }