

$(document).ready(function(){
	function addOrRemoveArrows() {
    if ($(window).width() < 800) {
				$('.news-arows').remove();
        $('.news-controls').remove();

        $('.news-cards').parent().append('<div class="news-controls"></div>');
        $('.news-controls').append('<div class="news-arows news-control-arows-right"><img src="img/icons/arow.svg" alt=""></div>');
        $('.news-controls').append('<div class="news-arows news-control-arows-left"><img src="img/icons/arow.svg" alt=""></div>');
    } else {
        $('.news-arows').remove();
        $('.slick-list').before('<div class="news-arows news-control-arows-right"><img src="img/icons/arow.svg" alt=""></div>');
        $('.slick-list').after('<div class="news-arows news-control-arows-left"><img src="img/icons/arow.svg" alt=""></div>');
    }
}


	// Ініціалізація Slick slider
	$('.news-cards').slick({
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			responsive: [
					{
							breakpoint: 800,
							settings: {
									centerMode: true,
									centerPadding: '40px',
									slidesToShow: 1, 
							}
					}
			],
			prevArrow: false,
			nextArrow: false
	});

	addOrRemoveArrows();

	$(window).resize(function(){
			addOrRemoveArrows();
	});

	$(document).on('click', '.news-control-arows-right', function(){
			$('.news-cards').slick('slickNext');
	});

	$(document).on('click', '.news-control-arows-left', function(){
			$('.news-cards').slick('slickPrev');
	});
});

//slider 

const sliderItem = document.querySelectorAll('.slide'),
			sliderLine = document.querySelector('.slider-line'),
			sliderDoth = document.querySelectorAll('.slider-control'),
			sliderBtnPrev = document.querySelector('.left-arow-control'),
			sliderBtnPNext = document.querySelector('.right-arow-control');

let sliderCount = 0,
		sliderWidth;

window.addEventListener('resize' , showSlide);

function showSlide() {
	sliderWidth = document.querySelector('.main-slider').offsetWidth;
	sliderLine.style.width = sliderWidth*sliderItem.length + 'px';
	sliderItem.forEach(item => item.style.width = sliderWidth + 'px');

	rollSlide()
	thisSlide(sliderCount);
}

try {
	showSlide();	
} catch (err) {
  console.error(err.message);
}
function rollSlide(){
	sliderLine.style.transform = `translateX(${-sliderCount*sliderWidth}px)`
}

function thisSlide(index){
	sliderDoth.forEach(item => item.classList.remove('slider-control-active'));
	sliderDoth[index].classList.add('slider-control-active');
}

sliderDoth.forEach((doth, index) =>{
	doth.addEventListener('click', () =>{
		sliderCount = index;
		rollSlide()
		thisSlide(sliderCount);
	})
})

function nextSlide() {
	sliderCount++;
	if(sliderCount >= sliderItem.length) sliderCount = 0;

	rollSlide();
	thisSlide(sliderCount);
}

function prevSlide() {
	sliderCount--;
	if(sliderCount < 0) sliderCount = sliderItem.length -1;

	rollSlide();
	thisSlide(sliderCount);
}

sliderBtnPNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);
// accordion

const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((accordion) => {
	const image = accordion.querySelector(".rotate-on-click");
	let currentAngle = 0; 

	accordion.addEventListener("click", () => {
		const isExpanded = accordion.classList.contains("is-open");

		
		if (!isExpanded) {
			currentAngle += 180;
			image.style.transform = `rotate(${currentAngle}deg)`;
		} else {
			
			currentAngle = 0;
			image.style.transform = `rotate(${currentAngle}deg)`;
		}

		accordion.classList.toggle("is-open");

		let content = accordion.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
});

