<template>
<footer id="footer">
  <div class="container">
    <div class="footerBrandWrap">
      <div class="logo">
        BRAN<span>D</span>
      </div>
      <div class="footerText1">
        Objectively transition extensive data rather than cross functional solutions. Monotonectally
        syndicate multidisciplinary materials before go forward benefits.
        Intrinsicly syndicate an expanded
        array of processes and cross-unit partnerships.
      </div>
      <div class="footerText2">
        Efficiently plagiarize 24/365 action items and focused infomediaries.
        Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
      </div>
    </div>

    <section>
      <h3>COMPANY</h3>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/catalog">Shop</router-link>
        <router-link to="/">About</router-link>
        <router-link to="/">How It Works</router-link>
        <router-link to="/catalog">Contact</router-link>
      </nav>
    </section>

    <section>
      <h3>INFORMATION</h3>
      <nav>
        <router-link to="/">Tearms &amp; Condition</router-link>
        <router-link to="/">Privacy Policy</router-link>
        <router-link to="/">How to Buy</router-link>
        <router-link to="/">How to Sell</router-link>
        <router-link to="/">Promotion</router-link>
      </nav>
    </section>

    <section>
      <h3>SHOP CATEGORY</h3>
      <nav>
        <router-link to="/catalog">Men</router-link>
        <router-link to="/catalog">Women</router-link>
        <router-link to="/catalog">Child</router-link>
        <router-link to="/catalog">Apparel</router-link>
        <router-link to="/catalog">Brows All</router-link>
      </nav>
    </section>
  </div>
</footer>
</template>

<style lang="scss">
/*Variables*/
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900');
$mainColor: #f16d7f;
$mainFont: 'Lato', sans-serif;

footer {
    min-height: 460px;
    padding: 110px 0 90px;

    .container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        @media (max-width: 500px) {
            flex-wrap: nowrap;
            flex-direction: column;
            justify-content: flex-start;
        }
    }

    .footerBrandWrap {
        max-width: 427px;

        @media (max-width: 991px) {
            min-width: 100%;
        }
    }

    .footerText1 {
        margin-top: 41px;
        margin-bottom: 33px;
    }

    .footerText1,
    .footerText2 {
        color: #898989;
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0.35px;
    }

    h3 {
        color: $mainColor;
        font-size: 18px;
        font-weight: 700;
        line-height: 26px;
        margin-bottom: 45px;

        @media (max-width: 991px) {
            margin-top: 30px;
            margin-bottom: 0;
        }
    }

    nav {
        a {
            font-size: 16px;
            font-weight: 400;
            line-height: 2.63;
            letter-spacing: 0.4px;
            color: #898989;
            display: block;
            transition-duration: 0.5s;

            &:hover {
                color: #898989;
                text-shadow: 0 0 4px #f7a7a7;
            }
        }
    }
}
</style>
