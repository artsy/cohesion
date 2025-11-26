import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsActionType } from "."

/**
 * Event fired after user new partner location
 *
 * @example
 * ```
 * {
 *   action: "added new location",
 *   context_module: "Settings",
 *   after_address_type: "Business",
 *   user_id: "some-user-id",
 * }
 * ```
 */
export interface SettingsFlowAddNewLocation {
  action: CmsActionType.addedNewLocation
  context_module: CmsContextModule.settings
  after_address_type: string
  user_id: string
}

/**
 * Event fired after user edits a partner location
 *
 * @example
 * ```
 * {
 *   action: "edited location",
 *   context_module: "Settings",
 *   before_address_type: "Business",
 *   after_address_type: "Business",
 *   partner_location_id: "some-partner-location-id",
 *   user_id: "some-user-id",
 * }
 * ```
 */
export interface SettingsFlowEditLocation {
  action: CmsActionType.editedLocation
  context_module: CmsContextModule.settings
  before_address_type: string
  after_address_type: string
  partner_location_id: string
  user_id: string
}

/**
 * Event fired after user deletes an artwork template
 *
 * @example
 * ```
 * {
 *   action: "deletedArtworkTemplate",
 *   context_module: "Settings",
 *   template_id: "template-id",
 *   user_id: "some-user-id",
 * }
 * ```
 */
export interface SettingsFlowDeleteArtworkTemplate {
  action: CmsActionType.deletedArtworkTemplate
  context_module: CmsContextModule.settings
  template_id: string
  user_id: string
}

export type CmsSettingsFlow =
  | SettingsFlowAddNewLocation
  | SettingsFlowEditLocation
  | SettingsFlowDeleteArtworkTemplate
