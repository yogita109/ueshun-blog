<template>
<div class="articleItems">
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
  props: {
    id: String,
    title: String
  },
  methods: {
    async fetchArticle () {
      const url = 'https://raw.githubusercontent.com/yogita109/ueshun_blog_repository/master/articles/' + this.id + '/' + this.title
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
.articleItems {
  margin: 16px;
  padding: 0 40px;
  word-break: break-all;
}

blockquote {
  position: relative;
  padding: 1px 15px;
  box-sizing: border-box;
  font-style: italic;
  background: #f5f5f5;
  color: #777777;
  border-left: 4px solid #777777;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
}

i {
  background-color: #f5f5f5;
  font-weight: bold;
  color: #777777;
}

@media screen and (max-width: 787px) {
  .articleItems {
    margin: 0 0 0 8px;
    padding: 0;
  }
}
</style>
