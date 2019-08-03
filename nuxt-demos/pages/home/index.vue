<template>
  <div>
    home page
    <button @click="sayHello()">say hello</button>
  </div>
</template>
<script>
export default {
  methods: {
    sayHello () {
      this.$debug('say hello')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

