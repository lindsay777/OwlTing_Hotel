<template>
    <div class="home">
      
      <navbar></navbar>

      <div class="main_content">
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
                    v-if="eachroom.title=='雙人房'" :title="eachroom.title" :body="eachroom.body" :number="eachroom.number" @activeEvent="active_modal(eachroom.title,eachroom.body,eachroom.number)"></eachroom>
        </div>

        <!-- 房間資訊modal -->
        <div class="modal is-active" v-show="modal_actived">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">{{ modal_data.number }} {{ modal_data.title }}</p>
              <button class="delete" @click="close_modal()"></button>
            </header>
            <section class="modal-card-body">
              <h4>小型雙人間 禁菸</h4>
              <p>兩張單人床，大約8坪</p>
              <br>
              <h4>設施</h4>
              <p> • 免費 WiFi • 空調 • 浴缸 獨立浴室 • 平面電視 • 熨褲機 • 書桌 • 暖氣 • 地毯 • 淋浴 • 浴缸 • 吹風機 • 免費盥洗用品 • 洗手間 • 浴室 • 拖鞋 • 按次計費頻道 • 電視 • 電話 • 冰箱 • 電熱水壺 • 喚醒服務 • 鬧鐘</p>
              <br>
              <h4>訂房須知</h4>
              <li>早餐需額外加購(TWD 450)</li>
              <li>房價包含: 8%增值稅, 10%住宿方服務費</li>
            </section>
            <footer class="modal-card-foot">
              <a class="button is-primary is-outlined">安排此房</a>
              <a class="button is-outlined" @click="close_modal()">取消</a>
            </footer>
          </div>
        </div>

        <footer class="footer">
          <div class="container">
            <div class="content has-text-centered">
              <p>
                <br><br><br><br>
                <strong>歐簿客科技股份有限公司</strong><br>
                 The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
              </p>
              <p>
                <a class="icon" href="https://github.com/lindsay777/OwlTing_Hotel">
                  <i class="fa fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        </footer>

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

      ],
      modal_data: [],
      modal_actived: false
    }
  },
  methods: {
    active_modal: function (title, body, number) {
      this.modal_data = {
        'title': title,
        'body': body,
        'number': number
      }

      this.modal_actived = true
    },
    close_modal: function () {
      this.modal_actived = false
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  /*right side*/

  .footer{
    bottom: 0px;
    left: 15%;
    width: 85%;
/*    position: fixed;*/
    padding-bottom: 0px;
    background-color: #edf0f5;
    padding: 0em
  }

  .room-top{
    margin-bottom: 20px;
  }

  .room{
    margin-bottom: 20px;
  }

  .main_content{
    top: 0px;
    left: 15%;
    width: 85%;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
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

  .modal-card-title{
    text-align: center;
  }

  .main_content p:not(:last-child), .main_content dl:not(:last-child), .main_content ol:not(:last-child), .main_content ul:not(:last-child), .main_content blockquote:not(:last-child), .main_content pre:not(:last-child), .main_content table:not(:last-child){
    margin-bottom: 0em;
  }

</style>
