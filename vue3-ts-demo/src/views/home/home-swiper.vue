<template>
  <div class="swipe-warp">
    <van-swipe v-if="silerList.length > 0">
      <van-swipe-item v-for="i in silerList" :key="i.url">
        <img :src="i.url" style="max-width: 100%"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
import { IGlobalState } from '@/store'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import * as Types from '@/store/action-types'

export default defineComponent({
  async setup() {
    // 页面加载获取数据
    const store = useStore<IGlobalState>();
    const silerList = computed(() => store.state.home.silders);
    if (silerList.value.length === 0) { // 缓存 如果没有数据再请求
      await store.dispatch(`home/${Types.SET_SLIDER_LIST}`) 
    }

    return {
      silerList
    }
  }
})
</script>
<style lang="scss" scoped>
  .swipe-warp{
    width: 100%;
  }
</style>