const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");


const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");


let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';



nextBtn.addEventListener('click',()=>{
        if(counter >= 7){
            return;
        }
        carouselSlide.style.transition = "transform .5s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prevBtn.addEventListener('click',()=>{
    if(counter <= 0){
        return;
    }
        carouselSlide.style.transition = "transform .5s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

