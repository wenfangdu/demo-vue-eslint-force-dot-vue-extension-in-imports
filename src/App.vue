<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorldCopy/>
    <HelloWorldCopy2/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import HelloWorldCopy from '@/components/HelloWorldWebpackAliasNoExtension'
import HelloWorldCopy2 from '@/components/HelloWorldWebpackAliasWithExtension'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorldCopy,
    HelloWorldCopy2,
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
  margin-top: 60px;
}
</style>
