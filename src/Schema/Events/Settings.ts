import { ActionType } from "."

/**
 * When the dark mode option is updated
 *
 * This schema describes events sent to Segment when a user updates the dark mode option in their account settings.
 *
 *  @example
 *  ```
 *  {
 *    action: "darkModeOptionUpdated",
 *    context_module: "accountSettings",
 *    context_screen_owner_type: "accountDarkMode",
 *    dark_mode_option: "system"
 *  }
 * ```
 */
export interface DarkModeOptionUpdated {
  action: ActionType.darkModeOptionUpdated
  context_module: string
  context_screen_owner_type: string
  dark_mode_option: string
}