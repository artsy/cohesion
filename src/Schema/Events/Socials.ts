import { ContextModule } from "../Values/ContextModule"
import { PageOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing social media events
 * @packageDocumentation
 */

/**
 * The social network a social event describes.
 *
 * Instagram is the only network we surface today. Adding another one means adding a
 * member here rather than a new event.
 */
export type SocialService = "instagram"

/**
 * A user clicks a post in the "Social" rail
 *
 * This schema describes events sent to Segment from [[clickedSocialPost]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedSocialPost",
 *    context_module: "socialRail",
 *    context_page_owner_type: "artist",
 *    context_page_owner_id: "4d8b926a4eb68a1b2c0000ae",
 *    context_page_owner_slug: "damien-hirst",
 *    destination_path: "https://www.instagram.com/p/C8xK1qLtY0z",
 *    horizontal_slide_position: 2,
 *    service: "instagram"
 *  }
 * ```
 */
export interface ClickedSocialPost {
  action: ActionType.clickedSocialPost
  context_module: ContextModule.socialRail
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  /** The post the tile links out to. Absent when the post has no permalink */
  destination_path?: string
  /** One-based position of the post in the rail */
  horizontal_slide_position?: number
  service: SocialService
}
