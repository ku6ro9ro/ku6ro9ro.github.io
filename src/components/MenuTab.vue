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
header {
  width: 100%;
  height:100px;
  background-color:rgb(255, 255, 255,0.9);
  position: fixed;
  top: 0px;
  left:0px;
  z-index: 10;
  border-bottom:grey solid 1px;
}

ol {
  margin-top:0px;
  margin-left: 20px;
  width: 480px;
  display: flex;
  align-content:center;
  padding: 0;
  list-style: none;
}

li {
  width: 140px;
  height: 100px;
  margin-left: 3px;
  font-size: 15px;
  background-color:white;
  transition:all 0.5s;
  position: relative;

}

li:hover {
  background-color:grey
}

/*  router-linkをaタグに */
a {
  display:block;
  color: black;
  text-decoration: none;
  line-height: 100px;
  font-weight:normal;

/*メディアクエリ書く*/}
</style>