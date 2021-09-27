import { ContextModule, OwnerType } from "../../../Schema"
import {
  clickedArtistSeriesGroup,
  ClickedArtistSeriesGroupArgs,
} from "../ClickedArtistSeriesGroup"

describe("clickedArtistSeriesGroup", () => {
  let args: ClickedArtistSeriesGroupArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.artistSeriesRail,
      contextPageOwnerType: OwnerType.home,
      destinationPageOwnerId: "5359794d1a1e86c3740001f7",
      destinationPageOwnerSlug: "andy-warhol-flowers",
    }
  })
  it("Works with minimal args", () => {
    const event = clickedArtistSeriesGroup(args)

    expect(event).toEqual({
      action: "clickedArtistSeriesGroup",
      context_module: "artistSeriesRail",
      context_page_owner_id: undefined,
      context_page_owner_slug: undefined,
      context_page_owner_type: "home",
      curation_boost: false,
      destination_page_owner_id: "5359794d1a1e86c3740001f7",
      destination_page_owner_slug: "andy-warhol-flowers",
      destination_page_owner_type: "artistSeries",
      type: "thumbnail",
    })
  })

  it("Works with all args", () => {
    const event = clickedArtistSeriesGroup({
      ...args,
      contextPageOwnerId: "5359794d1a1e86c3740001f6",
      contextPageOwnerSlug: "andy-warhol",
      contextPageOwnerType: OwnerType.artist,
      curationBoost: true,
    })

    expect(event).toEqual({
      action: "clickedArtistSeriesGroup",
      context_module: "artistSeriesRail",
      context_page_owner_id: "5359794d1a1e86c3740001f6",
      context_page_owner_slug: "andy-warhol",
      context_page_owner_type: "artist",
      curation_boost: true,
      destination_page_owner_id: "5359794d1a1e86c3740001f7",
      destination_page_owner_slug: "andy-warhol-flowers",
      destination_page_owner_type: "artistSeries",
      type: "thumbnail",
    })
  })
})
