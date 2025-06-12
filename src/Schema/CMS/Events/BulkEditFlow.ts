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

export type CmsBulkEditFlow =
  | CmsBulkEditConflictsShown
  | CmsBulkEditMaxEditLimitReachedShown
  | CmsBulkEditResolvedAllConflictsShown
