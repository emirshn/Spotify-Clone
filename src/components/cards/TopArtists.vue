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
            <a :href="plist.external_urls.spotify" target="”_blank”">
              <i class="material-symbols-outlined text-white text-2xl"
                >play_arrow</i
              ></a
            >
          </button>
        </div>
      </div>
      <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
        <img
          v-if="plist.images[0]"
          :src="plist.images[0].url"
          class="h-13 w-13 shadow mb-2 rounded-full"
        />
        <img
          v-else-if="!plist.images[0]"
          src="no_pfp.jpg"
          class="h-13 w-13 shadow mb-2 rounded-full"
        />
        <h1 class="text-sm font-semibold text-white tracking wide">
          {{ plist.name }}
        </h1>
        <h2 class="text-xs text-lightest tracking-wide pb-5">
          {{ plist.genres[0] }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['playlists'],
  data() {
    return {
      newPlaylist: [],
    };
  },
  computed: {
    playlist() {
      return this.playlists;
    },
  },
};
</script>
