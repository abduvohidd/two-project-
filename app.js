document.querySelectorAll(".x").forEach(x => {
    x.addEventListener('click', () => {
        x.parentElement.parentElement.classList.toggle('change');
    });
    
});



document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('menu');
});


document.querySelector('.up').addEventListener('click', () => {
    document.querySelector('.btn-lingus').classList.toggle('test');

});






// var swiper = new Swiper('.swiper-container', {
//     navigation: {
//         nextEl: '.slider-arrow-next',
//         prevEl: '.slider-arrow-prev',
//     },
// });



var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    });