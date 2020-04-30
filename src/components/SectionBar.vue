<template>
    <div class="SectionBar">
      <div></div>
      <div></div>
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
      const text = {
        contact: `# 联系方式
（HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）

- 手机：135.... （如果是外地手机，可注明。如经常关机，要写上最优联系时间）
- Email：goodman@gmail.com （虽然我觉得QQ邮箱无所谓，不过有些技术人员比较反感，建议用G，非要用的话，不要用数字邮箱名）
- QQ/微信号：6...（提供一个通过网络可以联系到你的方式）`
      }
      console.log(text[type])
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
