let btnText = document.querySelector('.read-more__btn');
btnText.onclick = function() {
    if (btnText.textContent === 'Показать все') {
        btnText.textContent = 'Скрыть';
        document.querySelector('.read-more__icon').style.backgroundImage="url(img/brands/expand2.svg)";
    } else {
        btnText.textContent = 'Показать все';
        document.querySelector('.read-more__icon').style.backgroundImage="";
    }
};


let toggleButton = document.getElementById('toggle');
let brandList = document.querySelector('.brand-list');

toggleButton.addEventListener('click', function() {
    brandList.classList.toggle('hide');
})

    const swiper = new Swiper('.swiper', {

        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,
      
        pagination: {
          el: '.swiper-pagination',
        },
    
        // centeredSlides: true,
    
        slidesPerView: 1.1
    });