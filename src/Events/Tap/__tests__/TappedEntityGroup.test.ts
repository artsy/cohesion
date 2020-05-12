import { ContextModule, OwnerType } from "../../../Schema"
import { tappedEntityGroup, TappedEntityGroupArgs } from "../TappedEntityGroup"

describe("tappedEntityGroup", () => {
  let args: TappedEntityGroupArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.trendingArtistsRail,
      contextScreenOwnerType: OwnerType.home,
      destinationScreenOwnerType: OwnerType.artist,
      destinationScreenOwnerId: "5359794d1a1e86c3740001f7",
      destinationScreenOwnerSlug: "andy-warhol",
      horizontalSlidePosition: 2,
      moduleHeight: "double",
      type: "thumbnail",
    }
  })
  it("Works with minimal args", () => {
    const event = tappedEntityGroup(args)

    expect(event).toEqual({
      action: "tappedArtistGroup",
      context_module: "trendingArtistsRail",
      context_screen_owner_id: undefined,
      context_screen_owner_slug: undefined,
      context_screen_owner_type: "home",
      destination_screen_owner_id: "5359794d1a1e86c3740001f7",
      destination_screen_owner_slug: "andy-warhol",
      destination_screen_owner_type: "artist",
      horizontal_slide_position: 2,
      module_height: "double",
      type: "thumbnail",
    })
  })

  it("Works with all args", () => {
    const event = tappedEntityGroup({
      ...args,
      contextModule: ContextModule.otherWorksInAuctionRail,
      contextScreenOwnerType: OwnerType.artwork,
      contextScreenOwnerId: "5359794d1a1e86c3740001f6",
      contextScreenOwnerSlug: "andy-warhol-flower",
    })

    expect(event).toEqual({
      action: "tappedArtistGroup",
      context_module: "otherWorksInAuctionRail",
      context_screen_owner_id: "5359794d1a1e86c3740001f6",
      context_screen_owner_slug: "andy-warhol-flower",
      context_screen_owner_type: "artwork",
      destination_screen_owner_id: "5359794d1a1e86c3740001f7",
      destination_screen_owner_slug: "andy-warhol",
      destination_screen_owner_type: "artist",
      horizontal_slide_position: 2,
      module_height: "double",
      type: "thumbnail",
    })
  })

  it("Constructs TappedArtistGroup events", () => {
    const event = tappedEntityGroup(args)
    expect(event.action).toEqual("tappedArtistGroup")
  })

  it("Constructs TappedArtworkGroup events", () => {
    const singleArtworkEvent = tappedEntityGroup({
      ...args,
      destinationScreenOwnerType: OwnerType.artwork,
    })
    expect(singleArtworkEvent.action).toEqual("tappedArtworkGroup")

    const worksForYouEvent = tappedEntityGroup({
      ...args,
      destinationScreenOwnerType: OwnerType.worksForYou,
    })

    expect(worksForYouEvent.action).toEqual("tappedArtworkGroup")

    const categoryEvent = tappedEntityGroup({
      ...args,
      destinationScreenOwnerType: OwnerType.category,
    })

    expect(categoryEvent.action).toEqual("tappedArtworkGroup")

    const savesAndFollowsEvent = tappedEntityGroup({
      ...args,
      destinationScreenOwnerType: OwnerType.savesAndFollows,
    })

    expect(savesAndFollowsEvent.action).toEqual("tappedArtworkGroup")
  })

  it("Constructs TappedAuctionGroup events", () => {
    const singleAuctionEvent = tappedEntityGroup({
      ...args,
      destinationScreenOwnerType: OwnerType.sale,
    })
    expect(singleAuctionEvent.action).toEqual("tappedAuctionGroup")

    const auctionOverviewEvent = tappedEntityGroup({
      ...args,
      destinationScreenOwnerType: OwnerType.auctions,
    })
    expect(auctionOverviewEvent.action).toEqual("tappedAuctionGroup")
  })

  it("Constructs TappedCollectionGroup events", () => {
    const event = tappedEntityGroup({
      ...args,
      destinationScreenOwnerType: OwnerType.collection,
    })
    expect(event.action).toEqual("tappedCollectionGroup")
  })

  it("Constructs TappedExploreGroup events", () => {
    const event = tappedEntityGroup({
      ...args,
      destinationScreenOwnerType: OwnerType.explore,
    })
    expect(event.action).toEqual("tappedExploreGroup")
  })

  it("Constructs TappedFairGroup events", () => {
    const event = tappedEntityGroup({
      ...args,
      destinationScreenOwnerType: OwnerType.fair,
    })
    expect(event.action).toEqual("tappedFairGroup")
  })
})
