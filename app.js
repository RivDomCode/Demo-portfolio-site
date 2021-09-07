//Variables//
const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const navLinks = document.querySelectorAll('.navbar-link');
const sections = document.querySelectorAll('section');

//Events//

window.addEventListener('scroll', ()=> {
    sections.forEach((section, i)=>{
        if(window.pageYOffset >= section.offsetTop-10) {
            navLinks.forEach(navLinks => {
                navLinks.classList.remove('change');
            })
            navLinks[i].classList.add('change');
        }
    })
})


