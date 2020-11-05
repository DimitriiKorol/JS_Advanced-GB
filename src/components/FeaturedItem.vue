<template>
  <div class="featuredItemWrap">
    <div class="featuredImgWrap">
      <div class="featuredCart">
        <button @click="addToCart">
          <img :src=" require('../assets/img/shopCart.png') "> Add to Cart
        </button>
      </div>
      <img :src=" require('../assets/img/products/' + item_data.picture)" alt="">
    </div>
    <p>{{ item_data.product_name }}</p>
    <i>&#36;{{ item_data.price }}.00</i>
  </div>
</template>

<script>
export default {
  name: 'featured-item',
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
    addToCart() {
      this.$emit('addToCart', this.item_data);
    },
  },
  mounted() {
    this.$set(this.item_data, 'quantity', 1);
  },
};
</script>

<style lang="scss" scoped>
.featuredItemWrap {
    width: 264px;
    height: 370px;
    transition-duration: 0.5s;

    p {
        font-family: "Lato", sans-serif;
        font-size: 13px;
        line-height: 1.2;
        font-weight: 400;
        text-transform: uppercase;
        color: #222222;
        margin: 19px 0 17px 21px;
    }

    i {
        font-family: "Lato", sans-serif;
        font-size: 16px;
        line-height: 1.2;
        font-weight: 700;
        text-transform: uppercase;
        color: #f16d7f;
        margin-left: 21px;
    }

    &:hover {
        box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);

        .featuredCart {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

.featuredImgWrap {
    height: 280px;
    position: relative;
}

.featuredCart {
    background: rgba(0, 0, 0, 0.5);
    display: none;
    position: absolute;
    height: inherit;
    width: 100%;
    transition-duration: 0.5s;

    button {
        padding: 15px;
        border: 1px solid #ffffff;
        background: none;
        color: white;
        font-size: 13px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;

        img {
            margin-right: 10px;
        }
    }
}
</style>
