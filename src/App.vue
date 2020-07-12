<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld />
    <HelloWorldCopy3/>
    
    <HelloWorldCopy/>
    <HelloWorldCopy2/>
  </div>
</template>

<script>
/** WITHOUT WEBPACK ALIAS*/

//this should throw eslint error
import HelloWorld from './components/HelloWorld.vue';
//this should not
import HelloWorldCopy3 from './components/HelloWorldWithExtension.vue';

/** WITH WEBPACK ALIAS */
//this should throw eslint error
import HelloWorldCopy from '@/components/HelloWorldWebpackAliasNoExtension.vue'
//this should not
import HelloWorldCopy2 from '@/components/HelloWorldWebpackAliasWithExtension.vue'

/** MISC */
//this should not throw
import Vue from "vue"
//this should not throw (.json file)
import json from './somefile.json';
//this should not throw (.js file)
import miscfile from './miscfile.js';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorldCopy,
    HelloWorldCopy2,
    HelloWorldCopy3,
  }
}
//to silence "blah blah module not used" eslint errors which we don't care about here
Vue
json
console.log(miscfile);
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
