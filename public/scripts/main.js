import '../scss/style.scss'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Слайдер
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
        clickable: true,
    },
    modules: [Navigation, Pagination],
    autoplay: true,

  });

// Аккардеон

const questionItemContent = document.querySelectorAll('.question-item_content')
const questionItemEvent = document.querySelectorAll('.question-event')

questionItemEvent.forEach(function (item) {
  item.addEventListener('click', function (event) {
    removeActiveClass(questionItemContent)
    removeActiveClass(questionItemEvent)

    let parent = event.target.closest('.question-item');
    let content = parent.querySelector('.question-item_content');
    
    content.classList.toggle('active');
    item.classList.toggle('active')
  });
});

function removeActiveClass(elements) {
  elements.forEach(function (item) {
    item.classList.remove('active');
  });
}