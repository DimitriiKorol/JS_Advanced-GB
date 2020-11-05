<template>
<div class="subscribeWrap" id="subscribe">
  <div class="container subscribe">
    <div class="reviewWrap">
      <img src="../assets/img/ellipse_3_2206.png" alt="">
      <div>
        <blockquote>
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
          a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
        </blockquote>
        <div class="reviewAuthor">
          Bin Burhan
        </div>
        <div class="authorLocation">
          Dhaka, Bd
        </div>
        <div class="reivewRotator">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="subscribeDivider"></div>
    <form id="emailSubscribe" class="subscribeForm" @submit.prevent="emailCheck" novalidate="true">
      <div class="subscribeTitle">Subscribe</div>
      <div class="subscribeText">
        FOR OUR NEWLETTER AND PROMOTION
      </div>
      <p v-if="errors.length">
        <b>{{ errors }}</b>
      </p>
      <input type="email" placeholder="Enter Your Email" v-model="email" name="email">
      <button type="submit">Subscribe</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'emailSubscribe',
  data() {
    return {
      errors: '',
      email: null,
    };
  },
  methods: {
    emailCheck: function eCheck(e) {
      this.errors = '';

      if (!this.email) {
        this.errors = 'Требуется указать E-mail.';
      } else if (!this.validEmail(this.email)) {
        this.errors = 'Укажите корректный адрес электронной почты.';
      }
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
      return this.errors;
    },
    validEmail: function eValidator(email) {
      const re = /^[a-zа-яё0-9]+@[a-zа-яё0-9]+\.[a-zа-яё]{2,}$/i;
      return re.test(email);
    },
  },
};
</script>

<style lang="scss">
.subscribeWrap {
  min-height: 438px;
  background: url(../assets/img/rectangle_9_2194.jpg) no-repeat, #adadad;
  background-size: cover;
  background-blend-mode: overlay;

  @media (max-width: 1199px) {
      min-height: initial;
  }

  .subscribe {
      min-height: inherit;
      display: flex;
      align-items: center;

      @media (max-width: 1199px) {
          flex-direction: column;
          padding-top: 50px;
          padding-bottom: 50px;
      }
  }

  .subscribeDivider {
      width: 1px;
      background: white;
      min-height: inherit;
      margin-left: 72px;
      margin-right: 92px;

      @media (max-width: 1199px) {
          display: none;
      }
  }

  .reviewWrap {
      display: flex;
      align-items: flex-start;
      width: 500px;

      @media (max-width: 575px) {
          flex-direction: column;
          align-items: center;
          width: auto;
      }

      >img {
          margin-right: 28px;

          @media (max-width: 575px) {
              margin-right: initial;
              margin-bottom: 28px;
          }
      }

      blockquote {
          color: #222224;
          font-size: 16px;
          line-height: 26px;
          letter-spacing: 0.4px;
          font-weight: 700;
          font-style: oblique;
          margin-bottom: 19px;
      }

      .reviewAuthor {
          color: #f16d7f;
          font-size: 16px;
          font-weight: 700;
          font-weight: 700;
          letter-spacing: 0.4px;
          line-height: 26px;
      }

      .authorLocation {
          color: #222224;
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.3px;
          line-height: 14px;
          margin-bottom: 41px;
      }

      .reivewRotator {
          display: flex;
          width: 140px;
          justify-content: space-between;

          div {
              width: 38px;
              height: 4px;
              background-color: #d6d6d6;
              transition-duration: 0.5s;

              &:hover {
                  background-color: #f16d7f;
                  cursor: pointer;
              }
          }
      }
  }
}

.subscribeForm {
  width: 386px;
  text-align: center;

  @media (max-width: 530px) {
      width: auto;
  }

  .subscribeTitle {
      color: #222224;
      font-weight: 400;
      font-size: 24px;
      letter-spacing: 0.6px;
      line-height: 54px;
      text-transform: uppercase;

      @media (max-width: 530px) {
          margin-top: 20px;
      }
  }

  .subscribeText {
      font-size: 14px;
      margin-bottom: 35px;
  }

  p {
    b{
      color: red;
    }
  }

  input {
      width: 282px;
      height: 46px;
      line-height: 46px;
      border-top-left-radius: 23px;
      border-bottom-left-radius: 23px;
      background-color: #e1e1e1;
      outline: none;
      padding: 5px 15px;
      border: none;
      float: left;

      &::-webkit-input-placeholder {
          color: #222224;
          font-weight: 700;
      }
      &:-ms-input-placeholder {
          color: #222224;
          font-weight: 700;
      }
      &::-ms-input-placeholder {
          color: #222224;
          font-weight: 700;
      }
      &::placeholder {
          color: #222224;
          font-weight: 700;
      }
      &::-moz-placeholder {
          color: #222224;
          font-weight: 700;
      }

      @media (max-width: 430px) {
          float: none;
          border-radius: 23px;
          margin-bottom: 15px;
      }
  }

  button {
      width: 104px;
      height: 46px;
      border-radius: 0 23px 23px 0;
      background-color: #f16d7f;
      border: none;
      color: white;
      padding: 0;
      outline: none;
      transition-duration: 0.5s;
      cursor: pointer;

      &:hover{
          background-color: #ed455c;
      }

      @media (max-width: 430px) {
          border-radius: 23px;
      }
  }
}
</style>
