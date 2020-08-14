jest.mock("@/api");

import flushPromises from "flush-promises";
import * as actions from "@/store/actions";
import api from "@/api";
import userFixture from "./fixtures/user";

describe("store actions", () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  it("pesquisa por usuarios", async () => {
    const expectedUser = "andersonsoa";

    await actions.SEARCH_USER({ commit }, expectedUser);
    await flushPromises();

    expect(api.searchUser).toHaveBeenCalledWith(expectedUser);
    expect(commit).toHaveBeenCalledWith("SET_USER", userFixture);
  });
});
