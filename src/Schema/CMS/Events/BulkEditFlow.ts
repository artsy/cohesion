/**
 * Schemas describing CMS BulkEditFlow events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"

/**
 * Partners clicked change availability pill
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Artworks - bulk edit",
 *   label: "change availability",
 *   value: "on hold", // e.g. "on hold", "available", "not for sale"
 * }
 * ```
 */
export interface CmsBulkEditClickedChangeAvailability {
  action: "click"
  context_module: CmsContextModule.bulkEditFlow
  label: "change availability"
  value: string
}

/**
 * Partners clicked bulk edit pill
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Artworks - bulk edit",
 *   label: "bulk edit",
 *   value: "5", // how many artworks selected
 * }
 * ```
 */
export interface CmsBulkEditClickedEditPill {
  action: "click"
  context_module: CmsContextModule.bulkEditFlow
  label: "bulk edit"
  value: string
}

/**
 * Partners clicked shortlist pill
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Artworks - bulk edit",
 *   label: "shortlist",
 *   value: "5", // how many artworks selected
 * }
 * ```
 */
export interface CmsBulkEditClickedShortlistPill {
  action: "click"
  context_module: CmsContextModule.bulkEditFlow
  label: "shortlist"
  value: string // how many artworks selected
}

/**
 * Partners clicked resolve all conflicts link
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Artworks - bulk edit",
 *   label: "resolve all conflicts",
 * }
 * ```
 */
export interface CmsBulkEditClickedResolveAllConflicts {
  action: "click"
  context_module: CmsContextModule.bulkEditFlow
  label: "resolve all conflicts"
}

/**
 * Partners clicked confirm edits button
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Artworks - bulk edit",
 *   label: "confirm edit",
 * }
 * ```
 */
export interface CmsBulkEditClickedConfirmEdits {
  action: "click"
  context_module: CmsContextModule.bulkEditFlow
  label: "confirm edit"
}

/**
 * Partners clicked cancel button in bulk edit drawer
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Artworks - bulk edit",
 *   label: "cancel",
 * }
 * ```
 */
export interface CmsBulkEditClickedCancelEdits {
  action: "click"
  context_module: CmsContextModule.bulkEditFlow
  label: "cancel"
}


export type CmsBulkEditFlow =
  | CmsBulkEditClickedChangeAvailability
  | CmsBulkEditClickedEditPill
  | CmsBulkEditClickedShortlistPill
  | CmsBulkEditClickedResolveAllConflicts
  | CmsBulkEditClickedConfirmEdits
  | CmsBulkEditClickedCancelEdits