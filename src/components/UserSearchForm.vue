<template>
  <div class="user-search__container">
    <input
      v-model="username"
      @keydown.enter="pesquisar"
      class="user-search__input"
      name="username"
      type="text"
    />
    <button
      @click="pesquisar"
      class="user-search__button"
      type="submit"
      name="submit"
    >
      Pesquisar
    </button>
  </div>
</template>

<script>
export default {
  name: "UserSearchForm",
  data: () => ({
    username: ""
  }),
  methods: {
    pesquisar() {
      this.$emit("submitted", this.username);
      this.username = "";
    }
  }
};
</script>

<style scoped>
.user-search__container {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-search__input {
  padding: 10px 15px;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 3px #0009;
}
.user-search__input:focus {
  outline: none;
}
.user-search__button {
  margin-left: 10px;
  padding: 10px 15px;
  height: 43px;
}
.user-search__button:focus {
  outline: none;
}
</style>
