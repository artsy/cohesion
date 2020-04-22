import { ContextModule, AuthIntent } from "../../../Schema"
import { successfullyLoggedIn } from "../SuccessfullyLoggedIn"

describe("successfullyLoggedIn", () => {
  it("Works with minimal args", () => {
    const args = successfullyLoggedIn({
      authRedirect: "https://artsy.net/artist/andy-warhol",
      contextModule: ContextModule.header,
      intent: AuthIntent.signup,
      service: "apple",
    })

    expect(args).toEqual({
      action: "successfullyLoggedIn",
      auth_redirect: "https://artsy.net/artist/andy-warhol",
      context_module: "header",
      intent: "signup",
      service: "apple",
      trigger: "click",
    })
  })

  it("Works with all args", () => {
    const args = successfullyLoggedIn({
      authRedirect: "https://artsy.net/artist/andy-warhol",
      contextModule: ContextModule.popUpModal,
      intent: AuthIntent.viewEditorial,
      service: "email",
      triggerSeconds: 2,
    })

    expect(args).toEqual({
      action: "successfullyLoggedIn",
      auth_redirect: "https://artsy.net/artist/andy-warhol",
      context_module: "popUpModal",
      intent: "viewEditorial",
      service: "email",
      trigger: "timed",
    })
  })
})
