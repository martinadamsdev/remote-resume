<template>
    <div class="WorkingBox">
      <MarkdownEditor id="MdEditor"
              ref="editor"
              :initialValue="value"
              :height="height"
              :initialEditType="mode"
              @change="onEditorChange"
      />
    </div>
</template>

<script>
import eventBus from '@/eventBus'
import MarkdownEditor from '@components/MarkdownEditor'
// const saveMarkdown = localStorage

export default {
  name: 'WorkingBox',
  components: {
    MarkdownEditor
  },
  data () {
    return {
      value: '',
      height: '100vh',
      mode: 'markdown'
    }
  },
  mounted () {
    eventBus.$on('insert', data => {
      this.setValue(`${this.getValue()}\n${data}`)
    })

    eventBus.$on('download', () => {
      this.download('1024.Cool-RESUME.md', this.getValue())
    })
  },
  methods: {
    onEditorChange () {
      console.log(this.getValue())
    },
    setValue (val) {
      return this.$refs.editor.setValue(val)
    },
    getValue () {
      return this.$refs.editor.getValue()
    },
    download (fileName, content) {
      const aTag = document.createElement('a')
      const blob = new Blob([content])
      aTag.download = fileName
      aTag.href = URL.createObjectURL(blob)
      aTag.click()
      URL.revokeObjectURL(blob)
    }
  }
}
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
