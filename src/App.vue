<template>
  <el-row type="flex" justify="center">
    <el-col :xs="20" :sm="16" :md="12" :lg="10" :xl="6">
      <el-container>
        <el-header
          ><h1>Convert TCX to GPX <span class="lightning">⚡</span></h1>
        </el-header>
        <el-main>
          <FileUpload />
        </el-main>
        <el-footer height="100%">
          <el-divider></el-divider>
          <div class="links">
            <el-link href="https://garyblackwood.co.uk" target="_blank"
              >By Gary Blackwood 👋</el-link
            >
            <el-link
              href="https://github.com/Garee/to-gpx-client"
              target="_blank"
              >Source 💻</el-link
            >
          </div>
        </el-footer>
      </el-container>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileUpload from "./components/FileUpload.vue";

export default defineComponent({
  name: "App",
  components: {
    FileUpload,
  },
});
</script>

<style>
@font-face {
  font-family: element-icons;
  src: url(./assets/fonts/element-icons.woff) format("woff"),
    url(./assets/fonts/element-icons.ttf) format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: "auto";
}

html {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100%;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #fff;
  opacity: 1;
  background-image: radial-gradient(#409eff 0.75px, #fff 0.75px);
  background-size: 15px 15px;
}
</style>

<style scoped>
.el-container {
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
}

.el-main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.el-footer {
  margin-bottom: 1rem;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
