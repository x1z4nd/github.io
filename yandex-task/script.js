document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
    let currentSlide = 1;
    let autoSlideInterval;

    const currentSlideElement = document.querySelector('.current-slide');
    const totalSlidesElement = document.querySelector('.total-slides');

    function goToSlide(index) {
        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
        currentSlide = index + 1;
        currentSlideElement.textContent = currentSlide;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            nextBtn.click();
        }, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides) {
            goToSlide(currentSlide);
        } else {
            currentSlide = 1;
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = `translateX(0)`;
            setTimeout(() => {
                slidesContainer.style.transition = 'transform 0.5s ease-in-out';
                goToSlide(0);
            }, 50);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 1) {
            goToSlide(currentSlide - 2);
        } else {
            currentSlide = totalSlides;
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = `translateX(${-slideWidth * (totalSlides - 1)}px)`;
            setTimeout(() => {
                slidesContainer.style.transition = 'transform 0.5s ease-in-out';
                goToSlide(totalSlides - 1);
            }, 50);
        }
    });

    slidesContainer.addEventListener('transitionend', () => {
        if (currentSlide > totalSlides) {
            currentSlide = 1;
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = `translateX(0)`;
            setTimeout(() => {
                slidesContainer.style.transition = 'transform 0.5s ease-in-out';
                goToSlide(0);
            }, 50);
        }
    });

    window.addEventListener('load', () => {
        totalSlidesElement.textContent = totalSlides;
        startAutoSlide();
    });

    slidesContainer.addEventListener('mouseenter', stopAutoSlide);
    slidesContainer.addEventListener('mouseleave', startAutoSlide);
});





// let slides = document.querySelectorAll('.slides');
// let slider = [];
// for (let i=0; i< slides.length; i++){
//     slider[i] = slides[i].src;
// }

// let step = 0;
// let offset = 0;

// function draw(){
//     let img = document.createElement('img');
//     img.src = slider[step];
//     img.classList.add('slide')
//     img.style.left = offset*512 + 'px';
//     document.querySelector('#slides').appendChild(img);
//     if (step + 1 == slider.length){
//         step = 0;
//     }
//     else{
//         step++;
//     }
//     offset = 1;
// }

// function left{
//     document.onclick = null;
//     slides2 = document.querySelectorAll('.slides');
//     let offset2 = 0;
//     for (let i=0; i< slides2.length; i++){
//         slides2[i].style.left = offset2*512 + 'px';
//         offset2++;
//     }
//     setTimeout(function(){
//         slides2[0].remove();
//         draw();
//         document.onclick = left;
//     }, 4000);
    
// }

// draw();draw();

// document.onclick = left;