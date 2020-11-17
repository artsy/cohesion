import { OwnerType } from "../../../Schema"
import {
  tappedMainArtworkGrid,
  TappedMainArtworkGridArgs,
} from "../TappedMainArtworkGrid"

describe("clickedEntityGroup", () => {
  let args: TappedMainArtworkGridArgs
  beforeEach(() => {
    args = {
      contextScreenOwnerType: OwnerType.home,
      destinationScreenOwnerId: "5359794d1a1e86c3740001f7",
      destinationScreenOwnerSlug: "andy-warhol-flower",
    }
  })
  it("Works with minimal args", () => {
    const event = tappedMainArtworkGrid(args)

    expect(event).toEqual({
      action: "tappedMainArtworkGrid",
      context_module: "artworkGrid",
      context_screen_owner_id: undefined,
      context_screen_owner_slug: undefined,
      context_screen_owner_type: "home",
      destination_screen_owner_id: "5359794d1a1e86c3740001f7",
      destination_screen_owner_slug: "andy-warhol-flower",
      destination_screen_owner_type: "artwork",
      type: "thumbnail",
    })
  })

  it("Works with all args", () => {
    const event = tappedMainArtworkGrid({
      ...args,
      contextScreenOwnerId: "5359794d1a1e86c3740001f6",
      contextScreenOwnerSlug: "andy-warhol",
      contextScreenOwnerType: OwnerType.artist,
    })

    expect(event).toEqual({
      action: "tappedMainArtworkGrid",
      context_module: "artworkGrid",
      context_screen_owner_id: "5359794d1a1e86c3740001f6",
      context_screen_owner_slug: "andy-warhol",
      context_screen_owner_type: "artist",
      destination_screen_owner_id: "5359794d1a1e86c3740001f7",
      destination_screen_owner_slug: "andy-warhol-flower",
      destination_screen_owner_type: "artwork",
      type: "thumbnail",
    })
  })
})
