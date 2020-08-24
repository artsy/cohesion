import {
  ClickedArtworkGroupArgs,
  ClickedArtworkGroupHeaderArgs,
  clickedArtworkGroup,
  clickedArtworkGroupHeader,
} from "../ClickedArtworkGroup"
import { ContextModule, OwnerType } from "../../../Schema"

describe("clickedArtworkGroup", () => {
  let args: ClickedArtworkGroupArgs
  beforeEach(() => {
    args = {
      artworkID: "5359794d1a1e86c3740001f7",
      artworkSlug: "andy-warhol-skull",
      contextModule: ContextModule.topWorksRail,
      contextPageOwnerId: "5359794d1a1e86c3740001f7",
      contextPageOwnerSlug: "andy-warhol",
      contextPageOwnerType: OwnerType.artist,
      horizontalSlidePosition: 2,
    }
  })
  it("Works", () => {
    const event = clickedArtworkGroup(args)

    expect(event).toEqual({
      action: "clickedArtworkGroup",
      context_module: "topWorksRail",
      context_page_owner_id: "5359794d1a1e86c3740001f7",
      context_page_owner_slug: "andy-warhol",
      context_page_owner_type: "artist",
      destination_page_owner_id: "5359794d1a1e86c3740001f7",
      destination_page_owner_slug: "andy-warhol-skull",
      destination_page_owner_type: "artwork",
      horizontal_slide_position: 2,
      type: "thumbnail",
    })
  })
})

describe("clickedArtworkGroupHeader", () => {
  let args: ClickedArtworkGroupHeaderArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.moreFromThisSeries,
      contextPageOwnerId: "5359794d1a1e86c3740001f7",
      contextPageOwnerSlug: "andy-warhol-skull",
      contextPageOwnerType: OwnerType.artwork,
      destinationPageOwnerId: "5359794d1a1e86c3740001f7",
      destinationPageOwnerSlug: "andy-warhol-skulls",
      destinationPageOwnerType: OwnerType.artistSeries,
      type: "viewAll",
    }
  })

  it("Works", () => {
    const event = clickedArtworkGroupHeader(args)

    expect(event).toEqual({
      action: "clickedArtworkGroup",
      context_module: "moreFromThisSeries",
      context_page_owner_id: "5359794d1a1e86c3740001f7",
      context_page_owner_slug: "andy-warhol-skull",
      context_page_owner_type: "artwork",
      destination_page_owner_id: "5359794d1a1e86c3740001f7",
      destination_page_owner_slug: "andy-warhol-skulls",
      destination_page_owner_type: "artistSeries",
      type: "viewAll",
    })
  })
})
