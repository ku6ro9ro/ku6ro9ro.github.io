<template>
  <div>
    <h1>
      Keisuke Goto's<br>Portfolio Site.
    </h1>
    <router-link to="/outputs">Go to page2</router-link>
    
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<style scoped>
body{
  margin:0px;
  padding:0px;
  overflow:hidden;
}
div{
  margin-top: 100px;
  text-align:left;
  position:relative;
}

h1{
  z-index:10;
  position:fixed;
  font-size:48px
}

canvas{
  position:absolute;
  top:0;
  left:0;
  margin-left:-8px;
}
</style>

<script>
export default{
  mounted(){
    init();
  }
}
// resize時にも
window.addEventListener('resize', init);

// ページの読み込みを待つ
function init() {
  // サイズを指定
  const width = window.innerWidth;
  const height = window.innerHeight-100;
  let rot = 0; // 角度
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  // シーンを作成
  const scene = new THREE.Scene();
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height);
  // 星屑を作成します (カメラの動きをわかりやすくするため)
  createStarField();
  function createStarField() {
    // 形状データを作成
    const geometry = new THREE.Geometry();
// 配置する範囲
    const SIZE = 3000;
    // 配置する個数
    const LENGTH = 1000;
    for (let i = 0; i < LENGTH; i++) {
      geometry.vertices.push(
        new THREE.Vector3(
          SIZE * (Math.random() - 0.5),
          SIZE * (Math.random() - 0.5),
          SIZE * (Math.random() - 0.5)
        )
      );
    }
    // マテリアルを作成
    const material = new THREE.PointsMaterial({
      // 一つ一つのサイズ
      size: 10,
      // 色
      color: 0xffffff
    });
    // 物体を作成
    const mesh = new THREE.Points(geometry, material);
    scene.add(mesh);
  }
  renderer.render(scene, camera);
//  tick();
  // 毎フレーム時に実行されるループイベントです
  function tick() {
    rot += 1;
    // ラジアンに変換する
    const radian = (rot * Math.PI) / 180;
    // 角度に応じてカメラの位置を設定
    camera.position.x = 1000 * Math.sin(radian);
    camera.position.z = 1000 * Math.cos(radian);
    // 原点方向を見つめる
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    // レンダリング
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
}

/*
function init() {
  // schene
  const scene = new THREE.Scene();

  // size settings
  const width = window.innerWidth;
  const height = window.innerHeight-100;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.aspect = width / height;
  camera.position.set(0, 0, +1000);

  // 箱を作成
  const geometry = new THREE.BoxGeometry(500, 500, 500);
  const material = new THREE.MeshStandardMaterial({color: 0x0000FF});
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
  directionalLight.position.set(1, 1, 1);
  // シーンに追加
  scene.add(directionalLight);

  // 初回実行
  renderer.render(scene, camera);
}
*/
</script>
