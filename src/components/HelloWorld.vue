<template>
  <div class="hello">
    <div class="g-word">
      <!-- <p>滚动视差</p> -->
      <div :class="{'active': color, 'act': !color}" @click="colorChange"></div>
      <img :src="img" alt=""/>
    </div>
    <div class="g-img1">IMG1</div>
    <div class="g-word">Content1</div>
    <div class="g-img2">IMG2</div>
    <div class="g-word">Content2</div>
    <div class="g-img3">IMG3</div>
    <div class="g-word">Footer</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      color: false,
      img: require('../assets/personal0.png')
    }
  },
  methods: {
    colorChange () {
      this.color = !this.color
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  height: 100vh;
  line-height: 100vh;
  font-size: 60px;
  text-align: center;
}
img {
  display: block;
  width: 100px;
  height: 100px;
  background: #f00;
}
.mask {
  /* width: 250px; height: 187.5px; */
  -webkit-mask-image: url('../../static/images/f2b7e79552e447d917fa4b2761196907.png');
  mask: url('../../static/images/f2b7e79552e447d917fa4b2761196907.png');
  mask-image: url('../../static/images/f2b7e79552e447d917fa4b2761196907.png');
}
.g-img1 {
    background-image: url('http://pic7.photophoto.cn/20080407/0034034859692813_b.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
}
.g-img2 {
    background-image: url('http://up.enterdesk.com/edpic_source/21/00/00/210000f8e772d7fc0758e67ae4b48807.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
}
.g-img3 {
    background-image: url('https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=');
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
}

.act {
  width: 200px;
  height: 200px;
  background-image: url('../../static/images/personal0.png'), linear-gradient(#f00, #f00);
  background-blend-mode: lighten;
  background-size: cover;
}
.active {
  width: 200px;
  height: 200px;
  background-image: url('../../static/images/personal0.png'), linear-gradient(to bottom, #f00, #00f, #ff0);
  background-blend-mode: lighten;
  background-size: cover;
  /* background-image:  */
  /* background-blend-mode:  */
}
</style>
