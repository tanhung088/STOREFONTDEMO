<template>
    <div class="trending-gift-cards">
        <h2 class="trending-gift-cards__title">Trending Gift Cards</h2>
        <!-- <carousel :per-page="3" :autoplay="true" :scroll-per-page="true" class="trending-gift-cards__carousel">
            <slide v-for="(card, index) in giftCards" :key="card.id">
                <SfProductCard :title="card.title" :image="card.image" :regular-price="$n(card.price, 'currency')"
                    :link="localePath(`/gift-cards/${card.slug}`)" class="trending-gift-cards__card" />
            </slide>
        </carousel> -->
    </div>
</template>

<script>
import { SfProductCard } from '@storefront-ui/vue';

export default {
    name: 'TrendingGifCard',
    components: {
        SfProductCard,
    },
    props: {
        giftCards: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.trending-gift-cards {
    padding: var(--spacer-xl) 0;

    &__title {
        font-size: var(--font-size--lg);
        font-weight: var(--font-weight--bold);
        margin-bottom: var(--spacer-md);
    }

    &__carousel {
        .vue-carousel {
            display: flex;
            align-items: center;

            &__slide {
                display: flex;
                justify-content: center;
            }
        }
    }

    &__card {
        max-width: 250px; // Giới hạn chiều rộng của thẻ quà tặng
    }
}
</style>