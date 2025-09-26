/**
 * Schemas describing CMS BulkEditFlow events
 * @packageDocumentation
 */

import { CmsActionType } from "."
import { CmsContextModule } from "../Values/CmsContextModule"

/**
 * Generic click event in the bulk edit flow.
 *
 * @example
 * {
 *   action: "click",
 *   context_module: "Artworks - bulk edit",
 *   label: "shortlist",
 *   value: 3,
 *   artwork_ids: ["artwork1", "artwork2", "artwork3"]
 * }
 */
export type CmsBulkEditClickLabel =
  | "add to show"
  | "bulk edit"
  | "cancel"
  | "change availability"
  | "confirm edit"
  | "failed updates page edit"
  | "publish"
  | "publish learn more"
  | "resolve all conflicts"
  | "shortlist"
  | "unpublish"

export interface CmsBulkEditClickedEvent {
  action: "click"
  context_module: CmsContextModule.bulkEditFlow
  label: CmsBulkEditClickLabel
  value?: string | number
  artwork_ids?: string[]
}

/**
 * A partner has seen the failed updates screen.
 *
 * @example
 * ```
 * {
 *   action: "shownFailedUpdatesPage",
 *   context_module: "Artworks - bulk edit",
 * }
 */
export interface CmsBulkEditFailedUpdatesPageShown {
  action: CmsActionType.shownFailedUpdatesPage
  context_module: CmsContextModule.bulkEditFlow
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
 */
export interface CmsBulkEditResolvedAllConflictsShown {
  action: CmsActionType.shownResolvedAllConflicts
  context_module: CmsContextModule.bulkEditFlow
}

/**
 * Bulk edit flow processing started
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
 *   label: "change availability",
 *   value: "on hold", // e.g. "on hold", "available", "not for sale"
 *   artwork_ids: ["artwork1", "artwork2"]
 * }
 */
export interface CmsBulkEditProcessingCompleted {
  action: CmsActionType.processingCompleted
  context_module: CmsContextModule.bulkEditFlow
  label: string
  value: string
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

/**
 * Search in the bulk edit drawer
 *
 * @example
 * ```
 * {
 *   action: "searchBulkEditField",
 *   context_module: "Artworks - bulk edit",
 *   value: "search input"
 * }
 * ```
 */
export interface CmsBulkEditSearch {
  action: CmsActionType.searchBulkEditField
  context_module: CmsContextModule.bulkEditFlow
  value: string
}

export type CmsBulkEditFlow =
  | CmsBulkEditClickedEvent
  | CmsBulkEditFailedUpdatesPageShown
  | CmsBulkEditMaxEditLimitReachedShown
  | CmsBulkEditConflictsShown
  | CmsBulkEditResolvedAllConflictsShown
  | CmsBulkEditProcessingStarted
  | CmsBulkEditProcessingCompleted
  | CmsBulkEditFailed
  | CmsBulkEditSearch
