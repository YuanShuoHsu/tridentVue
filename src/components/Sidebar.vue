<template>
  <div class="sidebar" :class="{ 'sidebar--active': isActive }">
    <div class="sidebar__content">
      <SidebarHamburger :isActive="isActive" @setIsActive="setIsActive" />
      <h2 class="sidebar__siteName">白頭翁不吃小米</h2>
      <Logo />
    </div>
    <ul class="sidebar__list" :class="{ 'sidebar__list--active': isActive }">
      <li v-for="(link, index) in links" :key="index" class="sidebar__listItem">
        <router-link
          :to="link.to"
          class="sidebar__listItemLink"
          :class="{ 'sidebar__listItemLink--active': $route.path === link.to }"
        >
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SidebarHamburger from './SidebarHamburger.vue'
import Logo from './Logo.vue'
import links from '../datasets/links'

const isActive = ref(false)

const setIsActive = () => {
  isActive.value = !isActive.value
}
</script>

<style lang="scss" scoped>
@import '../styles/breakpoints.module.scss';

.sidebar {
  position: relative;
  padding: 35px 0 0 0;
  box-sizing: border-box;
  width: 345px;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  z-index: 2;

  @include respond-to(lg) {
    position: sticky;
    top: 0;
    padding: 0 15px;
    width: 100%;
    height: 80px;
    overflow: visible;
    gap: 0;
  }

  &__content {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @include respond-to(lg) {
      height: 80px;
      justify-content: space-between;
    }

    .sidebar__siteName {
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    overflow: hidden auto;
    scroll-behavior: smooth;

    @include respond-to(lg) {
      position: absolute;
      top: 80px;
      padding: 20px 0;
      background-color: #ffffff;
      opacity: 0;
      pointer-events: none;

      &--active {
        opacity: 1;
        pointer-events: auto;
        transition: 0.2s opacity;
      }

      @media (max-height: 576px) {
        height: 100px;
      }
    }

    &Item {
      padding: 0 20px;
      line-height: 25px;
      border-radius: 20px;
      cursor: pointer;

      &:hover {
        .sidebar__listItemLink {
          color: #aa6666;
        }
      }

      &Link {
        color: #000000;
        text-decoration: none;
        text-underline-offset: 2px;
        transition: 0.2s color;

        &--active {
          color: #aa6666;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
