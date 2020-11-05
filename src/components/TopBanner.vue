<template>
<div class="topBannerWrap">
  <div class="container topBannerContent">
    <div class="topBannerSign">
      <div>THE BRAND</div>
      <div>OF LUXERIOUS FASHION</div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.topBannerWrap {
    height: 665px;
    background-color: #e8e8e8;
    opacity: 0;
    animation: topBannerWrapAnimation 0.5s 1;
    animation-fill-mode: forwards;
    animation-delay: 2s;
}

@keyframes topBannerWrapAnimation {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.topBannerContent {
    background: url("../assets/img/topHeaderBack.png") no-repeat 554px 0;
    background-size: 550px;
    display: flex;
    align-items: center;
    height: inherit;

    @media(max-width: 1140px) {
        background: url("../assets/img/topHeaderBack.png") no-repeat 400px 0;
        width: inherit;
    }

    @media(max-width: 767px) {
        background: none;
        width: inherit;
    }
}

.topBannerSign {
    height: 92px;
    border-left: 12px solid #f16d7f;
    padding-left: 12px;

    @media(max-width: 364px) {
        height: 103px;
    }

    div {
        &:first-child {
            font-weight: 900;
            font-size: 60px;
            line-height: 41px;

            @media(max-width: 364px) {
                line-height: 50px;
            }
        }

        &:last-child {
            font-weight: 400;
            font-size: 40px;
            line-height: 32px;
            margin-top: 19px;

            @media(max-width: 364px) {
                line-height: 40px;
            }
        }
    }
}
</style>
