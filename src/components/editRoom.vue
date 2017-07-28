<template>
    <div class="editRoom">

      <navbar></navbar>

      <div class="content">

        <div class="tabs is-boxed is-medium">
          <ul>

            <li v-bind:class="{ active: tab_selected=='新增房間'}">
              <a @click="tab_selected='新增房間'">
                <span class="icon is-small"><i class="fa fa-image"></i></span>
                <span>新增房間</span>
              </a>
            </li>

            <li v-bind:class="{ active: tab_selected=='修改房間'}">
              <a @click="tab_selected='修改房間'">
                <span class="icon is-small"><i class="fa fa-music"></i></span>
                <span>修改房間</span>
              </a>
            </li>

            <li v-bind:class="{ active: tab_selected=='刪除房間'}">
              <a @click="tab_selected='刪除房間'">
                <span class="icon is-small"><i class="fa fa-film"></i></span>
                <span>刪除房間</span>
              </a>
            </li>
            
          </ul>
        </div>




        <!-- 以下是new order -->
        <div v-if="tab_selected=='新增房間'">
          <div class="detail">
            <h4>*新增房間</h4>
            <div class="detail-white">

              <div class="form-group">
                <label class="control-label" for="textinput">輸入key</label>  
                <div class="control has-icons-left">
                  <input id="textinput" name="textinput" placeholder="Date_RoomType ex. 2017-08-01_1" class="input" type="text"  v-model="order.key">
                  <span class="icon is-small is-left">
                    <i class="fa fa-key"></i>
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label class="control-label" for="textinput">總房間數</label>  
                <div class="control has-icons-left">
                  <input id="textinput" name="textinput" placeholder="Total" class="input" type="text"  v-model="order.total">
                  <span class="icon is-small is-left">
                    <i class="fa fa-institution"></i>
                  </span>
                </div>
              </div>
              
            </div>
          </div>
          <button class="button is-primary is-focused"  v-on:click="send_order">送出資料</button>
          <div> {{response}} </div>
          <br>
        </div>

        <!-- 以下是update order -->
        <div v-if="tab_selected=='修改房間'">
          <div class="detail">
            <h4>*更改房間資訊</h4>
            <div class="detail-white">

              <div class="form-group">
                <label class="control-label" for="textinput">輸入key</label>
                <div class="control has-icons-left">
                  <input id="textinput" name="textinput" placeholder="Key" class="input" type="text"  v-model="update.key">
                  <span class="icon is-small is-left">
                    <i class="fa fa-key"></i>
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label class="control-label" for="textinput">總房間數</label>  
                <div class="control has-icons-left">
                  <input id="textinput" name="textinput" placeholder="Total" class="input" type="text"  v-model="update.total">
                  <span class="icon is-small is-left">
                    <i class="fa fa-institution"></i>
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label class="control-label" for="textinput">已售出房間數</label>  
                <div class="control has-icons-left">
                  <input id="textinput" name="textinput" placeholder="Soldout" class="input" type="text"  v-model="update.soldout">
                  <span class="icon is-small is-left">
                    <i class="fa fa-check-square-o"></i>
                  </span>
                </div>
              </div>

            </div>
          </div>
          <button class="button is-primary is-focused"  v-on:click="send_update">送出訂單</button>
          <div> {{response}} </div>
          <br>
        </div>

        <!-- 以下是delete order -->
        <div v-if="tab_selected=='刪除房間'">
          <div class="detail">
            <h4>*刪除房間資料</h4>
            <div class="detail-white">

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
</template>

<script>

import Navbar from './navbar'

// import toastr from 'toastr'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker,
    Navbar
  },
  name: 'editRoom',
  data () {
    return {
      date_format: 'yyyy-MM-dd',
      send_url: 'http://localhost:8000/ethereum/booking_contract/orders/new_room/',
      update_url: 'http://localhost:8000/ethereum/booking_contract/orders/edit_room/',
      delete_url: 'http://localhost:8000/ethereum/booking_contract/orders/delete_room/',
      order: [],
      update: [],
      remove: [],
      room_type: [],
      update_room_type: [],
      tab_selected: '新增房間',
      disable: true,
      response: null
    }
  },
  methods: {
    // search_data: function () {
    //   this.$http.get(this.get_url)
    //       .then((response) => {
    //         this.Data = response.data
    //       })
    //       .catch(function (response) {
    //         console.log(response)
    //       })
    // }
    send_order: function () {
      var postdata = {
        'key': this.order.key,
        'total': this.order.total
      }
      console.log(postdata.checkin_date)
      this.$http.post(this.send_url, postdata)
          .then((response) => {
            console.log(response.data + '!')
            this.response = response
          })
      this.show = false
    },
    send_update: function () {
      var postdata = {
        'key': this.update.key,
        'total': this.update.total,
        'soldout': this.update.soldout
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
</style>
