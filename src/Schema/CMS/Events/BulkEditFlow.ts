/**
 * Schemas describing CMS BulkEditFlow events
 * @packageDocumentation
 */

import { CmsActionType } from "."
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
 *   artwork_ids: ["artwork1", "artwork2", "artwork3"]
 * }
 * ```
 */
export interface CmsBulkEditClickedChangeAvailability {
  action: "click"
  context_module: CmsContextModule.bulkEditFlow
  label: "change availability"
  value: string
  artwork_ids: string[]
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
 *   value: 5, // how many artworks selected
 * }
 * ```
 */
export interface CmsBulkEditClickedEditPill {
  action: "click"
  context_module: CmsContextModule.bulkEditFlow
  label: "bulk edit"
  value: number
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
 *   value: 3, // how many artworks selected
 *   artwork_ids: ["artwork1", "artwork2", "artwork3"]
 * }
 * ```
 */
export interface CmsBulkEditClickedShortlistPill {
  action: "click"
  context_module: CmsContextModule.bulkEditFlow
  label: "shortlist"
  value: number
  artwork_ids: string[]
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

/**
 * A partner has seen the max edit limit reached tool tip.
 *
 * @example
 * ```
 * {
 *   action: "shownMaxEditLimitReached",
 *   context_module: "Artworks - bulk edit",
 * }
 * ```
 */
export interface CmsBulkEditMaxEditLimitReachedShown {
  action: CmsActionType.shownMaxEditLimitReached
  context_module: CmsContextModule.bulkEditFlow
}

/**
 * Partner has viewed yellow messaging that lists conflicts in the bulk edit drawer
 *
 * @example
 * ```
 * {
 *   action: "shownConflicts",
 *   context_module: "Artworks - bulk edit",
 *   values: ["Location, Availability"]
 * }
 * ```
 */
export interface CmsBulkEditConflictsShown {
  action: CmsActionType.shownConflicts
  context_module: CmsContextModule.bulkEditFlow
  values: string[]
}

/**
 * Partner has viewed green tooltip that confirms conflicts were resolved in the bulk edit drawer
 *
 * @example
 * ```
 * {
 *   action: "shownResolvedAllConflicts",
 *   context_module: "Artworks - bulk edit",
 * }
 * ```
 */
export interface CmsBulkEditResolvedAllConflictsShown {
  action: CmsActionType.shownResolvedAllConflicts
  context_module: CmsContextModule.bulkEditFlow
}

/**
 * Bluk edit flow processing started
 *
 * Example:
 * {
 *   action: "processingStarted",
 *   context_module: "Artworks - bulk edit",
 *   value: 25 // total number of artworks being processed
 * }
 */
export interface CmsBulkEditProcessingStarted {
  action: CmsActionType.processingStarted
  context_module: CmsContextModule.bulkEditFlow
  value: number 
}

/**
 * Bulk Edit flow processing completed
 *
 * Example:
 * {
 *   action: "processingCompleted",
 *   context_module: "Artworks - bulk edit",
 *   value: 24  // total number of artworks successfully processed
 *   artwork_ids: ["artwork1", "artwork2"]
 * }
 */
export interface CmsBulkEditProcessingCompleted {
  action: CmsActionType.processingCompleted
  context_module: CmsContextModule.bulkEditFlow
  value: number
  artwork_ids: string[]
}

/**
 * Bulk edit failed
 *
 * Example:
 * {
 *   action: "bulkEditFailed",
 *   context_module: "Artworks - bulk edit",
 *   value: [ 'availability: must be "for sale", "sold" or "not for sale" for works available for purchase', "error2" ],
 *   artwork_ids: [ "artwork1", "artwork2" ]
 * }
 */
export interface CmsBulkEditFailed {
  action: CmsActionType.bulkEditFailed
  context_module: CmsContextModule.bulkEditFlow
  value: string[]
  artwork_ids: string[]
}

export type CmsBulkEditFlow =
  | CmsBulkEditClickedCancelEdits
  | CmsBulkEditClickedChangeAvailability
  | CmsBulkEditClickedConfirmEdits
  | CmsBulkEditClickedEditPill
  | CmsBulkEditClickedResolveAllConflicts
  | CmsBulkEditClickedShortlistPill
  | CmsBulkEditConflictsShown
  | CmsBulkEditFailed
  | CmsBulkEditMaxEditLimitReachedShown
  | CmsBulkEditProcessingCompleted
  | CmsBulkEditProcessingStarted
  | CmsBulkEditResolvedAllConflictsShown
