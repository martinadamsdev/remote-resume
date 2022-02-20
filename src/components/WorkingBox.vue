<template>
  <div class="WorkingBox">
    <Editor
      class="bytemd"
      :mode="mode"
      :value="value"
      :plugins="plugins"
      @change="handleChange"
    />
  </div>
</template>

<script>
import eventBus from "@/eventBus";
import "bytemd/dist/index.min.css";
import "juejin-markdown-themes/dist/juejin.min.css";
import { Editor } from "@bytemd/vue";
import qs from "qs";

export default {
  name: "WorkingBox",
  components: { Editor },
  data() {
    return {
      mode: "auto",
      value: "",
      plugins: [],
    };
  },
  mounted() {
    eventBus.$on("insert", (data) => {
      this.handleChange(`${this.value}\n${data}`);
    });

    eventBus.$on("download", () => {
      this.download("1024.Cool-RESUME.md", this.getValue());
    });

    eventBus.$on("pdf", () => {
      const html = this.getHtml().toString();
      this.$axios
        .post(
          "http://localhost:3000",
          qs.stringify({
            test: html,
          })
        )
        .then(function (res) {
          console.log(html);
          if (res.data.code === 200) {
            const aTag = document.createElement("a");
            aTag.download = "1024.Cool-RESUME.pdf";
            aTag.href = URL.createObjectURL(res.data.file);
            aTag.click();
            URL.revokeObjectURL(res.data.file);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  },
  methods: {
    handleChange(v) {
      this.value = v;
    },
    onEditorFocus() {
      this.saveMarkdown();
    },
    onEditorBlur() {
      this.saveMarkdown();
    },
    onEditorChange() {
      this.saveMarkdown();
    },
    onEditorStateChange() {
      this.saveMarkdown();
    },
    setValue(val) {
      return this.$refs.editor.setValue(val);
    },
    getValue() {
      return this.$refs.editor.getValue();
    },
    getHtml() {
      return this.$refs.editor.getHtml();
    },
    saveMarkdown() {
      this.$save.setItem("markdown", this.getValue());
    },
    download(fileName, content) {
      if (content) {
        const aTag = document.createElement("a");
        const blob = new Blob([content]);
        aTag.download = fileName;
        aTag.href = URL.createObjectURL(blob);
        aTag.click();
        URL.revokeObjectURL(blob);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.WorkingBox {
  background-color: #e5e5e5;
  -ms-flex: 4 1;
  flex: 4 1;
  display: -ms-flexbox;
  display: flex;
  ::v-deep .bytemd {
    -ms-flex: 1 1;
    flex: 1 1;
    box-sizing: border-box;
    height: 100vh;
  }
}
</style>
