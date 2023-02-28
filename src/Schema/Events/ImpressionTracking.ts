import { ContextModule } from "../Values/ContextModule"
import { OwnerType, PageOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing rail_viewed events
 * @packageDocumentation
 */

/**
 * A user sees a rail of content
 *
 * This schema describes events sent to Segment from [[RailViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "rail_viewed",
 *    context_screen: "home",
 *    context_module: "Home"
 *    position_y: 2, // optional
 *  }
 * ```
 *
 */
export interface RailViewed {
  action: ActionType.railViewed
  context_module: ContextModule
  context_screen: OwnerType
  position_y?: number
}

/**
 * A user viewed a tooltip. `type` will describe what tooltip it is (follow, edit-follows, etc.)
 *
 * This schema describes events sent to Segment from [[tooltipViewed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tooltipViewed",
 *    context_page_owner_type: "artist",
 *    context_page_owner_id: "4d8b926a4eb68a1b2c0000ae",
 *    context_page_owner_slug: "damien-hirst",
 *    type: "follow"
 *  }
 * ```
 */
export interface TooltipViewed {
  action: ActionType.tooltipViewed
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: PageOwnerType
  type: string
}
