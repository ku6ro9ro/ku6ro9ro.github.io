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
  name: "TabMenu",
  data() {
    return {
      items: [
        { title: 'TOP', path: '/' },
        { title: 'PROFILE', path: '/profile' },
        { title: 'SKILLs', path: '/skills' },
        { title: 'OUTPUTs', path: '/outputs' }
      ]
    };
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height:100px;
  margin-left:0px;
  background-color:rgb(255, 255, 255);
  position: absolute;
  top: 0px;
  left:0px;
  z-index: 10;
  border-bottom:grey solid 1px;
}

ol {
  margin-top:0px;
  margin-left: 20px;
  float: left;
  width: 480px;
  display: flex;
  align-content:center;
  padding: 0;
  list-style: none;
}

li {
  float:left;
  width: 140px;
  height: 100px;
  margin-left: 3px;
  font-size: 15px;
  background-color: #ffffff;
  transition:all 0.5s;
  position: relative;
  top:0px
}

li:hover {
  background-color:grey
}

/*  router-linkをaタグに */
a {
  display:block;
  color: rgb(0, 0, 0);
  text-decoration: none;
  line-height: 100px;
  font-weight:normal;

/*メディアクエリ書く*/}
</style>
