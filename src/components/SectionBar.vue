<template>
    <div class="SectionBar">
      <div> Markdown </div>
      <ul class="guideList">
        <li v-for="(item,index) in guideList"
            :key="item"
            :index="index"
            :class="{active: index === current, background: index === current && background}"
            @mouseover="mouseover(index)"
            @mouseout="mouseout"
            @click="insert(item)"
        >{{ $t(item) }}</li>
      </ul>
    </div>
</template>

<script>
import eventBus from '@/eventBus'
import defaultData from '@/defaultData'

export default {
  name: 'SectionBar',
  data () {
    return {
      current: '',
      background: false,
      guideList: [
        'contact',
        'personal',
        'experience',
        'ability',
        'skill',
        'thanks'
      ]
    }
  },
  methods: {
    mouseover (index) {
      this.current = index
      this.background = true
    },
    mouseout () {
      this.current = ''
      this.background = false
    },
    insert (type) {
      eventBus.$emit('insert', defaultData[type])
    }
  }
}
</script>

<style lang="scss" scoped>
  .SectionBar {
    background-color: #dddfcb;
    flex: 2 1;
    max-width: 199px;
    min-width: 199px;
    border-right: 1px solid #ccc;
  }

  .guideList > li {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    border-bottom: 1px solid #e2e2e2;
    color: #999;
    cursor: pointer;
  }

  .active {
    color: #fff!important;
  }

  .background {
    background: #dea681;
  }
</style>
