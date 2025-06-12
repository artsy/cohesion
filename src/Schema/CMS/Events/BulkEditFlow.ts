/**
 * Schemas describing CMS BulkEditFlow events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"

/**
 * Generic interface for Batch Edit "click" events
 */
export interface CmsBatchEditClickEvent {
  action: "click"
  context_module: CmsContextModule.bulkEditFlow
  label: CmsBatchEditClickLabel
}

/**
 * All valid labels for Batch Edit "click" events
 */
export type CmsBatchEditClickLabel =
  | "click edit"
  | "click shortlist"
  | "click confirm edits"
  | "click resolve all conflicts"

export type CmsBulkEditFlow =
  | CmsBatchEditClickEvent