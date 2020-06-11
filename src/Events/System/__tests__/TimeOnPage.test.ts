import { OwnerType } from "../../../Schema"
import { timeOnPage } from "../timeOnPage"

describe("timeOnPage", () => {
  it("Works with minimal args", () => {
    const args = timeOnPage({
      contextPageOwnerType: OwnerType.home,
    })

    expect(args).toEqual({
      action: "timeOnPage",
      category: "15 seconds",
      context_page_owner_type: "home",
    })
  })

  it("Works with all args", () => {
    const args = timeOnPage({
      contextPageOwnerId: "4d8b92b34eb68a1b2c0003f4",
      contextPageOwnerSlug: "any-warhol",
      contextPageOwnerType: OwnerType.artist,
    })

    expect(args).toEqual({
      action: "timeOnPage",
      category: "15 seconds",
      context_page_owner_id: "4d8b92b34eb68a1b2c0003f4",
      context_page_owner_slug: "any-warhol",
      context_page_owner_type: "artist",
    })
  })
})
