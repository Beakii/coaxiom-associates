const navActive = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    
    burger.addEventListener('click', ()=>{
        //toggle nav
        nav.classList.toggle('nav-active');
            
        //animate links
        navLinks.forEach((link, index) => {

            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 1}s`;
            }
        });

        //toggle hamburger animation
        burger.classList.toggle('toggle');
    });


}

navActive();