import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Top from '@/components/Top'
import Article from '@/components/Article'
import Skill from '@/components/Skill'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/archive/:id/:title',
      name: 'archive',
      component: Article,
      props: true
    },
    {
      path: '/skill',
      component: Skill
    }
  ]
})
