<template>
  <nav class="topNav">
        <router-link to="/">Home</router-link>
        <router-link to="/catalog">Man</router-link>
        <router-link to="/catalog">Women</router-link>
        <router-link to="/catalog">Kids</router-link>
        <router-link to="/#accessories">Accessories</router-link>
        <router-link to="/#featured">Featured</router-link>
        <router-link to="/#offers">Hot Deals </router-link>
    </nav>
</template>

<style lang="scss">
.topNav{
  min-height: 51px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  animation-name: topNavAnimation;
  animation-duration: 1.5s;
  animation-timing-function: ease;

  @media(max-width: 515px){
      flex-direction: column;
      justify-content: flex-start;
      flex-wrap: nowrap;
      align-items: flex-start;
  }

  a{
      font-family: inherit;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      color: #222222;
      display: block;
      padding: 18px;
      line-height: 14px;
      height: 51px;
      text-decoration: none;
      transition-duration: 0.2s;

      &:hover{
          border-bottom: 3px solid #ef5b70;
      }
  }
}

@keyframes topNavAnimation{
  0%{
      left: -150%;
  }

  100%{
      left:0;
  }
}
</style>
