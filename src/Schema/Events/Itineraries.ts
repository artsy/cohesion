import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing City Guide itinerary events
 * @packageDocumentation
 */

/**
 * When a user adds a stop (a show, fair, or custom stop) to one or more of their own
 * itineraries by pressing Done in the Add to Itinerary sheet
 *
 * This schema describes events sent to Segment from [[addedStopToItinerary]]
 *
 *  @example
 *  ```
 *  {
 *    action: "addedStopToItinerary",
 *    context_owner_id: "5f2c930b1ee0d500043b47dd",
 *    context_owner_slug: "andy-warhol-flowers",
 *    context_owner_type: "show",
 *    owner_ids: ["b0b1c2d3-e4f5-4a6b-8c9d-0e1f2a3b4c5d"]
 *  }
 * ```
 */
export interface AddedStopToItinerary {
  action: ActionType.addedStopToItinerary
  context_owner_id?: string
  context_owner_slug?: string
  context_owner_type: OwnerType
  /** The itinerary (or itineraries, adding a curated guide's full list) the stop landed on. */
  owner_ids: string[]
}
