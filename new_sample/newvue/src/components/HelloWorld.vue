<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="column">
    <h3>Bar Chart</h3>
    <bar-chart></bar-chart>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart.vue'

export default {
  name: 'HelloWorld',
  components: {
    BarChart
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
