const containerSlider=document.querySelector('.slider-container');
const rightSlide=document.querySelector('.right-slide');
const leftSlide=document.querySelector('.left-slide');
const upBtn=document.querySelector('.up-button');
const dwnBtn=document.querySelector('.down-button');
const slidesLength=rightSlide.querySelectorAll('div').length;

var activeSlideIndex=0

leftSlide.style.top=`-${(slidesLength-1)*100}vh`

upBtn.addEventListener('click',  ()=>changeSlide('up'))
dwnBtn.addEventListener('click', ()=>changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = containerSlider.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    rightSlide.style.transform=`translateY(-${activeSlideIndex * 
        sliderHeight}px)`

        leftSlide.style.transform=`translateY(${activeSlideIndex * 
            sliderHeight}px)`
    
}