<template>
    <div class="home">
      
      <navbar></navbar>

      <div class="content">
        <!-- 最上排level -->
        <div class="columns">
          <div class="column">
            <!-- <div class="card text-center room"> -->
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">客房住用數</p>
                    <p class="title">5,209</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">住用率</p>
                    <p class="title">70.10%</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">總營業收入</p>
                    <p class="title">456K</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">員工合計</p>
                    <p class="title">789</p>
                  </div>
                </div>
              </nav> 
            <!-- </div> -->
          </div>
        </div>

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

        <!-- 房間們 -->
        <div class="columns">
          <eachroom v-for="eachroom in room_data" :key="eachroom.number"
                    v-if="eachroom.title=='單人房'" :title="eachroom.title" :body="eachroom.body" :number="eachroom.number"></eachroom>
        </div>

        <div class="columns">
          <eachroom v-for="eachroom in room_data" :key="eachroom.number"
                    v-if="eachroom.title=='雙人房'" :title="eachroom.title" :body="eachroom.body" :number="eachroom.number"></eachroom>
        </div>

      </div>

    </div>
</template>


<script>

import Navbar from './navbar'
import eachroom from './home_room'

export default {
  name: 'home',
  components: {
    Navbar,
    eachroom
  },
  data () {
    return {
      room_data: [
      {title: '單人房', body: '經典', number: '0701'},
      {title: '單人房', body: '豪華', number: '0702'},
      {title: '單人房', body: '經典', number: '0801'},
      {title: '單人房', body: '豪華', number: '0802'},
      {title: '雙人房', body: '經典', number: '0705'},
      {title: '雙人房', body: '豪華', number: '0706'},
      {title: '雙人房', body: '經典', number: '0805'},
      {title: '雙人房', body: '豪華', number: '0806'}

      ]
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

  .card-header{
    display: flex;
    justify-content: center;
  }

  .level{
    margin-top: 5px;
    margin-bottom: 40px;
  }

  /*right side*/

</style>
