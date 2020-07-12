<template>
<div class="items">
  <div v-html="article" />
</div>
</template>>

<script>
import * as ArticleRepository from '../repository/article.repository'
import marked from 'marked'
import hljs from 'highlight.js'

export default {
  created () {
    marked.setOptions({
      langPrefix: '',
      highlight: function (code, lang) {
        return '<pre class="hljs"><code>' + hljs.highlightAuto(code, [lang]).value + '</code></pre>'
      }
    })
    this.fetchArticle()
  },
  data () {
    return {
      param: this.$route.params.id,
      article: ''
    }
  },
  methods: {
    async fetchArticle () {
      const url = 'https://raw.githubusercontent.com/yogita109/ueshun_blog_repository/master/articles/' + this.param
      const response = await ArticleRepository.fetchArticle(url)
      if (response.status >= 200 && response.status < 300) {
        const body = response.data.split('*****')[2]
        this.article = marked(body)
      }
    }
  }
}

</script>

<style src="../../node_modules/highlight.js/styles/monokai-sublime.css"></style>

<style>
.items {
  margin: 16px;
  padding: 0 40px;
}
</style>
