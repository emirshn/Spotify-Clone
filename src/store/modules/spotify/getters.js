export default {
  playlists(state) {
    return state.playlists;
  },
  topTracks(state) {
    return state.topTracks;
  },
  recentTracks(state) {
    return state.recentTracks;
  },
  topArtists(state) {
    return state.topArtists.artists.items;
  },
  user(state) {
    return state.user;
  },
  currentTrack(state) {
    return state.currentTrack;
  },
};
