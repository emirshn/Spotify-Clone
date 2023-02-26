import axios from 'axios';
import queryString from 'query-string';
import { ref } from 'vue';
import SpotifyWebApi from 'spotify-web-api-js';

export default {
  login() {
    const url = 'https://accounts.spotify.com/authorize';
    let params = {
      response_type: 'code',
      client_id: process.env.VUE_APP_CLIENT_ID,
      scope:
        'app-remote-control streaming user-read-private user-read-email playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-follow-read',
      redirect_uri: process.env.VUE_APP_REDIRECT_URI,
      show_dialog: true,
    };
    params = new URLSearchParams(params).toString();
    window.location.href = `${url}?${params}`;
  },

  auth(context) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (!params.code) {
      return;
    }
    axios
      .post(
        'https://accounts.spotify.com/api/token',
        queryString.stringify({
          code: params.code,
          redirect_uri: process.env.VUE_APP_REDIRECT_URI,
          grant_type: 'authorization_code',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization:
              'Basic ' +
              new Buffer(
                process.env.VUE_APP_CLIENT_ID +
                  ':' +
                  process.env.VUE_APP_CLIENT_SECRET
              ).toString('base64'),
          },
        }
      )
      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token);
      })
      .then(() => {
        context.dispatch('getPlaylists');
        context.dispatch('getMyTopTracks');
        context.dispatch('getMyRecentTracks');
        context.dispatch('getUser');
        context.dispatch('getMyTopArtists');
        context.dispatch('getCurrentTrack');
      });
  },

  async getPlaylists(context) {
    const playlists = ref([]);
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('access_token'));
    await spotifyApi.getUserPlaylists().then(
      function (data) {
        console.log(playlists);
        playlists.value = data.items;
        context.commit('setPlaylists', playlists);
      },
      function (err) {
        console.error(err);
      }
    );
  },

  async getMyTopTracks(context) {
    const tracks = ref([]);
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('access_token'));
    await spotifyApi.getMyTopTracks().then(
      function (data) {
        console.log(tracks);
        tracks.value = data.items;
        context.commit('setTopTracks', tracks);
      },
      function (err) {
        console.error(err);
      }
    );
  },

  async getMyRecentTracks(context) {
    const tracks = ref([]);
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('access_token'));
    await spotifyApi.getMyRecentlyPlayedTracks().then(
      function (data) {
        console.log(tracks);
        tracks.value = data.items;
        context.commit('setRecentTracks', tracks);
      },
      function (err) {
        console.error(err);
      }
    );
  },

  async getMyTopArtists(context) {
    const artists = ref([]);
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('access_token'));

    await spotifyApi.getFollowedArtists().then(
      function (data) {
        artists.value = data;
        console.log(artists);
        context.commit('setTopArtists', artists);
      },
      function (err) {
        console.error(err);
      }
    );
  },

  async getUser(context) {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('access_token'));

    await spotifyApi.getMe().then(
      function (data) {
        console.log(data);
        context.commit('setUser', data);
      },
      function (err) {
        console.error(err);
      }
    );
  },

  async getCurrentTrack(context) {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('access_token'));

    await spotifyApi.getMyCurrentPlaybackState().then(
      function (data) {
        context.commit('setCurrentTrack', data);
        console.log(data);
      },
      function (err) {
        console.error(err);
      }
    );
  },

  async skipToPrevious(context) {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('access_token'));
    await spotifyApi.skipToPrevious().then(function (data) {
      console.log(data);
      context.dispatch('getCurrentTrack');
    });
    return 'testing';
  },

  async skipToNext(context) {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('access_token'));
    await spotifyApi.skipToNext().then(() => {
      context.dispatch('getCurrentTrack');
    });
  },

  pause(context) {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('access_token'));
    spotifyApi.pause().then(() => {
      context.dispatch('getCurrentTrack');
    });
  },

  play(context) {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('access_token'));
    spotifyApi.play().then(() => {
      context.dispatch('getCurrentTrack');
    });
  },
};

// const myId = "";
// spotifyApi.getMe().then(res =>{
//   myId = res.id
// })
