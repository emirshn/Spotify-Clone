<template>
  <div class="w-56 bg-black h-full flex-none">
    <div class="p-6">
      <img
        src="spotifyLogoFull.png"
        class="h-10"
        style="filter: brightness(0) invert(1)"
      />
    </div>
    <div class="mx-2 mb-5">
      <button
        v-for="page in pages"
        :key="page.id"
        @click="setID = page.id"
        :class="`w-full focus:outline-none text-sm font-semibold rounded px-3 py-2 flex item-center justify-start ${
          setID === page.id ? 'bg-light text-white' : 'text-lightest'
        }`"
      >
        <span class="material-symbols-outlined mr-3">
          {{ page.icon }}
        </span>
        <p class="mt-1">{{ page.name }}</p>
      </button>
    </div>
    <div class="mx-5">
      <h1 class="mb-3 text-xs text-lightest tracking-widest uppercase">
        Playlists
      </h1>
      <button
        class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2"
      >
        <img
          src="create-playlist.png"
          class="h-8 w-8 mr-3"
          style="filter: brightness(0) invert(1)"
        />
        <p class="text-s text-white font-semibold">Create Playlist</p>
      </button>

      <button
        class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2"
      >
        <img src="liked-songs.png" class="h-8 w-8 mr-3" />
        <p class="text-s text-white font-semibold">Liked Songs</p>
      </button>
      <div class="h-px w-full bg-light ny-3"></div>
    </div>
    <div class="mx-5">
      <div class="w-full h-60 overflow-y-scroll scrollbar-hide">
        <p
          v-for="album in this.playlists"
          :key="album.name"
          class="text-lightest hover:text-white text-s py-1"
        >
          {{ album.name }}
        </p>
      </div>
      <button
        class="flex items-center justify-start text-lightest hover:text-white pt-12"
      >
        <i
          class="material-symbols-outlined mr-3 rounded-full border text-sm border-lightest"
          >arrow_downward</i
        >
        <p class="text-sm font-semibold">Install App</p>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
    return {
      pages: [
        { id: 'home', name: 'Home', icon: 'home' },
        { id: 'search', name: 'Search', icon: 'search' },
        { id: 'library', name: 'Your Library', icon: 'bar_chart' },
      ],
      setID: 'home',
      albums: [
        { name: 'Queen' },
        { name: 'zhu' },
        { name: 'Classic Road Trip Songs' },
        { name: 'Şemmamme Full Album' },
        { name: 'Hz.Ali drift şarkıları' },
        { name: 'Hz.Ali drift şarkıları' },
        { name: 'Hz.Ali drift şarkıları' },
        { name: 'Hz.Ali drift şarkıları' },
        { name: 'Hz.Ali drift şarkıları' },
        { name: 'Hz.Ali drift şarkıları' },

      ],
      playlists: ref([]),
    };
  },
  mounted(){
    this.playlists = this.$store.getters["spotify/playlists"];
  }
};
</script>
