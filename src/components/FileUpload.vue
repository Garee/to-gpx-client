<template>
  <form @submit.prevent="onSubmit">
    <label>
      Choose a file to convert:
      <input name="file" type="file" @change="onFileUpload" />
    </label>
    <input type="submit" value="Upload" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface FileUploadData {
  file: File | null;
}

export default defineComponent({
  name: "FileUpload",
  props: {},
  data: (): FileUploadData => ({
    file: null,
  }),
  methods: {
    onFileUpload(e: InputEvent) {
      const target = e.target as HTMLInputElement;
      this.file = target.files ? target.files[0] : null;
    },
    onSubmit() {
      if (!this.file) {
        return;
      }

      const formData = new FormData();
      formData.append("file", this.file);

      fetch("api/convert", { method: "POST", body: formData })
        .then((result) => result.blob())
        .then((blob) => downloadBlob(blob, "result.gpx"))
        .catch((error) => {
          console.error(error);
        });
    },
  },
});

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(new Blob([blob]));
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  a.parentNode?.removeChild(a);
}
</script>

<style></style>
