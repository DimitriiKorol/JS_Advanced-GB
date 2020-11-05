<template>
<div class="container offerForWomen">
  <div class="offerForWomenBanner">
    <div class="offerText">
      <div class="percent">30%
        <span>offer</span>
      </div>
      <div class="forWomen">
        for women
      </div>
    </div>
  </div>
  <ul class="offerDetails">
    <li class="offerUnit">
      <div class="offerDetailsTitle">Free Delivery</div>
      <div class="offerDetailsText">
        Worldwide delivery on all.
        Authorit tively morph next-generation innov tion with extensive models.
      </div>
    </li>
    <li class="offerUnit">
      <div class="offerDetailsTitle">Free Delivery</div>
      <div class="offerDetailsText">
        Worldwide delivery on all.
        Authorit tively morph next-generation innov tion with extensive models.
      </div>
    </li>
    <li class="offerUnit">
      <div class="offerDetailsTitle">Free Delivery</div>
      <div class="offerDetailsText">
        Worldwide delivery on all.
        Authorit tively morph next-generation innov tion with extensive models.
      </div>
    </li>
  </ul>
</div>
</template>

<style lang="scss" scoped>
.offerForWomen {
    display: flex;
    height: 530px;
    margin-bottom: 97px !important;

    @media(max-width: 1140px) {
        flex-wrap: wrap;
        justify-content: center;
        height: auto;
    }
}

.offerForWomenBanner {
    flex-shrink: 0;
    height: inherit;
    width: 767px;
    background: url("../assets/img/rectangle_21_copy_1314.jpg") no-repeat;
    background-size: cover;

    @media(max-width: 1140px) {
        height: 529px;
    }

    @media(max-width: 767px) {
        width: 100%;
        background: url("../assets/img/rectangle_21_copy_1314.jpg") no-repeat 500px cover;
    }
}

.offerText {
    margin-top: 146px;
    margin-left: 39px;
    color: #ffffff;

    @media(max-width: 767px) {
        margin: 146px auto;
        text-align: center;
        width: 100%;
    }

}

.percent {
    font-size: 54px;
    font-weight: 700;

    span {
        color: #f16d7f;
        font-size: 54px;
        font-weight: 700;
        text-transform: uppercase;
    }
}

.forWomen {
    font-size: 32px;
    text-transform: uppercase;
}

.offerDetails {
    display: flex;
    flex-direction: column;
    background-color: #222224;
    color: #fbfbfb;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 373px;

    @media(max-width: 1140px) {
        flex-direction: row;
        width: 767px;
    }

    @media(max-width: 767px) {
        flex-direction: column;
        width: inherit;
    }
}

.offerUnit {
    padding: 30px 30px 30px 110px;
    flex-grow: 1;
    background: url("../assets/img/forma_1_1340.png") no-repeat 36px 30px;
    margin: 0;

    @media(max-width: 1140px) {
        background: url("../assets/img/forma_1_1340.png") no-repeat center 36px;
        padding: 110px 30px 30px;
        text-align: center;
    }

    &:first-child {
        background: url("../assets/img/forma_1_1322.png") no-repeat 36px 30px;

        @media(max-width: 1140px) {
            background: url("../assets/img/forma_1_1322.png") no-repeat center 36px;
        }

    }

    &:last-child {
        background: url("../assets/img/forma_1_1341.png") no-repeat 36px 30px;

        @media(max-width: 1140px) {
            background: url("../assets/img/forma_1_1341.png") no-repeat center 36px;
        }
    }
}

.offerDetailsTitle {
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
}

.offerDetailsText {
    font-family: inherit;
    line-height: 24px;
    margin-top: 15px;
    text-align: justify;
    font-size: 14px;
}
</style>
