//Получаем данные с кноп
let buyButtons = document.querySelectorAll('.buy-btn');

//Перебираем массив на клики
buyButtons.forEach(function(button) {
    button.addEventListener('click', buyClick);
});

//обработчик клика "В корзину"
function buyClick(event) {
    let prodTitle = event.target.parentNode.querySelector('.desc.h3').textContent;
    let prodPrice = +event.target.parentNode.querySelector('desc.p').textContent;
    CartProd(prodTitle, prodPrice);
}


class Cart {
    constructor() {

    }

}

class CartItem {
    constructor() {

    }
}
