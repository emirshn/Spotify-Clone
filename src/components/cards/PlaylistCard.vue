<template>
  <div class="w-full flex flex-wrap">
    <div v-for="plist in playlist" :key="plist.id" class="p-2 w-52 relative">
      <div
        class="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100"
      >
        <div
          class="bg-green rounded-full h-10 w-10 flex items-center justify-center"
        >
        <button>
          <i class="material-symbols-outlined text-white text-2xl"
            >play_arrow</i
          >
        </button>
          
        </div>
      </div>
      <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
        <img :src="plist.images[0].url" class="h-15 w-15 shadow mb-2" />
        <h1 class="text-sm font-semibold text-white tracking wide">
          {{ plist.name }}
        </h1>
        <h2 class="text-xs text-lightest tracking-wide pb-5">
          {{ plist.owner.display_name }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props: ['playlists'],
  data() {
    return {
      newPlaylist: ref([]),
    };
  },
  computed: {
    playlist() {
      return this.playlists;
    },
  },
  created() {
    this.newPlaylist = this.playlist;
  },
};
</script>
