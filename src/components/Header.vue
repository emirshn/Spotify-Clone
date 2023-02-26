<template>
  <!--header-->
  <div
    class="w-full sticky top-0 py-4 px-6 flex items-center justify-between bg-dark"
  >
    <div class="flex items-center">
      <button class="rounded-full bg-black w-8 h-8 text-white mr-3">
        <i class="material-symbols-outlined text-3xl">keyboard_arrow_left</i>
      </button>
      <button class="rounded-full bg-black w-8 h-8 text-white">
        <i class="material-symbols-outlined text-3xl">keyboard_arrow_right</i>
      </button>
    </div>
    <div class="relative">
      <button
        @click="showDropdown = !showDropdown"
        class="bg-light rounded-full py-1 px-2 flex items-center"
      >
        <img :src="user.images[0].url" class="rounded-full h-6 w-6 mr-2" />
        <p class="text-white font-semibold text-s mr-3">
          {{ user.display_name }}
        </p>
        <i
          v-if="showDropdown === false"
          class="material-symbols-outlined text-white"
          >arrow_drop_down</i
        >
        <i
          v-if="showDropdown === true"
          class="material-symbols-outlined text-white"
          >arrow_drop_up</i
        >
      </button>
      <div
        v-if="showDropdown === true"
        class="absolute bg-light w-full rounded mt-1"
      >
        <button
          class="w-full text-sm py-2 text-lightest hover text-white border-b border-light opacity-75 hover:opacity-100"
        >
          Account
        </button>
        <button
          class="w-full text-sm py-2 text-lightest hover text-white border-b border-light opacity-75 hover:opacity-100"
        >
          Log Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      user: {},
    };
  },
  created() {
    this.user = this.$store.getters['spotify/user'];
  },
};
</script>
