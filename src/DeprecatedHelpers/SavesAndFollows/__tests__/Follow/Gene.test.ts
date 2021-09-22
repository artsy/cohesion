import { ContextModule, OwnerType } from "../../../../Schema"
import { FollowedArgs, followedGene, unfollowedGene } from "../../Follow"

describe("Follow: Gene", () => {
  let args: FollowedArgs
  let extendedArgs: FollowedArgs
  beforeEach(() => {
    args = {
      contextModule: ContextModule.categoryRail,
      contextOwnerType: OwnerType.home,
      ownerId: "5359794d1a1e86c3740001f7",
      ownerSlug: "surrealism",
    }

    extendedArgs = {
      ...args,
      contextModule: ContextModule.intextTooltip,
      contextOwnerId: "5359794d2a1e86c3741001f8",
      contextOwnerSlug: "artsy-editorial-future-of-art",
      contextOwnerType: OwnerType.article,
    }
  })

  describe("followedGene", () => {
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
      const event = followedGene(extendedArgs)

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
      const event = unfollowedGene(extendedArgs)

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
})
