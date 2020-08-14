import { shallowMount } from "@vue/test-utils";
import UserSearchForm from "@/components/UserSearchForm";

describe("UserSearchForm.vue", () => {
  const build = () => {
    const wrapper = shallowMount(UserSearchForm);

    return {
      wrapper,
      input: () => wrapper.find("input[name='username']"),
      button: () => wrapper.find("button[name='submit']")
    };
  };

  // testes
  it("rederiza o componente corretamente", () => {
    const { wrapper } = build();

    // asserções
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renderiza os principais filhos", () => {
    const { input, button } = build();

    expect(input().exists()).toBe(true);
    expect(button().exists()).toBe(true);
  });

  it("invoca o evento 'submitted' quando submeter o form", () => {
    const { wrapper, input, button } = build();
    const expectedUsername = "andersonsoa";

    input().setValue(expectedUsername);

    input().trigger("input");
    button().trigger("click");
    button().trigger("submit");

    expect(wrapper.emitted().submitted[0]).toEqual([expectedUsername]);
  });
});
