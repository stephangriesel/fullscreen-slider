let sliderImages = document.querySelectorAll('.slide'),
arrowlLeft = document.querySelector('#arrow-left'),
arrowlRight = document.querySelector('#arrow-right'),
current = 0;

// Clear All Images

function reset(){
    for(let i = 0; i < sliderImages.length; i ++) {
        sliderImages[i].style.display = 'none';


    }
}

// Init slider
function startSlide () {
    reset();
    sliderImages[0].style.display = 'block';
}

//Show previous

function slideLeft () {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// show next
function slideRight (){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}


// Left arrow click 
arrowlLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

// Right arrow click 
arrowlRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});

startSlide();