<template>
  <div id="app">
    <div>
      <HeaderTop />
    <NavBar/>
    <NavBarWhite/>

    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view><HomePage/> </router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import NavBarWhite from '../src/components/NavBarWhite.vue'
import HeaderTop from './components/HeaderTop.vue'
import HomePage from './Pages/Home/HomePage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    NavBarWhite,
    HeaderTop,
    HomePage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
