<template>
    <div class="trending-section">
        <h2 class="trending-title">Trending</h2>
        <div class="trending-categories">
            <div class="category" v-for="category in trendingData" :key="category.name">
                <h3 class="category-name">{{ category.name }}</h3>
                <ul class="offers-list">
                    <li v-for="offer in category.offers" :key="offer.game" class="offer">
                        <span class="offer-count">{{ offer.count }} offers</span>
                        <span class="game-name">{{ offer.game }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Trending',
    data() {
        return {
            trendingData: [
                {
                    name: 'Items',
                    offers: [
                        { game: 'Star Wars: TOR', count: 7600 },
                        { game: 'Guild Wars 2', count: 11000 },
                        { game: 'EVE Online', count: 771 },
                        { game: 'Path of Exile', count: 26700 },
                        { game: 'Clash of Clans', count: 7400 },
                    ],
                },
                {
                    name: 'Game Coins',
                    offers: [
                        { game: 'Guild Wars 2', count: 56 },
                        { game: 'Digimon Master Online (Global)', count: 52 },
                        { game: 'EVE Online', count: 27 },
                        { game: 'Elsword Online (Global)', count: 16 },
                        { game: 'Path of Exile', count: 1100 },
                    ],
                },
                {
                    name: 'Accounts',
                    offers: [
                        { game: 'Hay Day', count: 2100 },
                        { game: 'Steam (Global)', count: 4500 },
                        { game: 'Hearthstone', count: 1300 },
                        { game: 'Albion Online', count: 4600 },
                        { game: 'Counter-Strike 2', count: 6600 },
                    ],
                },
                {
                    name: 'Coaching',
                    offers: [
                        { game: 'World of Warcraft', count: 1700 },
                        { game: 'Clash of Clans', count: 412 },
                        { game: 'League of Legends', count: 770 },
                        { game: 'Rocket League', count: 334 },
                        { game: 'Escape from Tarkov', count: 1600 },
                    ],
                },
            ],
        };
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