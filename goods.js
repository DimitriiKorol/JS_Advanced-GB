class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render () {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods () {
        this.goods = [
            {title: 'Shirt', price: 150},
            {title: 'Socks', price: 50},
            {title: 'Jacket', price: 350},
            {title: 'Shoes', price: 250},
        ];
    }

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
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
        let cartSum = this.goodsSum();
        document.querySelector('.goods-list').insertAdjacentHTML('beforeend', cartSum);
    }
}
