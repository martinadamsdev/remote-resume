<template>
  <div class="SideBar">
    <img class="Logo" src="../assets/image/logo.png" alt="" />
    <ul class="SideMenu">
      <li class="sideItem">
        <div class="language">
          <select v-model="$i18n.locale">
            <option
              v-for="(lang, i) in languages"
              :key="`Lang${i}`"
              :value="lang"
              >{{ lang }}</option
            >
          </select>
        </div>
      </li>
      <!--Vue https://vuejs.org/v2/guide-->
      <!--Class Bindings https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax-->
      <li
        v-for="(item, index) in SideMenuData"
        :key="item"
        :index="index"
        :class="{
          sideItem: true,
          active: index === current,
          background: index === current && background
        }"
        @mouseover="mouseover(index)"
        @mouseout="mouseout"
        @click="download(item)"
      >
        {{ $t(item) }}
      </li>
    </ul>
  </div>
</template>

<script>
import eventBus from "@/eventBus";

export default {
  name: "SideBar",
  data() {
    return {
      current: 0,
      background: false,
      SideMenuData: ["edit", "download", "pdf", "donate"],
      languages: ["English", "Chinese"]
    };
  },
  methods: {
    mouseover(index) {
      this.current = index;
      this.background = true;
    },
    mouseout() {
      this.current = 0;
      this.background = false;
    },
    download(item) {
      if (item === "download") {
        return eventBus.$emit("download");
      }

      if (item === "pdf") {
        return eventBus.$emit("pdf");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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

.language {
  //用div的样式代替select的样式
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  background: transparent;
}

.language > select {
  cursor: pointer;
  color: purple;
  text-align: center;
  text-align-last: center;
  //清除select的边框样式
  border: none;
  //清除select聚焦时候的边框颜色
  outline: none;
  background: transparent;
  //将select的宽高等于div的宽高
  width: 100%;
  height: 60px;
  line-height: 60px;
  //隐藏select的下拉图标
  -webkit-appearance: none;
  -moz-appearance: none;
}
.language > select > option {
  text-align: center;
  text-align-last: center;
}

.sideItem {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d7d7d7;
  height: 60px;
  font-size: 14px;
  cursor: pointer;
}

.active {
  color: #fff;
}

.background {
  background: #dea681;
}
</style>
