<template>
    <div class="SideBar">
      <img class="Logo" src="../assets/image/logo.png" alt="">
      <ul class="SideMenu">
        <li v-for="(item, index) in SideMenuData.zh"
            :key="item"
            :index="index"
            @mouseover="mouseover(index)"
            @mouseout="mouseout"
            class="SideItem"
            :class="{Active: isActive === index}
        >{{item}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      isActive: 0,
      SideMenuData: {
        zh: [
          '编辑',
          '下载',
          'PDF',
          '教程',
          '捐赠'
        ]
      }
    }
  },
  methods: {
    mouseover (index) {
      this.isActive = index
    },
    mouseout () {
      this.isActive = 0
    }
  }
}
</script>

<style lang="scss">
  .SideBar {
    background-color: #afa37c;
    width: 100px;
    padding: 0;
  }

  .Logo {
    width: 100px;
  }

  .SideMenu {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex: 5 1;
    flex: 5 1;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .SideItem {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d7d7d7;
    height: 60px;
    font-size: 14px;
    cursor: pointer
  }

  .Active {
    color: #fff;
  }
  .BackGround {
    background: #DDF0ED;
  }
</style>
