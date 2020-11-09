import { ContextModule } from "../../../Schema"
import { OwnerType } from "../../../Schema/Values/OwnerType"
import { tappedRegisterToBid } from "../TappedRegisterToBid"

describe(tappedRegisterToBid, () => {
  it("Returns expected args", () => {
    const event = tappedRegisterToBid({
      contextModule: ContextModule.aboutThisAuction,
      contextScreenOwnerId: "5359794d2a1e86c3741001f8",
      contextScreenOwnerSlug: "auction-slug",
      contextScreenOwnerType: OwnerType.sale,
    })

    expect(event).toEqual({
      action: "tappedRegisterToBid",
      contextModule: "aboutThisAuction",
      contextScreenOwnerId: "5359794d2a1e86c3741001f8",
      contextScreenOwnerSlug: "auction-slug",
      contextScreenOwnerType: "sale",
    })
  })
})
