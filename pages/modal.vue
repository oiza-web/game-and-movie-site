<template>
  <b-modal
    :id="id"
    :visible="visible"
    size="lg"
    modal-class="auth-madal"
    body-class="p-0"
    centered
    hide-header
    hide-footer
    @hide="onHide"
  >
    <template v-slot:default="{ hide }">
      <div class="d-flex flex-column flex-md-row" style="min-height: 70vh;">
        <div class="form-col"><slot /></div>

        <div class="info-col d-none d-md-flex">
          <SvgIcon name="cancel" class="close text-white" @click="hide()" />
          <!-- <div class="form-col-content px-5 mx-5">
            <h4 class="text-primary font-weight-bold">
              ONLINE<br />
              LOCAL MERCHANT<br />
              & MARKETPLACE
            </h4>

            <p class="text-white mt-4">
              Your perfect place to find the merchants within your locality, and
              buy & sell goods
            </p>
          </div> -->
        </div>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onHide() {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/_variables';

.auth-madal {
  .modal-content {
    background-color: transparent;
    border-radius: 0.7rem;
    overflow: hidden;
  }

  .form-col {
    width: 50%;
    padding: 30px;
    background-color: $white;

    .line-input {
      border: 0;
      border-radius: 0;
      box-shadow: none;
      padding-left: 0;
      border-bottom: 2px solid $gray-200;
      transition: border-color 0.3s ease-out;

      &:focus {
        border-color: $primary;
      }
    }
  }
  .info-col {
    display: flex;
    align-items: center;
    width: 60%;
    position: relative;
    padding-top: 40px;
    text-align: center;
    background-image: url('/images/paysmallsmall-hero.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    svg {
      fill: red;
    }

    &::before {
      top: 0;
      left: 0;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-color: rgb(255, 255, 255);
      z-index: -1;
    }
    &:after {
        top: 0;
        left: 0;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.15);
        z-index: 2;
      }

    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }

    .form-col-content {
      position: relative;
      z-index: 1;
    }
  }

  @include media-breakpoint-down(md) {
    .form-col,
    .info-col {
      width: 100%;
    }
  }
}
</style>
