<template>
  <FileUpload />
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
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
