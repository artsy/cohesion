import { ActionType, AddToCalendar } from "../Schema"

/**
 * A user clicks or taps the 'Add to Calendar' button on a timed-event page (auction, fair, etc.).
 *
 *  @example
 *  ```
 *  addToCalendar({
 *    context_module: "auctionHome",
 *    context_owner_type: "sale",
 *    context_owner_id: "5f99e0ba4c24bc000d02b8d7",
 *    context_owner_slug: "artsy-x-seoul-auction-contemporary-icons",
 *    subject: "google"
 *  })
 * ```
 */
export const addToCalendar = ({
  context_module,
  context_owner_id,
  context_owner_slug,
  context_owner_type,
  subject,
}: Omit<AddToCalendar, "action">): AddToCalendar => {
  return {
    action: ActionType.addToCalendar,
    context_module,
    context_owner_id,
    context_owner_slug,
    context_owner_type,
    subject,
  }
}
