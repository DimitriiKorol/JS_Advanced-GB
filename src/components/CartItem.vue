<template>
<div class="">
  <div class="shopGridDetail">
      <img :src=" require('../assets/img/products/' + cart_item_data.picture) ">
      <h6>{{ cart_item_data.product_name }}</h6>
      <p>Color:<b>Red</b></p>
      <p>Size:<b>Xll</b></p>
  </div>
  <div class="shopGridPrice">&#36;{{ cart_item_data.price }}.00</div>
  <div class="shopGridQuantity">
    <input type="text" :placeholder="cart_item_data.quantity" v-model="cart_item_data.quantity">
  </div>
  <div class="shopGridShipping">FREE</div>
  <div class="shopGridSubtotal">${{ cart_item_data.price * cart_item_data.quantity }}</div>
  <div class="shopGridAction" @click="deleteFromCart">
    <i class="fas fa-times-circle"></i>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
  },
};
</script>

<style lang="scss">
.shopGridPrice, .shopGridQuantity, .shopGridShipping, .shopGridSubtotal, .shopGridAction{
    border-bottom: 1px solid #eaeaea;
    text-align: center;
    line-height: 162px;
}

.shopGridDetail{
    text-align: left;
    margin-top: 22px;
    border-bottom: 1px solid #eaeaea;

    img{
        float: left;
        max-width: 100px;
        margin-right: 21px;
        transition-duration: 0.2s;

        &:hover{
            transform: perspective(200px) scale(2,2);
            outline: 3px solid #f16d7f;
        }
    }

    h6{
        font-family: inherit;
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase;
        color: #222222;
        margin: 13px 0 35px 0;
    }

    p{
        font-family: inherit;
        font-size: 13px;
        font-weight: 400;
        color: #575757;
        margin-bottom: 0;

        b{
            font-weight: 300;
            color: #6f6e6e;
            margin-left: 10px;
        }
    }
}

.shopGridPrice{
    font-family: inherit;
    font-size: 13px;
    font-weight: 400;
    color: #656565;
}

.shopGridQuantity{
    font-family: inherit;
    font-size: 13px;
    font-weight: 400;
    color: #656565;

    input{
        width: 54px;
        line-height: 30px;
        background-color: #ffffff;
        border: 1px solid #eaeaea;
        text-align: center;

        &::placeholder {
            color: #656565;
        }
    }
}

.shopGridShipping{
    line-height: 162px;
}
.shopGridSubtotal{

}
.shopGridAction{
    text-align: right;

    i{
        margin-right: 19px;
    }
}
</style>
