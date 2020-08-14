import api from "@/api";

export const SEARCH_USER = async ({ commit }, username) => {
  try {
    const res = await api.searchUser(username);

    commit("SET_USER", res);
  } catch (error) {
    return error;
  }
};
