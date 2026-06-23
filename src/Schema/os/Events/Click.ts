/**
 * Schemas describing Art OS bulk-action click events
 * @packageDocumentation
 */

import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "./index"

/**
 * A partner selects an item from the inventory Actions dropdown - also fired from
 * the row action menu, the right-click context menu, and the bulk Edit button.
 * Reusable across surfaces: `value` is the menu item, `label` is the trigger.
 *
 * @example
 * ```
 * {
 *   action: "clickedActionsDropdown",
 *   context_module: "actionsDropdown",
 *   context_page_owner_type: "inventory",
 *   value: "Add to Artsy (as Draft)",
 *   label: "action button",
 *   artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"]
 * }
 * ```
 */
export interface ClickedActionsDropdown {
  action: OsActionType.clickedActionsDropdown
  context_module: OsContextModule.actionsDropdown
  context_page_owner_type: OsOwnerType
  value: string
  label: string
  artwork_ids: string[]
}

/**
 * A partner cancels the bulk-edit drawer without applying changes.
 *
 * @example
 * ```
 * {
 *   action: "clickedCancelBulkEdit",
 *   context_module: "bulkEditDrawer",
 *   context_page_owner_type: "inventory",
 *   artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"]
 * }
 * ```
 */
export interface ClickedCancelBulkEdit {
  action: OsActionType.clickedCancelBulkEdit
  context_module: OsContextModule.bulkEditDrawer
  context_page_owner_type: OsOwnerType
  artwork_ids: string[]
}

export type OsClickEvent = ClickedActionsDropdown | ClickedCancelBulkEdit
