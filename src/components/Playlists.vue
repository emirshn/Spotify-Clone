<template>
  <div class="px-6 py-3">
    <div class="flex items-center justify-between">
      <h1
        class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline"
      >
        Playlists
      </h1>
      <h2
        class="pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3"
      >
        See All
      </h2>
    </div>

    <PlaylistCard :playlists="this.playlists" :type="'playlist'"></PlaylistCard>

    <div class="flex items-center justify-between">
      <h1
        class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline"
      >
        Top Tracks
      </h1>
      <h2
        class="pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3"
      >
        See All
      </h2>
    </div>
    <TopTracks :playlists="this.tracks"></TopTracks>

    <div class="flex items-center justify-between">
      <h1
        class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline"
      >
        Recent Tracks
      </h1>
      <h2
        class="pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3"
      >
        See All
      </h2>
    </div>
    <RecentTracks :playlists="this.recentTracks"></RecentTracks>

    <div class="flex items-center justify-between">
      <h1
        class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline"
      >
        Followed Artists
      </h1>
      <h2
        class="pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3"
      >
        See All
      </h2>
    </div>
    <TopArtists :playlists="this.artists"></TopArtists>
  </div>
</template>

<script>
import PlaylistCard from './cards/PlaylistCard.vue';
import TopTracks from './cards/TopTracks.vue';
import RecentTracks from './cards/RecentTracks.vue';
import TopArtists from './cards/TopArtists.vue';

import { ref } from 'vue';
export default {
  data() {
    return {
      playlists: ref([]),
      tracks: ref([]),
      recentTracks: ref([]),
      artists: ref([]),
    };
  },
  mounted() {
    this.playlists = this.$store.getters['spotify/playlists'];
    this.tracks = this.$store.getters['spotify/topTracks'];
    this.recentTracks = this.$store.getters['spotify/recentTracks'];
    this.artists = this.$store.getters['spotify/topArtists']
  },
};
</script>

//
<script setup>
// import PlaylistCard from './Cards.vue';
// import { ref, onMounted } from 'vue';
// import store from '@/store/index.js';

// let playlists = ref([]);

// onMounted(() => {
//   playlists = store.getters["spotify/playlists"];
// });
//
</script>
