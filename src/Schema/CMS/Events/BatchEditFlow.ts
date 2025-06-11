/**
 * Schemas describing CMS BatchEditFlow events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsOwnerType } from "../Values/CmsOwnerType"

/**
 * A partner has seen the max edit limit reached tool tip.
 *
 * @example
 * ```
 * {
 *   action: "shownMaxEditLimitReachedTooltip",
 *   context_module: "batchEditFlow",
 *   context_page_owner_type: "batchEdit",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   referrer: ""
 * }
 * ```
 */
export interface CmsShownMaxEditLimitReachedTooltip {
  action: "shownMaxEditLimitReachedTooltip"
  context_module: CmsContextModule.batchEditFlow
  context_page_owner_type: CmsOwnerType.batchEdit
  context_page_owner_id: string
  referrer: ""
}

export type CmsBatchEditFlow =
  | CmsShownMaxEditLimitReachedTooltip
