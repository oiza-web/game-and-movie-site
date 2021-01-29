<template>
<div>
  <b-container class="dashboard-bg" fluid>
    <div>
      <div class="d-flex justify-content-between">
        <div class="top-header">
          <img src="../../assets/love.jpeg" height="50px" width="50px" alt="" class="top-header-image">
          <p>Agent Playstix <br> <img src="../../assets/dollar.png" alt=""> 1500credits</p>
        </div>
        <div  class="top-header">
          <img src="../../assets/wifi-signal.png"  height="22px" width="30px"  alt="">
          <p>11.40AM</p>
        </div>
      </div>
      <div>
        <ul class="menu-bar">
          <li> <a href="#">MyGames</a></li>
          <li> <a href="#">Store</a></li>
          <li> <a href=""> Media</a></li>
          <li> <a href=""> Library</a></li>
          <li> <a href="">Settings</a></li>
        </ul>
      </div>
      <div>
       <div>

      </div>

      </div>
    </div>
  </b-container>

</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
.dashboard-bg{
  background-image: url('../../static/Game BG.png');
  height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.menu-bar{
	display: inline-flex;

}



a{
  text-decoration: none;
  color: white;
}

li{
  list-style: none;
  padding: 25px 50px;
  position: relative;
  left: 28%;
  cursor: pointer;
}

p{
  color: white;
}

.top-header{
  display: flex;
  margin-top: 20px;
  padding: 0px 60px;
}

.top-header p{
  margin-left: 10px;
  font-size: .85em;
}

.top-header-image{
  border-radius: 50px;
}



</style>

