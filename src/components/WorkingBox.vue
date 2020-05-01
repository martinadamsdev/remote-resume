<template>
    <div class="WorkingBox">
      <MarkdownEditor id="MdEditor"
              ref="editor"
              :initialValue="value"
              :height="height"
              :initialEditType="mode"
      />
    </div>
</template>

<script>
import eventBus from '@/eventBus'
import MarkdownEditor from '@components/MarkdownEditor'

export default {
  name: 'WorkingBox',
  components: {
    MarkdownEditor
  },
  data () {
    return {
      value: 'editorText',
      height: '100vh',
      mode: 'markdown'
    }
  },
  mounted () {
    eventBus.$on('insert', data => {
      this.setValue(data)
      console.log(this.getValue())
    })
  },
  methods: {
    scroll () {
      this.$refs.editor.invoke('scrollTop', 10)
    },
    moveTop () {
      this.$refs.editor.invoke('moveCursorToStart')
    },
    getHtml () {
      return this.$refs.editor.invoke('getHtml')
    },
    setValue (val) {
      return this.$refs.editor.setValue(val)
    },
    getValue () {
      return this.$refs.editor.getValue()
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
