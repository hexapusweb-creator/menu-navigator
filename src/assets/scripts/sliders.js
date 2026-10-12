const buttons = document.querySelectorAll("[data-carousel-button]");
const trackItens = document.querySelector('.slider-slice');
const slidesItens = Array.from(trackItens.children);

const dotsContainer = document.getElementById('dotsContainer');
let currentIndexS = 0;

function updateSlider(newIndex) {

  const dots = document.querySelectorAll('.dot');

  dots.forEach((dot, index) => {
   if(index === newIndex){
    dot.classList.add('active');
   }else{
    dot.classList.remove('active');
   }
  })
}

function createDotsSlider(){
  slidesItens.forEach((_, index) =>{

   const dot = document.createElement('div');
   dot.classList.add('dot');

   if(index === 0) dot.classList.add('active');

   dot.addEventListener('click', () =>{
    currentIndexS = index;
    updateSlider();
   });

   dotsContainer.appendChild(dot);
  });
}

buttons.forEach(button =>{
 button.addEventListener("click", () =>{
   updateSlider();

   const offset = button.dataset.carouselButton === "next" ? 1 : -1
   const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

   const activeSlide = slides.querySelector("[data-active]")

   let newIndex = [...slides.children].indexOf(activeSlide) + offset
   if(newIndex < 0) newIndex = slides.children.length -1
   if(newIndex >= slides.children.length) newIndex = 0

   slides.children[newIndex].dataset.active = true
   delete activeSlide.dataset.active

   updateSlider(newIndex);
 })
})



createDotsSlider();