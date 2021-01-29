<template>
  <div>
    <b-container fluid class="bg">
      <div>
        <div>
          <div>
            <b-navbar>
              <b-navbar-brand href="#"
                ><nuxt-link to="/"
                  ><img src="amers.png" alt="" height="80px" width="70px"
                /></nuxt-link>
              </b-navbar-brand>
              <b-navbar-nav class="ml-auto">
                <b-nav-form>
                  <div>
                    <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Sign In</b-button>

                      <b-modal id="bv-modal-example" hide-footer hide-header hide-header-close body-class="p-0">
                        <template>
                          <div>

                              <div class="container" id="container">

                                <div class="form-container sign-in-container">
                                  <form @submit.prevent="pressed2">
                                    <h1>Sign in</h1>
                                    <input type="text" placeholder="Email" v-model="email" />
                                    <input type="password" placeholder="Password" v-model="password" />
                                    <a href="#">Forgot your password?</a>
                                    <button type="submit" @click="$bvModal.hide('bv-modal-example')">Sign In</button>
                                    <div class="error" v-if="error">{{error.message}}</div>
                                  </form>
                                </div>
                                <div class="overlay-container">
                                    <div class="overlay-panel overlay-right">
                                      <img src="bg1.jpg" alt="">
                                    </div>
                                </div>
                                </div>
                              </div>


                        </template>
                    </b-modal>
        </div>
                </b-nav-form>
              </b-navbar-nav>
            </b-navbar>
            <div>
              <h1 class="text-center mt-5">
                Unlimited Games, <br />
                Interesting movies, and more.
              </h1>
              <h4 class="text-center mt-5">
                Enjoy a wonderful gaming experience
              </h4>
              <h6 class="text-center mt-5">
                Ready to play? click the button below
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center  mt-4">
        <!-- <div>
          <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Sign Up</b-button>

          <b-modal id="bv-modal-example" hide-footer>
            <template>
            <form @submit.prevent="pressed">
               Register
              <div class="email">
                <input type="email" v-model="email" placeholder="email" />
              </div>
              <div class="password">
                <input type="password" v-model="password" placeholder="password" />
              </div>
            <b-button class="mt-3" type="submit" block @click="$bvModal.hide('bv-modal-example')">Register</b-button>
            </form> -->
              <!-- Using <code>$bvModal</code> Methods -->
            <!-- </template> -->
            <!-- <div class="d-block text-center">
              <h3>Hello From This Modal!</h3>
            </div> -->

          <!-- </b-modal>
        </div> -->
        <div>
          <b-button id="show-btn" @click="$bvModal.show('bv-modal-example2')">Sign Up</b-button>

                      <b-modal id="bv-modal-example2" hide-footer hide-header hide-header-close body-class="p-0">
                        <template>
                          <div>

                              <div class="container" id="container">

                                <div class="form-container sign-in-container">
                                  <form @submit.prevent="pressed">
                                    <h1>Sign Up</h1>
                                    <input type="text" placeholder="Email" v-model="email" />
                                    <input type="password" placeholder="Password" v-model="password" />
                                    <a href="#">Forgot your password?</a>
                                    <button type="submit" @click="$bvModal.hide('bv-modal-example2')">Sign Up</button>
                                    <div class="error" v-if="error">{{error.message}}</div>
                                  </form>
                                </div>
                                <div class="overlay-container">
                                    <div class="overlay-panel overlay-right">
                                      <img src="bg1.jpg" alt="">
                                    </div>
                                </div>
                                </div>
                              </div>


                        </template>
                    </b-modal>
        </div>
      </div>
    </b-container>
    <b-container fluid class="color">
      <b-row>
        <b-col sm="6 d-flex align-items-center mt-1">
          <h3>
            Enjoy on your TV. Watch on Smart TVs, Playstation, Xbox, Chromecast,
            Apple TV, Blu-ray players, and more
          </h3>
        </b-col>
        <b-col sm="6 d-flex align-items-center mt-5">
          <iframe
            class="embed-responsive-item"
            src="production ID_4842506.mp4"
            height="300px"
            width="500px"
          ></iframe>
        </b-col>
      </b-row>
      <hr id="hr" />
    </b-container>
    <b-container fluid class="color">
      <b-row>
        <b-col sm="6 d-flex align-items-center mt-4">
          <img src="pexels.jpg" height="300px" width="450px" />
        </b-col>
        <b-col sm="6 d-flex align-items-center mt-5">
          <h3>
            Enjoy on your TV. Watch on Smart TVs, Playstation, Xbox, Chromecast,
            Apple TV, Blu-ray players, and more
          </h3>
        </b-col>
      </b-row>
      <hr id="hr" />
    </b-container>
    <b-container fluid class="color">
      <b-row>
        <b-col sm="6 d-flex align-items-center mt-1">
          <h3>
            Enjoy on your TV. Watch on Smart TVs, Playstation, Xbox, Chromecast,
            Apple TV, Blu-ray players, and more
          </h3>
        </b-col>
        <b-col sm="6 d-flex align-items-center mt-5">
          <iframe
            class="embed-responsive-item"
            src="production ID_4842506.mp4"
            height="300px"
            width="500px"
          ></iframe>
        </b-col>
      </b-row>
      <hr id="hr" />
    </b-container>
    <b-container fluid class="color">
      <b-row>
        <b-col sm="3 d-flex align-items-center mt-5 ">
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </b-col>
        <b-col sm="3 d-flex align-items-center mt-5 ">
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </b-col>
        <b-col sm="3 d-flex align-items-center mt-5">
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </b-col>
        <b-col sm="3 d-flex align-items-center mt-5 ">
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import firebase from "firebase/app";
// import "firebase/auth";
import firebase from "@/plugins/firebase"

export default {
  data() {
    return {
      modalShow: false,
      headerBgVariant: "danger",
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark"
      ],
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("here");
          this.$router.push('/Dashboard/dashboard');
        })
        .catch(error => (this.error = error));
    },
    pressed2(){
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.push('/Dashboard/dashboard');
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
.bg {
  background-image: url("../static/bg3.jpg");
  min-height: 100vh;
}

/* h1 {
  color: white;
  font-size: 4em;
} */
h4,
h6 {
  color: white;
}

h3 {
  color: aliceblue;
  font-size: 2em;
}
.color {
  background-color: rgb(24, 22, 22);
  min-height: 50vh;
  padding-top: 20px;
}

#hr {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  border: 0;
  padding-top: 2em;
  padding-bottom: 2em;
  border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
}

li {
  list-style: none;
  color: white;
}

img {
  margin-right: 5px;
  margin-left: 5px;
  padding-bottom: 6%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.label-color {
  color: black;
}

.form-style{
  background-color: black;
}

h1 {
	font-weight: bold;
	margin: 0;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
  color: black
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #f8f5f4;
	background-color: #4b0012;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

form {

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
  border-radius: 18px;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25),
	0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 150%;
	min-height: 520px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}



.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}



.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}
#show-btn{
  border-radius: 20px;
	background-color: #CF1717;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

</style>
