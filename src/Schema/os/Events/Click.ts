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

/**
 * The divergence marker appears in a syncable cell when the OS value
 * diverges from the downstream destination value (e.g. Artsy CMS). Fires as an
 * impression when the marker first renders for a given artwork/field combination.
 *
 * @example
 * ```
 * {
 *   action: "viewedDivergenceMarker",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   field: "availability"
 * }
 * ```
 */
export interface ViewedDivergenceMarker {
  action: OsActionType.viewedDivergenceMarker
  context_module: OsContextModule.artworkTable
  context_page_owner_type: OsOwnerType
  artwork_id: string
  field: "availability" | "medium" | "price"
}

/**
 * A partner clicks the divergence marker to inspect the downstream destination value (e.g. Artsy CMS).
 *
 * @example
 * ```
 * {
 *   action: "clickedDivergenceMarker",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   field: "availability"
 * }
 * ```
 */
export interface ClickedDivergenceMarker {
  action: OsActionType.clickedDivergenceMarker
  context_module: OsContextModule.artworkTable
  context_page_owner_type: OsOwnerType
  artwork_id: string
  field: "availability" | "medium" | "price"
}

/**
 * A partner opens a list, either from the Lists surface (a `ListCard`) or from
 * the recent-lists shortcut on the Inventory surface. `source` distinguishes the
 * two entry points (`listsPage` | `inventory`) so they can be compared.
 *
 * @example
 * ```
 * {
 *   action: "clickedOpenList",
 *   context_module: "listCard",
 *   context_page_owner_type: "collection",
 *   list_id: "5d2b5b5d5e5b5d000e1b5b5d",
 *   list_type: "SHOW",
 *   source: "listsPage"
 * }
 * ```
 */
export interface ClickedOpenList {
  action: OsActionType.clickedOpenList
  context_module: OsContextModule.listCard
  context_page_owner_type: OsOwnerType
  list_id: string
  list_type: string
  source: string
}

export type OsClickEvent =
  | ClickedActionsDropdown
  | ClickedCancelBulkEdit
  | ClickedDivergenceMarker
  | ViewedDivergenceMarker
  | ClickedOpenList
