jest.mock("@/store/actions");
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import UserView from "@/views/UserView";
import UserSearchForm from "@/components/UserSearchForm";
import UserProfile from "@/components/UserProfile";

import initialState from "@/store/state";
import * as actions from "@/store/actions";
import userFixture from "./fixtures/user";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("UserView.vue", () => {
  let state;

  beforeEach(() => {
    jest.resetAllMocks();
    state = { ...initialState };
  });

  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({
        actions,
        state
      })
    });
    return {
      wrapper,
      userSearchForm: () => wrapper.findComponent(UserSearchForm),
      userProfile: () => wrapper.findComponent(UserProfile)
    };
  };

  it("o componente renderiza corretamente", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renderiza o componente filho UserSearchForm", () => {
    const { userSearchForm } = build();

    expect(userSearchForm().exists()).toBe(true);
  });

  it("renderiza o componente filho UserProfile", () => {
    const { userProfile } = build();

    expect(userProfile().exists()).toBe(true);
  });

  it("passa um usuario para o componente profile via prop", () => {
    state.user = userFixture;
    const { userProfile } = build();

    expect(userProfile().vm.user).toBe(state.user);
  });

  it("pesquisa um usuario quando quando recebe 'submitted'", () => {
    const expectedUser = "andersonsoa";
    const { userSearchForm } = build();

    userSearchForm().vm.$emit("submitted", expectedUser);

    expect(actions.SEARCH_USER).toHaveBeenCalled();
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual(expectedUser);
  });
});
