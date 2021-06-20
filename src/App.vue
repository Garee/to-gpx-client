<template>
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :span="12">
      <el-container>
        <el-header><h1>To GPX</h1></el-header>
        <el-main>
          <FileUpload />
        </el-main>
        <el-footer>
          <el-divider></el-divider>
          <span>By Gary Blackwood</span>
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

#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.el-main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
