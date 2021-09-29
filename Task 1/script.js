/*******   Back-to-top button   *******/
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
    backToTopButton.classList.remove("btnExit");
    backToTopButton.classList.add("btnEntrance");
    backToTopButton.style.display = "block";
    }
}
else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
    backToTopButton.classList.remove("btnEntrance");
    backToTopButton.classList.add("btnExit");
    setTimeout(function() {
        backToTopButton.style.display = "none";
    }, 250);
    }
}
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
const targetPosition = 0;
const startPosition = window.pageYOffset;
const distance = targetPosition - startPosition;
const duration = 750;
let start = null;
window.requestAnimationFrame(step);
function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
}
}

function easeInOutCubic(t, b, c, d) {
t /= d/2;
if (t < 1) return c/2*t*t*t + b;
t -= 2;
return c/2*(t*t*t + 2) + b;
};


/*******   Navbar   *******/
const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});


/*******   Navbar-Carousel   *******/
const btn = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.imageslide');
const contents = document.querySelectorAll('.content');

var slidenav = function(arr){
    btn.forEach((bt) => {
        bt.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
       content.classList.remove("active");
    });

    btn[arr].classList.add("active");
    slides[arr].classList.add("active");

}

btn.forEach((bt,i) =>{
    bt.addEventListener("click", () =>{
     slidenav(i);
    });
});



/*******   Image-Carousel   *******/
let thumbnails = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')

	for (var i=0; i < thumbnails.length; i++){
		thumbnails[i].addEventListener('mouseover', function(){
			console.log(activeImages)
				
			if (activeImages.length > 0){
				activeImages[0].classList.remove('active')
			}
				
			this.classList.add('active')
			document.getElementById('featured').src = this.src
		})
	}

	let buttonRight = document.getElementById('slideRight');
	let buttonLeft = document.getElementById('slideLeft');

	buttonLeft.addEventListener('click', function(){
		document.getElementById('slider').scrollLeft -= 180
	})

	buttonRight.addEventListener('click', function(){
		document.getElementById('slider').scrollLeft += 180
	})

        
/*******   Video-Carousel   *******/
const next = document.getElementById('slideright');
const prev = document.getElementById('slideleft');
const track = document.querySelector('.slidertrack');
let videocontainerWidth = document.querySelector('.carousel_container').offsetWidth;
    
    window.addEventListener('resize' , ()=>{
      videocontainerWidth = document.querySelector('.carousel_container').offsetWidth;
    });
    
    let ind = 0;   
    next.addEventListener('click' , ()=>{
       ind++;
       prev.classList.add('videoshow');
       track.style.transform = `translateX(-${ind * videocontainerWidth}px)`;  
        
       if(track.offsetWidth - (ind * videocontainerWidth) < videocontainerWidth)
        {
           next.classList.add('videohide');
        }
    }
    );    
    
    prev.addEventListener('click' , ()=>{
      ind--;
      next.classList.remove('videohide');
      if (ind=== 0) {
        prev.classList.remove('videoshow');
      }
       track.style.transform = `translateX(-${ind * videocontainerWidth}px)`;
    }
    );