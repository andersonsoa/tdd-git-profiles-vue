import mutations from "@/store/mutations";
import initialState from "@/store/state";
import user from "./fixtures/user";

describe("store mutations", () => {
  let state;

  beforeEach(() => {
    state = { ...initialState };
  });

  it("seta um novo usuario", () => {
    const expectedUser = user;

    mutations.SET_USER(state, expectedUser);

    expect(state.user).toEqual(expectedUser);
    expect(state.user).not.toBe(expectedUser);
  });
});
