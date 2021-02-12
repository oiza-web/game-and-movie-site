<template>
<div>
  <div class="dashboard-bg"  id="bg">
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
          <li> <a href="/Dashboard/dashboard">MyGames</a></li>
          <li> <nuxt-link to="/Dashboard/store" > Store</nuxt-link></li>
          <li> <a href=""> Media</a></li>
          <li> <a href=""> Library</a></li>
          <li> <a href="">Settings</a></li>
        </ul>
      </div>
      <div>
        <div class="carousel-wrapper">
        <VueSlickCarousel v-bind="settings">
          <div ><img src="../../assets/mortal kombat.png" alt="" height="274px" width="270px"></div>
          <div><img src="../../assets/Call of duty.png" alt="" height="274px" width="270px"></div>
          <div><img src="../../assets/helmet_tie.png" alt="" height="274px" width="270px"></div>
          <div><img src="../../assets/arzone.png" alt="" height="274px" width="270px"></div>
          <div><img src="../../assets/spiderman.png" alt="" height="274px" width="270px"></div>
          <div><img src="../../assets/lady warrior.png" alt="" height="274px" width="270px"></div>
          <div><img src="../../assets/God of war.png" alt="" height="274px" width="270px"></div>
        </VueSlickCarousel>
      </div>
      </div>
      <div>
        <ul class="footer-nav">
          <li> <a href="#"><img src="../../assets/chat.png" alt=""></a></li>
          <li> <a href="#"><img src="../../assets/trophy-cup-silhouette.png" alt=""></a></li>
          <li> <a href=""> <img src="../../assets/gamepad-controller.png" alt=""></a></li>

        </ul>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
    data() {
      return {
        settings: {
          "centerMode": true,
          "focusOnSelect": true,
          "focusOnChange": true,
          "infinite": true,
          "slidesToShow": 5,
          "speed": 500,
          "arrows":false,
          "responsive": [
            {
              "breakpoint": 600,
              "settings" : {
                "slideToShow": 2,
                "slidesToScroll": 2,
                "initialSlide": 2
              }
            }
          ]

        },
      }
    },
  }
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
.dashboard-bg{
  background-image: url('../../assets/blur BG.jpg');
  height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}

.menu-bar{
	display: inline-flex;
  padding-bottom: 55px;
}


a{
  text-decoration: none;
  color: white;
}

a:hover{
  display: block;
  padding-top: .3em;
  padding-bottom: .2em;
  padding-left: .4em;
  padding-right: .4em;
  border-radius: 30px;
  background-color: #8c949c;
  color: white;
  position: relative;
  z-index: 1;



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


.footer-nav{
  display: inline-flex;
  position: relative;
  left: 20%;
}






</style>

