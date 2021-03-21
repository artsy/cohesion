import { ContextModule } from "../Values/ContextModule"
import { ScreenOwnerType } from "../Values/OwnerType"
import { PushNotificationType } from "../Values/PushNotificationType"
import { ActionType } from "."

/**
 * Schemas describing Toggle events
 * @packageDocumentation
 */

/**
 * A user toggles push notification settings on/off on App
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
