<template>
  <div ref="toastuiEditor"></div>
</template>
<script>
import 'codemirror/lib/codemirror.css'
import './toastui-editor.scss'
import Editor from '@toast-ui/editor'
import { optionsMixin } from './options'

export default {
  name: 'MarkdownEditor',
  mixins: [optionsMixin],
  props: {
    previewStyle: {
      type: String
    },
    height: {
      type: String
    },
    initialEditType: {
      type: String
    },
    initialValue: {
      type: String
    },
    options: {
      type: Object
    }
  },
  data () {
    return {
      editor: null
    }
  },
  watch: {
    previewStyle (newValue) {
      this.editor.changePreviewStyle(newValue)
    },
    height (newValue) {
      this.editor.height(newValue)
    }
  },
  mounted () {
    const options = {
      ...this.computedOptions,
      el: this.$refs.toastuiEditor
    }
    this.editor = new Editor(options)
    console.log(this.setValue('#  xxxxxxxxxxx'))
    console.log(this.editor.mdEditor.cm.getValue())
  },
  methods: {
    getRootElement () {
      return this.$refs.toastuiEditor
    },
    setValue (value) {
      this.editor.mdEditor.cm.setValue(value)
    },
    getValue () {
      this.editor.mdEditor.cm.getValue()
    },
    setHtml (value) {
      this.editor.setHtml(value)
    },
    getHtml () {
      return this.editor.getHtml()
    }
  }
}
</script>
