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

  it("CmsClickedActionableInsight serializes the send-offer opportunity card", () => {
    const event: CmsClickedActionableInsight = {
      action: CmsActionType.clickedActionableInsight,
      context_module: CmsContextModule.actionableInsights,
      context_page_owner_type: CmsOwnerType.home,
      destination_path: "/conversations/6740c1f1a1b2c3d4e5f60718",
      subject: "sendOffer",
      variant: "opportunity",
    }

    expect(event).toEqual({
      action: "clickedActionableInsight",
      context_module: "actionableInsights",
      context_page_owner_type: "home",
      destination_path: "/conversations/6740c1f1a1b2c3d4e5f60718",
      subject: "sendOffer",
      variant: "opportunity",
    })
  })
})
