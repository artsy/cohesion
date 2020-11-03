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
  context_page_owner_type?: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
}

/**
 * A user loads a sale screen on the iOS app.
 *
 * This schema describes events sent to Segment from [[saleScreenLoadComplete]]
 *
 *  @example
 *  ```
 *  {
 *    action: "saleScreenLoadComplete",
 *    context_page_owner_type: "auction",
 *    context_page_owner_id: "5f841d4044f91e000fd0acc4",
 *    context_page_owner_slug: "finarte-modern-and-contemporary-art-8",
 *    jump_to_lai_interface: true,
 *    load_time_ms: 2000,
 *    number_of_lots: 276
 *  }
 * ```
 */
export interface SaleScreenLoadComplete {
  action: ActionType.saleScreenLoadComplete
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  jump_to_lai_interface: boolean
  load_time_ms: number
  number_of_lots: number
}
