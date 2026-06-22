/**
 * Schemas describing Art OS Multi-Add Artworks events
 * @packageDocumentation
 */

import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "./index"

/**
 * A partner clicks "Add From File" to enter the Multi-Add flow and open the drop zone.
 *
 * @example
 * ```
 * {
 *   action: "clickedAddFromFile",
 *   context_module: "multiAdd",
 *   context_page_owner_type: "inventory"
 * }
 * ```
 */
export interface ClickedAddFromFile {
  action: OsActionType.clickedAddFromFile
  context_module: OsContextModule.multiAdd
  context_page_owner_type: OsOwnerType.inventory
}

/**
 * A partner exits the drop zone without dropping a file (nothing is saved).
 *
 * @example
 * ```
 * {
 *   action: "clickedExitDropZone",
 *   context_module: "multiAdd",
 *   context_page_owner_type: "inventory"
 * }
 * ```
 */
export interface ClickedExitDropZone {
  action: OsActionType.clickedExitDropZone
  context_module: OsContextModule.multiAdd
  context_page_owner_type: OsOwnerType.inventory
}

/**
 * A file is accepted by the drop zone and an import session starts (upload to S3,
 * then createArtworkImport with parseWithAI). One event per started session.
 *
 * @example
 * ```
 * {
 *   action: "startedArtworkImport",
 *   context_module: "multiAdd",
 *   context_page_owner_type: "inventory",
 *   file_type: "application/pdf"
 * }
 * ```
 */
export interface StartedArtworkImport {
  action: OsActionType.startedArtworkImport
  context_module: OsContextModule.multiAdd
  context_page_owner_type: OsOwnerType.inventory
  file_type: string
}

/**
 * A partner confirms the review and creates artworks from the import (skipped rows excluded).
 *
 * @example
 * ```
 * {
 *   action: "createdImportedArtworks",
 *   context_module: "multiAddReview",
 *   context_page_owner_type: "inventory",
 *   artwork_import_id: "67b646ecbe87376bfeb3f962",
 *   row_count: 14,
 *   selected_count: 12
 * }
 * ```
 */
export interface CreatedImportedArtworks {
  action: OsActionType.createdImportedArtworks
  context_module: OsContextModule.multiAddReview
  context_page_owner_type: OsOwnerType.inventory
  artwork_import_id: string
  row_count: number
  selected_count: number
}

/**
 * A partner cancels the review session, discarding the import.
 *
 * @example
 * ```
 * {
 *   action: "cancelledArtworkImport",
 *   context_module: "multiAddReview",
 *   context_page_owner_type: "inventory",
 *   artwork_import_id: "67b646ecbe87376bfeb3f962"
 * }
 * ```
 */
export interface CancelledArtworkImport {
  action: OsActionType.cancelledArtworkImport
  context_module: OsContextModule.multiAddReview
  context_page_owner_type: OsOwnerType.inventory
  artwork_import_id: string
}

/**
 * A partner is dropped back into a prior import session that is awaiting review.
 *
 * @example
 * ```
 * {
 *   action: "resumedArtworkImport",
 *   context_module: "multiAdd",
 *   context_page_owner_type: "inventory",
 *   artwork_import_id: "67b646ecbe87376bfeb3f962"
 * }
 * ```
 */
export interface ResumedArtworkImport {
  action: OsActionType.resumedArtworkImport
  context_module: OsContextModule.multiAdd
  context_page_owner_type: OsOwnerType.inventory
  artwork_import_id: string
}

/**
 * Artwork creation for the import finishes successfully.
 *
 * @example
 * ```
 * {
 *   action: "completedArtworkImport",
 *   context_module: "multiAdd",
 *   context_page_owner_type: "inventory",
 *   artwork_import_id: "67b646ecbe87376bfeb3f962"
 * }
 * ```
 */
export interface CompletedArtworkImport {
  action: OsActionType.completedArtworkImport
  context_module: OsContextModule.multiAdd
  context_page_owner_type: OsOwnerType.inventory
  artwork_import_id: string
}

/**
 * A partner corrects a cell in the review table (a flagged cell or an unmatched artist).
 * Carries the import row rather than a saved artwork.
 *
 * @example
 * ```
 * {
 *   action: "editedArtworkField",
 *   context_module: "multiAddReview",
 *   context_page_owner_type: "inventory",
 *   artwork_import_id: "67b646ecbe87376bfeb3f962",
 *   import_row_id: "a1b2c3d4",
 *   field: "title",
 *   old_value: "Untitld",
 *   new_value: "Untitled"
 * }
 * ```
 */
export interface EditedArtworkField {
  action: OsActionType.editedArtworkField
  context_module: OsContextModule.multiAddReview
  context_page_owner_type: OsOwnerType.inventory
  artwork_import_id: string
  import_row_id: string
  field: string
  old_value: string
  new_value: string
}

export type OsMultiAddFlow =
  | ClickedAddFromFile
  | ClickedExitDropZone
  | StartedArtworkImport
  | CreatedImportedArtworks
  | CancelledArtworkImport
  | ResumedArtworkImport
  | CompletedArtworkImport
  | EditedArtworkField
