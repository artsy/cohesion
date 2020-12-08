import { ScreenOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing system events
 * @packageDocumentation
 */

/**
 * A user views a screen on iOS
 *
 * This schema describes events sent to Segment from [[screen]]
 *
 *  @example
 *  ```
 *  {
 *    action: "screen",
 *    context_screen_owner_type: "artist",
 *    context_screen_owner_id: "527ac4a0cd530e258d0000d0",
 *    context_screen_owner_slug: "ramiro-gomez"
 *  }
 * ```
 */
export interface Screen {
  action: ActionType.screen
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
}
