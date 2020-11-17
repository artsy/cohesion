import { ContextModule, OwnerType } from "../../../Schema"
import {
  clickedEntityGroup,
  ClickedEntityGroupArgs,
} from "../ClickedEntityGroup"

describe("clickedEntityGroup", () => {
  let args: ClickedEntityGroupArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.trendingArtistsRail,
      contextPageOwnerType: OwnerType.home,
      destinationPageOwnerId: "5359794d1a1e86c3740001f7",
      destinationPageOwnerSlug: "andy-warhol",
      destinationPageOwnerType: OwnerType.artist,
      horizontalSlidePosition: 2,
      type: "thumbnail",
    }
  })
  it("Works with minimal args", () => {
    const event = clickedEntityGroup(args)

    expect(event).toEqual({
      action: "clickedArtistGroup",
      context_module: "trendingArtistsRail",
      context_page_owner_id: undefined,
      context_page_owner_slug: undefined,
      context_page_owner_type: "home",
      destination_page_owner_id: "5359794d1a1e86c3740001f7",
      destination_page_owner_slug: "andy-warhol",
      destination_page_owner_type: "artist",
      horizontal_slide_position: 2,
      type: "thumbnail",
    })
  })

  it("Works with all args", () => {
    const event = clickedEntityGroup({
      ...args,
      contextModule: ContextModule.otherWorksInAuctionRail,
      contextPageOwnerId: "5359794d1a1e86c3740001f6",
      contextPageOwnerSlug: "andy-warhol-flower",
      contextPageOwnerType: OwnerType.artwork,
    })

    expect(event).toEqual({
      action: "clickedArtistGroup",
      context_module: "otherWorksInAuctionRail",
      context_page_owner_id: "5359794d1a1e86c3740001f6",
      context_page_owner_slug: "andy-warhol-flower",
      context_page_owner_type: "artwork",
      destination_page_owner_id: "5359794d1a1e86c3740001f7",
      destination_page_owner_slug: "andy-warhol",
      destination_page_owner_type: "artist",
      horizontal_slide_position: 2,
      type: "thumbnail",
    })
  })

  it("Constructs ClickedArtistGroup events", () => {
    const event = clickedEntityGroup(args)
    expect(event.action).toEqual("clickedArtistGroup")
  })

  it("Constructs ClickedArtworkGroup events", () => {
    const singleArtworkEvent = clickedEntityGroup({
      ...args,
      destinationPageOwnerType: OwnerType.artwork,
    })
    expect(singleArtworkEvent.action).toEqual("clickedArtworkGroup")

    const worksForYouEvent = clickedEntityGroup({
      ...args,
      destinationPageOwnerType: OwnerType.worksForYou,
    })

    expect(worksForYouEvent.action).toEqual("clickedArtworkGroup")

    const geneEvent = clickedEntityGroup({
      ...args,
      destinationPageOwnerType: OwnerType.gene,
    })

    expect(geneEvent.action).toEqual("clickedArtworkGroup")
  })

  it("Constructs ClickedAuctionGroup events", () => {
    const singleAuctionEvent = clickedEntityGroup({
      ...args,
      destinationPageOwnerType: OwnerType.sale,
    })
    expect(singleAuctionEvent.action).toEqual("clickedAuctionGroup")

    const auctionOverviewEvent = clickedEntityGroup({
      ...args,
      destinationPageOwnerType: OwnerType.auctions,
    })
    expect(auctionOverviewEvent.action).toEqual("clickedAuctionGroup")
  })

  it("Constructs ClickedCollectionGroup events", () => {
    const event = clickedEntityGroup({
      ...args,
      destinationPageOwnerType: OwnerType.collection,
    })
    expect(event.action).toEqual("clickedCollectionGroup")
  })

  it("Constructs ClickedFairGroup events", () => {
    const event = clickedEntityGroup({
      ...args,
      destinationPageOwnerType: OwnerType.fair,
    })
    expect(event.action).toEqual("clickedFairGroup")
  })
})
