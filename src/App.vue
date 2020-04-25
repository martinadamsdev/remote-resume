<template>
  <div class="resume">
    <SideBar />
    <SectionBar />
    <WorkingBox />
  </div>
</template>

<script>
import SideBar from '@components/SideBar'
import SectionBar from '@components/SectionBar'
import WorkingBox from '@components/WorkingBox'

export default {
  name: 'Resume',
  components: {
    SideBar,
    SectionBar,
    WorkingBox
  }
}
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
