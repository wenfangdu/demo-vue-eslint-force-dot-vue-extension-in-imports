<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    <HelloWorldCopy3 />

    <HelloWorldCopy />
    <HelloWorldCopy2 />
    <ComponentInSrc />
  </div>
</template>

<script>
/** WITHOUT WEBPACK ALIAS*/
//this should throw eslint error
import HelloWorld from "./components/HelloWorld";
//this should not
import HelloWorldCopy3 from "./components/HelloWorldWithExtension.vue";

/** WITH WEBPACK ALIAS */
//this should throw eslint error
import HelloWorldCopy from "@/components/HelloWorldWebpackAliasNoExtension";
//this should not
import HelloWorldCopy2 from "@/components/HelloWorldWebpackAliasWithExtension.vue";

/** MISC */
//this should not throw
import Vue from "vue";
//this should not throw (.json file)
import json from "./somefile";
//this should not throw (.js file)
import miscfile from "./miscfile";

/**
 * this should throw
 *
 * In eslint-plugin-import versions < 2.22.1 there was an issue where @/ComponentInSrc would be treated like a scoped module
 * eslint thought that '@/ComponentsInSrc' was a library like '@vue/cli' (I think nobody writes an extension when doing `import something from '@vue/cli'`)
 * so it didn't force the programmer to write an extension, even though it was a .vue file and it absolutely should force that.
 
 * Anyway, eslint-plugin-import was updated in this repo so it's working fine now
 
 @see https://github.com/benmosher/eslint-plugin-import/pull/1854
 @see https://github.com/benmosher/eslint-plugin-import/issues/1851
 @see https://github.com/3nuc/demo-vue-eslint-force-dot-vue-extension-in-imports/issues/1 
 */
import ComponentInSrc from "@/ComponentInSrc";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloWorldCopy,
    HelloWorldCopy2,
    HelloWorldCopy3,
    ComponentInSrc,
  },
};
//to silence "blah blah module not used" eslint errors which we don't care about here
Vue;
json;
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
