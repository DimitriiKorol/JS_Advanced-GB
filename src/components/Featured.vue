<template>
<div class="container featured" id="featured">
  <h3 class="featuredTitle">Fetured Items</h3>
  <h6 class="featuredDesc">Shop for items based on what we featured in this week</h6>
  <div class="featuredContent">

    <featured-item
    class="featuredItemWrap"
    v-for="item in FEATURES"
    :key="item.id_product"
    :item_data="item"
    @addToCart="addToCart"/>

  </div>
  <router-link to="/catalog" class="featuredBrowse">
    <b>Browse All Product</b>
    <i class="fas fa-long-arrow-alt-right"></i>
  </router-link>
</div>
</template>

<script>

import featuredItem from '@/components/FeaturedItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FeatureList',
  components: {
    featuredItem,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'FEATURES',
      'CART',
    ]),
  },
  methods: {
    ...mapActions([
      'GET_ITEMS_FROM_API',
      'ADD_TO_CART',
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
      console.log(data);
    },
  },
  mounted() {
    this.GET_ITEMS_FROM_API();
  },
};
</script>

<style lang="scss" scoped>
.featured {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 100px !important;
}

.featuredTitle {
    font-family: "Lato", sans-serif;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: #222222;
    text-align: center;
    margin: 0;
}

.featuredDesc {
    font-family: "Lato", sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.025em;
    color: #9f9f9f;
    text-align: center;
    display: block;
    margin-top: 16px;
}

.featuredContent {
    width: inherit;
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 28px;
    grid-row-gap: 39px;

    @media(max-width: 1140px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
}

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

.featuredBrowse {
    font-family: "Lato", sans-serif;
    font-size: 16px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: #ffffff;
    width: 212px;
    height: 48px;
    background-color: #f16d7f;
    border: 0;
    display: block;
    margin: 60px auto 110px;
    text-decoration: none;
    text-align: center;
    transition-duration: 0.5s;

    &:hover {
        background-color: #ed455c;
        cursor: pointer;
    }

    b {
        font-weight: 700;
    }

    i {
        margin-left: 10px;
    }
}
</style>
