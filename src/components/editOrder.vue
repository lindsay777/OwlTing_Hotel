<template>
  <div class="editOrder">
    <navbar></navbar>

    <div class="content">

      <div class="tabs is-boxed is-medium">
        <ul>

          <li v-bind:class="{ active: tab_selected=='新增訂單'}">
            <a @click="tab_selected='新增訂單'">
              <span class="icon is-small"><i class="fa fa-image"></i></span>
              <span>新增訂單</span>
            </a>
          </li>

          <li v-bind:class="{ active: tab_selected=='修改訂單'}">
            <a @click="tab_selected='修改訂單'">
              <span class="icon is-small"><i class="fa fa-music"></i></span>
              <span>修改訂單</span>
            </a>
          </li>

          <li v-bind:class="{ active: tab_selected=='刪除訂單'}">
            <a @click="tab_selected='刪除訂單'">
              <span class="icon is-small"><i class="fa fa-film"></i></span>
              <span>刪除訂單</span>
            </a>
          </li>

        </ul>
      </div>

      <!-- 以下是new order -->
      <div v-if="tab_selected=='新增訂單'">
        <div class="detail">
          <h4>*填寫訂房資訊</h4>
          <div class="detail-white">
            <div class="form-group">
              <label class="control-label" for="textinput">訂房人姓名</label>  
              <div class="control has-icons-left">
                <input id="textinput" name="textinput" placeholder="Name" class="input" type="text"  v-model="order.name">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="textinput">入住日期</label>
              <div class="control has-icons-left">
                <datepicker class="input datepicker" placeholder="Select Date" format="date_format" v-model="order.checkin_date"></datepicker>
                <span class="icon is-small is-left">
                  <i class="fa fa-calendar"></i>
                </span>
              </div>  
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">房間類型</label>
              <div class="control">
                <label class="radio">
                  <input type="radio" name="answer" value="1" v-model="room_type">
                  單人房
                </label>
                <label class="radio">
                  <input type="radio" name="answer" value="2" v-model="room_type">
                  雙人房
                </label>
              </div>
            </div>
          </div>
        </div>
        <button class="button is-primary is-focused"  v-on:click="send_order">送出訂單</button>
        <div> {{response}} </div>
        <br>
      </div>
      <!-- 以下是update order -->
      <div v-if="tab_selected=='修改訂單'">
        <div class="detail">
          <h4>*更改訂房資訊</h4>
          <div class="detail-white">
            <div class="form-group">
              <label class="control-label" for="textinput">輸入order_id</label>
              <div class="control has-icons-left">
                <input id="textinput" name="textinput" placeholder="Order_id" class="input" type="text"  v-model="update.order_id">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label" for="textinput">訂房人姓名</label>  
              <div class="control has-icons-left">
                <input id="textinput" name="textinput" placeholder="Name" class="input" type="text"  v-model="update.name">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label" for="textinput">入住日期</label>
              <div class="control has-icons-left">
                <datepicker class="input" placeholder="Select Date" format="date_format" v-model="update.checkin_date"></datepicker>
                <span class="icon is-small is-left">
                  <i class="fa fa-calendar"></i>
                </span>
              </div>  
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">房間類型</label>
              <div class="control">
                <label class="radio">
                  <input type="radio" name="answer" value="1" v-model="update_room_type">
                  單人房
                </label>
                <label class="radio">
                  <input type="radio" name="answer" value="2" v-model="update_room_type">
                  雙人房
                </label>
              </div>
            </div>
          </div>
        </div>
        <button class="button is-primary is-focused"  v-on:click="send_update">送出訂單</button>
        <div> {{response}} </div>
        <br>
      </div>
      <!-- 以下是delete order -->
      <div v-if="tab_selected=='刪除訂單'">
        <div class="detail">
          <h4>*刪除整筆訂單</h4>
          <div class="detail-white">
            <div class="form-group">
              <label class="control-label" for="textinput">輸入order_id</label>
              <div class="control has-icons-left">
                <input id="textinput" name="textinput" placeholder="Order_id" class="input" type="text"  v-model="remove.order_id">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="textinput">輸入key</label>
              <div class="control has-icons-left">
                <input id="textinput" name="textinput" placeholder="Date_RoomType" class="input" type="text"  v-model="remove.key">
                <span class="icon is-small is-left">
                  <i class="fa fa-key"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <button class="button is-primary is-focused"  v-on:click="send_delete">送出訂單</button>
        <div> {{response}} </div>
        <br>
      </div>

    </div>
  </div>
      

  </div>
</template>

<script>

// import toastr from 'toastr'
import Datepicker from 'vuejs-datepicker'
import Navbar from './navbar'

