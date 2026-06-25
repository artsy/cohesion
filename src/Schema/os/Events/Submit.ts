/**
 * Schemas describing Art OS bulk-action submit events (tied to backend changes)
 * @packageDocumentation
 */

import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "./index"

/**
 * A partner applies changes in the bulk-edit drawer. `labels` lists the edited
 * fields and `values` carries each field's submitted value, index-aligned.
 *
 * @example
 * ```
 * {
 *   action: "bulkEditedArtworks",
 *   context_module: "bulkEditDrawer",
 *   context_page_owner_type: "inventory",
 *   labels: ["availability", "price"],
 *   values: ["for sale", "USD 1000"],
 *   artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"],
 *   artwork_count: 30
 * }
 * ```
 */
export interface BulkEditedArtworks {
  action: OsActionType.bulkEditedArtworks
  context_module: OsContextModule.bulkEditDrawer
  context_page_owner_type: OsOwnerType
  labels: string[]
  values: string[]
  artwork_ids: string[]
  artwork_count: number
}

/**
 * A partner confirms deletion of a single artwork in the delete modal.
 * Fires only on a confirmed delete; cancelling is not tracked.
 *
 * @example
 * ```
 * {
 *   action: "deletedArtwork",
 *   context_module: "deleteModal",
 *   context_page_owner_type: "inventory",
 *   value: "confirm",
 *   artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"]
 * }
 * ```
 */
export interface DeletedArtwork {
  action: OsActionType.deletedArtwork
  context_module: OsContextModule.deleteModal
  context_page_owner_type: OsOwnerType
  value: "confirm"
  artwork_ids: string[]
}

/**
 * A partner confirms or cancels distributing artworks to Artsy in the distribute modal.
 *
 * @example
 * ```
 * {
 *   action: "distributedArtworks",
 *   context_module: "distributeModal",
 *   context_page_owner_type: "inventory",
 *   destination: ["artsy"],
 *   value: "confirm",
 *   artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"],
 *   selected_count: 2
 * }
 * ```
 */
export interface DistributedArtworks {
  action: OsActionType.distributedArtworks
  context_module: OsContextModule.distributeModal
  context_page_owner_type: OsOwnerType
  destination: string[]
  value: "confirm" | "cancel"
  artwork_ids: string[]
  selected_count: number
}

/**
 * The websocket-driven distribute job reaches a terminal state (complete or failed).
 * Driven by `useDistributeWebsocket` (`PartnersChannel`, `metadata_update`).
 * Fire on the final websocket message to capture success/skip rates.
 *
 * @example
 * ```
 * {
 *   action: "completedArtworkDistribution",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "inventory",
 *   destination: ["artsy"],
 *   total_artworks: 12,
 *   success_count: 10,
 *   skipped_count: 2,
 *   value: "partial"
 * }
 * ```
 */
export interface CompletedArtworkDistribution {
  action: OsActionType.completedArtworkDistribution
  context_module: OsContextModule.artworkTable
  context_page_owner_type: OsOwnerType.inventory
  /** Destination marketplaces (currently Artsy only; extensible) */
  destination: string[]
  total_artworks: number
  success_count: number
  skipped_count: number
  value: "success" | "partial" | "error"
}

/**
 * A partner creates a new list in the Add-to-list modal and bulk-adds the current
 * selection to it. `start_date` / `end_date` are null when unset; `fair_id` is
 * present only when `list_type` is FAIR.
 *
 * @example
 * ```
 * {
 *   action: "createdList",
 *   context_module: "addToListModal",
 *   context_page_owner_type: "inventory",
 *   list_type: "SHOW",
 *   artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"],
 *   artwork_count: 12,
 *   start_date: "2026-09-01",
 *   end_date: "2026-09-30"
 * }
 * ```
 */
export interface CreatedList {
  action: OsActionType.createdList
  context_module: OsContextModule.addToListModal
  context_page_owner_type: OsOwnerType
  list_type: string
  artwork_ids: string[]
  artwork_count: number
  start_date: string | null
  end_date: string | null
  fair_id?: string
}

/**
 * A partner bulk-adds the current selection to an existing list in the
 * Add-to-list modal.
 *
 * @example
 * ```
 * {
 *   action: "addedArtworksToList",
 *   context_module: "addToListModal",
 *   context_page_owner_type: "inventory",
 *   list_id: "5d2b5b5d5e5b5d000e1b5b5d",
 *   artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5e"],
 *   artwork_count: 12
 * }
 * ```
 */
