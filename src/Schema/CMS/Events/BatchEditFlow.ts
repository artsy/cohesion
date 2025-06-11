/**
 * Schemas describing CMS BatchEditFlow events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"

/**
 * Generic interface for Batch Edit "click" events
 */
export interface CmsBatchEditClickEvent {
  action: "click"
  context_module: CmsContextModule.batchEditFlow
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

export type CmsBatchEditFlow =
  | CmsBatchEditClickEvent