export default {
  components: {
    Datepicker,
    Navbar
  },
  name: 'editOrder',
  data () {
    return {
      date_format: 'yyyy-MM-dd',
      order_url: 'http://localhost:8000/ethereum/booking_contract/orders/new_order/',
      update_url: 'http://localhost:8000/ethereum/booking_contract/orders/update_order/',
      delete_url: 'http://localhost:8000/ethereum/booking_contract/orders/delete_order/',
      order: [],
      update: [],
      remove: [],
      room_type: [],
      update_room_type: [],
      tab_selected: '新增訂單',
      disable: true,
      response: null
    }
  },
  methods: {
    send_order: function () {
      var postdata = {
        'user_id': this.order.name,
        'room_type': this.room_type[0],
        'date': this.order.checkin_date.toISOString().substring(0, 10)
      }
      console.log(postdata.checkin_date)
      this.$http.post(this.order_url, postdata)
          .then((response) => {
            console.log(response.data + '!')
            this.response = response
          })
      this.show = false
    },
    send_update: function () {
      var postdata = {
        'order_id': this.update.order_id,
        'user_id': this.update.name,
        'room_type': this.update_room_type[0],
        'date': this.update.checkin_date.toISOString().substring(0, 10)
      }
      console.log(postdata.checkin_date)
      this.$http.post(this.update_url, postdata)
          .then((response) => {
            console.log(response.data + '!')
            this.response = response
          })
      this.show = false
    },
    send_delete: function () {
      var postdata = {
        'order_id': this.remove.order_id,
        'key': this.remove.key
      }
      console.log(postdata.checkin_date)
      this.$http.post(this.delete_url, postdata)
          .then((response) => {
            console.log(response.data + '!')
            this.response = response
          })
      this.show = false
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  /*right side*/

  /*tab*/

  .active{
    background-color: white;
    border-color: #dbdbdb;
    border-bottom-color: transparent !important;
  }

  .active a{
    color: #00d1b2;
  }

  .tabs ul{
    padding-left: 20px;
  }

  .tabs a{
    margin-bottom: -2px;
  }

  /*tab*/


  .radio-inline,
  .checkbox-inline{
    margin-right: 10px;
  }

  .detail,
  .room {
    padding: 5px;
    margin-bottom: 10px;
  }

  .content h4{
    color: #6a6c6f;
  }

  .detail-white,
  .room-white {
    color: #768399;
    background-color: white;
    padding: 10px;
    padding-left: 100px;
  }

  .content{
    top: 0px;
    left: 15%;
    width: 85%;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    padding: 40px;
    background-color: #edf0f5;
  }

  /*right side*/



  /*side menu*/
  .nav-side-menu {
    overflow: auto;
    font-family: verdana;
    font-size: 18px;
    font-weight: 200;
    background-color: #73B1C4;
    position: fixed;
    top: 0px;
    width: 15%;
    height: 100%;
    color: #e1ffff;
  }
  .nav-side-menu .brand {
    background-color: #73B1C4;
    line-height: 170px;
    display: block;
    text-align: center;
    font-size: 30px;
    font-weight: 200;
    border-bottom: 1px none #33425B;
  }
  .nav-side-menu .toggle-btn {
    display: none;
  }
  .nav-side-menu ul,
  .nav-side-menu li {
    list-style: none;
    padding: 0px;
    margin: 0px;
    line-height: 60px;
    cursor: pointer;
    /*    
      .collapsed{
         .arrow:before{
                   font-family: FontAwesome;
                   content: "\f053";
                   display: inline-block;
                   padding-left:10px;
                   padding-right: 10px;
                   vertical-align: middle;
                   float:right;
              }
       }
  */
  }
  .nav-side-menu ul :not(collapsed) .arrow:before,
  .nav-side-menu li :not(collapsed) .arrow:before {
    font-family: FontAwesome;
    content: "\f078";
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    vertical-align: middle;
    float: right;
  }
  .nav-side-menu ul .active,
  .nav-side-menu li .active, {
    border-left: 3px solid #73B1C4;
    background-color: #73B1C4;
  }
  .nav-side-menu ul .sub-menu li.active,
  .nav-side-menu li .sub-menu li.active {
    color: #73B1C4;
    border-left: 3px solid #73B1C4;
  }
  .nav-side-menu ul .sub-menu li.active a,
  .nav-side-menu li .sub-menu li.active a,
  .nav-side-menu ul .sub-menu li:hover a,
  .nav-side-menu li .sub-menu li:hover a{
    color: #73B1C4;
  }
  .nav-side-menu ul .sub-menu li,
  .nav-side-menu li .sub-menu li {
    background-color: #33425B;
    border: none;
    line-height: 28px;
    border-bottom: 1px dashed #33425B;
    margin-left: 3px;
  }
  .nav-side-menu ul .sub-menu li:hover,
  .nav-side-menu li .sub-menu li:hover {
    color: #73B1C4;
    border-left: 1px none #73B1C4;
  }
  .nav-side-menu ul .sub-menu li:before,
  .nav-side-menu li .sub-menu li:before {
    font-family: FontAwesome;
    content: "\f105";
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    vertical-align: middle;
  }
  .nav-side-menu li {
    padding-left: 0px;
    border-left: 3px solid #33425B;
    border-bottom: 1px none #33425B;
  }
  .nav-side-menu li a {
    text-decoration: none;
    color: #e1ffff;
    padding-left:7px;
  }
  .nav-side-menu li a i {
    padding-left: 10px;
    width: 20px;
    padding-right: 20px;
  }
  .nav-side-menu li:hover {
    border-left: 3px solid #73B1C4;
    background-color: #33425B;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }
  @media (max-width: 767px) {
    .nav-side-menu {
      position: relative;
      width: 100%;
      margin-bottom: 10px;
    }
    .nav-side-menu .toggle-btn {
      display: block;
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 10 !important;
      padding: 3px;
      background-color: #b7dde9;
      color: #000;
      width: 40px;
      text-align: center;
    }
    .brand {
      text-align: left !important;
      font-size: 22px;
      padding-left: 20px;
      line-height: 50px !important;
    }
  }
  @media (min-width: 767px) {
    .nav-side-menu .menu-list .menu-content {
      display: block;
    }
  }
  body {
    margin: 0px;
    padding: 0px;
  }

</style>
