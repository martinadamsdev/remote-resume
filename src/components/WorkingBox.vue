<template>
    <div class="WorkingBox">
      <Editor :initialValue="editorText"
              :options="editorOptions"
              width="100vw"
              height="100vh"
              id="MdEditor"
              initialEditType="markdown"
              previewStyle="vertical"
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
      editorText: 'This is initialValue.',
      editorOptions: {
        minHeight: '200px',
        language: 'zh-CN',
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
  background-color: #EEF0DC;
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
