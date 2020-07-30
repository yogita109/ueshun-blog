<template>
  <div class="items">
    <ul>
      <li class="product" v-for="product in products" :key="product.title">
        <ProductPreview
          :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductPreview from './ProductPreview'

export default {
  components: {
    ProductPreview
  },
  data () {
    return {
      products: [
        {
          imgSrc: '../static/PosP_logo_web.png',
          title: 'PosP',
          subTitle: '配達先の管理業務の煩わしさから解放するアプリ',
          appURL: 'https://apps.apple.com/jp/app/id1502812816?ign-mpt=uo%3D4'
        }
      ]
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  list-style-type: none;
}

.product {
  width: 48%;
}
</style>
