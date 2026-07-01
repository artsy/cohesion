/**
 * Schemas describing Art OS Onboarding Flow events
 * @packageDocumentation
 */

import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "./index"

/**
 * A partner clicks the "Show me how" link on a Getting Started checklist step
 * to open the guidance for that step.
 *
 * @example
 * ```
 * {
 *   action: "clickedShowMeHow",
 *   context_module: "onboardingFlow",
 *   context_page_owner_type: "inventory",
 *   step: "create an artwork"
 * }
 * ```
 */
export interface ClickedShowMeHow {
  action: OsActionType.clickedShowMeHow
  context_module: OsContextModule.onboardingFlow
  context_page_owner_type: OsOwnerType.collection | OsOwnerType.inventory
  step: string
}

/**
 * Fires when the partner completes the final remaining step of the Getting Started
 * checklist — the "🎉 You're all set!" moment (10 of 10). If the checklist gains
 * steps later, completion recomputes and this event may re-fire when the new full
 * set is completed.
 *
 * @example
 * ```
 * {
 *   action: "completedOnboarding",
 *   context_module: "onboardingFlow",
 *   context_page_owner_type: "inventory",
 *   total_steps: 10
 * }
 * ```
 */
export interface CompletedGettingStarted {
  action: OsActionType.completedOnboarding
  context_module: OsContextModule.onboardingFlow
  context_page_owner_type: OsOwnerType.collection | OsOwnerType.inventory
  total_steps: number
}

/**
 * Fires each time a Getting Started checklist item is auto-ticked (step completed).
 * Records which step finished and how far the partner has progressed.
 * Onboarding is tracked per-user, not per-gallery.
 *
 * @example
 * ```
 * {
 *   action: "progressedOnboarding",
 *   completed_step_count: 3,
 *   context_module: "onboardingFlow",
 *   context_page_owner_type: "inventory",
 *   step: "create an artwork",
 *   total_steps: 10
 * }
 * ```
 */
export interface ProgressedGettingStarted {
  action: OsActionType.progressedOnboarding
  completed_step_count: number
  context_module: OsContextModule.onboardingFlow
  context_page_owner_type: OsOwnerType.collection | OsOwnerType.inventory
  /** Lower-case label matching UI copy (e.g. "create an artwork"). Typed as `string` because steps are backend-defined and expected to evolve. */
  step: string
  total_steps: number
}

export type OsOnboardingFlow =
  | ClickedShowMeHow
  | CompletedGettingStarted
  | ProgressedGettingStarted
