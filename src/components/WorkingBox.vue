<template>
    <div class="WorkingBox">
      <Editor id="MdEditor"
              ref="editor"
              :initialValue="initialValue"
              :options="options"
              :height="height"
              :initialEditType="initialEditType"
              :previewStyle="previewStyle"
      />
    </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
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
        language: 'zh_CN',
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
  }
}
</script>

<style lang="scss">
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
}
</style>
