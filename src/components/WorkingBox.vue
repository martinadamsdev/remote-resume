<template>
    <div class="WorkingBox">
      <Editor id="MdEditor"
              ref="editor"
              :initialValue="initialValue"
              :options="options"
              :height="height"
              :initialEditType="initialEditType"
              :previewStyle="previewStyle"
              @load="onEditorLoad"
              @focus="onEditorFocus"
              @blur="onEditorBlur"
              @change="onEditorChange"
              @stateChange="onEditorStateChange"
      />
    </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
// import '@toast-ui/editor/dist/i18n/zh-cn'
import { Editor } from '@toast-ui/vue-editor'

export default {
  name: 'WorkingBox',
  components: {
    Editor
  },
  data () {
    return {
      initialValue: 'editorText',
      height: '100vh',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      options: {
        language: 'zh_cn',
        minHeight: '100vh',
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: true,
        hideModeSwitch: false,
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          'code',
          'codeblock'
        ]
      }
    }
  },
  mounted () {
    console.log(this.getHtml())
  },
  methods: {
    onEditorLoad () {
      this.initialValue = '欢迎使用 1024 RESUME！'
    },
    onEditorFocus () {
      this.initialValue = '欢迎使用 1024 RESUME！'
    },
    onEditorBlur () {
      this.initialValue = '欢迎使用 1024 RESUME！'
    },
    onEditorChange () {
      this.initialValue = '欢迎使用 1024 RESUME！'
    },
    onEditorStateChange () {
      this.initialValue = '欢迎使用 1024 RESUME！'
    },
    scroll () {
      this.$refs.editor.invoke('scrollTop', 10)
    },
    moveTop () {
      this.$refs.editor.invoke('moveCursorToStart')
    },
    getHtml () {
      return this.$refs.editor.invoke('getHtml')
    }
  }
}
</script>

<style lang="scss" scoped>
.WorkingBox {
  background-color: #DDF0ED;
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
