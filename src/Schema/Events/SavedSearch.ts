import { ScreenOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing 'Saved Search edit' events
 * @packageDocumentation
 */

/**
 * A user edits a Saved Search from the edit alert screen on an app.
 *
 * This schema describes events sent to Segment from {@link ActionType.editedSavedSearch}
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
 * A user deletes a Saved Search from the edit alert screen on an app.
 *
 * This schema describes events sent to Segment from {@link ActionType.deletedSavedSearch}
 *
 *  @example
 *  ```
 *  {
 *    action: "deletedSavedSearch",
 *    context_screen_owner_type: "savedSearch",
 *    context_screen_owner_id: "58de681f275b2464fcdde097",
 *  }
 * ```
 */
export interface DeletedSavedSearch {
  action: ActionType.deletedSavedSearch
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
}
