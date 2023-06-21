const menu = document.querySelector('.menu')
const list = document.querySelector('.header__list')
const body = document.querySelector('body')

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    list.classList.toggle('active')
    body.classList.toggle('hidden')
})