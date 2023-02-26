import { createApp } from 'vue';

import App from './App.vue';
import './index.css';
import router from './router.js';
import store from './store/index.js';

import sideBar from './components/SideBar.vue';
import MainContent from './components/MainContent.vue';
import playBar from './components/PlayBar.vue';

const app = createApp(App);
app.component('side-bar', sideBar);
app.component('play-bar', playBar);
app.component('main-content', MainContent);
app.use(router);
app.use(store);

app.mount('#app');
