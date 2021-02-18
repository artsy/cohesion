import { PageOwnerType, ScreenOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

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
 * A user loads a sale screen on the App app.
 *
 * This schema describes events sent to Segment from [[saleScreenLoadComplete]]
 *
 *  @example
 *  ```
 *  {
 *    action: "saleScreenLoadComplete",
 *    context_screen_owner_type: "auction",
 *    context_screen_owner_id: "5f841d4044f91e000fd0acc4",
 *    context_screen_owner_slug: "finarte-modern-and-contemporary-art-8",
 *    jump_to_lai_interface: true,
 *    load_time_ms: 2000,
 *    number_of_lots: 276
 *  }
 * ```
 */
export interface SaleScreenLoadComplete {
  action: ActionType.saleScreenLoadComplete
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  jump_to_lai_interface: boolean
  load_time_ms: number
  number_of_lots: number
}

/**
 * A user views a screen on App
 *
 * This schema describes events sent to Segment from [[screen]]
 *
 *  @example
 *  ```
 *  {
 *    action: "screen",
 *    context_screen_owner_type: "artist",
 *    context_screen_owner_id: "527ac4a0cd530e258d0000d0",
 *    context_screen_owner_slug: "ramiro-gomez",
 *    context_screen_referrer_type: "artwork"
 *  }
 * ```
 */
export interface Screen {
  action: ActionType.screen
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  context_screen_referrer_type?: ScreenOwnerType
}
