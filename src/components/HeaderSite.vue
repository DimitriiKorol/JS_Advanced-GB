<template>
    <header class="header">
        <div class="container headerInside">
          <router-link to="/" class="logo">
            BRAN<span class="logoD">D</span>
          </router-link>
            <form class="searchWrap" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <div class="searchBrowse">
                    Browse <i class="fas fa-caret-down"></i>
                </div>
                <input
                  v-model="userSearch"
                  class="inputSearchBrowse"
                  placeholder="Search for Item..."
                  type="text">
                <button type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <img class="headerCart" src="../assets/img/topCart.png" alt="">
            <router-link
            :to="{ name: 'cart', params: { cart_data: CART }}"
            class="r-link">
              <button class="accountBtn">
                  My Account
                  <i class="fas fa-caret-down"></i>
              </button>
            </router-link>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderSite',
  data() {
    return {
      userSearch: '',
    };
  },
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters([
      'CART',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900');
$mainColor: #f16d7f;
$mainFont: 'Lato', sans-serif;

@keyframes headerAnimation{
    from{
        left: -100%;
    }

    to{
        left:0;
    }
}

.header {
    height: 100px;
    background-color: #ffffff;
    border-bottom: 1px solid #ececec;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation-name: headerAnimation;
    animation-duration: 1s;

    @media (max-width: 991px) {
        height: auto;
        padding: 15px;
    }
}

.headerInside {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 991px) {
        flex-direction: column;
    }

    > * :not(.logo, i) {
        @media (max-width: 991px) {
            margin-top: 15px;
        }
    }
}

.logo {
    font-family: $mainFont;
    font-size: 27px;
    font-weight: 300;
    text-transform: uppercase;
    color: #222222;
    background: url("../assets/img/logo.png") no-repeat;
    line-height: 51px;
    padding-left: 71px;
    text-decoration: none;

    .logoD {
        font-weight: 700;
        color: #f16d7f;
    }
}

.searchWrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 46px;
    @media (max-width: 991px) {
        margin-left: 0;
    }

    .searchBrowse {
        font-family: inherit;
        font-size: 14px;
        font-weight: 400;
        color: #222222;
        width: 87px;
        height: 36px;
        background-color: #cdcdcc;
        border: 1px solid #e6e6e6;
        border-radius: 3px 0 0 3px;
        display: flex;
        justify-content: center;
        align-items: center;

        i {
            color: #838383;
            margin-left: 8px;
        }
    }

    .inputSearchBrowse {
        height: 36px;
        width: 279px;
        background-color: #ffffff;
        border-left: none;
        border-right: none;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        padding-left: 15px;
        outline: none;
        @media (max-width: 450px) {
            width: auto;
        }
        @media (max-width: 365px) {
            width: 150px;
        }
    }

    button {
        width: 36px;
        height: 36px;
        background: inherit;
        border: 1px solid #e6e6e6;
        border-radius: 0 3px 3px 0;
        outline: none;
        cursor: pointer;

        i {
            font-size: 14px;
            color: #a4a4a4;
            margin: 0;
        }
    }
}

.r-link {
  text-decoration: none;
}

.headerCart {
    margin-left: auto;
    @media (max-width: 991px) {
        margin-left: initial;
    }
}

.accountBtn {
    height: 38px;
    width: 130px;
    background-color: #f16d7f;
    border-radius: 3px;
    font-family: inherit;
    font-size: 14px;
    line-height: 38px;
    font-weight: 400;
    color: #ffffff;
    margin-left: 26px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    transition-duration: 0.5s;

    @media (max-width: 991px) {
        margin-left: 0;
    }

    i {
        font-size: 14px;
        line-height: 38px;
        color: #ffffff;
        margin-left: 8px;
    }

    &:hover {
        background-color: #ed455c;
        cursor: pointer;
    }
}
</style>
