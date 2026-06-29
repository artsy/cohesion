/**
 * Schemas describing Art OS toggle events
 * @packageDocumentation
 */

import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "./index"

/**
 * A partner toggles account-wide Auto-sync on or off via the InventoryTableActions bar.
 * Flips `distributionSyncEnabled` for the whole partner account.
 *
 * @example
 * ```
 * {
 *   action: "toggledDistributionSync",
 *   context_module: "tableActions",
 *   context_page_owner_type: "inventory",
 *   value: "on"
 * }
 * ```
 */
export interface ToggledDistributionSync {
  action: OsActionType.toggledDistributionSync
  context_module: OsContextModule.tableActions
  context_page_owner_type: OsOwnerType.inventory
  value: "on" | "off"
}

export type OsToggleEvent = ToggledDistributionSync
