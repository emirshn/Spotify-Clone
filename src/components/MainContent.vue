<template>
  <div class="w-full h-full relative overflow-y-scroll">
    <theHeader></theHeader>
    <!-- cards-->
    <playlists></playlists>
  </div>
</template>

<script>
import {} from 'vue';
import theHeader from './Header.vue';
import playlists from './Playlists.vue';

export default {
  components: {
    theHeader,
    playlists,
  },
  data() {
    return {
      recents: [
        { src: 'daily_mix_1.jpg', title: 'Daily Mix 1', artist: 'By Spotify' },
        { src: 'daily_mix_2.jpeg', title: 'Daily Mix 2', artist: 'By Spotify' },
        { src: 'daily_mix_3.jpeg', title: 'Daily Mix 3', artist: 'By Spotify' },
        { src: 'default.jpeg', title: 'Daily Mix 4', artist: 'By Spotify' },
        {
          src: 'vex.jpeg',
          title: 'Critical Role: Vex',
          artist: 'By Critical Role',
        },
        {
          src: 'current.jpeg',
          title: 'CR: Mighty Nein',
          artist: 'By Critical Role',
        },
      ],
      customs: [
        { src: 'daily_mix_1.jpg', title: 'Daily Mix 1', artist: 'By Spotify' },
        { src: 'daily_mix_2.jpeg', title: 'Daily Mix 2', artist: 'By Spotify' },
        { src: 'daily_mix_3.jpeg', title: 'Daily Mix 3', artist: 'By Spotify' },
        { src: 'default.jpeg', title: 'Daily Mix 4', artist: 'By Spotify' },
        {
          src: 'vex.jpeg',
          title: 'Critical Role: Vex',
          artist: 'By Critical Role',
        },
        {
          src: 'current.jpeg',
          title: 'CR: Mighty Nein',
          artist: 'By Critical Role',
        },
      ],
    };
  },
};
</script>
