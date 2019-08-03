<template>
  <div>
    <h2>详情页</h2>
    {{this.$route.params.id}}
    <p>{{detail.price}}</p>
    <p>{{detail.description}}</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  // asyncData () {
  //   return axios.get('/data/test.json').then(res =>{
  //     console.log('res', res)
  //     return {
  //       detail: res.data
  //     }
  //   })
  // }
  async asyncData () {
    const res = await axios.get('/data/test.json')
    return {
      detail: res.data
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
