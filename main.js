var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect:'coverflow',
  loop:true,
 
 coverflowEffect:{
rotate:0,
stretch:0,
depth:100,

modifier:2.5,
 },


  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 breakpoints:{
  900: {
    slidesPerView: 3,
  },
 }

});