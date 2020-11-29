<template>
  <header>
    <div>
      <ol>
        <li
          v-for="(item, index) in items"
          :key=index
        >
        <router-link v-bind:to=item.path>
          {{ item.title }}
        </router-link>
        </li>
      </ol>
    </div>
  </header>
</template>

<script>
export default {
  name: "MenuTab",
  data() {
    return {
      items: [
        { title: "TOP", path: "/" },
        { title: "PROFILE", path: "/profile" },
        { title: "SKILLs", path: "/skills" },
        { title: "OUTPUTs", path: "/outputs" }
      ]
    };
  }
};
</script>

<style scoped>
html, body{
  width:100%;
}

header {
  height:100px;
  width:101%;
  text-align: center;
  background-color:rgb(255, 255, 255);
  position: fixed;
  top: 0px;
  left:-10px;
  z-index: 10;
  border-bottom:grey solid 1px;
}

ol {
  position:absolute;
  left:-30px;
  margin-top:0px;
  width: 100%;
  list-style: none;
}

li {
  width: 25%;
  float:left;
  height: 100px;
  font-size: 15px;
  background-color:white;
  transition:all 0.2s;

}

li:hover {
  background-color:grey
}


a {
  display:block;
  color: black;
  text-decoration: none;
  line-height: 100px;
  font-weight:normal;
}

@media(max-width:670px){
  li{
    width:50%;
    height:50px;
  }
  header{
    height:100px;
  }
  a{
    line-height:50px;
  }
}
@media(min-width:720px){
  ol{
    width:720px;
  }
}

</style>