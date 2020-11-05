<template>
<div class="newarrivalsHead">
  <div class="container newarrivalsHeader">
    <div class="newarrivalsHeaderTitle">
      New Arrivals
    </div>
    <ul class="newarrivalsHeaderBreadcrumb">
      <li class="newarrivalsHeaderBreadcrumbList">
        <a href="index.html" class="crumblinks">Home</a>
      </li>
      <li class="newarrivalsHeaderBreadcrumbList">
        <a href="index.html#men" class="crumblinks">Men</a>
      </li>
      <li class="newarrivalsHeaderBreadcrumbList">
        <a href="chekout.html" class="crumblinks">New Arrivals</a>
      </li>
    </ul>
  </div>
</div>
</template>

<style lang="scss">
.newarrivalsHead {
    height: 148px;
    background-color: #f8f3f4;
    position: relative;
    animation-name: topNavAnimation;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;

    .newarrivalsHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: inherit;
        @media(max-width: 490px) {
            flex-direction: column;
            justify-content: center;
        }
    }
}

@keyframes newArrivalsAnimation {
    0% {
        left: -200%;
    }

    100% {
        left: 0;
    }
}

.newarrivalsHeaderTitle {
    font-family: inherit;
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
    color: #f16d7f;
}

.newarrivalsHeaderBreadcrumb {
    display: flex;
    align-items: center;
}

.newarrivalsHeaderBreadcrumbList {
    color: #636363;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;

    &:last-child {
        font-weight: 700;
        color: #f16d7f;
    }

    &+&::before {
        content: "/";
        padding: 0 2px;
    }

    .crumblinks {
        text-decoration: none;
        color: inherit;

        &:hover {
            color: inherit;
        }
    }
}
</style>
