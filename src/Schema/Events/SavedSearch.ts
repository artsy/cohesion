import { ScreenOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing 'Saved Search edit' events
 * @packageDocumentation
 */

/**
 * A user edits a Saved Search from the edit alert screen on an app.
 *
 * This schema describes events sent to Segment from [[editedSavedSearch]]
 *
 *  @example
 *  ```
 *  {
 *    action: "editedSavedSearch",
 *    context_screen_owner_type: "savedSearch",
 *    context_screen_owner_id: "58de681f275b2464fcdde097",
 *    current: '{"name": "My Saved Search"}',
 *    modified: '{"name": "My New Saved Search"}'
 *  }
 * ```
 */
export interface EditedSavedSearch {
  action: ActionType.editedSavedSearch
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  current: string
  changed: string
}

/**
 * A user edits an Alert from the edit alert screen on an app.
 *
 * This schema describes events sent to Segment from [[editedAlert]]
 *
 *  @example
 *  ```
 *  {
 *    action: "editedAlert",
 *    context_screen_owner_type: "editAlert",
 *    saved_search_id: "58de681f275b2464fcdde097",
 *  }
 * ```
 */
export interface EditedAlert {
  action: ActionType.editedAlert
  context_screen_owner_type: ScreenOwnerType
  saved_search_id?: string
}

/**
 * A user deletes a Saved Search from the edit alert screen on an app.
 *
 * This schema describes events sent to Segment from [[deletedSavedSearch]]
 *
 *  @example
 *  ```
 *  {
 *    action: "deletedSavedSearch",
 *    context_screen_owner_type: "savedSearch",
 *    context_screen_owner_id: "58de681f275b2464fcdde097",
 *    saved_search_id: "search_id"
 *  }
 * ```
 */
export interface DeletedSavedSearch {
  action: ActionType.deletedSavedSearch
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  saved_search_id?: string
}

/**
 * User taps on a suggested saved search pill
 *
 * This schema describes events sent to Segment from [[selectedSuggestedFilter]]
 *
 *  @example
 *  ```
 *  {
 *    action: "selectedSuggestedFilter",
 *    context_module: "createAlert",
 *    subject: "additionalGeneIDs",
 *  }
 * ```
 */
export interface SelectedSuggestedFilter {
  action: ActionType.selectedSuggestedFilter
  context_module: "createAlert" | "editAlert"
  subject?: string
}
