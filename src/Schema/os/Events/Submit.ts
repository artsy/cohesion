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

export type OsSubmitEvent =
  | BulkEditedArtworks
  | CompletedArtworkDistribution
  | DeletedArtwork
  | DistributedArtworks
