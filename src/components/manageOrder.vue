<template>
  <div class="manage"> 

    <navbar></navbar> 

    <div class="content">
      <div class="detail">
        <h4>*訂單資料列表</h4>
        <div class="detail-white">
          <div class="form-group">           
            <br>
            <table class="table table-condensed">
              <tr>
                <th width=35%>訂單編號</th>
                <th width=15%>訂房人姓名</th>
                <th width=20%>入住日期</th>
                <th width=10%>房型</th>
                <th width=10%>動作</th>
                <th width=10%> </th>
              </tr>
              <tr v-for="data in sortedArray">
                <td>{{ data.order_id }}</td>
                <td>{{ data.user_id }}</td>
                <td>{{ data.date }}</td>
                <td>{{ data.room_type }}</td>
                <td><button class="button is-warning is-focus" v-on:click="number()">安排房號</button></td>
                <td><button class="button is-danger is-focus" v-on:click="number()">刪除訂單</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <button class="button is-primary is-focused" v-on:click="search_data()">列出全部</button>
      <div> {{ Data }} </div>

    </div>
  </div>
</template>

<script>

import Navbar from './navbar'

// import toastr from 'toastr'
import Datepicker from 'vuejs-datepicker'
// var $ = window.jQuery = require('../../node_modules/jquery')

// import bulma from 'bulma'

export default {
  components: {
    Datepicker,
    Navbar
  },
  name: 'manageOrder',
  data () {
    return {
      date_format: 'yyyyMMdd',
      get_url: 'http://localhost:8070/get/order/all_order',
      search: [],
      Data: [],
      single_price: 1000,
      double_price: 2000,
      disable: true
    }
  },
  methods: {
    search_data: function () {
      this.$http.get(this.get_url)
          .then((response) => {
            this.Data = response.data
          })
          .catch(function (response) {
            console.log(response)
          })
    }
  },
  computed: {
    sortedArray: function () {
      function compare (a, b) {
        if (a.date < b.date) {
          return -1
        }
        if (a.date > b.date) {
          return 1
        }
        return 0
      }
      return this.Data.sort(compare)
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
