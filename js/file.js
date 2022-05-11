/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
/* ===Scroll Reveal animation*/

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    origin:'top',
});
/*scroll Home */
ScrollReveal().reveal('.section-title',{delay:200,origin:'left'})
ScrollReveal().reveal('.home_title',{delay:200,origin:'left'})
ScrollReveal().reveal('.home_img',{delay:400})
ScrollReveal().reveal('.button',{delay:200})
ScrollReveal().reveal('.home_social-icon',{intervel:200,origin:'top'})
/*scroll  About*/
ScrollReveal().reveal(".about_img",{})
ScrollReveal().reveal(".about_subtitle",{delay:200})
ScrollReveal().reveal(".about_text",{delay:400})
/*scroll  skills*/
ScrollReveal().reveal(".skills_subtitle",{})
ScrollReveal().reveal(".skills_text",{delay:200})
ScrollReveal().reveal(".skills_data",{interval:200,origin:'left'})
ScrollReveal().reveal(".skills_img",{delay:400,origin:'right'})
/*scroll Work*/
ScrollReveal().reveal(".work_img",{interval:200})
/*scroll  contact*/
ScrollReveal().reveal(".contact_input",{interval:200})
