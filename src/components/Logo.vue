<template>
  <div class="logo">
    <span class="logo__head"></span>
    <span class="logo__eye"></span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../styles/breakpoints.module.scss';

.logo {
  position: absolute;
  right: -25px;
  background: #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  @include respond-to(lg) {
    position: relative;
    left: 0;
    width: 40px;
    height: 40px;
  }

  &__head {
    position: absolute;
    width: 50%;
    height: 45%;
    border-top-left-radius: 60%;
    border-top-right-radius: 40%;
    border-bottom-right-radius: 50%;
    background-color: #333333;

    &::before {
      content: '';
      position: absolute;
      top: 20%;
      width: 100%;
      height: 60%;
      background-color: #ffffff;
      border-top-left-radius: 70%;
      border-top-right-radius: 30%;
      border-bottom-right-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 30%;
      right: -20%;
      width: 25%;
      height: 15%;
      background-color: #333333;
      border-top-right-radius: 80%;
      transform: rotate(-10deg);
    }
  }

  &__eye {
    position: absolute;
    top: 45%;
    left: 50%;
    width: 10%;
    height: 10%;
    background-color: #333333;
    border-radius: 50%;
  }
}
</style>
