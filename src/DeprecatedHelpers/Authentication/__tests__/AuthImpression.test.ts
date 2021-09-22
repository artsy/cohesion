import { AuthModalType, ContextModule, Intent } from "../../../Schema"
import { authImpression } from "../AuthImpression"

describe("authImpression", () => {
  it("Works with minimal args", () => {
    const args = authImpression({
      contextModule: ContextModule.header,
      intent: Intent.signup,
      type: AuthModalType.signup,
    })

    expect(args).toEqual({
      action: "authImpression",
      context_module: "header",
      intent: "signup",
      modal_copy: undefined,
      onboarding: false,
      trigger: "click",
      trigger_seconds: undefined,
      type: "signup",
    })
  })

  it("Works with all args", () => {
    const args = authImpression({
      contextModule: ContextModule.header,
      copy: "Sign up to follow artists",
      intent: Intent.followArtist,
      onboarding: true,
      triggerSeconds: 4,
      type: AuthModalType.signup,
    })

    expect(args).toEqual({
      action: "authImpression",
      context_module: "header",
      intent: "followArtist",
      modal_copy: "Sign up to follow artists",
      onboarding: true,
      trigger: "timed",
      trigger_seconds: 4,
      type: "signup",
    })
  })
})
