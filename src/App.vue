<template>
  <div id="app">
    <tab-menu></tab-menu>
    <router-view />
  </div>
</template>

<script>
import TabMenu from "@/components/MenuTab";
import WebFont from "webfontloader";

WebFont.load({
  custom: {
    families: ['Noto Sans Japanese'],
    urls: ['https://fonts.googleapis.com/earlyaccess/notosansjapanese.css']
  },
})

export default {
  name: 'app',
  components: {
    TabMenu
  }
}

</script>

<style>

#app {
  margin-top:0px;
  font-family: 'Noto Sans Japanese',"Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #50504a;
}
</style>