export interface AddedArtworksToList {
  action: OsActionType.addedArtworksToList
  context_module: OsContextModule.addToListModal
  context_page_owner_type: OsOwnerType
  list_id: string
  artwork_ids: string[]
  artwork_count: number
}

/**
 * A partner commits an inline edit of a list's name, dates, or fair on the
 * List detail view. `field` is one of `name`, `startDate`, `endDate`, or `fair`.
 * Fires only on a committed change.
 *
 * @example
 * ```
 * {
 *   action: "updatedList",
 *   context_module: "listDetail",
 *   context_page_owner_type: "collection",
 *   list_id: "5d2b5b5d5e5b5d000e1b5b5d",
 *   field: "name",
 *   old_value: "Summer Show",
 *   new_value: "Summer Show 2026"
 * }
 * ```
 */
export interface UpdatedList {
  action: OsActionType.updatedList
  context_module: OsContextModule.listDetail
  context_page_owner_type: OsOwnerType
  list_id: string
  field: string
  old_value: string
  new_value: string
}

/**
 * A partner deletes a list. `trigger` distinguishes the List detail action
 * (listPage), the Lists surface card control (listsPage), and the implicit
 * auto-delete when removing the last artwork(s) empties the list (autoEmptied).
 *
 * @example
 * ```
 * {
 *   action: "deletedList",
 *   context_module: "listCard",
 *   context_page_owner_type: "collection",
 *   list_id: "5d2b5b5d5e5b5d000e1b5b5d",
 *   trigger: "listPage"
 * }
 * ```
 */
export interface DeletedList {
  action: OsActionType.deletedList
  context_module: OsContextModule.listCard
  context_page_owner_type: OsOwnerType
  list_id: string
  trigger: string
}

/**
 * A partner removes artworks from a list (bulk or single row) from the
 * List detail view.
 *
 * @example
 * ```
 * {
 *   action: "removedArtworksFromList",
 *   context_module: "listDetail",
 *   context_page_owner_type: "collection",
 *   list_id: "5d2b5b5d5e5b5d000e1b5b5d",
 *   artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5e"],
 *   artwork_count: 5
 * }
 * ```
 */
export interface RemovedArtworksFromList {
  action: OsActionType.removedArtworksFromList
  context_module: OsContextModule.listDetail
  context_page_owner_type: OsOwnerType
  list_id: string
  artwork_ids: string[]
  artwork_count: number
}

/**
 * A partner moves artworks from one list to another from the List detail view.
 *
 * @example
 * ```
 * {
 *   action: "movedArtworksBetweenLists",
 *   context_module: "listDetail",
 *   context_page_owner_type: "collection",
 *   source_list_id: "5d2b5b5d5e5b5d000e1b5b5d",
 *   destination_list_id: "5d2b5b5d5e5b5d000e1b5b5e",
 *   artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5f"],
 *   artwork_count: 5
 * }
 * ```
 */
export interface MovedArtworksBetweenLists {
  action: OsActionType.movedArtworksBetweenLists
  context_module: OsContextModule.listDetail
  context_page_owner_type: OsOwnerType
  source_list_id: string
  destination_list_id: string
  artwork_ids: string[]
  artwork_count: number
}

/**
 * A partner distributes a list to Artsy as a draft Show (or Fair booth). One-time
 * push; `partner_show_id` comes from the success response. `fair_id` is present
 * only when `list_type` is FAIR.
 *
 * @example
 * ```
 * {
 *   action: "distributedList",
 *   context_module: "listDetail",
 *   context_page_owner_type: "collection",
 *   destination: ["artsy"],
 *   list_id: "5d2b5b5d5e5b5d000e1b5b5d",
 *   list_type: "SHOW",
 *   partner_show_id: "5d2b5b5d5e5b5d000e1b5b5e"
 * }
 * ```
 */
export interface DistributedList {
  action: OsActionType.distributedList
  context_module: OsContextModule.listDetail
  context_page_owner_type: OsOwnerType
  destination: string[]
  list_id: string
  list_type: string
  fair_id?: string
  partner_show_id: string
}

export type OsSubmitEvent =
  | BulkEditedArtworks
  | CompletedArtworkDistribution
  | DeletedArtwork
  | DistributedArtworks
  | CreatedList
  | AddedArtworksToList
  | UpdatedList
  | DeletedList
  | RemovedArtworksFromList
  | MovedArtworksBetweenLists
  | DistributedList
