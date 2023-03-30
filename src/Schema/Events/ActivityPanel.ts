/**
 * Schema describing Activity Panel related events
 * @packageDocumentation
 */

import { ActionType } from "."

/**
 * A user clicked on a notifications bell.
 *
 * This schema describes events sent to Segment from {@link ActionType.clickedNotificationsBell}
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedNotificationsBell"
 *  }
 * ```
 */
export interface ClickedNotificationsBell {
  action: ActionType.clickedNotificationsBell
}

/**
 * A user clicked on a notification in Activity Panel.
 *
 * This schema describes events sent to Segment from {@link ActionType.clickedActivityPanelNotificationItem}
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedActivityPanelNotificationItem",
 *    notification_type: "ARTWORK_ALERT"
 *  }
 * ```
 */
export interface ClickedActivityPanelNotificationItem {
  action: ActionType.clickedActivityPanelNotificationItem
  notification_type: string
}

/**
 * A user clicked on a tab in Activity Panel.
 *
 * This schema describes events sent to Segment from {@link ActionType.clickedActivityPanelTab}
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedActivityPanelTab",
 *    tab_name: "Alerts"
 *  }
 * ```
 */
export interface ClickedActivityPanelTab {
  action: ActionType.clickedActivityPanelTab
  tab_name: string
}
