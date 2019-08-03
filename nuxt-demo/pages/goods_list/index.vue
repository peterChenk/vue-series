<template>
  <div>
    商品列表
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <nuxt-link :to="'/detail/' + item.id">{{item.name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  asyncData(context) {
    const arr = context.app.sort([1,3,6,2])
    console.log('arr', arr)

    const arr2 = context.app.$integerSort([1,3,6,2])
    console.log('arr2', arr2)

  },
  data: () => {
    return {
      list: [
        {id: '001', name: 'iphone100', price: 20000},
        {id: '002', name: 'huawei', price: 10000},
        {id: '003', name: 'xiaomi', price: 9000}
      ]
    }
  },
  mounted() {
    const arr3 = this.$integerSort([1,3,6,2])
    console.log('arr3', arr3)
  }
}
</script>

<style lang="scss" scoped>

</style>

