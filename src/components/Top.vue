<template>
  <div class="items">
    <ul>
      <li v-for="item in items" :key="item.key">
        <div class="item">
          <div class="thumbnail"><img :src="item.img" alt="" /></div>
          <div class="tag">{{ item.tag }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="summary">{{item.summary}}</div>
          <div class="date">{{item.date}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: {
        item: {
          img: 'http://placehold.it/240x240',
          tag: 'iOS',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          summary: 'summary...',
          date: '2020/06/30'
        },
        item1: {
          img: 'http://placehold.it/240x240',
          tag: 'iOS',
          title: 'Nulla pharetra porta sagittis. Mauris et suscipit diam...',
          summary: 'summary...',
          date: '2020/06/30'
        },
        item2: {
          img: 'http://placehold.it/240x240',
          tag: 'iOS',
          title: 'Integer ornare felis eu risus ultrices pharetra eu non velit...',
          summary: 'summary...',
          date: '2020/06/30'
        },
        item3: {
          img: 'http://placehold.it/240x240',
          tag: 'iOS',
          title: 'Integer ornare felis eu risus ultrices pharetra eu non velit...',
          summary: 'summary...',
          date: '2020/06/30'
        },
        item4: {
          img: 'http://placehold.it/240x240',
          tag: 'iOS',
          title: 'Integer ornare felis eu risus ultrices pharetra eu non velit...',
          summary: 'summary...',
          date: '2020/06/30'
        }
      }
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style-type: none;
}

li {
  width: 28%;
  margin: 8px;
}

li img {
  width: 100%;
  height: auto;
}

.item {
  display: flex;
  flex-direction: column;
}

.tag {
  color: #82be28;
  font-weight: bold;
  margin: 4px 0;
  font-size: 1rem;
}

.thumbnail {
  text-align: center;
  margin: 4px 0;
}

.title {
  margin: 0 auto;
  font-weight: bold;
  margin: 4px 0;
  font-size: 1rem;
}

.summary {
  color: #999999;
  margin: 4px 0;
  font-size: 0.7em;
}

</style>
