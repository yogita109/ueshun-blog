import Repository from './Repository'

export function fetchAboutArticles () {
  return Repository.get('https://api.github.com/repos/yogita109/ueshun_blog_repository/contents/articles')
}

export function fetchArticleURL (path) {
  return Repository.get('https://api.github.com/repos/yogita109/ueshun_blog_repository/contents/articles/' + path)
}

export function fetchArticle (url) {
  return Repository.get(url)
}
