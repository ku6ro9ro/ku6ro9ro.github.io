<template>
  <div>
    <h1>
      Keisuke Goto's<br>Portfolio Site.
    </h1>
    <div id="p5Canvas"></div>
  </div>
</template>

<style scoped>
body{
  margin:-8px;
  padding:0px;
  overflow:hidden;
}

div{
  margin-top: 100px;
  text-align:left;
  position:relative;
}

h1{
  z-index:1;
  position:relative;
  font-size:48px
}

div{
  position:absolute;
  top:0;
  left:0;

}

canvas{
  position:absolute;
  top:0;
  left:0px;
}

#p5Canvas {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 100;
  pointer-events: none;
}
</style>

<script>
import sketch from '@/js/backgroundHome'

export default {
  name: 'Home',
  mounted () {
    const backgroundHome = sketch()
    const P5 = require('p5')
    new P5(backgroundHome, 'p5Canvas')
  }
}
</script>

