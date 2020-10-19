<template>
  <div class="home">
    <!-- 首页头部 -->
    <HomeHeader :category="category"
                @setCurrentCategory="setCurrentCategory"></HomeHeader>
    <!-- 轮播图 -->
    <div class="home-container" ref="refresElm">
      <Suspense>
        <template #default>
          <HomeSwiper></HomeSwiper>
        </template>
        <template #fallback>
          <div>loading...</div>
        </template>
      </Suspense>
      
      <!-- 课程列表 -->
      <HomeList :lessonList="lessonList"></HomeList>
      <div v-if="isLoading">加载中。。。</div>
      <div v-if="!hasMore">加载完成</div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import HomeHeader from "./home-header.vue";
import HomeSwiper from "./home-swiper.vue";
import HomeList from "./home-list.vue";
import { Store, useStore } from "vuex";
import { IGlobalState } from "@/store";
import { CATOGORY_TYPES } from "@/typings/home";
import * as Types from "@/store/action-types";
import { useLoadMore } from '@/hooks/useLoadMore'

function useCategory(store: Store<IGlobalState>) {
  const category = computed(() => {
    return store.state.home.currentCategory;
  });

  function setCurrentCategory(category: CATOGORY_TYPES) {
    store.commit(`home/${Types.SET_CATEGORY}`, category);
  }

  return {
    category,
    setCurrentCategory
  };
}

function useLessonList(store: Store<IGlobalState>) {
  const lessonList = computed(() => store.state.home.lessons.list)
  onMounted(() => {
    if (lessonList.value.length === 0) {
      store.dispatch(`home/${Types.SET_LESSON_LIST}`)
    }
  })
  
  return {
    lessonList
  }
}

export default defineComponent({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeList,
  },
  setup() {
    // 1.需要获取vuex的分类状态，有个更改状态的功能
    const store = useStore<IGlobalState>();
    // 分类
    const { category, setCurrentCategory } = useCategory(store);
    // 课程获取
    const { lessonList } = useLessonList(store)

    // 获取真实dom
    const refresElm = ref<null | HTMLElement>(null)

    const { isLoading, hasMore } = useLoadMore(refresElm, store, `home/${Types.SET_LESSON_LIST}`)

    return {
      category,
      setCurrentCategory,
      lessonList,
      refresElm,
      isLoading,
      hasMore
    };
  }
});
</script>
<style lang="scss" scoped>
  .home-container {
    position: absolute;
    top: 65px;
    bottom: 50px;
    width: 100%;
    overflow-y: scroll;
  }
</style>