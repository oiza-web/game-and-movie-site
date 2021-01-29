<template>

<div>
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Sign Up</b-button>

  <b-modal id="bv-modal-example" hide-footer hide-header hide-header-close body-class="p-0">
<div class="container" id="container">

	<div class="form-container sign-in-container">
		<form @submit.prevent="pressed">
			<h1>Sign in</h1>
			<input type="email" v-model="email" placeholder="email" />
			<input type="password" placeholder="Password" v-model="password" />
			<a href="#">Forgot your password?</a>
			<button type="submit" @click="$bvModal.hide('bv-modal-example')">Sign </button>
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

</template>


<style>

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

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
	background-color: #FFFFFF;
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
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}







</style>
