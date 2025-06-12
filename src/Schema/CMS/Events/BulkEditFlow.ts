/**
 * Schemas describing CMS BulkEditFlow events
 * @packageDocumentation
 */

import { CmsActionType } from "."
import { CmsContextModule } from "../Values/CmsContextModule"

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
 *   value: 25
 * }
 */
export interface CmsBulkEditProcessingStarted {
  action: CmsActionType.processingStarted
  context_module: CmsContextModule.bulkEditFlow
  value: number // total number of artworks being processed
}

/**
 * Bulk Edit flow processing completed
 *
 * Example:
 * {
 *   action: "processingCompleted",
 *   context_module: "Artworks - bulk edit",
 *   value: 24
 * }
 */
export interface CmsBulkEditProcessingCompleted {
  action: CmsActionType.processingCompleted
  context_module: CmsContextModule.bulkEditFlow
  value: number // total number of artworks successfully processed
}

/**
 * Bulk edit failed
 *
 * Example:
 * {
 *   action: "bulkEditFailed",
 *   context_module: "Artworks - bulk edit",
 *   value: "Network error" // or any error message displayed to user
 * }
 */
export interface CmsBulkEditFailed {
  action: CmsActionType.bulkEditFailed
  context_module: CmsContextModule.bulkEditFlow
  value: string
}

export type CmsBulkEditFlow =
  | CmsBulkEditConflictsShown
  | CmsBulkEditFailed
  | CmsBulkEditMaxEditLimitReachedShown
  | CmsBulkEditProcessingCompleted
  | CmsBulkEditProcessingStarted
  | CmsBulkEditResolvedAllConflictsShown
