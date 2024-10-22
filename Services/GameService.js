import { useCategory, useFacet } from "@vue-storefront/vendure";
import { computed } from "@vue/composition-api";

export const fetchTrendingGamesTopup = async () => {
  //   console.log("fetchGames is called");
  const { search, result } = useFacet();
  await search({ sort: { name: "ASC" }, take: 8 });

  // Log the raw result for debugging
  //   console.log("Raw result:", JSON.stringify(result.value.data.items, null, 2));

  // Update the mapping to use the correct properties
  // const products = computed(() => result.value.data.items);
  return result.value.data.items.map((game) => ({
    image: game.productAsset?.preview || "No image available", // Ensure to check if productAsset exists
    name: game.productName || "No name available", // Use productName for the name
  }));
};

export const fetchCateTrendingGameTopup = async () => {
  console.log("fetch cate game topup called");

  // Get the category composable
  const { search, categories } = useCategory(); // Get categories directly

  await search();

  // Check if categories are available
  //   if (!categories.value || !Array.isArray(categories.value)) {
  //     console.error("No categories found");
  //     return []; // Early return if categories are not available
  //   }

  const rawCategories = categories.value.items; // Access the items array

  console.log("Raw categories:", JSON.stringify(rawCategories, null, 2));

  // Map the fetched categories to your desired structure
  return rawCategories.map((category) => ({
    id: category.id, // Category ID
    name: category.name || "No name available", // Category name
    link: category.slug ? `/c/${category.slug}` : "", // Construct link based on slug
    image: category.asset?.preview || "No image available", // Check if asset exists
  }));
  
};

export const fetchTrending = async () => {};
