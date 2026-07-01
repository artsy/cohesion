import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { OsActionType } from "../index"
import {
  ClickedShowMeHow,
  CompletedGettingStarted,
  ProgressedGettingStarted,
} from "../OnboardingFlow"

describe("Onboarding Flow events", () => {
  it("ClickedShowMeHow serializes to the expected shape", () => {
    const event: ClickedShowMeHow = {
      action: OsActionType.clickedShowMeHow,
      context_module: OsContextModule.onboardingFlow,
      context_page_owner_type: OsOwnerType.inventory,
      step: "create an artwork",
    }

    expect(event).toEqual({
      action: "clickedShowMeHow",
      context_module: "onboardingFlow",
      context_page_owner_type: "inventory",
      step: "create an artwork",
    })
  })

  it("CompletedGettingStarted serializes to the expected shape", () => {
    const event: CompletedGettingStarted = {
      action: OsActionType.completedOnboarding,
      context_module: OsContextModule.onboardingFlow,
      context_page_owner_type: OsOwnerType.inventory,
      total_steps: 10,
    }

    expect(event).toEqual({
      action: "completedOnboarding",
      context_module: "onboardingFlow",
      context_page_owner_type: "inventory",
      total_steps: 10,
    })
  })

  it("ProgressedGettingStarted serializes to the expected shape", () => {
    const event: ProgressedGettingStarted = {
      action: OsActionType.progressedOnboarding,
      completed_step_count: 3,
      context_module: OsContextModule.onboardingFlow,
      context_page_owner_type: OsOwnerType.inventory,
      step: "create an artwork",
      total_steps: 10,
    }

    expect(event).toEqual({
      action: "progressedOnboarding",
      completed_step_count: 3,
      context_module: "onboardingFlow",
      context_page_owner_type: "inventory",
      step: "create an artwork",
      total_steps: 10,
    })
  })
})
