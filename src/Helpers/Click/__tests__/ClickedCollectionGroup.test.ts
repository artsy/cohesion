import {
  ClickedCollectionGroupArgs,
  clickedCollectionGroup,
} from "../ClickedCollectionGroup"
import { ContextModule, OwnerType } from "../../../Schema"

describe("clickedArtistSeriesGroup", () => {
  let args: ClickedCollectionGroupArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.featuredCollectionsRail,
      contextPageOwnerType: OwnerType.home,
      destinationPageOwnerId: "5359794d1a1e86c3740001f7",
      destinationPageOwnerSlug: "andy-warhol-flowers",
    }
  })
  it("Works with minimal args", () => {
    const event = clickedCollectionGroup(args)

    expect(event).toEqual({
      action: "clickedCollectionGroup",
      context_module: "featuredCollectionsRail",
      context_page_owner_id: undefined,
      context_page_owner_slug: undefined,
      context_page_owner_type: "home",
      destination_page_owner_id: "5359794d1a1e86c3740001f7",
      destination_page_owner_slug: "andy-warhol-flowers",
      destination_page_owner_type: "collection",
      type: "thumbnail",
    })
  })

  it("Works with all args", () => {
    const event = clickedCollectionGroup({
      ...args,
      contextPageOwnerId: "5359794d1a1e86c3740001f6",
      contextPageOwnerSlug: "contemporary",
      contextPageOwnerType: OwnerType.collection,
    })

    expect(event).toEqual({
      action: "clickedCollectionGroup",
      context_module: "featuredCollectionsRail",
      context_page_owner_id: "5359794d1a1e86c3740001f6",
      context_page_owner_slug: "contemporary",
      context_page_owner_type: "collection",
      destination_page_owner_id: "5359794d1a1e86c3740001f7",
      destination_page_owner_slug: "andy-warhol-flowers",
      destination_page_owner_type: "collection",
      type: "thumbnail",
    })
  })
})
