/**
 * Schemas describing CMS OnboardingFlow events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsActionType } from "."

/**
 * Generic click event when a "start" button is clicked in the onboarding flow.
 *
 * @example
 * {
 *   action: "click",
 *   context_module: "Onboarding",
 *   label: "Gallery Information",
 * }
 */
export type CmsOnboardingClickLabel =
  | "start - gallery information"
  | "start - add primary location"
  | "start - add primary contact"
  | "start - add artists"
  | "start - add show or fairbooth"
  | "download folio"

export interface CmsOnboardingClickedEvent {
  action: "click"
  context_module: CmsContextModule.onboarding
  label: CmsOnboardingClickLabel
}

/**
 * Event fired after user submits gallery information form
 *
 * @example
 * ```
 * {
 *   action: "added gallery information",
 *   context_module: "Onboarding",
 *   user_id: "some-user-id",
 * }
 * ```
 */
export interface OnboardingFlowAddedGalleryInformation {
  action: CmsActionType.addedGalleryInformation
  context_module: CmsContextModule.onboarding
  user_id: string
}

/**
 * Event fired after user submits add gallery information form
 *
 * @example
 * ```
 * {
 *   action: "added gallery information",
 *   context_module: "Onboarding",
 *   user_id: "some-user-id",
 * }
 * ```
 */
export interface OnboardingFlowAddNewLocation {
  action: CmsActionType.addedNewLocation
  context_module: CmsContextModule.onboarding
  user_id: string
}

/**
 * Event fired after user submits add primary location form
 *
 * @example
 * ```
 * {
 *   action: "added new location",
 *   context_module: "Onboarding",
 *   after_address_type: "Business",
 *   user_id: "some-user-id",
 * }
 * ```
 */
export interface OnboardingFlowAddNewLocation {
  action: CmsActionType.addedNewLocation
  context_module: CmsContextModule.onboarding
  after_address_type: string
  user_id: string
}

/**
 * Event fired after user submits add primary contact form
 *
 * @example
 * ```
 * {
 *   action: "added new contact",
 *   context_module: "Onboarding",
 *   user_id: "some-user-id",
 * }
 * ```
 */
export interface OnboardingFlowAddNewContact {
  action: CmsActionType.addedNewContact
  context_module: CmsContextModule.onboarding
  user_id: string
}

export type CmsOnboardingFlow =
  | CmsOnboardingClickedEvent
  | OnboardingFlowAddedGalleryInformation
  | OnboardingFlowAddNewLocation
  | OnboardingFlowAddNewContact
