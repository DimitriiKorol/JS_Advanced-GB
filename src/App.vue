<template>
  <div id="app">
    <!-- <ErrorMsg/>-->
    <header-site></header-site>
    <top-nav></top-nav>

    <keep-alive>
      <router-view/>
    </keep-alive>

    <subscribe/>
    <footer-site/>
    <copyrights/>
  </div>
</template>

<script>
// @ is an alias to /src
// import ErrorMsg from '@/components/ErrorMsg.vue';
import HeaderSite from '@/components/HeaderSite.vue';
import TopNav from '@/components/TopNav.vue';
import Subscribe from '@/components/Subscribe.vue';
import FooterSite from '@/components/FooterSite.vue';
import Copyrights from '@/components/Copyrights.vue';

export default {
  components: {
    // ErrorMsg,
    HeaderSite,
    TopNav,
    Subscribe,
    FooterSite,
    Copyrights,
  },
};
</script>

<style lang="scss">
/*Variables*/
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900');
$mainColor: #f16d7f;
$mainFont: 'Lato', sans-serif;

/*Reset CSS*/
/* Указываем box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Убираем внутренние отступы */
ul[class],
ol[class] {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
}

/* Указываем понятную периодичность в потоке данных у article*/
article > * + * {
  margin-top: 1em;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
}

/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/*Общие стили*/
body{
    margin: 0;
    font-family: 'Lato', sans-serif;
}

.container{
    margin: 0 auto;
    width: 1140px;

    @media (max-width: 1140px) {
        width: auto;
    }
}
</style>
