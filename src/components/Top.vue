<template>
  <div class="items">
    <ul>
      <li class="article" v-for="article in items" :key="article.key">
        <ArticlePreview
          :article="article"
        />
      </li>
    </ul>
    <div class="more">
      <button class="moreButton">MORE</button>
    </div>
  </div>
</template>

<script>
import * as ArticleRepository from '../repository/article.repository'
import ArticlePreview from './ArticlePreview'

export default {
  components: {
    ArticlePreview
  },
  created: function () {
    this.fetchArticles()
      .then(paths => this.fetchArticleURLs(paths))
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
        return response.data.length
      } else {
        console.log('failure')
      }
    },
    async fetchArticleURLs (paths) {
      for (let i = 1; i <= paths; i++) {
        const response = await ArticleRepository.fetchArticleURL(i)
        if (response.status >= 200 && response.status < 300) {
          return response.data.map(element => {
            return element.download_url
          })
        } else {
          console.log('failure')
        }
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
      const json = JSON.parse(metaData)
      const title = text.split('# ')[1].split(/\r\n|\r|\n/)[0]
      const summary = text.split('# ')[1].split(/\r\n|\r|\n/)[2]
      const obj = {
        path: json.path,
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
