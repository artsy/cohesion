import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing events for specific user experience design types.
 * @packageDocumentation
 */

/**
 * A user expands or collapses an accordion design, like in the consignments flow.
 *
 * This schema describes events sent to Segment from [[toggledAccordion]].
 *
 *  @example
 *  ```
 *  {
 *    action: "toggledAccordion",
 *    context_module: "artworkDetailsCompleted" | "artworkSidebar" | "artistHeader" | "artistAchievements"
 *    context_owner_type: "consignmentFlow" | "artwork" | "artist",
 *    subject: "Artwork Details" | "Shipping and taxes" | "ACTIVE_SECONDARY_MARKET" | ...,
 *    expand: true | false
 *  }
 * ```
 */
export interface ToggledAccordion {
  action: ActionType.toggledAccordion
  context_module: ContextModule
  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
  subject: string
  expand: boolean
}
