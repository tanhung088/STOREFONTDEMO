<template>
  <div class="app-banner" :style="{ backgroundImage: `url(${image})` }">
    <div class="app-banner__content">
      <!-- Category Icons Section -->
      <div class="categories">
        <div
          v-for="category in categories"
          :key="category.name"
          class="category-item"
        >
          <img :src="category.icon" :alt="category.name" />
          <p>{{ category.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBanner",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Learn More",
    },
    link: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      categories: [
        { name: "Gift Cards", icon: "/icons/gift-card.png" },
        { name: "Games", icon: "/icons/games.png" },
        { name: "Software & Apps", icon: "/icons/software.png" },
        { name: "Game Coins", icon: "/icons/game-coins.png" },
        { name: "Items", icon: "/icons/items.png" },
        { name: "Accounts", icon: "/icons/accounts.png" },
        { name: "Boosting", icon: "/icons/boosting.png" },
      ],
    };
  },
};
</script>

<style scoped>
.app-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 500px; /* Adjusted to accommodate categories */
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 20px;
}

.app-banner__content {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  padding: 0px;
  border-radius: 20px;
  max-width: 1000px;
  width: 100%;
  margin-top: 425px;
}

.app-banner__title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.app-banner__subtitle {
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.app-banner__button {
  background-color: #ff4081;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 20px;
}

/* Category Icons Section */
.categories {
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
  /* Remove background */
}

.category-item {
  text-align: center;
}

.category-item img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}
</style>
