<template>
    <div class="SideBar">
      <img class="Logo" src="../assets/image/logo.png" alt="">
      <ul class="SideMenu">
        <li>
          <ul class="language">
            <li v-for="item in language.lang" :key="item" data-lang="en_US">{{item}}</li>
          </ul>
        </li>
        <!--Vue https://vuejs.org/v2/guide-->
        <!--Class Bindings https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax-->
        <li v-for="(item, index) in SideMenuData"
            :key="item"
            :index="index"
            :class="{sideItem: true, active: index === current, background: index === current && background}"
            @mouseover="mouseover(index)"
            @mouseout="mouseout"
        >{{item}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      current: 0,
      background: false,
      SideMenuData: [
        'edit',
        'download',
        'pdf',
        'donate'
      ],
      language: []
    }
  },
  created () {
    // languages.setLanguage(this.language.type, this.SideMenuData)
    // languages.setLanguage(this.language.type, this.language.lang)
  },
  methods: {
    mouseover (index) {
      this.current = index
      this.background = true
    },
    mouseout () {
      this.current = 0
      this.background = false
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

  .sideItem {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d7d7d7;
    height: 60px;
    font-size: 14px;
    cursor: pointer
  }

  .active {
    color: #fff;
  }

  .background {
    background: #dea681;

  }
</style>
