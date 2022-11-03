import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing Video events
 * @packageDocumentation
 */

/**
 * A user views a video.
 *
 * This schema describes events sent to Segment from [[viewedVideo]]
 *
 *  @example
 *  ```
 *  {
 *    action: "viewedVideo",
 *    context_screen_owner_id: "5df3e3fa485efe0012c37055"
 *    context_screen_owner_slug: "anoushka-mirchandani-bloom-1"
 *    context_screen_owner_type: "artwork"
 *  }
 * ```
 */
export interface ViewedVideo {
  action: ActionType.viewedVideo
  context_screen_owner_id: string
  context_screen_owner_slug: string
  context_screen_owner_type: OwnerType
}
