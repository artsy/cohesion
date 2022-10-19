/**
 * Schema describing Activity Panel related events
 * @packageDocumentation
 */

import { ActionType } from "."

/**
 * A user clicked on a notifications bell.
 *
 * This schema describes events sent to Segment from [[clickedNotificationsBell]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedNotificationsBell",
 *    user_id: "5bd8b675776bd6002c86526c"
 *  }
 * ```
 */
export interface ClickedNotificationsBell {
  action: ActionType.clickedNotificationsBell
  user_id: string
}

/**
 * A user clicked on a notification in Activity Panel.
 *
 * This schema describes events sent to Segment from [[clickedActivityPanelNotificationItem]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedActivityPanelNotificationItem",
 *    user_id: "5bd8b675776bd6002c86526c",
 *    notification_type: "ARTWORK_ALERT"
 *  }
 * ```
 */
export interface ClickedActivityPanelNotificationItem {
  action: ActionType.clickedActivityPanelNotificationItem
  user_id: string
  notification_type: string
}

/**
 * A user clicked on a tab in Activity Panel.
 *
 * This schema describes events sent to Segment from [[clickedActivityPanelTab]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedActivityPanelTab",
 *    user_id: "5bd8b675776bd6002c86526c",
 *    tab_name: "Alerts"
 *  }
 * ```
 */
export interface ClickedActivityPanelTab {
  action: ActionType.clickedActivityPanelTab
  user_id: string
  tab_name: string
}
