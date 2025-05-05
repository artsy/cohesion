import { ActionType } from "."

/**
 * When a user creates an artwork list
 *
 * This schema describes events sent to Segment from [[createdArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "darkModeOptionUpdated",
 *    context_module: "accountSettings",
 *    context_screen_owner_type: "accountDarkMode",
 *    dark_mode_option: system"
 *  }
 * ```
 */
export interface DarkModeOptionUpdated {
  action: ActionType.darkModeOptionUpdated
  context_module: string
  context_screen_owner_type: string
  dark_mode_option: string
}