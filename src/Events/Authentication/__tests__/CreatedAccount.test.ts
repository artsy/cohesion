import { ContextModule, Intent } from "../../../Schema"
import { createdAccount } from "../CreatedAccount"

describe("createdAccount", () => {
  it("Works with minimal args", () => {
    const args = createdAccount({
      authRedirect: "https://artsy.net/artist/andy-warhol",
      contextModule: ContextModule.header,
      intent: Intent.signup,
      service: "apple",
      userId: "5bd8b675776bd6002c86526c",
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
      user_id: "5bd8b675776bd6002c86526c",
    })
  })

  it("Works with all args", () => {
    const args = createdAccount({
      authRedirect: "https://artsy.net/artist/andy-warhol",
      contextModule: ContextModule.popUpModal,
      copy: "Sign up to follow artists",
      intent: Intent.viewArtist,
      onboarding: true,
      service: "email",
      triggerSeconds: 2,
      userId: "5bd8b675776bd6002c86526c",
    })

    expect(args).toEqual({
      action: "createdAccount",
      auth_redirect: "https://artsy.net/artist/andy-warhol",
      context_module: "popUpModal",
      modal_copy: "Sign up to follow artists",
      intent: "viewArtist",
      onboarding: true,
      service: "email",
      trigger: "timed",
      trigger_seconds: 2,
      type: "signup",
      user_id: "5bd8b675776bd6002c86526c",
    })
  })
})
