/** show menu **/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/** Show Menu */
if(navToggle){
 navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu');
 })
}

/** Hide Menu */
if(navClose){
 navClose.addEventListener('click', () =>{
  navMenu.classList.remove('show-menu')
 })
}

/** scroll navigation link **/

const navLink = document.querySelectorAll('.link');

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  // When we click on each link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}

const sectionAction = (sectionId) => {
 if(!sectionId) return;

 const targetId = sectionId.replace('#', '');
 const sec = document.getElementById(targetId);

 // 1. Selects all sections and removes the 'show-section' class from them
 const allSections = document.querySelectorAll('section');
 allSections.forEach(section => {
  section.classList.remove('show-section');
 });

 // 2. Adds the class only to the selected section
 if(sec){
  //Forces a reflow to ensure the animation runs again
  void sec.offsetWidth;
  sec.classList.add('show-section');
 }
}

navLink.forEach(element => {
  element.addEventListener('click', (event) =>{
   event.preventDefault();

   linkAction(); // Closes the mobile menu

   const hash = element.getAttribute('href');
   const targetId = hash ? hash.replace('#','') : null;
   const targetSection = document.getElementById(targetId);

   if(targetSection){
     // 1. Executes the translateY animation on the section
     setTimeout(() =>{
      sectionAction(hash);
     }, 100)

     // 2. Smoothly scrolls to the section
     targetSection.scrollIntoView({ behavior: 'smooth'});

     // 3. Clears the hash (#) from the URL
     history.replaceState(null, '', window.location.pathname + window.location.search);
   }
  })
})


/*** Navbar Scroll Effect ***/

let lastScroll = 0; // Previous scroll position

const scrollNav = () =>{
 const header = document.getElementById('header');
 const currentScroll = window.scrollY

 // If scrolled more than 2800px AND scrolling DOWN, hide/collapse the header[cite: 2]
 if(currentScroll > lastScroll && currentScroll >= 2800){
  header.classList.add('scroll-nav');
 }else{
  // If scrolling UP or above 2800px, show the header[cite: 2]
  header.classList.remove('scroll-nav');
 }

 // Updates the previous scroll position[cite: 2]
 lastScroll = currentScroll;
}

window.addEventListener('scroll', scrollNav);