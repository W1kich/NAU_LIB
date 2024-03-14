// to top 

const scrollToTopButton = document.querySelector('.services-arrow');

scrollToTopButton.addEventListener('click', () => {
    scrollToTop(0);
});

function scrollToTop(scrollTargetY, speed = 2000) {
    let scrollY = window.scrollY || document.documentElement.scrollTop;
    let currentTime = 0;

    const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

    const easingEquations = {
        easeOutSine: function (pos) {
            return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function (pos) {
            return (-0.5 * (Math.cos(Math.PI * pos) - 1));
        }
    };

    function tick() {
        currentTime += 1 / 60;

        const p = currentTime / time;
        const t = easingEquations.easeInOutSine(p);

        if (p < 1) {
            window.requestAnimationFrame(tick);
            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    }

    tick();
}
