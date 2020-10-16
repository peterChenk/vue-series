<template>
  <div class="home">
    <!-- 首页头部 -->
    <HomeHeader></HomeHeader>
    <!-- 轮播图 -->
    <HomeSwiper></HomeSwiper>
    <!-- 课程列表 -->
    <HomeList></HomeList>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HomeHeader from './home-header.vue'
import HomeSwiper from './home-swiper.vue'
import HomeList from './home-list.vue'

export default defineComponent({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeList
  }
})
</script>
<style lang="scss" scoped>

</style>