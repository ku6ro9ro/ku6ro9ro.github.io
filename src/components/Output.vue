<template>
  <div class="container">
    <div class="output-cover">
      <h1>OUTPUTs</h1>
      <div class="content" v-for="output in outputs" :key="output">
      <h3> {{ output.name }} </h3>
      <h2> {{ output.tool}} </h2>
      <h2> {{ output.role}} </h2>
      <p> {{ output.text }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Output",
  data() {
    return {
      outputs:[
        {
          name: "自動運転シミュレーター",
          tool: "使用ツール：unity",
          text: "自動運転中にシステムが危険を察知した場合に、制御を運転手に戻す必要が生まれる可能性があります。三菱自動車工業のインターン中、その状況を再現するシミュレーターをunityで制作しました。"
        },
        {
          name: "3Dアバター",
          tool: "使用ツール：blender, clipstudio",
          text: "『自分だけの身体』が欲しいと考え、自作アバターを作るに至りました。本格的な人体モデリングは初挑戦だったものの、納得行くものを目指しました。VRM化済み。"
        },
        {
          name: "ARジェンガ",
          tool: "使用ツール：unity, ARKit2.0",
          text: "VRだけでなくARにも触れておく必要があると思い、ARkitでジェンガを制作中。unity cloud buildを利用し、Win環境でiOSの開発を行っています。"
        },
        {
          name: "ポートフォリオサイト",
          tool: "使用ツール：Vue.js, firebase",
          text: "フロントエンドについて触れたことがなく、勉強のために作成。シンプルでも破綻がないことを意識して制作しました。"
        },
        {
          name: "3Dアクションゲーム",
          tool: "使用言語：C++",
          role: "役割：プランナー, デザイナー",
          text: "文化祭展示用の3Dアクションゲームを制作。展示用に、見ている人も「楽しい」と思えるように、進行状況や動いていることが理解るデザインを目指しました。"
        }
      ]
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.output-cover {
  margin-top:100px;
  display: inline-block;
  max-width:1200px;
}

h1{
    font-size:42px;
}
.content {
  background-color: rgb(245, 245, 245);
  display: inline-block;
  vertical-align:top;
  border-radius:30px;
  margin: 10px;
  height:320px;
  width: 30%;
}

h3 {
  color: rgb(0, 0, 0);
}

h2{
  font-size:16px;
}

@media(max-width:670px){
  .output-cover{
    margin-top:200px;
  }
  .content {
    width:80%;
    height:250px;
  }

}

</style>
