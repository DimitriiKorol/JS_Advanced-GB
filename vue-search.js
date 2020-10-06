Vue.component('search', {
    data() {
        return {
            searchLine: '',
        }
    },

    template: `
    <form action="#" class="navForm" @submit.prevent="$parent.$refs.products.filter(searchLine)">
        <input type="text" class="searchInput" v-model="searchLine">
        <button class="searchBtn" type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>`,
});
