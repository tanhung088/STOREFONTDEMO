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
                v-for="(game, index) in games" 
                :key="index" 
                :game="game" 
                @card-clicked="handleCardClick" 
            />
            <p v-if="!games.length">Loading games...</p> <!-- Loading state -->
        </div>
    </div>
</template>


<script>
import { fetchGames as fetchGamesService } from '~/Services/GameService';
import GameCard from './GameCard.vue';
import { onMounted, ref } from '@nuxtjs/composition-api';

export default {
    name: 'TrendingGameTopUp',
    components: {
        GameCard,
    },
    setup() {
        console.log("TRENDING START");
        const games = ref([]); // Create a reactive variable for games

        const fetchGames = async () => {
            console.log("fetchGames is called");
            try {
                const fetchedGames = await fetchGamesService(); // Call the fetchGames service
                games.value = fetchedGames; // Update the reactive variable with fetched data
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        };
        const handleCardClick = (game) => {
            console.log('Card clicked:', game);
            // You can navigate to a detailed page or show a modal, etc.
        };
        // Call fetchGames when the component is mounted
        onMounted(fetchGames);

        return {
            games,
            fetchGames, // Return the fetchGames function for template usage
            handleCardClick,
        };
    }
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
