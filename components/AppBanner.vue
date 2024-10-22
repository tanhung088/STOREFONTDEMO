<template>
    <div class="app-banner" :style="{ backgroundImage: `url(${image})` }">
        <!-- <div class="app-banner__content">
            <h2 class="app-banner__title">{{ title }}</h2>
            <p class="app-banner__subtitle">{{ subtitle }}</p>
            <nuxt-link :to="link" class="app-banner__button">{{ buttonText }}</nuxt-link>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'AppBanner',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            default: 'Learn More'
        },
        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.app-banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 400px;
    /* Bạn có thể điều chỉnh chiều cao này */
    background-size: cover;
    background-position: center;
    text-align: center;
    padding: 20px;
}

.app-banner__content {
    background: rgba(0, 0, 0, 0.5);
    /* Nền mờ để văn bản nổi bật */
    padding: 20px;
    border-radius: 10px;
}

.app-banner__button {
    background-color: #ff4081;
    /* Màu nền của nút */
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
}
</style>