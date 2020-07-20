<template>
  <div class="item">
    <div v-html="skill" />
  </div>
</template>

<script>
import SkillSheetRepository from '../repository/skill.repository'
import marked from 'marked'

export default {
  created () {
    this.fetchSkillSheet()
  },
  data () {
    return {
      skill: ''
    }
  },
  methods: {
    async fetchSkillSheet () {
      const response = await SkillSheetRepository()
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data)
        this.skill = marked(response.data)
      }
    }
  }
}
</script>

<style>
.item {
  margin: 16px;
  padding: 0 40px;
}
</style>
