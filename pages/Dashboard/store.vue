<template>
  <div>
    <!-- <h6>{{movies}}</h6>
    <div v-for="movie in movies" :key="movie.id"


          ><img :src="movie.poster_path" alt=""></div> -->
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
          <li> <a href="/">Settings</a></li>
        </ul>
      </div>

      <div v-if="movies.length ">
        <flickity ref="flickity" :options="flickityOptions"  >
          <div v-for="(movie, i) in movies" :key="i" :class="'carousel-cell' + i"><img :src="`http://image.tmdb.org/t/p/w200${movie.poster_path}`" style="width: 100%;height: 300px; padding:10px; object-fit: cover"></div>
        </flickity>
      </div>
      <div>
        <!-- <div class="carousel-wrapper"> -->
          <!-- <div v-for="(movie, i) in movies" :key="i">
            <img class="apim" :src="`http://image.tmdb.org/t/p/w300${movie.poster_path}`" alt="">

          </div> -->
          <!-- <VueSlickCarousel v-bind="settings" class="apim">
          <div   v-for="(movie, i) in movies" :key="i"><img :src="`http://image.tmdb.org/t/p/w200${movie.poster_path}`"></div>

        </VueSlickCarousel> -->
            <!-- <div class="" >
              <flickity ref="flickity" class="flickity" :options="flickityOptions">
                <div v-for="(movie, i) in movies" :key="i"><img :src="`http://image.tmdb.org/t/p/w200${movie.poster_path}`"></div>
              </flickity>

            </div> -->


                <!-- <h2 class="font-weight-light">Bootstrap 4 Horizontal Scrolling Cards with Flexbox</h2>
                <div class="d-flex ">
                    <div class="card card-body" v-for="(movie, i) in movies" :key="i"><img :src="`http://image.tmdb.org/t/p/w200${movie.poster_path}`" ></div>
                </div> -->

            <!-- <flickity ref="flickity" :options="flickityOptions">
              <div><img src="../../assets/God of war.png" alt="" ></div>

            </flickity> -->

      <!-- </div> -->

      </div>

      <!-- <div>
        <ul class="footer-nav">
          <li> <a href="#"><img src="../../assets/chat.png" alt=""></a></li>
          <li> <a href="#"><img src="../../assets/trophy-cup-silhouette.png" alt=""></a></li>
          <li> <a href=""> <img src="../../assets/gamepad-controller.png" alt=""></a></li>

        </ul>
      </div> -->
    </div>


</div>
  </div>
</template>

<script>
import axios from 'axios'
  export default{
    data(){
      return{
        movies: [],
        flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: true,
        contain: true,
        draggable: false,
        wrapAround: true

        // any options from Flickity can be used
      }

      // flickityOptions: {
      //   initialIndex: 3,
      //   prevNextButtons: false,
      //   pageDots: false,
      //   wrapAround: true

      //   // any options from Flickity can be used
      // }

      }
    },
    async mounted(){
      // axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3f7b2c14c3f1665c4f85edc397368eb0')
      // .then(response => (this.movies = response.data))
      // console.log("got here",this.movies)
      try{
        let getMovies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3f7b2c14c3f1665c4f85edc397368eb0')
        console.log(getMovies.data.results)
        this.movies = getMovies.data.results
      }catch(e){}
    },
    methods: {
      imgsLoaded () {
      let flickityInstance = this.$refs.flickity
      flickityInstance.reloadCells()
      flickityInstance.on('change', () => {
        const mainBG = docoument.queSelector('.main-background')
        mainBg.styles.backgroundImage = "g"
      })
    },
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

  .carousel-cell {
  width: 20%; /* half-width */
  height: 160px;
  margin-right: 10px;
  transition: 0.5s all ease;
}
.carousel-cell.is-selected {
  transform: scale(1.5);
}

.dashboard-bg{
  background-image: url('../../assets/blur BG.jpg');
  height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}

.apim{
  display: inline-flex;
}

.menu-bar{
	display: inline-flex;
  padding-bottom: 55px;
}


a{
  text-decoration: none !important;
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
  text-decoration: none !important;



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

.card-body {
    min-height: 300px;
    min-width: 300px;
    margin-right: 5px;
}

button {
	border-radius: 20px;
	border: 1px solid #f8f5f4;
	background-color: #cf1717;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}


</style>
