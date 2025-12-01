import { ContextModule } from "../Values/ContextModule"
import { PageOwnerType, ScreenOwnerType } from "../Values/OwnerType"
import { PushNotificationType } from "../Values/PushNotificationType"
import { ActionType } from "."

/**
 * Schemas describing Toggle events
 * @packageDocumentation
 */

/**
 * A user toggles push notification settings on/off on iOS
 *
 *  This schema describes events sent to Segment from [[toggledNotification]]
 *
 *  @example
 *  ```
 *  {
 *    action: "toggledNotification",
 *    context_module: "pushNotifications",
 *    context_screen_owner_type: "profile",
 *    context_screen_owner_id: "58de681f275b2464fcdde097",
 *    modified: 1,
 *    original: 0,
 *    push: "newWorks"
 *  }
 * ```
 */
export interface ToggledNotification {
  action: ActionType.toggledNotification
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  modified: number
  original: number
  subject: PushNotificationType
}

/**
 * A user toggles a saved search on/off on an app or web
 *
 *  This schema describes events sent to Segment from [[toggledNotification]]
 *
 *  @example
 *  ```
 *  {
 *    action: "toggledSavedSearch",
 *    context_screen_owner_type: "artist",
 *    context_screen_owner_id: "58de681f275b2464fcdde097",
 *    context_screen_owner_slug: "anthony-hunter",
 *    modified: True,
 *    original: False,
 *    search_criteria_id: "58de681f275b2464fcdde097"
 *  }
 * ```
 */
export interface ToggledSavedSearch {
  action: ActionType.toggledSavedSearch
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  modified?: boolean
  original?: boolean
  search_criteria_id: string
}

/**
 * A user toggles the collapsible order summary during checkout
 *
 *  This schema describes events sent to Segment from [[toggledCollapsibleOrderSummary]]
 *
 *  @example
 *  ```
 *  {
 *    action: "toggledCollapsibleOrderSummary",
 *    flow: "Buy now" | "Make offer" | "Partner offer"
 *    context_page_owner_type: "orders-checkout",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b"
 *    expanded: true | false
 *  }
 * ```
 */
export interface ToggledCollapsibleOrderSummary {
  action: ActionType.toggledCollapsibleOrderSummary
  flow: string
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  expanded: boolean
}

/**
 * A user toggles "read more" or "read less" to expand the artist bio section
 *
 * This schema describes events sent to Segment from [[toggledArtistBio]]
 *
 *  @example
 *  ```
 *  {
 *    action: "toggledArtistBio",
 *    context_module : "artistHeader",
 *    context_page_owner_type: "artist",
 *    context_page_owner_id: "4d8b92b34eb68a1b2c0003f4",
 *    context_page_owner_slug: "andy-warhol"
 *    expand: true | false
 *  }
 * ```
 */
export interface ToggledArtistBio {
  action: ActionType.toggledArtistBio
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  context_page_owner_slug: string
  expand: boolean
}
