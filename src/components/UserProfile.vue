<template>
  <div class="user-profile__container">
    <img :src="user.avatar_url" class="user-profile__avatar" />
    <h1 class="user-profile__name">{{ user.name }}</h1>
    <p class="user-profile__bio">{{ user.bio }}</p>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    user: {
      require: true,
      type: Object
    }
  }
};
</script>

<style scoped>
.user-profile__container {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.user-profile__avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 10px solid black;
  box-shadow: 1px 1px 10px #0004;
}
.user-profile__bio {
  width: 80%;
}
</style>
