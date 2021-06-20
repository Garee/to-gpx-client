<template>
  <div class="file-upload">
    <el-progress
      :percentage="percentage"
      :status="status"
      type="circle"
      v-show="isLoading"
    ></el-progress>

    <el-upload
      v-show="!isLoading"
      ref="upload"
      drag
      action="api/convert"
      v-loading="isLoading"
      :before-upload="handleBeforeUpload"
      :on-progress="handleProgress"
      :on-success="handleSuccess"
      :on-error="handleError"
      :file-list="fileList"
      :show-file-list="false"
      :accept="'tcx'"
      :limit="1"
      :name="'file'"
      :auto-upload="true"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">supports a tcx file up to 1MB</div>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface FileUploadData {
  fileList: File[] | [];
  isLoading: boolean;
  percentage: number;
  status?: "success" | "exception";
}

export default defineComponent({
  name: "FileUpload",
  data: (): FileUploadData => ({
    fileList: [],
    isLoading: false,
    percentage: 0,
    status: undefined,
  }),
  methods: {
    handleBeforeUpload() {
      this.isLoading = true;
      this.status = undefined;
    },
    /* Called when some progress occurs */
    handleProgress(event: { percent: number }) {
      this.percentage = Math.floor(event.percent);
    },
    /* Called when the file has converted successfully */
    handleSuccess(response: string) {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);

      this.status = "success";

      const blob = new Blob([response], { type: "text/xml" });
      downloadBlob(blob, "result.gpx");

      this.$refs.upload.clearFiles();
    },
    /* Called when an error occurs during the conversion */
    handleError(err) {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);

      this.status = "exception";
      this.$message.error(`${err}`);
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

<style>
.file-upload {
  display: flex;
  height: 205px;
}

.el-progress--circle {
  display: flex;
}

.el-upload__tip {
  text-align: center;
}

@media only screen and (max-device-width: 480px) {
  .el-upload-dragger {
    width: 260px;
  }
}
</style>
