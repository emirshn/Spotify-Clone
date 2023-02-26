import { createStore } from 'vuex';

import Spotify from './modules/spotify/index.js';
import Control from './modules/control/index.js';
const store = createStore({
  modules: {
    spotify: Spotify,
    control: Control,
  },
});

export default store;
