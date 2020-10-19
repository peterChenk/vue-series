<template>
  <div id="nav">
    <router-view>

    </router-view>


    <van-tabbar route>
      <van-tabbar-item to="/" name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/mine" name="orders" icon="orders-o">课程页</van-tabbar-item>
      <van-tabbar-item to="/profile" name="manager" icon="manager-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">

</style>
