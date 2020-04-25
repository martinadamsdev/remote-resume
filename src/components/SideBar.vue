<template>
    <div class="SideBar">
      <img class="Logo" src="../assets/image/logo.png" alt="">
      <ul class="SideMenu">
        <li v-for="item in SideMenuData.zh"
            :key="item"
            class="SideItem"
        >{{item}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
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
  }
}
</script>

<style lang="scss">
  .SideBar {
    background-color: #e5e6db;
    width: 100px;
    padding: 0;
  }

  .Logo {
    width: 100px;
  }

  .SideMenu {}

  .SideItem {
    width: 100vw;
    text-align: center;
  }
</style>
