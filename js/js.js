let btnText = document.querySelector('.read-more__btn');
btnText.onclick = function() {
    if (btnText.textContent === 'Показать все') {
        btnText.textContent = 'Скрыть';
        document.querySelector('.read-more__icon').style.rotate="180deg";
    } else {
        btnText.textContent = 'Показать все';
        document.querySelector('.read-more__icon').style.rotate="";
    }
};


let toggleButton = document.getElementById('toggle');
let brandList = document.querySelector('.brand-list');

toggleButton.addEventListener('click', function() {
    brandList.classList.toggle('hide');
})

    if (/Android|webOS|iPhone|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        const swiper = new Swiper('.swiper', {

            direction: 'horizontal',
            loop: true,
            spaceBetween: 10,
          
            pagination: {
              el: '.swiper-pagination',
            },

            slidesPerView: 1.1
        });

        let readMoreButton = document.querySelector('.read-more');
        readMoreButton.classList.add('delete');

    } else {
        let changeForMob = document.querySelector('.wraper');
        changeForMob.classList.add('swiper-wrapper--grid');

        let changeForDescUl = document.querySelector('.swiper');
        changeForDescUl.classList.remove('swiper');

        let changeForDescDiv = document.querySelector('.swiper-wrapper');
        changeForDescDiv.classList.remove('swiper-wrapper');

        let changeForDescLi = document.querySelectorAll('.swiper-slide');
        for (let i = 0; i < changeForDescLi.length; i++) {
            let item = changeForDescLi[i];
            item.classList.remove('swiper-slide');
    }
}