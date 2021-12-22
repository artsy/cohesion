import { ContextModule, OwnerType } from "../../../../Schema"
import { FollowedArgs, followedArtist, unfollowedArtist } from "../../Follow"

describe("Follow: Artist", () => {
  let args: FollowedArgs
  let extendedArgs: FollowedArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.popularArtistsRail,
      contextOwnerType: OwnerType.home,
      ownerId: "5359794d1a1e86c3740001f7",
      ownerSlug: "andy-warhol",
    }

    extendedArgs = {
      ...args,
      contextOwnerId: "5359794d1a1e86c3740001f6",
      contextOwnerSlug: "andy-warhol-flowers",
      contextOwnerType: OwnerType.artistSeries,
    }
  })

  describe("followedArtist", () => {
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
      const event = followedArtist(extendedArgs)

      expect(event).toEqual({
        action: "followedArtist",
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
      const event = unfollowedArtist(extendedArgs)

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
})
