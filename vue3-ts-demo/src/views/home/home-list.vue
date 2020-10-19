<template>
  <div>
    <van-card v-for="li in lessonList"
              :key="li.id"
              :price="li.price"
              :title="li.title"
              :thumb="li.poster">
      <template #tags>
        <van-tag plain type="danger">
          {{formateCategory(li.category)}}
        </van-tag>
      </template>
    </van-card>
  </div>
</template>
<script lang="ts">
import { ILessons } from '@/typings/home'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    lessonList: {
      type: Array as PropType<ILessons[]>
    }
  },
  setup() {
    function formateCategory(type: number) {
      switch (type) {
        case 1:
          return 'react课程';
        case 2:
          return 'vue课程'
        case 3:
          return 'node课程'
        case 4:
          return 'vue课程'
      }
    }

    return {
      formateCategory
    }
  }
})
</script>
<style lang="scss" scoped>

</style>