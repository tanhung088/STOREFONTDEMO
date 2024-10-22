<template>
    <div class="game-card" @click="handleClick">
        <img :src="game.image" alt="game.featuredAsset.preview" class="game-card__image" />
        <div class="game-card__content">
            <!-- <span class="game-card__offers">{{ game.offers }} offers</span> -->
            <h3 class="game-card__name">{{ game.name }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameCard',
    props: {
        game: {
            type: Object,
            required: true,
        },
    },
    methods: {
        handleClick() {
            // Emit an event with game details
            this.$emit('card-clicked', this.game);
        },
    },
};
</script>

<style scoped>
.game-card {
    background-color: rgba(255, 255, 255, 0.1);
    /* Translucent background */
    border-radius: 15px;
    overflow: hidden;
    text-align: center;
    padding: 0.5rem;
    position: relative;
    height: 150px;
    /* Set height for the card */
}

.game-card__image {
    /* max-width: 100%; */
    width: 200px;
    height: 120px;
    /* Set height for the image */
    object-fit: cover;
    border-radius: 15px;
    /* Ensure the image covers the area */
}

.game-card__content {
    margin-top: 0.5rem;
    /* Adjusted to align properly with the card height */
}

.game-card__offers {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    color: white;
    font-size: 0.8rem;
}

.game-card__name {
    margin-top: 0.5rem;
    color: white;
    font-size: 1.2rem;
}
</style>
