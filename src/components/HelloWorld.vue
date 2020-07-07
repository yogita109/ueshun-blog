<template>
  <div class="flexbox">
  <div class="item">
    <img src="http://placehold.it/240x150" alt="" />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  </div>
  <div class="item">
    <img src="http://placehold.it/240x150" alt="" />
    <p>Nulla pharetra porta sagittis. Mauris et suscipit diam...</p>
  </div>
  <div class="item">
    <img src="http://placehold.it/240x150" alt="" />
    <p>Integer ornare felis eu risus ultrices pharetra eu non velit...</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: 'test!!',
      showText: false
    }
  },
  methods: {
    toggle: function () {
      this.showText = !this.showText
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  border-radius: 10px;
  background: #edf;
  padding: 15px;
  margin: 5px;
  text-align: center;
}
img {
  max-width: 100%;
  height: auto;
}
p {
  text-align: left;
}

/* Responsive */
@media ( min-width : 600px ){
    .flexbox {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    }
  .item {
    width: 25%;
  }
}
</style>
