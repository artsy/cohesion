import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing 'Prompt for review' events (iOS and Android only)
 * @packageDocumentation
 */

/**
 * A user gets prompted for 'Review our app'
 *
 *  @example
 *  ```
 *  {
 *    action: "promptForReview",
 *    context_module: "artistHeader",
 *    context_owner_type: "artist",
 *    context_owner_id: "5f99e0ba4c24bc000d02b8d7",
 *    context_owner_slug: "andy-warhol",
 *    platform: "ios"
 *  }
 * ```
 */
export interface PromptForReview {
  action: ActionType.promptForReview
  context_module: ContextModule
  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
  platform: "ios" | "android"
}
