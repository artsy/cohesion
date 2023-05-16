import { ActionType } from "."

/**
 * Schemas describing cookie consent events
 * @packageDocumentation
 */

/**
 * A user has saved their cookie consent preferences.
 *
 * This schema describes events sent to Segment from [[savedCookieConsentPreferences]]
 *
 *  @example
 *  ```
 *  {
 *    action: "savedCookieConsentPreferences",
 *    value: {
 *      necessary: true,
 *      functional: true,
 *      performance: true,
 *      targeting: false
 *    }
 *  }
 * ```
 */
export interface SavedCookieConsentPreferences {
  action: ActionType.savedCookieConsentPreferences
  value: Record<string, boolean | null | undefined>
}
