//API учебный
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>` ;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    //Получаем товары?
    fetchGoods(cb) {
        makeGETRequest(`${API}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            cb();
        })
    }

    /*Фейковый fetch
    fetchGoods () {
        this.goods = [
            {title: 'Shirt', price: 150},
            {title: 'Socks', price: 50},
            {title: 'Jacket', price: 350},
            {title: 'Shoes', price: 250},
        ];
    }*/

    goodsSum () {
        let sumPrice = 0;
        this.goods.forEach(good => {
            sumPrice += good.price;
        });
        return `<div class="cartSummary">Итого: <p>${sumPrice}</p></div>`;
    }

    render () {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
        let cartSum = this.goodsSum();
        document.querySelector('.goods-list').insertAdjacentHTML('beforeend', cartSum);
    }
}
