<template>
  <div class="users row">
    <div class="col-12">
      <h1>List of users</h1>
    </div>
    <div class="col-12 mb-2">
      <b-btn
        v-b-modal.addUserModal
        class="float-right"
        variant="primary"
        @click="showModal = true"
        >Add user</b-btn
      >
    </div>
    <div class="col-12">
      <b-table striped hover :items="users" :fields="fields" class="text-center"
        ><template v-slot:cell(actions)="{ item }">
          <span>
            <font-awesome-icon
              v-b-tooltip.hover.top="'Delete'"
              class="delete"
              icon="fa-trash-can"
              @click="deleteUser(item)"
            />
          </span>
        </template>
        <template v-slot:cell(hasPets)="{ item }">
          <font-awesome-icon v-if="item.hasPets" icon="fa-solid fa-check" />
          <font-awesome-icon v-else icon="fa-regular fa-circle-xmark" />
        </template>
      </b-table>
    </div>
    <AddUserModal v-if="showModal" @close="showModal = false" @save="addUser" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import axios from "axios"
import AddUserModal from "@/components/testComponent/AddUserModal.vue"

export default Vue.extend({
  name: "TestComponent",
  components: { AddUserModal },
  data() {
    return {
      users: [],
      fields: ["firstName", "lastName", "email", "age", "hasPets", "actions"],
      showModal: false,
      user: {},
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios({
          url: "http://localhost:3000/users",
          method: "GET",
        })
        if (response) this.users = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async deleteUser(user: Record<string, unknown>) {
      try {
        const response = await axios({
          url: `http://localhost:3000/user?email=${user.email}`,
          method: "DELETE",
        })
        if (response) await this.fetchUsers()
      } catch (e) {
        console.log(e)
      }
    },
    async addUser(user: Record<string, unknown>) {
      try {
        const response = await axios({
          url: `http://localhost:3000/user`,
          method: "POST",
          data: user,
        })
        if (response) await this.fetchUsers()
      } catch (e) {
        console.log(e)
      }
    },
  },
})
</script>

<style lang="scss">
@import "style";
</style>
