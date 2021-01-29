<template>

<div>
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Sign In</b-button>

  <b-modal id="bv-modal-example" hide-footer hide-header hide-header-close body-class="p-0">
<div class="container" id="container">

	<div class="form-container sign-in-container">
		<form @submit.prevent="pressed2">
			<h1>Sign up</h1>
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
</b-modal>
</div>

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

</template>
