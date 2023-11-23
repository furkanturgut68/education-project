import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import 'video.js/dist/video-js.css'
import VueVideoPlayer from '@videojs-player/vue'

createApp(App).use(router).use(VueVideoPlayer).mount("#app");
