<template>
  <div class="paragraphArticle">
    <h1 class="paragraphArticle__title">{{ title }}</h1>
    <p class="paragraphArticle__description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
interface ParagraphArticleProps {
  title: string
  description: string
}

const { title, description } = defineProps<ParagraphArticleProps>()
</script>

<style lang="scss" scoped>
.paragraphArticle {
  flex: 1;

  &__title {
    position: relative;
    display: inline;

    &::before {
      position: absolute;
      content: '';
      right: -10px;
      bottom: -10px;
      width: 25px;
      height: 25px;
      border: 8px solid #aa6666;
      box-sizing: border-box;
      opacity: 0.6;
      border-radius: 50%;
    }
  }

  &__description {
  }
}
</style>
