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
        'user-read-private user-read-email playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-modify-playback-state',
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
        alert(res.data.access_token);
        localStorage.setItem('access_token', res.data.access_token);
      })
      .then(() => {
        context.dispatch('getPlaylists');
      })
     ;
  },

  async getPlaylists(context) {
    const playlists = ref([]);
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('access_token'));
    await spotifyApi.getUserPlaylists().then(
      function (data) {
        console.log(playlists)
        playlists.value = data.items;
        context.commit('setPlaylists', playlists);
      },
      function (err) {
        console.error(err);
      }
    );
  },
};
