const header = document.querySelector('.headerBlue')

window.addEventListener('scroll', () => {
    if(window.scrollY > 150){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})

let navLink = document.querySelectorAll('.nav-link')
let signUpBtn = document.querySelector('.signUpBtn')
let navbar = document.querySelector('.navbar-collapse')

navLink.forEach((e) => {
    e.addEventListener('click', () => {
        navbar.classList.remove('show')
    })
})

signUpBtn.addEventListener('click', () => {
    navbar.classList.remove('show')
})
