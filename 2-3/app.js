const size = {
    small: {price: 50, calories: 20},
    big: {price: 100, calories: 40},
};

const stuffing = {
    cheese: {price: 10, calories: 20},
    salad: {price: 20, calories: 5},
    potato: {price: 15, calories: 10},
};

const topping = {
    seasoning: {price: 15, calories: 0},
    mayo: {price: 20, calories: 5},
};

class Hamburger {
    constructor (size, stuffing) {
            this.size = size;
            this.stuffing = stuffing;
    }

    addTopping(topping) { // Добавить добавку
        let addTop = prompt('Хотите добавить приправу или майонез? (yes/no)').toLowerCase();
        if (addTop == 'yes') {
            this.getToppings(topping);
        } else if (addTop == 'no') {
            this.removeTopping(topping);
        } else {
            alert("Введите корректный ответ");
        }
    }

    removeTopping(topping) { // Убрать добавку
        let toppingPrice = 0;
        return toppingPrice;
    }

    getToppings(topping) { // Получить список добавок
        while (true) {
            let hamTop = prompt("Хотите добавить приправу(seasoning) или майонез(mayo)?").toLowerCase();
            if (topping.hasOwnProperty(hamTop)) {
                let toppingPrice = topping[hamTop]['price'];
                let toppingCalories = topping[hamTop]['calories'];
                return toppingPrice, toppingCalories;
            } else {
                alert("Введите корректный ответ");
            }
        }
    }

    getSize() { // Узнать размер гамбургера
        while (true) {
            let sizeHam = prompt('Укажите размер гамбургера: большой - "big", маленький - "small".').toLowerCase();
            if (size.hasOwnProperty(sizeHam)) {
                let sizePrice = size[sizeHam]['price'];
                let sizeCalories = size[sizeHam]['calories'];
                return sizePrice, sizeCalories;
            } else {
                alert("Введите корректный размер");
            }
        }
    }

    getStuffing() { // Узнать начинку гамбургера
        while (true) {
            let stuffingHam = prompt('Укажите начинку гамбургера: \n сырная - "cheese",\n с салатом - "salad",\n с картошкой - "potato".').toLowerCase();
            if (stuffing.hasOwnProperty(stuffingHam)) {
                let stuffingPrice = stuffing[stuffingHam]['price'];
                let stuffingCalories = stuffing[stuffingHam]['calories'];
                return stuffingPrice, stuffingCalories;
            } else {
                alert("Введите корректный размер");
            }
        }
    }

    calculatePrice(sizePrice, stuffingPrice, toppingPrice) { // Узнать цену
        let priceHamburger = sizePrice + stuffingPrice + toppingPrice;
        return priceHamburger;
    }

    calculateCalories(sizeCalories, stuffingCalories, toppingCalories) { // Узнать калорийность
        let calsHamburger = sizeCalories + stuffingCalories + toppingCalories;
        return calsHamburger;
    }
}

alert('Добро пожаловать! Для заказа гамбургера проследуйте инструкциям. В конце Вам будет сообщена стоимость и калорийность заказа.');
let init = new Hamburger(size, stuffing);
init.getSize();
init.getStuffing();
init.addTopping(topping);
init.calculatePrice(sizePrice, stuffingPrice, toppingPrice);
init.calculateCalories(sizeCalories, stuffingCalories, toppingCalories);
alert(`Стоимость вашего заказа составляет ${init.priceHamburger} рублей, калорийность - ${init.calsHamburger} ккалорий!`);
