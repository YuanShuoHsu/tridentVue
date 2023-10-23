<template>
  <div class="banner">
    <div class="banner__imgBox">
      <img class="banner__image" alt="白頭翁 (Chinese bulbul)" />
    </div>
    <div class="banner__content">
      <h1 class="banner__title">白頭翁 (Chinese bulbul)</h1>
      <p class="banner__description">
        又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../styles/breakpoints.module.scss';

.banner {
  position: relative;

  &__imgBox {
    width: 100%;
    height: 600px;
    overflow: hidden;

    @include respond-to(md) {
      height: auto;
    }

    .banner__image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      content: url('../assets/images/Banner.png');

      @include respond-to(md) {
        object-fit: contain;
        content: url("../assets/images/BannerMobile.png");
      }
    }
  }

  &__content {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 20px;
    text-align: right;

    .banner__title {
      color: #ffffff;

      @include respond-to(sm) {
        width: 50%;
        margin-left: auto;
      }
    }

    .banner__description {
      color: #ffffff;
    }
  }
}
</style>
