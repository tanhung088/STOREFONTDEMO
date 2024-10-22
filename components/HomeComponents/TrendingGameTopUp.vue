<template>
  <div class="trending-game-topup">
    <div class="trending-game-topup__header">
      <h2>Trending Game Top Up</h2>
      <!-- <a href="#" class="discover-all">
                Discover all
                <SfIcon icon="arrow-right" class="discover-all__icon" />
            </a> -->
    </div>
    <div class="trending-game-topup__grid">
      <GameCard
        v-for="(cate, index) in collections"
        :key="index"
        :cate="cate"
      />
      <p v-if="loading">Loading games...</p>
      <!-- Loading state -->
    </div>
  </div>
</template>

<script>
import GameCard from "./GameCard.vue";
import { onMounted, ref } from "@nuxtjs/composition-api";
import { useCollections } from "~/API/apiCollection";

export default {
  name: "TrendingGameTopUp",
  components: {
    GameCard,
  },
  setup() {
    const { collections, loading, error } = useCollections();
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
  display: flex; /* Keep flex for icon alignment */
  justify-content: center; /* Center the content */
  align-items: center;
  margin-bottom: 1rem;
}

.trending-game-topup__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.discover-all {
  display: flex;
  align-items: center;
  color: white;
}

.discover-all__icon {
  margin-left: 0.5rem;
}
</style>
