<template>
    <div class="home">
      
      <navbar></navbar>

      <div class="content">
        <!-- 最上排三個 -->
        <div class="columns">

          <div class="column">
            <div class="card room-top">
              <div class="card-block">
                <h3 class="card-title">退房進度</h3>
                <p class="card-text">尚有 2 間未退房</p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card room-top">
              <div class="card-block">
                <h3 class="card-title">預約入住</h3>
                <p class="card-text">尚有 2 間未入住</p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card room-top">
              <div class="card-block">
                <h3 class="card-title">今日空房</h3>
                <p class="card-text">尚有 12 間空房</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 原本的四格 -->
        <div class="columns">

          <div class="column">
            <div class="card text-center room">
              <div class="card-header">單人房</div>
              <div class="card-block">
                <h4 class="card-title">經典</h4>
                <a href="#" class="button is-primary is-focused">查看房型</a>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card text-center room">
              <div class="card-header">雙人房</div>
              <div class="card-block">
                <h4 class="card-title">經典</h4>
                <a href="#" class="button is-primary is-focused">查看房型</a>
              </div>
            </div>
          </div>
          
          <div class="column">
            <div class="card text-center room">
              <div class="card-header">單人房</div>
              <div class="card-block">
                <h4 class="card-title">經典</h4>
                <a href="#" class="button is-primary is-focused">查看房型</a>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card text-center room">
              <div class="card-header">雙人房</div>
              <div class="card-block">
                <h4 class="card-title">經典</h4>
                <a href="#" class="button is-primary is-focused">查看房型</a>
              </div>
            </div>
          </div>

        </div>
        <!-- </div> -->

      </div>

    </div>
</template>


<script>

import Navbar from './navbar'

export default {
  name: 'home',
  components: {
    Navbar
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

  .room-top{
    margin-bottom: 20px;
  }

  .room{
    margin-bottom: 20px;
  }

  .content{
    top: 0px;
    left: 15%;
    width: 85%;
    height: 100%;
    position: fixed;
    padding: 40px;
    background-color: #edf0f5;
  }

  /*right side*/

</style>
