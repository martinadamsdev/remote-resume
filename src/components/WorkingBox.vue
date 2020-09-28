<template>
  <div class="WorkingBox">
    <MarkdownEditor
      id="MdEditor"
      ref="editor"
      :initialValue="value"
      :height="height"
      :initialEditType="mode"
      @focus="onEditorFocus"
      @blur="onEditorBlur"
      @change="onEditorChange"
      @stateChange="onEditorStateChange"
    />
  </div>
</template>

<script>
import eventBus from "@/eventBus";
import MarkdownEditor from "@components/MarkdownEditor";
import qs from "qs";

export default {
  name: "WorkingBox",
  components: {
    MarkdownEditor
  },
  data() {
    return {
      value: this.$save.getItem("markdown"),
      height: "100vh",
      mode: "markdown"
    };
  },
  mounted() {
    eventBus.$on("insert", data => {
      this.setValue(`${this.getValue()}\n${data}`);
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
            test: html
          })
        )
        .then(function(res) {
          console.log(html);
          if (res.data.code === 200) {
            const aTag = document.createElement("a");
            aTag.download = "1024.Cool-RESUME.pdf";
            aTag.href = URL.createObjectURL(res.data.file);
            aTag.click();
            URL.revokeObjectURL(res.data.file);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  },
  methods: {
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
    }
  }
};
</script>

<style lang="scss" scoped>
.WorkingBox {
  background-color: #e5e5e5;
  -ms-flex: 4 1;
  flex: 4 1;
  display: -ms-flexbox;
  display: flex;
}

.WorkingBox #MdEditor {
  -ms-flex: 1 1;
  flex: 1 1;
  box-sizing: border-box;
}
</style>
