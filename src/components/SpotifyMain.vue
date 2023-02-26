<template>
  <div class="px-6 py-3 justify-center flex">
    <div class="h-full flex-none">
      <button @click="loginSpotify" class="text-white ml-3 bg-green">
        <a class="px-1">Login with Spotify</a>
      </button>
      <h2 class="text-white pl-8 pt-1">
        <router-link to="/main-page">To main page</router-link>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch('spotify/auth');
  },
  methods: {
    async loginSpotify() {
      await this.$store.dispatch('spotify/login');
    },
  },
};
</script>
