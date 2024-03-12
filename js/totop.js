// to top 
const scrollToTopButton = document.querySelector('.services-arrow');

scrollToTopButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});