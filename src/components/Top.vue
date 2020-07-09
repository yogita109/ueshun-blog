<template>
  <div class="items">
    <ul>
      <li v-for="item in items" :key="item.key">
        <div class="item">
          <div class="thumbnail"><img :src="item.img" alt="" /></div>
          <div class="tag">{{ item.tag }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="summary">{{item.summary}}</div>
          <div class="date">{{item.date}}</div>
        </div>
      </li>
    </ul>
    <div class="more">
      <button class="moreButton">MORE</button>
    </div>
  </div>
</template>

<script>
import * as ArticleRepository from '../repository/article.repository'

export default {
  created: function () {
    this.fetchArticles()
      .then(urls => urls.map(url => this.fetchArticle(url)))
      .then(articles => {
        articles.forEach(element => {
          element
            .then(el => this.parse(el))
            .then(el2 => this.items.unshift(el2))
        })
      })
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    async fetchArticles () {
      const response = await ArticleRepository.fetchArticleURLs()
      if (response.status >= 200 && response.status < 300) {
        return response.data.map(element => {
          return element.download_url
        })
      } else {
        console.log('failure')
      }
    },
    async fetchArticle (url) {
      const response = await ArticleRepository.fetchArticle(url)
      if (response.status >= 200 && response.status < 300) {
        return response.data
      } else {
        console.log('failure')
      }
    },
    parse (text) {
      const metaData = text.split('*****')[1]
      console.log(metaData)
      const json = JSON.parse(metaData)
      const title = text.split('# ')[1].split(/\r\n|\r|\n/)[0]
      const summary = text.split('# ')[1].split(/\r\n|\r|\n/)[2]
      const obj = {
        img: json.img,
        tag: json.tag,
        title: title,
        summary: summary,
        date: json.date
      }
      return obj
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;
}

li {
  width: 28%;
  margin: 8px;
}

li img {
  width: 100%;
  height: auto;
}

.item {
  display: flex;
  flex-direction: column;
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

.more {
  margin: 2rem;
  text-align: center;
}

.more .moreButton {
  width: 10%;
  padding: 5px;
  font-weight: bold;
  background-color: #ffffff;
  border-radius: 5rem;
  cursor: pointer;
}

.moreButton:hover {
  color: #ffffff;
  background-color: #343a40;
}

</style>
