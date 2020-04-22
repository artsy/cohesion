import { ContextModule, AuthIntent } from "../../../Schema"
import { successfullyLoggedIn } from "../SuccessfullyLoggedIn"

describe("successfullyLoggedIn", () => {
  it("Works with minimal args", () => {
    const args = successfullyLoggedIn({
      authRedirect: "https://artsy.net/artist/andy-warhol",
      contextModule: ContextModule.header,
      intent: AuthIntent.signup,
      service: "apple",
      user_id: "foo",
    })

    expect(args).toEqual({
      action: "successfullyLoggedIn",
      auth_redirect: "https://artsy.net/artist/andy-warhol",
      context_module: "header",
      intent: "signup",
      modal_copy: undefined,
      service: "apple",
      trigger: "click",
      type: "login",
      user_id: "foo",
    })
  })

  it("Works with all args", () => {
    const args = successfullyLoggedIn({
      authRedirect: "https://artsy.net/artist/andy-warhol",
      contextModule: ContextModule.popUpModal,
      copy: "Sign up to follow artists",
      intent: AuthIntent.viewEditorial,
      service: "email",
      triggerSeconds: 2,
      user_id: "foo",
    })

    expect(args).toEqual({
      action: "successfullyLoggedIn",
      auth_redirect: "https://artsy.net/artist/andy-warhol",
      context_module: "popUpModal",
      intent: "viewEditorial",
      modal_copy: "Sign up to follow artists",
      service: "email",
      trigger: "timed",
      type: "login",
      user_id: "foo",
    })
  })
})
