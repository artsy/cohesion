import { ContextModule, OwnerType } from "../../../Schema"
import {
  FollowedArgs,
  followedArtist,
  followedGene,
  unfollowedArtist,
  unfollowedGene,
} from "../Follow"

describe("followedArtist", () => {
  let args: FollowedArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.popularArtistsRail,
      contextOwnerType: OwnerType.home,
      ownerId: "5359794d1a1e86c3740001f7",
      ownerSlug: "andy-warhol",
    }
  })
  it("Works with minimal args", () => {
    const event = followedArtist(args)

    expect(event).toEqual({
      action: "followedArtist",
      context_module: "popularArtistsRail",
      context_owner_id: undefined,
      context_owner_slug: undefined,
      context_owner_type: "home",
      owner_id: "5359794d1a1e86c3740001f7",
      owner_slug: "andy-warhol",
      owner_type: "artist",
    })
  })

  it("Works with all args", () => {
    const event = unfollowedArtist({
      ...args,
      contextOwnerId: "5359794d1a1e86c3740001f6",
      contextOwnerSlug: "andy-warhol-flowers",
      contextOwnerType: OwnerType.artistSeries,
    })

    expect(event).toEqual({
      action: "unfollowedArtist",
      context_module: "popularArtistsRail",
      context_owner_id: "5359794d1a1e86c3740001f6",
      context_owner_slug: "andy-warhol-flowers",
      context_owner_type: "artistSeries",
      owner_id: "5359794d1a1e86c3740001f7",
      owner_slug: "andy-warhol",
      owner_type: "artist",
    })
  })
})

describe("unfollowedArtist", () => {
  let args: FollowedArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.popularArtistsRail,
      contextOwnerType: OwnerType.home,
      ownerId: "5359794d1a1e86c3740001f7",
      ownerSlug: "andy-warhol",
    }
  })
  it("Works with minimal args", () => {
    const event = unfollowedArtist(args)

    expect(event).toEqual({
      action: "unfollowedArtist",
      context_module: "popularArtistsRail",
      context_owner_id: undefined,
      context_owner_slug: undefined,
      context_owner_type: "home",
      owner_id: "5359794d1a1e86c3740001f7",
      owner_slug: "andy-warhol",
      owner_type: "artist",
    })
  })

  it("Works with all args", () => {
    const event = unfollowedArtist({
      ...args,
      contextOwnerId: "5359794d1a1e86c3740001f6",
      contextOwnerSlug: "andy-warhol-flowers",
      contextOwnerType: OwnerType.artistSeries,
    })

    expect(event).toEqual({
      action: "unfollowedArtist",
      context_module: "popularArtistsRail",
      context_owner_id: "5359794d1a1e86c3740001f6",
      context_owner_slug: "andy-warhol-flowers",
      context_owner_type: "artistSeries",
      owner_id: "5359794d1a1e86c3740001f7",
      owner_slug: "andy-warhol",
      owner_type: "artist",
    })
  })
})

describe("followedGene", () => {
  let args: FollowedArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.categoryRail,
      contextOwnerType: OwnerType.home,
      ownerId: "5359794d1a1e86c3740001f7",
      ownerSlug: "surrealism",
    }
  })
  it("Works with minimal args", () => {
    const event = followedGene(args)

    expect(event).toEqual({
      action: "followedGene",
      context_module: "categoryRail",
      context_owner_id: undefined,
      context_owner_slug: undefined,
      context_owner_type: "home",
      owner_id: "5359794d1a1e86c3740001f7",
      owner_slug: "surrealism",
      owner_type: "gene",
    })
  })

  it("Works with all args", () => {
    const event = followedGene({
      ...args,
      contextModule: ContextModule.intextTooltip,
      contextOwnerId: "5359794d2a1e86c3741001f8",
      contextOwnerSlug: "artsy-editorial-future-of-art",
      contextOwnerType: OwnerType.article,
    })

    expect(event).toEqual({
      action: "followedGene",
      context_module: "intextTooltip",
      context_owner_id: "5359794d2a1e86c3741001f8",
      context_owner_slug: "artsy-editorial-future-of-art",
      context_owner_type: "article",
      owner_id: "5359794d1a1e86c3740001f7",
      owner_slug: "surrealism",
      owner_type: "gene",
    })
  })
})

describe("unfollowedGene", () => {
  let args: FollowedArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.categoryRail,
      contextOwnerType: OwnerType.home,
      ownerId: "5359794d1a1e86c3740001f7",
      ownerSlug: "surrealism",
    }
  })
  it("Works with minimal args", () => {
    const event = unfollowedGene(args)

    expect(event).toEqual({
      action: "unfollowedGene",
      context_module: "categoryRail",
      context_owner_id: undefined,
      context_owner_slug: undefined,
      context_owner_type: "home",
      owner_id: "5359794d1a1e86c3740001f7",
      owner_slug: "surrealism",
      owner_type: "gene",
    })
  })

  it("Works with all args", () => {
    const event = unfollowedGene({
      ...args,
      contextModule: ContextModule.intextTooltip,
      contextOwnerId: "5359794d2a1e86c3741001f8",
      contextOwnerSlug: "artsy-editorial-future-of-art",
      contextOwnerType: OwnerType.article,
    })

    expect(event).toEqual({
      action: "unfollowedGene",
      context_module: "intextTooltip",
      context_owner_id: "5359794d2a1e86c3741001f8",
      context_owner_slug: "artsy-editorial-future-of-art",
      context_owner_type: "article",
      owner_id: "5359794d1a1e86c3740001f7",
      owner_slug: "surrealism",
      owner_type: "gene",
    })
  })
})
