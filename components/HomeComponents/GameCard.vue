<template>
  <nuxt-link :to="`/c/${cate.slug}`" class="game-card">
    <img :src="cate.featuredAsset"
    :alt="cate.name" class="game-card__image" />
    <div class="game-card__content">
      <h3 class="game-card__name">{{ cate.name }}</h3>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    cate: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.game-card {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  padding: 0.5rem;
  position: relative;
  height: 150px;
}

.game-card__image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 15px;
}

.game-card__content {
  margin-top: 0.5rem;
}

.game-card__name {
  margin-top: 0.5rem;
  color: white;
  font-size: 1.2rem;
}
</style>
