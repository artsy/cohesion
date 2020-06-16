import { ActionType } from "."
import { PageOwnerType } from "../Values/OwnerType"

/**
 * Schemas describing system events
 * @packageDocumentation
 */

/**
 * A user has been on a page for 15 seconds.
 *
 * This schema describes events sent to Segment from [[timeOnPage]]
 *
 *  @example
 *  ```
 *  {
 *    action: "timeOnPage",
 *    category: "15 seconds",
 *    context_page_owner_type: "home"
 *  }
 * ```
 */
export interface TimeOnPage {
  action: ActionType.timeOnPage
  category: "15 seconds"
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
}
