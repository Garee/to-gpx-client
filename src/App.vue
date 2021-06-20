<template>
  <el-row type="flex" justify="center">
    <el-col :xs="20" :lg="12">
      <el-container>
        <el-header><h1>GPX Conversion Tool</h1></el-header>
        <el-main>
          <FileUpload />
        </el-main>
        <el-footer>
          <el-divider></el-divider>
          <div class="links">
            <el-link href="https://garyblackwood.co.uk" target="_blank"
              >By Gary Blackwood</el-link
            >
            <el-link href="https://github.com/Garee" target="_blank"
              >Source</el-link
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

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.el-main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
