import { ContextModule, OwnerType } from "../../../../Schema"
import { FollowedArgs, followedPartner, unfollowedPartner } from "../../Follow"

describe("Follow: Partner", () => {
  let args: FollowedArgs
  let extendedArgs: FollowedArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.liveAuctionsRail,
      contextOwnerType: OwnerType.home,
      ownerId: "5359794d1a1e86c3740001f7",
      ownerSlug: "pace-prints",
    }

    extendedArgs = {
      ...args,
      contextModule: ContextModule.aboutTheWork,
      contextOwnerId: "5359794d2a1e86c3741001f8",
      contextOwnerSlug: "andy-warhol-skull",
      contextOwnerType: OwnerType.artwork,
    }
  })

  describe("followedPartner", () => {
    it("Works with minimal args", () => {
      const event = followedPartner(args)

      expect(event).toEqual({
        action: "followedPartner",
        context_module: "liveAuctionsRail",
        context_owner_id: undefined,
        context_owner_slug: undefined,
        context_owner_type: "home",
        owner_id: "5359794d1a1e86c3740001f7",
        owner_slug: "pace-prints",
        owner_type: "partner",
      })
    })

    it("Works with all args", () => {
      const event = followedPartner(extendedArgs)

      expect(event).toEqual({
        action: "followedPartner",
        context_module: "aboutTheWork",
        context_owner_id: "5359794d2a1e86c3741001f8",
        context_owner_slug: "andy-warhol-skull",
        context_owner_type: "artwork",
        owner_id: "5359794d1a1e86c3740001f7",
        owner_slug: "pace-prints",
        owner_type: "partner",
      })
    })
  })

  describe("unfollowedPartner", () => {
    it("Works with minimal args", () => {
      const event = unfollowedPartner(args)

      expect(event).toEqual({
        action: "unfollowedPartner",
        context_module: "liveAuctionsRail",
        context_owner_id: undefined,
        context_owner_slug: undefined,
        context_owner_type: "home",
        owner_id: "5359794d1a1e86c3740001f7",
        owner_slug: "pace-prints",
        owner_type: "partner",
      })
    })

    it("Works with all args", () => {
      const event = unfollowedPartner(extendedArgs)

      expect(event).toEqual({
        action: "unfollowedPartner",
        context_module: "aboutTheWork",
        context_owner_id: "5359794d2a1e86c3741001f8",
        context_owner_slug: "andy-warhol-skull",
        context_owner_type: "artwork",
        owner_id: "5359794d1a1e86c3740001f7",
        owner_slug: "pace-prints",
        owner_type: "partner",
      })
    })
  })
})
