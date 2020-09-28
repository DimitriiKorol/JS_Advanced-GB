const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
    },

    methods: {
        makeGETRequest(url, callback) {
            const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

            var xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }
            xhr.open('GET', url, true);
            xhr.send();
        },

        mounted() {
            this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
                this.goods = goods;
                this.filteredGoods = goods;
            });
        },

        FilterGoods() {
            const regexp = new RegExp(value, 'i');
            this.filtered = this.allProducts.filter(product => regexp.test(product.product_name));
            this.allProducts.forEach(el => {
                const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
                if (!this.filtered.includes(el)) {
                    block.classList.add('invisible');
                } else {
                    block.classList.remove('invisible');
                }
            })
        },

        isVisibleCart() {
            let shopCart = document.querySelector('.shopCart');
            if (!document.querySelector('.displayCart')) {
                shopCart.classList.add('displayCart');
            } else {
                shopCart.classList.remove('displayCart');
            }
        },
    }
});
