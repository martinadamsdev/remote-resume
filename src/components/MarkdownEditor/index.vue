<template>
  <div ref="toastuiEditor"></div>
</template>
<script>
import "codemirror/lib/codemirror.css";
import "./toastui-editor.scss";
import Editor from "@toast-ui/editor";
import { optionsMixin } from "./options";

export default {
  name: "MarkdownEditor",
  mixins: [optionsMixin],
  props: {
    previewStyle: {
      type: String,
    },
    height: {
      type: String,
    },
    initialEditType: {
      type: String,
    },
    initialValue: {
      type: String,
    },
    options: {
      type: Object,
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  watch: {
    previewStyle(newValue) {
      this.editor.changePreviewStyle(newValue);
    },
    height(newValue) {
      this.editor.height(newValue);
    },
  },
  mounted() {
    const options = {
      ...this.computedOptions,
      el: this.$refs.toastuiEditor,
    };
    this.editor = new Editor(options);
  },
  methods: {
    getRootElement() {
      return this.$refs.toastuiEditor;
    },
    setValue(value) {
      return this.editor.mdEditor.cm.setValue(value);
    },
    getValue() {
      return this.editor.mdEditor.cm.getValue();
    },
    getHtml() {
      return this.editor.preview.el;
    },
  },
};
</script>
