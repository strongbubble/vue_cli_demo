<template>
  <div id="app">
    <div class="tabbar">
      <router-link to="/home">首页</router-link>
      <router-link to="/market">闪送超市</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
<style>
#app .tabbar{
  position:fixed;
  left:0;
  right:0;
  height:45px;
  bottom:0;
  background:white;
  border-top:1px solid #ccc;
  border-right:1px solid #f5f5f5;
  display:flex;
  align-items:center;
  justify-content:space-around;
}
#app .tabbar{
  
}
</style>
