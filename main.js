const primaryNavigation = document.getElementById('primary-navigation')
const navToggle = document.querySelector('.mobile-toggle')
const body = document.querySelector('body')
const menuList = document.querySelectorAll('#primary-navigation li')

let navigationToggle = ()=> {
    if(primaryNavigation.getAttribute('data-visible')==='false') {
        primaryNavigation.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', 'true')
        body.classList.add('overflow')
    }else {
        primaryNavigation.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
        body.classList.remove('overflow')
    }
}
//opens and closes nav menu when hamburger icon is clicked
navToggle.addEventListener('click', ()=> {
    navigationToggle()
})

//closes the menu when one link is pressed
menuList.forEach(link =>{
    link.addEventListener('click', navigationToggle)
})

