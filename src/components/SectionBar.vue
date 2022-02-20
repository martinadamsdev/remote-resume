<template>
  <div class="SectionBar">
    <div class="title">Easy Resume</div>
    <ul class="guideList">
      <li
        v-for="(item, index) in guideList"
        :key="item"
        :class="{
          active: index === current,
          background: index === current && background,
        }"
        @mouseover="mouseover(index)"
        @mouseout="mouseout"
        @click="insert(item)"
      >
        {{ $t(item) }}
      </li>
    </ul>
    <div class="title">
      <a
        href="https://github.com/martinageradams/easy-resume"
        title="github:martinageradams"
        >Github</a
      >
    </div>
    <div class="wechat">
      <div class="title">{{ $t("nickname") }}</div>
      <img
        src="https://open.weixin.qq.com/qr/code?username=gh_11f860dcf461"
        alt="前端老王"
        title="前端老王"
      />
    </div>
    <div class="title">正在努力重构中 ...</div>
  </div>
</template>

<script>
import eventBus from "@/eventBus";
import defaultData from "@/defaultData";

export default {
  name: "SectionBar",
  data() {
    return {
      current: "",
      background: false,
      guideList: [
        "contact",
        "personal",
        "experience",
        "ability",
        "skill",
        "education",
      ],
    };
  },
  methods: {
    mouseover(index) {
      this.current = index;
      this.background = true;
    },
    mouseout() {
      this.current = "";
      this.background = false;
    },
    insert(type) {
      eventBus.$emit("insert", defaultData[type]);
    },
  },
};
</script>

<style lang="scss" scoped>
.SectionBar {
  background-color: #dddfcb;
  flex: 2 1;
  max-width: 199px;
  min-width: 199px;
  border-right: 1px solid #ccc;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
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
  color: #fff !important;
}

.background {
  background: #dea681;
}

.wechat {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.wechat > img {
  width: 120px;
}
</style>
