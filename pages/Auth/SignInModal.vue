<template>
    <AuthModal id="SignInModal" :visible="isVisible" @hide="onHide">
    <h4 class="font-weight-bold mb-4">Sign in</h4>
    <div class="font-weight-bold mb-3">
      No account yet?
      <a href="#" class="text-primary" @click="switchToSignUp"
        >Create account</a
      >
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="validate-form" @submit.prevent="handleSubmit(login)">
        <b-form-group label-for="email">
          <ValidationProvider
            v-slot="{ errors, classes }"
            name="E-mail"
            rules="required|email"
          >
            <b-form-input
              id="email"
              v-model="form.email"
              :class="classes"
              type="email"
              class="line-input"
              placeholder="Email"
            />
            <b-form-invalid-feedback id="input-live-feedback" class="d-block">
              {{ errors[0] }}
            </b-form-invalid-feedback>
          </ValidationProvider>
        </b-form-group>

        <b-form-group label-for="password">
          <ValidationProvider
            v-slot="{ errors, classes }"
            name="Password"
            rules="required|min:6"
          >
            <b-form-input
              id="password"
              v-model="form.password"
              :class="classes"
              class="line-input"
              placeholder="Password"
              type="password"
            />
            <b-form-invalid-feedback id="input-live-feedback" class="d-block">
              {{ errors[0] }}
            </b-form-invalid-feedback>
          </ValidationProvider>
        </b-form-group>

        <b-form-group class="mt-5 text-center">
          <b-overlay
            :show="form.isLoading"
            rounded
            opacity="0.6"
            spinner-small
            spinner-variant="primary"
            class="d-inline-block w-100"
            @hidden="onHidden"
          >
            <b-button
              ref="button"
              :disabled="form.isLoading"
              type="submit"
              variant="primary"
              class="font-weight-bold"
              block
              pill
              >Sign in</b-button
            >
          </b-overlay>
        </b-form-group>
        </form>
    </ValidationObserver>
  </AuthModal>
</template>
