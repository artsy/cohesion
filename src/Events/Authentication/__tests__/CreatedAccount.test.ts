import { ContextModule, AuthIntent } from "../../../Schema"
import { createdAccount } from "../CreatedAccount"

describe("createdAccount", () => {
  it("Works with minimal args", () => {
    const args = createdAccount({
      authRedirect: "https://artsy.net/artist/andy-warhol",
      contextModule: ContextModule.header,
      intent: AuthIntent.signup,
      service: "apple",
      user_id: "foo",
    })

    expect(args).toEqual({
      action: "createdAccount",
      auth_redirect: "https://artsy.net/artist/andy-warhol",
      context_module: "header",
      modal_copy: undefined,
      intent: "signup",
      onboarding: false,
      service: "apple",
      trigger: "click",
      type: "signup",
      user_id: "foo",
    })
  })

  it("Works with all args", () => {
    const args = createdAccount({
      authRedirect: "https://artsy.net/artist/andy-warhol",
      contextModule: ContextModule.popUpModal,
      copy: "Sign up to follow artists",
      intent: AuthIntent.viewEditorial,
      onboarding: true,
      service: "email",
      triggerSeconds: 2,
      user_id: "foo",
    })

    expect(args).toEqual({
      action: "createdAccount",
      auth_redirect: "https://artsy.net/artist/andy-warhol",
      context_module: "popUpModal",
      modal_copy: "Sign up to follow artists",
      intent: "viewEditorial",
      onboarding: true,
      service: "email",
      trigger: "timed",
      type: "signup",
      user_id: "foo",
    })
  })
})
