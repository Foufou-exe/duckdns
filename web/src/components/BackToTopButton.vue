<template>
    <button v-if="showButton" @click="scrollToTop" class="back-to-top-button animate-bounce">
        <font-awesome-icon icon="arrow-up" size="sm" />
    </button>
</template>

<script>
export default {
    data() {
        return {
            showButton: false
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        handleScroll() {
            this.showButton = window.scrollY > 0;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style scoped>
.back-to-top-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.back-to-top-button:hover {
    background-color: #555;
}
</style>
