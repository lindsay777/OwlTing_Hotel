<template>
    <div class="empty">

      <navbar></navbar>

      <div class="content">
        <!-- <div class="detail">
          <h4>*查詢空房</h4>
          <div class="detail-white">
            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">查詢目前已有預定的日期</label>
            </div>

            <button class="btn btn-primary"  v-on:click="search_date">點擊查詢</button>
            <div v-for="item of Data">{{ item }}</div>
   
          </div>
        </div> -->

        <!-- <div class="detail">
          <h4>*目前房況列表</h4>
          <div class="detail-white">
            <div class="form-group">
              <br>
              <table class="table table-condensed">
                <tr>
                  <th>key(日期_房型)</th>
                  <th>total</th>
                  <th>soldout</th> -->
                  <!-- <th>status</th> -->
                <!-- </tr>
                <tr v-for="data in Data">
                  <td>{{ data.fields.key }}</td>
                  <td>{{ data.fields.total }}</td>
                  <td>{{ data.fields.soldout }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <button class="btn-sm btn-primary"  v-on:click="search_data()">列出全部</button>
        <div> {{ Data }} </div>
        <br> -->

        <!-- 以下是new order -->
        <div class="detail">
          <h4>*新增房間</h4>
          <div class="detail-white">

            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">輸入key</label>  
              <div class="col-md-4">
                <input id="textinput" name="textinput" placeholder="Date_RoomType ex. 2017-08-01_1" class="form-control input-md" type="text"  v-model="order.key">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">總房間數</label>  
              <div class="col-md-4">
                <input id="textinput" name="textinput" placeholder="Total" class="form-control input-md" type="text"  v-model="order.total">
              </div>
            </div>
            
          </div>
        </div>
        <button class="btn-sm btn-primary"  v-on:click="send_order">送出資料</button>
        <div> {{response}} </div>
        <br>

        <!-- 以下是update order -->
        <div class="detail">
          <h4>*更改房間資訊</h4>
          <div class="detail-white">

            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">輸入key</label>
              <div class="col-md-4">
                <input id="textinput" name="textinput" placeholder="Key" class="form-control input-md" type="text"  v-model="update.key">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">總房間數</label>  
              <div class="col-md-4">
                <input id="textinput" name="textinput" placeholder="Total" class="form-control input-md" type="text"  v-model="update.total">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">已售出房間數</label>  
              <div class="col-md-4">
                <input id="textinput" name="textinput" placeholder="Soldout" class="form-control input-md" type="text"  v-model="update.soldout">
              </div>
            </div>

          </div>
        </div>
        <button class="btn-sm btn-primary"  v-on:click="send_update">送出訂單</button>
        <div> {{response}} </div>
        <br>

        <!-- 以下是delete order -->
        <div class="detail">
          <h4>*刪除房間資料</h4>
          <div class="detail-white">

            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">輸入key</label>  
              <div class="col-md-4">
                <input id="textinput" name="textinput" placeholder="Date_RoomType" class="form-control input-md" type="text"  v-model="remove.key">
              </div>
            </div>

          </div>
        </div>
        <button class="btn-sm btn-primary"  v-on:click="send_delete">送出訂單</button>
        <div> {{response}} </div>
        <br>

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
  name: 'empty',
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
      single_price: 1000,
      double_price: 2000,
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
