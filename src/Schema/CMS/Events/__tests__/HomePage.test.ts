import { CmsContextModule } from "../../Values/CmsContextModule"
import { CmsOwnerType } from "../../Values/CmsOwnerType"
import { CmsClickedActionableInsight } from "../HomePage"
import { CmsActionType } from "../index"

describe("HomePage events", () => {
  it("CmsClickedActionableInsight serializes to the expected shape", () => {
    const event: CmsClickedActionableInsight = {
      action: CmsActionType.clickedActionableInsight,
      context_module: CmsContextModule.actionableInsights,
      context_page_owner_type: CmsOwnerType.home,
      destination_path: "/orders/open",
      subject: "orderResponse",
      variant: "improve",
    }

    expect(event).toEqual({
      action: "clickedActionableInsight",
      context_module: "actionableInsights",
      context_page_owner_type: "home",
      destination_path: "/orders/open",
      subject: "orderResponse",
      variant: "improve",
    })
  })
})
