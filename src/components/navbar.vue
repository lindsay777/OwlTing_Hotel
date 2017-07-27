<template>
    <div class="navbar">
      <div class="title">
        <h3 class="is-3">奧丁丁旅館</h3>
        <br>
      </div>
      <div class="navbar_content">
      <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">

          <li>
            <a href="#/home">
              <span class="icon">
                <i class="fa fa-home" aria-hidden="true"></i>
              </span>
              <span class="name">&nbsp;     櫃檯接待</span>
            </a>
          </li>
        </ul>
        <br>

        <p class="menu-label">Customers</p>
        <ul class="menu-list">

          <li>
            <a href="#/sell">
              <span class="icon">
                <i class="fa fa-gift" aria-hidden="true"></i>
                </span>
                <span class="name">&nbsp;     訂單填寫</span>
            </a>
          </li>  
          
          <li>
            <a href="#/manage">
              <span class="icon">
                <i class="fa fa-address-card" aria-hidden="true"></i>
              </span>
              <span class="name">&nbsp;     訂單管理</span>
            </a>
          </li>
        </ul>
        <br>

        <p class="menu-label">Rooms</p>
        <ul class="menu-list">

          <li>
            <a href="#/room">
              <span class="icon">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              </span>
              <span class="name">&nbsp;     房務管理</span>
            </a>
          </li>

          <li>
            <a href="#/empty">
              <span class="icon">
                <i class="fa fa-address-book-o" aria-hidden="true"></i>
              </span>
              <span class="name">&nbsp;     房號安排</span>
            </a>
          </li>
        </ul>
        <br>

        <p class="menu-label">Administration</p>
        <ul class="menu-list">

          <li>
            <a href="#">
              <span class="icon">
                <i class="fa fa-hotel" aria-hidden="true"></i>
              </span>
              <span class="name">&nbsp;      房務清潔</span>
            </a>
            <ul>
              <li><a>付款狀況</a></li>
              <li><a>入住狀況</a></li>
              <li><a>設備報修</a></li>
            </ul>
          </li>
        </ul>

      </aside>
      </div>
      
    </div>
</template>

<script>

export default {
  name: 'navbar',
  data () {
    return {
    }
  },
  methods: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*side menu*/

  .menu-list a{
    text-decoration: none;
  }

  .title{
    /*background-color: #73B1C4;*/
    top: 50px;
    line-height: 50px;
    display: block;
    text-align: center;
    font-size: 30px;
    font-weight: 200;
    border-bottom: 1px none #33425B;
  }

  .navbar{
    top: 50px;
    left: 5px;
    width: 15%;
    height: 100%;
    position: fixed;
  }

  .navbar_content{

  }

  .icon{
    height: 24px;
    line-height: 24px;
    text-align: center;
    vertical-align: top;
    outline-width: 24px;
  }

  .name{
    font-size: 17px;
    /*font-weight: bold;*/
  }


</style>
