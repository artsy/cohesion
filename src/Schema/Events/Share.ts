import { ContextModule } from "../Values/ContextModule"
import { CustomService } from "../Values/CustomService"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing share events
 * @packageDocumentation
 */

/**
 * A user shares a page on Artsy
 *
 * This schema describes events sent to Segment from {@link ActionType.share}
 *
 *  @example
 *  ```
 *  {
 *    action: "share",
 *    context_module: "artworkImage",
 *    context_owner_type: "artwork",
 *    context_owner_id: "55ed8ca57261693d930000b8"
 *    service: "instagram_stories"
 *  }
 * ```
 */
export interface Share {
  action: ActionType.share
  context_module: ContextModule
  context_owner_type: OwnerType
  context_owner_id: string
  context_owner_slug?: string
  service: CustomService | string
}
