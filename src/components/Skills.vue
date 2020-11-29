<template>
  <div class="container">
    <div class="skill-cover">
      <h1>SKILLs</h1>
      <div class="content" v-for="skill in skills" :key="skill">
      <h3> {{ skill.name }} </h3>
      <h2> {{ skill.term}} </h2>
      <h2> {{ skill.role}} </h2>
      <p> {{ skill.text }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skill",
  data() {
    return {
      skills:[
        {
          name: "C/C++",
          term: "期間：6年程",
          text: "C言語が始めて学んだ言語です。高専5年間+現職1年。高専時代の研究で音声解析に使ったり、arduinoを使用して簡単なゲームを実装するなど。大学の学部時代のVR実験のプログラムはC++で制作しました。"
        },
        {
          name: "C#",
          term: "期間：6ヶ月",
          text: "unityで制作するたびに調べながら使用しています。一歩進んだ開発をするために、一度まとまった勉強をする必要を感じています。。"
        },
        {
          name: "3Dモデリング",
          term: "期間：6ヶ月",
          text: "3Dゲーム作成時にキャラクターやステージのデザインから、ギミックやキャラの3Dモデルを制作しました。また、VRC対応のアバターもデザインから動かすまでを個人で行いました。"
        },
        {
          name: "HTML & CSS",
          term: "期間：1ヶ月",
          text: "このポートフォリオサイトを制作するために使用。Progateで一気に学習しました。仕組みを理解することでモノの構造が見えてくることが楽しい（HTMLに限らず）。"
        },
        {
          name: "シェーダコーディング",
          term: "期間：1ヶ月",
          text: "unityでシェーダーを学ぶに際して「そもそもグラフィックとは？」という考えから、いわゆるクリエイティブ・コーディングに興味を持ちました。GLSLやProsessing等に手をつけながら、どうすれば表現したいものが作れるかを模索中。"
        }
      ]
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill-cover {
  display: inline-block;
  max-width:1200px;
  margin-top:100px;
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
  height:360px;
  width: 30%;
}

h3 {
  color: rgb(0, 0, 0);
}

h2{
  font-size:16px;
}

@media(max-width:670px){
  .skill-cover{
    margin-top:200px;
  }
  .content {
    width:80%;
    height:270px;
  }

}

</style>
