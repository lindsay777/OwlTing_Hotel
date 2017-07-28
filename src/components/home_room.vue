<template>

  <div class="column">
    <div class="card text-center eachroom">
      <div class="card-header">{{ title }}</div>
      <div class="card-block">
        <h4 class="card-title">{{ body }}</h4>
        <a href="#" class="button is-primary is-focused">{{ number }}</a>
      </div>
    </div>
  </div>

</template>
       
<script>

export default {
  name: 'eachroom',
  props: ['title', 'body', 'number'],
  components: {
  },
  data () {
    return {
      // msg: 'Welcome to Home Page'
    }
  },
  methods: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  /*right side*/
  .eachroom{
    margin-bottom: 20px;
  }

  .card-header{
    display: flex;
    justify-content: center;
  }

  /*right side*/

</style>
