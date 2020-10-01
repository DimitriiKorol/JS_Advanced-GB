Vue.component('search', {
    data() {
        return {
            searchLine: '',
            products: [],
            filtered: [],
            catalogUrl: '/catalogData.json',
        }
    },

    methods: {
        FilterGoods() {
            let regexp = new RegExp(this.searchLine, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
    },

    mounted(){
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },

    template: `
    <form action="#" class="navForm" @submit.prevent="FilterGoods">
        <input type="text" class="searchInput" v-model="searchLine">
        <button class="searchBtn" type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>`,
});
