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
 * This schema describes events sent to Segment from {@link ActionType.toggledAccordion}.
 *
 *  @example
 *  ```
 *  {
 *    action: "toggledAccordion",
 *    context_module: "artworkDetailsCompleted"
 *    context_owner_type: "consignmentFlow",
 *    subject: "Artwork Details"
 *    expand: TRUE
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
