<template>
<body>
  <div id=container>
    <h1>
      Keisuke's Portfolio Site.
    </h1>
  </div>
  </body>
</template>

<style scoped>
html, body{
  height:100%;
}

body > #container{
  height:auto;
}

#container{

  min-height:100vh;
  margin:-24px -16px;
  padding-top:16px;
  background-image: url(../assets/background.jpeg);
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat:no-repeat;
  z-index:0;
}

h1{
  position:absolute;
  margin-top: 230px;
  z-index:1;
  font-size:5vw;
  color:rgb(68, 61, 61);
  letter-spacing:4px;
  border-bottom:rgb(68, 61, 61) solid 4px;
}

@media(max-width:670px){
  h1{
    margin-top:240px;
    font-size:10vw;
  }
}

@media(min-width:720px){
  h1{
    font-size:36px;
  }
}
</style>
