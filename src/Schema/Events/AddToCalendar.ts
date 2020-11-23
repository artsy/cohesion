import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing 'Add to Calendar' events
 * @packageDocumentation
 */

/**
 * A user clicks or taps the 'Add to Calendar' button on a timed-event page (auction, fair, etc.).
 *
 * This schema describes events sent to Segment from [[AddToCalendar]]
 *
 *  @example
 *  ```
 *  {
 *    action: "addToCalendar",
 *    context_module: "auctionHome",
 *    context_owner_type: "sale",
 *    context_owner_id: "5f99e0ba4c24bc000d02b8d7",
 *    context_owner_slug: "artsy-x-seoul-auction-contemporary-icons",
 *    subject: "google"
 *  }
 * ```
 */
export interface AddToCalendar {
  action: ActionType.addToCalendar
  context_module: ContextModule
  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
  subject: "google" | "outlook" | "iCal"
}
