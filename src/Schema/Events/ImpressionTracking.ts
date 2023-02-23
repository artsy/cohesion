import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
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
