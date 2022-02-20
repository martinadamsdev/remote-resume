<template>
  <div class="resume">
    <SectionBar />
    <WorkingBox />
  </div>
</template>

<script>
import SectionBar from "@components/SectionBar";
import WorkingBox from "@components/WorkingBox";

export default {
  name: "App",
  components: {
    SectionBar,
    WorkingBox,
  },
};
</script>

<style lang="scss">
.resume {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: stretch;
  align-items: stretch;
  min-height: 100vh;
  max-height: 100vh;
}
</style>
