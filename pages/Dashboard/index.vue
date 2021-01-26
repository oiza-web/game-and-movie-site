<template>
  <div>
    <b-container fluid class="bg">
      <div>
        <div>
          <div>
            <b-navbar >
              <b-navbar-brand href="#" ><nuxt-link to="/"><img src="" alt="" height="80px" width="70px"></nuxt-link> </b-navbar-brand>
                <b-navbar-nav class="ml-auto">
                  <b-nav-form>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="danger">Sign In</b-button>
                  </b-nav-form>
            </b-navbar-nav>
            </b-navbar>
            <div>
              <h1 class="text-center ">Unlimited Games, <br> Virtual Reality, and more.</h1>
              <h4 class="text-center mt-4">Enjoy a wonder gaming experience</h4>
              <h6 class="text-center mt-4">Ready to play? Enter your email to get started</h6>
            </div>
          </div>
        </div>
    </div>
    <div>
        <b-button size="lg" class="text-center" type="submit" variant="danger">Sign Up Now!</b-button>
    </div>

    </b-container>
    <b-container fluid class="color">
      <b-row>
        <b-col sm="6">
          hi
        </b-col>
        <b-col sm="6">
          hi
        </b-col>
      </b-row>
    </b-container>
     <b-container fluid class="color">
      <b-row>
        <b-col sm="6">
          hi
        </b-col>
        <b-col sm="6">
          hi
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<style>
.bg{
    background-image: url('../../static/bg3.jpg');
    min-height: 100vh;
}
h1,h4,h6{
  color: white;
}

.color{
  background-color:rgb(24, 22, 22);
  min-height: 80vh;
}
</style>
