<template>
  <div class="container">
    <h1>PROFILE</h1>
    <div class="profile-cover">
      <div class="icon"></div>
      <div class="profile">
        <div class="profilelist" v-for="item in items" :key="item">
          <h3> {{ item.name }} </h3>
          <p> {{ item.text }} </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "item",
  data() {
    return {
      items:[
        {
          name: "名前",
          text: "Keisuke"
        },
        {
          name: "趣味",
          text: "理想の身体作り(3Dモデリング)"
        },
        {
          name: "興味",
          text: "グラフィックプログラミング、音の視覚化。"
        },
        {
          name: "休日の過ごし方",
          text: "動画や記事を見たりしながら、やる気を出して勉強。"
        },
        {
          name: "夢",
          text: "自分の作るものが誰かのきっかけになること。"
        }
      ]
    };
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin-top:100px; /* レスポン */
  display: inline-block;
  text-align: center;
  box-shadow: 0 0 8px gray;
  border-radius:36px;
}

h1{
    font-size:42px;
}

.icon{
  vertical-align:top;
  display:inline-block;
  box-shadow: 0 0 8px gray;
  margin:60px 60px;
  height:240px;
  width:250px;
  background-image: url('../assets/icon.jpg');
  background-size:100%;
  background-repeat:no-repeat;
}

.profile{
  margin:auto 30px;
  vertical-align:top;
  display:inline-block;
  text-align: left;
}

.profile-cover{
  float:left;
}

@media(max-width:670px){
  .container{
    margin-top:200px;
  }
}

</style>