import { ContextModule } from "../../../Schema"
import { OwnerType } from "../../../Schema/Values/OwnerType"
import { tappedSell } from "../TappedSell"

describe(tappedSell, () => {
  it("Returns expected args", () => {
    const event = tappedSell({
      contextModule: ContextModule.auctionResults,
      contextScreenOwnerId: "12345",
      contextScreenOwnerSlug: "auction-slug",
      contextScreenOwnerType: OwnerType.sale,
      subject: "potatoes",
    })

    expect(event).toEqual({
      action: "tappedSell",
      context_module: "auctionResults",
      context_screen_owner_id: "12345",
      context_screen_owner_slug: "auction-slug",
      context_screen_owner_type: "sale",
      destination_screen_owner_type: "sell",
      subject: "potatoes",
    })
  })
})
