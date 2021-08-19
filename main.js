const navMenu = document.querySelector('#nav-menu')
const toggleMenu = document.querySelector('#nav-toggle')
const closeMenu = document.querySelector('#nav-close')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show')
}

navLink.forEach((link) => {
    link.addEventListener('click', linkAction)
})

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach((section) => {
        const sectionHeigth = section.offsetHeight
        const sectionTop = section.offsetTop - 50
        sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop +sectionHeigth) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}