/**
 * Schemas describing CMS CompletenessScore events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsActionType } from "."

/**
 * Generic click event in the completeness score flow.
 *
 * @example
 * {
 *   action: "click",
 *   context_module: "Artworks - completeness score",
 *   label: "completeness checklist link",
 *   artwork_ids: ["artwork1", "artwork2", "artwork3"]
 * }
 */
export type CmsCompletenessScoreClickLabel =
  | "completeness checklist link"
  | "edit artwork"

export interface CmsCompletenessScoreClickedEvent {
  action: "click"
  context_module: CmsContextModule.completenessScore
  label: CmsCompletenessScoreClickLabel
  value?: string | number
  artwork_ids?: string[]
}

/**
 * Completeness score modal has been shown to a partner.
 *
 * @example
 * ```
 * {
 *   action: "shownCompletenessScoreModal",
 *   context_module: "Artworks - completeness score",
 *   artwork_id: "artwork123",
 *   completeness_score: 75,
 *   completeness_tier: "good",
 *   checklist: [
 *     { completed: true, key: "title" },
 *     { completed: false, key: "description" }
 *   ]
 * }
 * ```
 */
export interface CmsCompletenessScoreModalShown {
  action: CmsActionType.shownCompletenessScoreModal
  context_module: CmsContextModule.completenessScore
  artwork_id: string
  completeness_score: number
  completeness_tier: string
  checklist: Array<{ completed: boolean; key: string }>
}

export type CmsCompletenessScoreFlow =
  | CmsCompletenessScoreClickedEvent
  | CmsCompletenessScoreModalShown
