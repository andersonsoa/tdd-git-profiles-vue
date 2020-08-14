import flushpromises from "flush-promises";
import nock from "nock";
import api from "@/api";
import userFixture from "./fixtures/user";

describe("api", () => {
  it("procura pelo usuario", async () => {
    const expectedUser = "andersonsoa";

    const request = nock("https://api.github.com")
      .get(`/users/${expectedUser}`)
      .reply(200, userFixture);

    const result = await api.searchUser(expectedUser);
    await flushpromises();

    expect(result).toEqual(userFixture);
    expect(request.isDone()).toBe(true);
  });
});
