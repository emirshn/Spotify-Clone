export default {
  setPlaylists(state, payload) {
    state.playlists = payload;
  },

  setTopTracks(state, payload) {
    state.topTracks = payload;
  },

  setRecentTracks(state, payload) {
    state.recentTracks = payload;
  },

  setTopArtists(state, payload) {
    state.topArtists = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
  setCurrentTrack(state, payload) {
    state.currentTrack = payload;
  },
};
