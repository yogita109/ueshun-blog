<template>
  <div class='productPreview'>
    <div class='thumbnail'><img :src="product.imgSrc" alt="" /></div>
    <div class='title'>{{ product.title }}</div>
    <div class='subTitle'>{{ product.subTitle }}</div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.productPreview {
  cursor: pointer;
}

img {
  width: 100%;
  height: auto;
}

.title {
  margin: 0 auto;
  font-weight: bold;
  margin: 10px 0;
  font-size: 1.2rem;
}

.subTitle {
  color: #999999;
  margin: 10px 0;
  font-size: 1rem;
}
</style>
