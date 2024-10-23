<template>
  <div class="trending-section">
    <h2 class="trending-title">Trending</h2>
    <div class="trending-categories">
      <div
        class="category"
        v-for="category in topLevelCollection"
        :key="category.id"
      >
        <h3 class="category-name">{{ category.name }}</h3>
        <ul class="offers-list" v-if="subCollections[category.id]">
          <li
            v-for="subcategory in subCollections[category.id]"
            :key="subcategory.id"
            class="offer"
          >
            <nuxt-link
              :to="`/c/${subcategory.slug}`"
            >
              <span class="offer-count"
                >{{ subcategory.totalProducts }} offers</span
              >
              <span class="game-name">{{ subcategory.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
import { onMounted, ref } from "@nuxtjs/composition-api";
import {
  getSubcategoriesByParent,
  getTopLevelCollection,
} from "~/API/apiCollection";
import { GetTotalProductsByCollection } from "~/API/apiProduct";

export default {
  name: "Trending",
  setup() {
    const topLevelCollection = ref([]);
    const subCollections = ref({});
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        const response = await getTopLevelCollection();
        topLevelCollection.value = response;

        const subCatsPromises = topLevelCollection.value.map(
          async (category) => {
            const subcategories = await getSubcategoriesByParent(category.id);

            // Fetch product counts for each subcategory
            const productCountPromises = subcategories.map(
              async (subcategory) => {
                const total = await GetTotalProductsByCollection(
                  subcategory.id
                );
                return {
                  id: subcategory.id,
                  name: subcategory.name,
                  slug: subcategory.slug,
                  totalProducts: total,
                };
              }
            );

            const subcategoriesWithCounts = await Promise.all(
              productCountPromises
            );
            return { id: category.id, subcategories: subcategoriesWithCounts };
          }
        );

        const subCatsResults = await Promise.all(subCatsPromises);

        // Store the subcategories and their product counts
        subCatsResults.forEach((result) => {
          subCollections.value[result.id] = result.subcategories;
        });

      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    });

    return { topLevelCollection, subCollections, loading, error };
  },
};
</script>

<style scoped>
.trending-section {
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.trending-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.trending-categories {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.category {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 240px;
}

.category-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.offers-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.offer {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.offer-count {
  color: #666;
}

.game-name {
  font-weight: bold;
  color: #333;
}
</style>
