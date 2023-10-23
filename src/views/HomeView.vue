<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Banner from '@/components/Banner.vue'
import Paragraphs from '@/components/Paragraphs.vue'
</script>

<template>
  <div class="home">
    <Sidebar />
    <div className="home__main">
      <Banner />
      <Paragraphs />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/breakpoints.module.scss';

.home {
  display: flex;

  @include respond-to(lg) {
    flex-direction: column;
  }

  &__main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden auto;
    scroll-behavior: smooth;
  }
}
</style>
