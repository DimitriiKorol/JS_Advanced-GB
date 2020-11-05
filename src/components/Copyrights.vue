<template>
<div class="copyrights">
  <div class="container">
    <div class="copyrightsText">
      © 2020 Brand All Rights Reserved.
    </div>
    <nav>
      <router-link to="https://www.facebook.com/">
        <i class="fab fa-facebook-f"></i>
      </router-link>
      <router-link to="https://twitter.com/">
        <i class="fab fa-twitter"></i>
      </router-link>
      <router-link to="https://linkedin.com/">
        <i class="fab fa-linkedin-in"></i>
      </router-link>
      <router-link to="https://www.pinterest.com/">
        <i class="fab fa-pinterest-p"></i>
      </router-link>
    </nav>
  </div>
</div>
</template>

<style scoped lang="scss">
$mainColor: #f16d7f;

.copyrights {
  min-height: 79px;
  background-color: #e6e6e6;

  .container {
    min-height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;

    @media (max-width: 499px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  .copyrightsText {
    font-size: 16px;
    font-weight: 400;
    line-height: 2.63;
    letter-spacing: 0.4px;
    color: #7a7a7a;
  }

  nav {
    display: flex;
    width: 191px;
    justify-content: space-between;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: #ffffff;
      text-decoration: none;
      color: inherit;
      transition-duration: 0.5s;

      &:hover {
        background-color: $mainColor;

        i {
            color: white;
        }
      }

      i {
        color: #b2b2b2;
      }
    }
  }
}
</style>
