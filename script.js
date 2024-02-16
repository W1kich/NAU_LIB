//slider try

const sliderItem = document.querySelectorAll('.slide'),
			sliderLine = document.querySelector('.slider-line'),
			sliderDoth = document.querySelectorAll('.slider-control');

let sliderCount = 0,
		sliderWidth;

window.addEventListener('resize' , showSlide);

function showSlide() {
	sliderWidth = document.querySelector('.main-slider').offsetWidth;
	sliderLine.style.width = sliderWidth*sliderItem.length + 'px';
	sliderItem.forEach(item => item.style.width = sliderWidth + 'px');
	console.log(sliderWidth)

	rollSlide()
	thisSlide(sliderCount);
}

showSlide();

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
// accordion

const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((accordion) => {
  const image = accordion.querySelector(".rotate-on-click");
  let currentAngle = 0; // Track the current rotation angle

  accordion.addEventListener("click", () => {
    const isExpanded = accordion.classList.contains("is-open");

    // Rotate the image by 90 degrees only if the panel is expanding
    if (!isExpanded) {
      currentAngle += 180;
      image.style.transform = `rotate(${currentAngle}deg)`;
    } else {
      // Reset rotation back to 0 when collapsing
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

