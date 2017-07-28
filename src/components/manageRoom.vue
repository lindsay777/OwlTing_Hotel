<template>
    <div class="manageRoom">
      
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

        <div class="detail">
          <h4>*目前房況列表</h4>

          <div class="detail-white">
            <div class="form-group">
              <br>
              <table class="table table-condensed">
                <tr>
                  <th>key(日期_房型)</th>
                  <th>total</th>
                  <th>soldout</th>
                </tr>
                <tr v-for="data in Data">
                  <td>{{ data.fields.key }}</td>
                  <td>{{ data.fields.total }}</td>
                  <td>{{ data.fields.soldout }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <button class="button is-primary is-focused"  v-on:click="search_data()">列出全部</button>
        <div> {{ Data }} </div>
        <br>


      </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  name: 'manageRoom',
  data () {
    return {
      date_format: 'yyyyMMdd',
      get_url: 'http://localhost:8000/ethereum/booking_contract/orders/room_detail/',
      search: [],
      Data: [],
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
    padding: 40px;
    background-color: #edf0f5;
  }

  /*right side*/
</style>
