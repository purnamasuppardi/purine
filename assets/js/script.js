/*=============================================== On Load Function(Start) ===============================================*/
$(function () {
    function scrollTop() {
        const scrollTop = document.getElementById('scroll-top');
        const navbar = document.getElementById('nav');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if (this.scrollY >= 850) {
            scrollTop.classList.add('show-scroll');
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-dark');
        } else {
            scrollTop.classList.remove('show-scroll')
            navbar.classList.remove('bg-dark');
            navbar.classList.add('bg-transparent');
        };
    }
    window.addEventListener('scroll', scrollTop);
});
/*=============================================== On Load Function(Finish) ===============================================*/

/*=============================================== Other Function(Start) ===============================================*/
/*=============================================== Other Function(Finish) ===============================================*/