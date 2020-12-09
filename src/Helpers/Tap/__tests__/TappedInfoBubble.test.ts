import { ContextModule } from "../../../Schema"
import { OwnerType } from "../../../Schema/Values/OwnerType"
import { tappedInfoBubble } from "../TappedInfoBubble"

describe(tappedInfoBubble, () => {
  it("Returns expected args", () => {
    const event = tappedInfoBubble({
      contextModule: ContextModule.auctionResults,
      contextScreenOwnerId: "12345",
      contextScreenOwnerSlug: "my-artwork",
      contextScreenOwnerType: OwnerType.myCollectionArtwork,
      subject: "auctionResults",
    })

    expect(event).toEqual({
      action: "tappedInfoBubble",
      context_module: "auctionResults",
      context_screen_owner_id: "12345",
      context_screen_owner_slug: "my-artwork",
      context_screen_owner_type: "myCollectionArtwork",
      subject: "auctionResults",
    })
  })
})
