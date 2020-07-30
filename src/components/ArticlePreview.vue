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
      this.$router.push({
        name: 'archive',
        params: { id: this.article.path.split('/')[0], title: this.article.path.split('/')[1] }
      })
    }
  }
}
</script>

<style scoped>
.preview {
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

img {
  width: auto;
  height: 100%;
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
  display: inline-block;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0);
  transition: all 0.3s ease 0s;
}

.thumbnail:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.14);
  transform: translateY(-0.1875em);
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
