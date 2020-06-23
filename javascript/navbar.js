const navActive = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
    const landing = document.querySelector('.inactive-page');

    
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

        //add background black
        landing.classList.toggle('landing-dark');

        //toggle hamburger animation
        burger.classList.toggle('toggle');
    });

    //disable nav if click on the black box surrounding it
    landing.addEventListener('click', () =>{
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        landing.classList.remove('landing-dark');
    });


    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
           $('.navbar').addClass('navbar-dark');
        } else {
           $('.navbar').removeClass('navbar-dark');
        }
    });
}

navActive();