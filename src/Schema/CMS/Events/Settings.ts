import { CmsActionType } from "."
import { CmsContextModule } from "../Values/CmsContextModule"

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

export type CmsSettingsFlow =
  | SettingsFlowAddNewLocation