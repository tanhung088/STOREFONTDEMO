<template>
  <header class="header">
    <div class="logo">
      <img src="/path-to-your-logo.png" alt="Logo" />
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search games in G2G" />
      <button>Search</button>
    </div>
    <div class="header-actions">
      <button>Become a seller</button>
      <button>Login / Sign up</button>
      <select v-model="selectedLanguage">
        <option value="VN">VN</option>
        <option value="EN">EN</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: "EN",
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e52b25; /* Adjust this to your color */
  padding: 20px;
  color: white;
}

.search-bar input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.search-bar button {
  padding: 8px 12px;
  margin-left: 8px;
}

.header-actions button,
.header-actions select {
  margin-left: 16px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: white;
  color: #e52b25;
}
</style>
