<template>
  <div>
    <b-container fluid class="bg">
      <div>
        <div>
          <div>
            <b-navbar >
              <b-navbar-brand href="#" ><nuxt-link to="/"><img src="amers.png" alt="" height="80px" width="70px"></nuxt-link> </b-navbar-brand>
                <b-navbar-nav class="ml-auto">
                  <b-nav-form>
                    <b-button size="sm" class="my-2 my-sm-0"  variant="danger" @click="modalShow = !modalShow">Sign In </b-button>
                    <b-modal
                    title="Sign In"
                    body-text-variant="light"

                    v-model="modalShow"
                    :header-bg-variant="headerBgVariant"
                    ok-only
                    




                    >

                    <b-container fluid class="bg3">
                          <b-form @submit.stop.prevent>
                            <b-form-group
                                  id="fieldset-1"
                                  label="Email"
                                  label-for="email"
                                  valid-feedback="Thank you!"
                                  :invalid-feedback="invalidFeedback"
                                  :state="state"
                                >
                                  <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
                                </b-form-group>
                            <b-form-group
                                  id="fieldset-1"
                                  label="Password"
                                  label-for="Password"
                                  valid-feedback="Thank you!"
                                  :invalid-feedback="invalidFeedback"
                                  :state="state"
                                >
                                  <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
                                </b-form-group>
                                <b-button >sign in</b-button>
                                </b-form>
                    </b-container>

                    </b-modal>
                  </b-nav-form>
            </b-navbar-nav>
            </b-navbar>
            <div>
              <h1 class="text-center mt-5">Unlimited Games, <br> Interesting movies, and more.</h1>
              <h4 class="text-center mt-5">Enjoy a wonderful gaming experience</h4>
              <h6 class="text-center mt-5">Ready to play? click the button below</h6>
            </div>
          </div>
        </div>
    </div>
    <div class="d-flex justify-content-center  mt-4">
        <b-button size="lg" variant="danger"  @click="modalShow = !modalShow">Sign Up Now!</b-button>
        <b-modal
                    title="Sign In"
                    body-text-variant="light"

                    v-model="modalShow"
                    :header-bg-variant="headerBgVariant"
                    ok-only



                    >

                    <b-container fluid class="bg3">
                          <b-form @submit.stop.prevent>
                            <b-form-group
                                  id="fieldset-1"
                                  label="Email"
                                  label-for="email"
                                  valid-feedback="Thank you!"
                                  :invalid-feedback="invalidFeedback"
                                  :state="state"
                                >
                                  <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
                                </b-form-group>
                            <b-form-group
                                  id="fieldset-1"
                                  label="Password"
                                  label-for="Password"
                                  valid-feedback="Thank you!"
                                  :invalid-feedback="invalidFeedback"
                                  :state="state"
                                >
                                  <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
                                </b-form-group>
                                <b-button >sign in</b-button>
                                </b-form>
                    </b-container>

                    </b-modal>


    </div>

    </b-container>
    <b-container fluid class="color">
      <b-row>
        <b-col sm="6 d-flex align-items-center mt-1">
          <h3 >Enjoy on your TV.
          Watch on Smart TVs, Playstation, Xbox, Chromecast,
          Apple TV, Blu-ray players, and more</h3>
        </b-col>
        <b-col sm="6 d-flex align-items-center mt-5" >
          <iframe class="embed-responsive-item" src="production ID_4842506.mp4" height="300px" width="500px"></iframe>
        </b-col>
      </b-row>
      <hr id="hr">
    </b-container>
      <b-container fluid class="color" >
        <b-row>
        <b-col sm="6 d-flex align-items-center mt-4">
          <img src="pexels.jpg"  height="300px" width="450px">
        </b-col>
        <b-col sm="6 d-flex align-items-center mt-5" >
          <h3 >Enjoy on your TV.
          Watch on Smart TVs, Playstation, Xbox, Chromecast,
          Apple TV, Blu-ray players, and more</h3>
        </b-col>
      </b-row>
      <hr id="hr">
    </b-container>
      <b-container fluid class="color">
      <b-row>
        <b-col sm="6 d-flex align-items-center mt-1">
          <h3 >Enjoy on your TV.
          Watch on Smart TVs, Playstation, Xbox, Chromecast,
          Apple TV, Blu-ray players, and more</h3>
        </b-col>
        <b-col sm="6 d-flex align-items-center mt-5" >
          <iframe class="embed-responsive-item" src="production ID_4842506.mp4" height="300px" width="500px"></iframe>
        </b-col>
      </b-row>
      <hr id="hr">
    </b-container>
    <b-container fluid class="color">
      <b-row>
        <b-col sm="3 d-flex align-items-center mt-5 " >
          <ul>
            <li>Lorem, ipsum dolor. </li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </b-col>
        <b-col sm="3 d-flex align-items-center mt-5 ">
          <ul>
            <li>Lorem, ipsum dolor. </li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </b-col>
        <b-col sm="3 d-flex align-items-center mt-5">
          <ul>
            <li>Lorem, ipsum dolor. </li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </b-col>
        <b-col sm="3 d-flex align-items-center mt-5 ">
          <ul>
            <li>Lorem, ipsum dolor. </li>
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
// import SignInModal from './Auth/SignInModal';

export default {
    data() {
      return {
        modalShow: false,
        headerBgVariant: 'danger',
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      }
    }
  }


</script>

<style>
.bg{
    background-image: url('../static/bg3.jpg');
    min-height: 100vh;
}

h1{
  color: white;
  font-size: 4em;

}
h4,h6{
  color: white;
}

h3{
  color: aliceblue;
  font-size: 2em;
}
.color{
  background-color:rgb(24, 22, 22);
  min-height: 50vh;
  padding-top: 20px;
}

#hr {
  margin-top: .2rem;
  margin-bottom: .2rem;
  border: 0;
  padding-top: 2em;
  padding-bottom: 2em;
  border-top: 1px solid rgba(0, 0, 0, 0.1)!important;
}



li{
  list-style: none;
  color: white;
}

img{

    margin-right: 5px;
    margin-left: 5px;
    padding-bottom: 6%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
