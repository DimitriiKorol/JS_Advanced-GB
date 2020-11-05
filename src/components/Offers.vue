<template>
<div class="container offers" id="offers">
  <router-link to="/catalog">
    <div id="men">
      <img src="../assets/img/offer1.jpg" alt="">
      <div class="label">
        <div class="labelTop">
          hot deal
        </div>
        <div class="labelBottom">for men</div>
      </div>
    </div>
  </router-link>
  <router-link to="/catalog">
    <div id="accesories">
      <img src="../assets/img/offer2.jpg" alt="">
      <div class="label">
        <div class="labelTop">
          luxirous & trendy
        </div>
        <div class="labelBottom">
          accesories
        </div>
      </div>
    </div>
  </router-link>
  <router-link to="/catalog">
    <div id="women">
      <img src="../assets/img/offer3.jpg" alt="">
      <div class="label">
        <div class="labelTop">30% offer</div>
        <div class="labelBottom">women</div>
      </div>
    </div>
  </router-link>
  <router-link to="/catalog">
    <div id="kids">
      <img src="../assets/img/offer4.jpg" alt="">
      <div class="label">
        <div class="labelTop">new arrivals</div>
        <div class="labelBottom">for kids</div>
      </div>
    </div>
  </router-link>
</div>
</template>

<style lang="scss">
.offers {
    margin-top: 100px !important;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 829px;
    opacity: 0;
    animation: offersAnimation 0.5s 1;
    animation-fill-mode: forwards;
    animation-delay: 2.5s;

    @media(max-width: 1124px) {
        height: inherit;
        align-items: center;
        justify-content: center;
    }

    a {
        position: relative;

        @media(max-width: 1124px) {
            margin-bottom: 25px;
        }

        &:first-child {
            margin-bottom: 20px;
            margin-right: 20px;

            @media(max-width: 1140px) {
                margin-bottom: 5px;
                margin-right: 5px;
            }

            @media(max-width: 1124px) {
                margin-bottom: 25px;
                margin-right: 0;
            }
        }

        .label {
            position: absolute;
            top: 25px;
            padding: 15px 20px;
            background: white;
            text-transform: uppercase;

            .labelTop {
                font-size: 18px;
                color: #222222;
                font-weight: 700;
            }

            .labelBottom {
                font-size: 30px;
                color: #f16d7f;
                font-weight: 900;
            }
        }
    }
}

@keyframes offersAnimation {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
