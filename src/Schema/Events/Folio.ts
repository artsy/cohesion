import { ScreenOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing Folio related events
 * @packageDocumentation
 */

/**
 * A user sends an artwork/show/album from Folio via email
 *
 * This schema describes events sent to Segment from [[SentContent]]
 *
 *  @example
 *  ```
 *  {
 *    action: "SentContent",
 *    context_screen_owner_type: "artwork",
 *    context_screen_owner_id: "id"
 *    context_screen_owner_slug: "slug"
 *    artwork_id: ["id"]
 *    album_id: "id"
 *  }
 * ```
 */
export interface SentContent {
  action: ActionType.sentContent
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  artwork_id: string[]
  album_id: string
}

/**
 * A user creates an Album in Folio
 *
 * This schema describes events sent to Segment from [[createdAlbum]]
 *
 *  @example
 *  ```
 *  {
 *    action: "createdAlbum",
 *    context_screen_owner_type: "artwork",
 *    context_screen_owner_id: "id"
 *    context_screen_owner_slug: "slug"
 *  }
 * ```
 */
export interface CreatedAlbum {
  action: ActionType.createdAlbum
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
}

/**
 * A user adds content to an Album
 *
 * This schema describes events sent to Segment from [[addedToAlbum]]
 *
 *  @example
 *  ```
 *  {
 *    action: "addedToAlbum",
 *    context_screen_owner_type: "album",
 *    context_screen_owner_id: "id"
 *    context_screen_owner_slug: "slug"
 *    album_name: "My Album"
 *  }
 * ```
 */
export interface AddedToAlbum {
  action: ActionType.addedToAlbum
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  album_name: string
}

/**
 * A user changes a setting in presentation mode
 *
 * This schema describes events sent to Segment from [[toggledPresentationModeSetting]]
 *
 *  @example
 *  ```
 *  {
 *    action: "toggledPresentationModeSetting",
 *    label: "Hide Prices"
 *    enabled: True
 *  }
 * ```
 */
export interface ToggledPresentationModeSetting {
  action: ActionType.toggledPresentationModeSetting
  label: string
  enabled: boolean
}

/**
 * A user completes Folio offline sync
 *
 * This schema describes events sent to Segment from [[completedOfflineSync]]
 *
 *  @example
 *  ```
 *  {
 *    action: "completedOfflineSync"
 *  }
 * ```
 */
export interface CompletedOfflineSync {
  action: ActionType.completedOfflineSync
}
