<template>
  <header class="header">
    <div class="headerTitle">百聞は一見に如かず、百見は一触に如かず</div>
    <ul class="menu">
      <li @click="goTo('トップ')">トップ</li>
      <li @click="goTo('スキルセット')">スキルセット</li>
      <li @click="goTo('個人開発アプリ')">個人開発アプリ</li>
      <li @click="goTo('お問い合わせ')">お問い合わせ</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',

  methods: {
    goTo: function (event) {
      console.log(event)
    }
  }
}
</script>

<style scoped>
.header {
  height: 75px;
  background-color: #ffffff;
  border-radius: 5rem;
  box-shadow: 0px 2px 6px 0 rgba(0,0,0,0.2);
  margin: 16px;
  padding: 0 40px;
  text-align: center;
  display: flex;
  align-items: center;
}

.headerTitle {
  flex: 1;
  text-align: start;
  font-size: 1rem;
  font-weight: bold;
}

.menu {
  font-size: 13px;
  display: flex;
  list-style-type: none;
  color: #333333;
  font-weight: bold;
}

li {
  margin: auto 16px;
  cursor: pointer;
}

li:hover {
  color: #999999;
}
</style>
