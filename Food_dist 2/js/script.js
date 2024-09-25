 const tab_btns = document.querySelectorAll('.tabheader__item')
const tabcontent = document.querySelectorAll('.tabcontent')

function showTabs(idx) {
    tabcontent.forEach(slide => slide.classList.add('hide', 'fade'))
    tabcontent[idx].classList.remove('hide')
}
showTabs(0)

tab_btns.forEach((btn, idx) => {
    btn.onclick = () => {
        tab_btns.forEach(el => el.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active')
        showTabs(idx)
    }
})



const slides = document.querySelectorAll('.offer_slide')
const prev = document.querySelector('.offer_slider-prev')
const next = document.querySelector('.offer_slider-next')
let  slideIndex = 0
showSlide()
function showSlide(n) {
if(n < 0) {
slideIndex = slides.length - 1
}
if(n > slides.length - 1) {
slideIndex = 0
}
slides.forEach(slide => slide.classList.add('hide', 'fade'))
slides [slideIndex].classList.remove('hide')
}


next.onclick = () => {
    slideIndex++
    showSlide(slideIndex)
    }
    prev.onclick = () => {
    slideIndex--
    showSlide(slideIndex)
    } 



    function timer() {
        const deadline = '2024-03-20';
        const days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');
    
        function getTimeRemaining(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date());
            if (t <= 0) {
                return {
                    total: 0,
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                };
            }
            const days = Math.floor(t / (1000 * 60 * 60 * 24));
            const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((t / (1000 * 60)) % 60);
            const seconds = Math.floor((t / 1000) % 60);
    
            return {
                total: t,
                days,
                hours,
                minutes,
                seconds,
            };
        }
    
        function updateClock() {
            const t = getTimeRemaining(deadline);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
    
            if (t.total <= 0) {
                clearInterval(timerId);
            }
        }
    
        const timerId = setInterval(updateClock, 1000);
    }
    
    timer();


    // script.js

// Функция для открытия модального окна
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}


function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    document.body.style.overflow = '';
}


const modal = document.querySelector('.modal');


const btns = document.querySelectorAll('[data-modal]');


const closeBtn = document.querySelector('[data-close]');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        openModal('.modal', null);
    });
});


closeBtn.addEventListener('click', () => {
    closeModal('.modal');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal('.modal');
    }
});