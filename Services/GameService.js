import { useFacet } from "@vue-storefront/vendure";

export const fetchGames = async () => {
    console.log("fetchGames is called");
    const { search, result } = useFacet();
    await search({ sort: { name: 'ASC' }, take: 8 });
    
    // Log the raw result for debugging
    console.log("Raw result:", JSON.stringify(result.value.data.items, null, 2));
    
    // Update the mapping to use the correct properties
    // const products = computed(() => result.value.data.items);
    return result.value.data.items.map(game => ({
        image: game.productAsset?.preview || 'No image available', // Ensure to check if productAsset exists
        name: game.productName || 'No name available', // Use productName for the name
    }));
};

export const fetchTrending = async () => {
    
}
