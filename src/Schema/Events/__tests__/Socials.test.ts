import { ContextModule } from "../../Values/ContextModule"
import { OwnerType } from "../../Values/OwnerType"
import { ActionType } from "../index"
import { ClickedSocialPost } from "../Socials"

describe("Socials events", () => {
  it("ClickedSocialPost serializes to the expected shape", () => {
    const event: ClickedSocialPost = {
      action: ActionType.clickedSocialPost,
      context_module: ContextModule.socialRail,
      context_page_owner_id: "4d8b926a4eb68a1b2c0000ae",
      context_page_owner_slug: "damien-hirst",
      context_page_owner_type: OwnerType.artist,
      destination_path: "https://www.instagram.com/p/C8xK1qLtY0z",
      horizontal_slide_position: 2,
      service: "instagram",
    }

    expect(event).toEqual({
      action: "clickedSocialPost",
      context_module: "socialRail",
      context_page_owner_id: "4d8b926a4eb68a1b2c0000ae",
      context_page_owner_slug: "damien-hirst",
      context_page_owner_type: "artist",
      destination_path: "https://www.instagram.com/p/C8xK1qLtY0z",
      horizontal_slide_position: 2,
      service: "instagram",
    })
  })

  it("ClickedSocialPost serializes without a permalink", () => {
    const event: ClickedSocialPost = {
      action: ActionType.clickedSocialPost,
      context_module: ContextModule.socialRail,
      context_page_owner_id: "4d8b926a4eb68a1b2c0000ae",
      context_page_owner_slug: "damien-hirst",
      context_page_owner_type: OwnerType.artist,
      horizontal_slide_position: 2,
      service: "instagram",
    }

    expect(event).toEqual({
      action: "clickedSocialPost",
      context_module: "socialRail",
      context_page_owner_id: "4d8b926a4eb68a1b2c0000ae",
      context_page_owner_slug: "damien-hirst",
      context_page_owner_type: "artist",
      horizontal_slide_position: 2,
      service: "instagram",
    })
  })
})
