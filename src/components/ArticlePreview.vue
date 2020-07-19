<template>
  <div class="preview" @click="goToDetail">
    <div class="thumbnail"><img :src="article.img" alt="" /></div>
    <div class="tag">{{ article.tag }}</div>
    <div class="title">{{ article.title }}</div>
    <div class="summary">{{ article.summary }}</div>
    <div class="date">{{ article.date }}</div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetail () {
      console.log('goToDetail')
    }
  }
}
</script>

<style>
.preview {
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
  height: auto;
}

.tag {
  color: #82be28;
  font-weight: bold;
  margin: 4px 0;
  font-size: 1rem;
}

.thumbnail {
  text-align: center;
  margin: 4px 0;
}

.title {
  margin: 0 auto;
  font-weight: bold;
  margin: 4px 0;
  font-size: 1.2rem;
}

.summary {
  color: #999999;
  margin: 4px 0;
  font-size: 1rem;
}

.date {
  font-size: 0.7rem;
}

</style>
