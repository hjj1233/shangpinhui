<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer v-show='$route.meta.show'/>
  </div>
</template>

<script>

 import Header from './components/Header/Header'
 import Footer from './components/Footer/Footer'
export default {
 
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
      this.$store.dispatch('categoryList')
      console.log("======================",1)
  }
}
</script>

<style>

</style>
