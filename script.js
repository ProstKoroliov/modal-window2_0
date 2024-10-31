const openPopup = document.getElementById('open_popup'); // Кнопка для открытия попапа
const closePopup = document.getElementById('popup_close'); // Элемент для закрытия попапа
const popup = document.getElementById('popup'); // Сам попап
const popupCloseBtn = document.querySelector('.popup_close_btn'); // Кнопка закрытия попапа

// Путь к изображению по умолчанию 
const defaultImage = 'img/exit.svg'; 
// Путь к изображению активного состояния 
const activeImage = 'img/exit_active.svg'; 

// Открытие попапа
openPopup.addEventListener('click', function(e) { 
    e.preventDefault(); 
    popup.classList.add('active'); 
}); 

// Закрытие попапа при нажатии на кнопку закрытия
closePopup.addEventListener('click', () => { 
    popup.classList.remove('active'); 
}); 

// Изменение изображения кнопки при наведении
popupCloseBtn.addEventListener('mouseenter', () => { 
    popupCloseBtn.src = activeImage; 
}); 

popupCloseBtn.addEventListener('mouseleave', () => { 
    popupCloseBtn.src = defaultImage; 
}); 

// Закрытие попапа при клике вне его
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
    }
});

// Очистка полей ввода при загрузке страницы
document.addEventListener('DOMContentLoaded', () => { 
    const form = document.getElementById('myForm'); 
    if (form) {
        form.reset(); 
    }
});
