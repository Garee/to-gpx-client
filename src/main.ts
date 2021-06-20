import { createApp } from "vue";
import {
  ElContainer,
  ElCol,
  ElDivider,
  ElFooter,
  ElHeader,
  ElIcon,
  ElLink,
  ElLoading,
  ElMain,
  ElMessage,
  ElProgress,
  ElRow,
  ElUpload,
} from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";

const app = createApp(App);
app.use(ElContainer);
app.use(ElCol);
app.use(ElDivider);
app.use(ElFooter);
app.use(ElHeader);
app.use(ElIcon);
app.use(ElUpload);
app.use(ElLink);
app.use(ElLoading);
app.use(ElMain);
app.use(ElMessage);
app.use(ElProgress);
app.use(ElRow);
app.mount("#app");
