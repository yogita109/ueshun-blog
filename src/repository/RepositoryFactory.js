import articleRepository from './article.repository'

const repositories = {
  articleRepository: articleRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
