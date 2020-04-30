import { ContextModule, Intent } from "../../../Schema"
import { resetYourPassword } from "../ResetYourPassword"

describe("createdAccount", () => {
  it("Works with minimal args", () => {
    const args = resetYourPassword({
      authRedirect: "https://artsy.net/artist/andy-warhol",
      contextModule: ContextModule.header,
      intent: Intent.signup,
      service: "apple",
    })

    expect(args).toEqual({
      action: "resetYourPassword",
      auth_redirect: "https://artsy.net/artist/andy-warhol",
      context_module: "header",
      intent: "signup",
      modal_copy: undefined,
      service: "apple",
      trigger: "click",
      trigger_seconds: undefined,
      type: "forgot",
    })
  })

  it("Works with all args", () => {
    const args = resetYourPassword({
      authRedirect: "https://artsy.net/artist/andy-warhol",
      contextModule: ContextModule.popUpModal,
      copy: "Sign up to follow artists",
      intent: Intent.viewArtist,
      service: "email",
      triggerSeconds: 2,
    })

    expect(args).toEqual({
      action: "resetYourPassword",
      auth_redirect: "https://artsy.net/artist/andy-warhol",
      context_module: "popUpModal",
      modal_copy: "Sign up to follow artists",
      intent: "viewArtist",
      service: "email",
      trigger: "timed",
      trigger_seconds: 2,
      type: "forgot",
    })
  })
})
