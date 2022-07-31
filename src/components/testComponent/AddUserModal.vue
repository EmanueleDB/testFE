<template>
  <b-modal id="addUserModal" class="modal" :hide-footer="true">
    <form @submit.prevent="saveUser()">
      <div class="flexcard">
        <div class="flexcard__header">
          <h3>New user</h3>
        </div>
        <div class="flexcard__body">
          <div class="col-12">
            <input
              v-model="user.firstName"
              type="text"
              class="flexcard__body__input mb-1"
              placeholder="First Name"
            />
          </div>
          <div class="col-12">
            <input
              v-model="user.lastName"
              type="text"
              class="flexcard__body__input mb-1"
              placeholder="Last Name"
            />
          </div>
          <div class="col-12">
            <input
              v-model="user.email"
              type="email"
              class="flexcard__body__input mb-1"
              placeholder="E-mail"
            />
          </div>
          <div class="col-12">
            <input
              v-model="user.age"
              type="number"
              class="flexcard__body__input mb-1"
              placeholder="Age"
            />
          </div>
          <div class="col-12">
            <b-form-checkbox v-model="user.hasPets"> Has pets </b-form-checkbox>
          </div>
          <div class="col-12">
            <b-btn type="submit" variant="success" class="float-right"
              >Add</b-btn
            >
          </div>
        </div>
      </div>
    </form>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "AddUserModal",
  data() {
    return {
      user: {},
    }
  },
  methods: {
    saveUser() {
      this.$emit("save", this.user)
      this.$emit("close")
    },
  },
})
</script>
<style lang="scss">
#addUserModal___BV_modal_content_ {
  border-radius: 20px;
  .flexcard__body {
    &__input {
      width: 100%;
      border: unset;
      border-radius: 5px;
      padding: 10px;
      background-color: $tertiary-light;
      font-size: 12px;
      box-sizing: border-box;
    }
  }
}
</style>
