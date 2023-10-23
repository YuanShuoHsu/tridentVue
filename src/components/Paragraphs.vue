<template>
  <div class="paragraphs">
    <ParagraphArticle
      v-for="(data, index) in paragraphs"
      :key="index"
      :title="data.title"
      :description="data.description"
    />
  </div>
</template>

<script setup lang="ts">
import ParagraphArticle from './ParagraphsArticle.vue'
import paragraphs from '@/datasets/paragraphs'
</script>

<style lang="scss" scoped>
@import '../styles/breakpoints.module.scss';

.paragraphs {
  padding: 35px;
  display: flex;
  background-color: #dcccbc;
  gap: 35px;
  flex: 1;

  @include respond-to(lg) {
    flex-direction: column;
  }
}
</style>
