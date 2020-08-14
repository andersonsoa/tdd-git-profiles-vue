<template>
  <div class="main__container">
    <UserSearchForm @submitted="pesquisar" />
    <UserProfile :user="user" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "UserView",

  computed: {
    ...mapState({ user: "user" })
  },
  components: {
    UserProfile: () => import("@/components/UserProfile"),
    UserSearchForm: () => import("@/components/UserSearchForm")
  },
  methods: {
    ...mapActions({ searchUser: "SEARCH_USER" }),
    async pesquisar(username) {
      this.searchUser(username);
    }
  }
};
</script>

<style scoped>
.main__container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 640px;
  width: 700px;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 2px 2px 20px #0005;
}
</style>
