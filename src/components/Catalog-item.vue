<template>
  <div class="col-lg-4">
    <router-link
      :to="{ name: 'Item', params: {id: item_data.id_product}}"
      class="productsItem" @click="sendData">
      <img :src=" require('../assets/img/products/' + item_data.picture) ">
      <div class="productsItemTitle">{{ item_data.product_name }}</div>
      <div class="productsItemPrice">&#36;{{ item_data.price }}.00</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'catalog-item',
  props: {
    item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {
    sendData() {
      this.$emit('sendData', this.item_data);
    },
  },
};
</script>

<style lang="scss">
.col-lg-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
}

.productsItem {
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
    }
}

.productsItemTitle {
    font-family: "Lato", sans-serif;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    color: #6f6e6e;
    margin: 19px 0 17px 15px;
}

.productsItemPrice {
    font-family: "Lato",sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #f16d7f;
    margin-left: 15px;
}
</style>
