<template>
  <div
    class="w-full sticky flex items-center justify-between px-3 bg-light border-t border-dark"
    style="height: 12vh"
  >
    <div class="flex items-center w-1/4">
      <div>
        <img :src="track.item.album.images[0].url" class="h-12 w-12 mr-3" />
      </div>
      <div class="pl-2">
        <h1 class="text-sm text-white tracking-wide">{{ track.item.name }}</h1>
        <h2 class="text-xs text-lightest tracking-wide">
          {{ track.item.artists[0].name }}
        </h2>
      </div>
      <i class="material-symbols-outlined text-xl text-green mx-4">favorite</i>
      <i
        class="material-symbols-outlined text-xl text-lightest hover:text-white"
        >picture_in_picture_alt</i
      >
    </div>
    <div class="flex flex-col justify-center w-2/4 items-center">
      <div class="flex items-center">
        <button class="mx-5 text-lightest hover:text-white">
          <i class="text-lg material-symbols-outlined">shuffle</i>
        </button>
        <button
          @click.prevent="skipToPrevious()"
          class="text-lightest hover:text-white"
        >
          <i class="text-lg material-symbols-outlined">skip_previous</i>
        </button>
        <button
          @click.prevent="checkSong()"
          class="rounded-full h-8 w-8 flex items-center justify-center mx-5 border-lightest border text-lg text-lightest hover:text-white"
        >
          <i v-if="track.is_playing === false" class="material-symbols-outlined"
            >play_arrow</i
          >

          <i v-if="track.is_playing === true" class="material-symbols-outlined"
            >pause</i
          >
        </button>
        <button
          @click.prevent="skipToNext()"
          class="text-lightest hover:text-white"
        >
          <i class="text-lg material-symbols-outlined">skip_next</i>
        </button>
        <button class="mx-5 text-lightest hover:text-white">
          <i class="text-lg material-symbols-outlined">repeat</i>
        </button>
      </div>
      <div class="w-3/4 flex items-center mt-3">
        <p class="text-xs text-lightest mr-1">0:28</p>
        <div class="w-full h-1 bg-dark rounded-full flex items-center">
          <div class="h-1 rounded-full bg-green" style="width: 18%"></div>
          <div class="h-3 w-3 bg-white rounded-full -ml-1"></div>
        </div>
        <p class="text-xs text-lightest ml-1">2:40</p>
      </div>
    </div>
    <div class="flex items-center w-1/4 justify-end">
      <i class="material-symbols-outlined text- text-lightest hover:text-white"
        >playlist_play</i
      >
      <i
        class="material-symbols-outlined text-xl text-lightest mx-3 hover:text-white"
        >important_devices</i
      >
      <i
        class="material-symbols-outlined text-xl text-lightest hover:text-white"
        >volume_up</i
      >
      <div
        class="w-20 ml-1 bg-lightest rounded-full h-1 hover:text-white"
      ></div>
    </div>
  </div>
</template>

<script>
import SpotifyWebApi from 'spotify-web-api-js';

export default {
  data() {
    return {
      track: {},
    };
  },
  watch: {
    track(newTrack) {
      this.track = newTrack;
    },
  },
  created() {
    this.track = this.$store.getters['spotify/currentTrack'];
  },
  methods: {
    async skipToPrevious() {
      const spotifyApi = new SpotifyWebApi();
      spotifyApi.setAccessToken(localStorage.getItem('access_token'));
      await this.$store.dispatch('spotify/skipToPrevious').then((res) => {
        console.log('tested', res);
        this.track = this.$store.getters['spotify/currentTrack'];
      });
      console.log(this.track);
    },
    async skipToNext() {
      const spotifyApi = new SpotifyWebApi();
      spotifyApi.setAccessToken(localStorage.getItem('access_token'));
      await this.$store.dispatch('spotify/skipToNext');
      this.track = this.$store.getters['spotify/currentTrack'];
      console.log(this.track);
    },
    checkSong() {
      const spotifyApi = new SpotifyWebApi();
      spotifyApi.setAccessToken(localStorage.getItem('access_token'));
      if (this.track.is_playing) {
        this.$store.dispatch('spotify/pause');
        this.track = this.$store.getters['spotify/currentTrack'];
        console.log(this.track);
      } else {
        this.$store.dispatch('spotify/play');
        this.track = this.$store.getters['spotify/currentTrack'];
        console.log(this.track);
      }
    },
  },
};
</script>
