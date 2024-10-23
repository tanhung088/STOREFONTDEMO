<template>
  <div class="trending-game-topup">
    <div class="trending-game-topup__header">
      <h2>Trending Game Top Up</h2>
    </div>
    <div class="trending-game-topup__grid">
      <GameCard
        v-for="(cate, index) in collections"
        :key="index"
        :cate="cate"
      />
      <p v-if="loading">Loading games...</p>
    </div>
  </div>
</template>

<script>
import GameCard from "./GameCard.vue";
import { onMounted, ref } from "@nuxtjs/composition-api";
import { getAllCollectionsWithAssets } from "~/API/apiCollection"; // Import the function

export default {
  name: "TrendingGameTopUp",
  components: {
    GameCard,
  },
  setup() {
    const collections = ref([]);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        const response = await getAllCollectionsWithAssets();
        collections.value = response;
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    });

    return { collections, loading, error };
  },
};
</script>

<style scoped>
.trending-game-topup {
  padding: 2rem;
  background-color: #29435c;
  border-radius: 10px;
  color: white;
  margin-top: 30px;
}

.trending-game-topup__header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.trending-game-topup__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
</style>
