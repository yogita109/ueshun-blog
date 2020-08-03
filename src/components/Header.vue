<template>
  <header class="header">
    <div class="headerTitle">百聞は一見に如かず、百見は一触に如かず</div>
    <transition name="menu">
      <ul class="menu" v-show="humbergerBtnActive">
        <li @click="goTo('/')">トップ</li>
        <li @click="goTo('/skill')">スキルセット</li>
        <li @click="goTo('/products')">個人開発アプリ</li>
      </ul>
    </transition>
    <div class="hamburger_btn" @click="humbergerBtnActive=!humbergerBtnActive">
      <span class="line line_01" v-bind:class="{'btn_line_01':humbergerBtnActive}"> </span>
      <span class="line line_02" v-bind:class="{'btn_line_02':humbergerBtnActive}"> </span>
      <span class="line line_03" v-bind:class="{'btn_line_03':humbergerBtnActive}"> </span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  created () {
    if (window.innerWidth >= 1180) {
      this.humbergerBtnActive = true
    }
  },
  data () {
    return {
      humbergerBtnActive: false
    }
  },
  methods: {
    goTo: function (route) {
      this.humbergerBtnActive = false
      this.$router.push(route)
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

.hamburger_btn {
  position: relative;
  display: none;
  height: 21px;
  width: 70px;
  top: 0px;
}

.hamburger_btn .line {
  position: absolute;
  width: 24px;
  height: 2px;
  background: #333333;
  text-align: center;
}

.hamburger_btn .line_01 {
  top: 0px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 8px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 16px;
  transition: 0.4s ease;
}

.btn_line_01 {
  transform: translateY(8px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line_02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line_03 {
  transform: translateY(-8px) rotate(45deg);
  transition: 0.4s ease;
}

@media screen and (max-width: 1180px) {
  .header {
    height: 50px;
    border-radius: 0rem;
    margin: 10px;
    padding: 0;
  }

  .headerTitle {
    padding-left: 1rem;
    font-size: 0.8rem;
  }

  .hamburger_btn {
    display: block;
  }

  .menu {
    position: absolute;
    width: 100%;
    display: block;
    flex-direction: column;
    top: 70px;
    padding: 0;
    left: 0;
    right: 0;
    background-color: rgba(255,255,255,0.95);
    border-bottom: 1px solid #e9e9e9;
  }

  .menu li {
    margin: 8px 0;
    color: #82be28;
  }

  .menu-enter-active, .menu-leave-active {
    transition: opacity 0.4s;
  }

  .menu-enter, .menu-leave-to {
    opacity: 0;
  }

  .menu-leave, .menu-enter-to{
    opacity: 1;
  }
}
</style>
