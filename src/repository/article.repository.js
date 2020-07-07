import Repository from './Repository'

export function fetchArticleURLs () {
  return Repository.get('https://api.github.com/repos/yogita109/ueshun_blog_repository/contents/articles')
}

export function fetchArticle (url) {
  return Repository.get(url)
}
