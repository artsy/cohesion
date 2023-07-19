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
 * A user sees a an artwork in a rail
 *
 * This schema describes events sent to Segment from [[ItemViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "item_viewed",
 *    context_screen: "home",
 *    context_module: "newWorksforYouRail"
 *    item_id: "artwork-id"
 *    item_type: "artwork"
 *    position: 2, // optional
 *  }
 * ```
 *
 */
export interface ItemViewed {
  action: ActionType.itemViewed
  context_screen: OwnerType
  context_module: ContextModule
  item_id: string
  item_type: "artwork"
  position?: number
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

/**
 * A user sees a an error message
 *
 * This schema describes events sent to Segment from [[ErrorMessageViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "errorMessageViewed",
 *    context_owner_type: "orders",
 *    context_owner_id: "order-id",
 *    title: "This is an error",
 *    message: "Error message",
 *    error_code: "charge_authorization_failed",
 *    flow: "user submitting payment"
 *  }
 * ```
 *
 */
export interface ErrorMessageViewed {
  action: ActionType.errorMessageViewed
  context_owner_id: string
  context_owner_type: OwnerType
  title: string
  message: string
  error_code?: string
  flow: string
}

/**
 * User sees address validation modals.
 *
 * This schema describes events sent to Segment from [[ValidationAddressViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "validationAddressViewed",
 *    context_module: "OrdersShipping",
 *    context_page_owner_type: "orders-shipping",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *    user_id: "61bcda16515b038ce5000104"
 *    flow: "user adding shipping address"
 *  }
 * ```
 *
 */
 export interface ValidationAddressViewed {
  action: ActionType.validationAddressViewed
  context_module: string
  context_page_owner_type: string
  context_page_owner_id: string
  user_id: string
  flow: string
}
