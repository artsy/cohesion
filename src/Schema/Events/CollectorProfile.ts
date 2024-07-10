import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."
import { Platform } from "./MyCollection"

/**
 * Schema describing 'Edited Collector Profile' events
 * @packageDocumentation
 */

/**
 * A user taps or clicks on "Save" when editing their collector profile info.
 *
 * This schema describes events sent to Segment from [[editedUserProfile]]
 *
 *  @example
 *  ```
 *  {
 *    action: "editedUserProfile",
 *    context_screen: "collectorProfile",
 *    context_screen_owner_type: "editProfile",
 *    platform: "mobile"
 *  }
 * ```
 */
export interface EditedUserProfile {
  action: ActionType.editedUserProfile
  context_screen: ContextModule
  context_screen_owner_type: OwnerType
  platform: Platform
}
