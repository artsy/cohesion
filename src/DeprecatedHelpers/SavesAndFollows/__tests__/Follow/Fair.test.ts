import { ContextModule, OwnerType } from "../../../../Schema"
import { FollowedArgs, followedFair, unfollowedFair } from "../../Follow"

describe("Follow: Fair", () => {
  let args: FollowedArgs
  let extendedArgs: FollowedArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.pastFairs,
      contextOwnerType: OwnerType.fairs,
      ownerId: "5359794d1a1e86c3740001f7",
      ownerSlug: "frieze-london",
    }

    extendedArgs = {
      ...args,
      contextOwnerId: "5359794d1a1e86c3740001f6",
      contextOwnerSlug: "andy-warhol-skull",
      contextOwnerType: OwnerType.artwork,
    }
  })

  describe("followedFair", () => {
    it("Works with minimal args", () => {
      const event = followedFair(args)

      expect(event).toEqual({
        action: "followedFair",
        context_module: "pastFairs",
        context_owner_id: undefined,
        context_owner_slug: undefined,
        context_owner_type: "fairs",
        owner_id: "5359794d1a1e86c3740001f7",
        owner_slug: "frieze-london",
        owner_type: "fair",
      })
    })

    it("Works with all args", () => {
      const event = followedFair(extendedArgs)

      expect(event).toEqual({
        action: "followedFair",
        context_module: "pastFairs",
        context_owner_id: "5359794d1a1e86c3740001f6",
        context_owner_slug: "andy-warhol-skull",
        context_owner_type: "artwork",
        owner_id: "5359794d1a1e86c3740001f7",
        owner_slug: "frieze-london",
        owner_type: "fair",
      })
    })
  })

  describe("unfollowedFair", () => {
    it("Works with minimal args", () => {
      const event = unfollowedFair(args)

      expect(event).toEqual({
        action: "unfollowedFair",
        context_module: "pastFairs",
        context_owner_id: undefined,
        context_owner_slug: undefined,
        context_owner_type: "fairs",
        owner_id: "5359794d1a1e86c3740001f7",
        owner_slug: "frieze-london",
        owner_type: "fair",
      })
    })

    it("Works with all args", () => {
      const event = unfollowedFair(extendedArgs)

      expect(event).toEqual({
        action: "unfollowedFair",
        context_module: "pastFairs",
        context_owner_id: "5359794d1a1e86c3740001f6",
        context_owner_slug: "andy-warhol-skull",
        context_owner_type: "artwork",
        owner_id: "5359794d1a1e86c3740001f7",
        owner_slug: "frieze-london",
        owner_type: "fair",
      })
    })
  })
})
