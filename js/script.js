"use strict";

const contents = document.querySelectorAll('.program-line__content');//находим все блоки с данным классом

contents.forEach((elem) => { //перебор тайтлов
  const title = elem.querySelector('.program-line__title');  

  title.addEventListener('click', () => {    //повесили слушатель событий (клик) на тайтл

    contents.forEach((elems) => { //перебор таргета
      const descr = elems.querySelector('.program-line__descr');
      descr.classList.remove('active'); //удаляем класс 

      if (elems == elem) {
        descr.classList.toggle('active'); //добавили при событии
      } 

    })

  })

})