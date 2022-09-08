import { ScreenOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing 'Reverse Image Search' events
 * @packageDocumentation
 */

/**
 * A user taps the reverse image search button on a fair or show screen
 *
 * This schema describes events sent to Segment from [[tappedReverseImageSearch]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedReverseImageSearch",
 *    context_screen_owner_type: "reverseImageSearch",
 *    owner_type: "fair",
 *    owner_id: "6303add6f2f46c000d17c449",
 *    owner_slug: "spring-slash-break-art-show-2022"
 *  }
 * ```
 */
export interface TappedReverseImageSearch {
  action: ActionType.tappedReverseImageSearch
  context_screen_owner_type: ScreenOwnerType
  owner_type: ScreenOwnerType
  owner_id?: string
  owner_slug?: string
}

/**
 * A user taps the flash button on the reverse image search camera screen
 *
 * This schema describes events sent to Segment from [[tappedToggleCameraFlash]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedToggleCameraFlash",
 *    context_screen_owner_type: "reverseImageSearch"
 *    owner_type: "fair",
 *    owner_id: "6303add6f2f46c000d17c449",
 *    owner_slug: "spring-slash-break-art-show-2022",
 *  }
 * ```
 */
export interface TappedToggleCameraFlash {
  action: ActionType.tappedToggleCameraFlash
  context_screen_owner_type: ScreenOwnerType
  owner_type: ScreenOwnerType
  owner_id?: string
  owner_slug?: string
}

/**
 * A user taps the library button on the reverse image search camera screen
 *
 * This schema describes events sent to Segment from [[tappedPickImageFromLibrary]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedPickImageFromLibrary",
 *    context_screen_owner_type: "reverseImageSearch"
 *    owner_type: "fair",
 *    owner_id: "6303add6f2f46c000d17c449",
 *    owner_slug: "spring-slash-break-art-show-2022",
 *  }
 * ```
 */
export interface TappedPickImageFromLibrary {
  action: ActionType.tappedPickImageFromLibrary
  context_screen_owner_type: ScreenOwnerType
  owner_type: ScreenOwnerType
  owner_id?: string
  owner_slug?: string
}

/**
 * A user searches with a reverse image query with results
 *
 * This schema describes events sent to Segment from [[searchedReverseImageWithResults]]
 *
 *  @example
 *  ```
 *  {
 *    action: "searchedReverseImageWithResults",
 *    context_screen_owner_type: "reverseImageSearch",
 *    owner_type: "fair",
 *    owner_id: "6303add6f2f46c000d17c449",
 *    owner_slug: "spring-slash-break-art-show-2022",
 *    total_matches_count: 3
 *    artwork_ids: "5f7190cc9e4a6f000d02085c,60b755f8052e35000f05820d,611ab14f3bb0e9000fc1a057"
 *  }
 * ```
 */
export interface searchedReverseImageWithResults {
  action: ActionType.searchedReverseImageWithResults
  context_screen_owner_type?: ScreenOwnerType
  owner_type: ScreenOwnerType
  owner_id?: string
  owner_slug?: string
  total_matches_count: number
  artwork_ids: string
}

/**
 * A user searches with a reverse image query with no results
 *
 * This schema describes events sent to Segment from [[searchedReverseImageWithNoResults]]
 *
 *  @example
 *  ```
 *  {
 *    action: "searchedReverseImageWithNoResults",
 *    context_screen_owner_type: "reverseImageSearch",
 *    owner_type: "fair",
 *    owner_id: "6303add6f2f46c000d17c449",
 *    owner_slug: "spring-slash-break-art-show-2022"
 *  }
 * ```
 */
export interface SearchedReverseImageWithNoResults {
  action: ActionType.searchedReverseImageWithNoResults
  context_screen_owner_type: ScreenOwnerType
  owner_type: ScreenOwnerType
  owner_id?: string
  owner_slug?: string
}

/**
 * A user selects an artwork from reverse image search results
 *
 * This schema describes events sent to Segment from [[selectedArtworkFromReverseImageSearch]]
 *
 *  @example
 *  ```
 *  {
 *    action: "selectedArtworkFromReverseImageSearch",
 *    context_screen_owner_type: "reverseImageSearch",
 *    destination_owner_type: "artwork",
 *    destination_owner_id: "5f7190cc9e4a6f000d02085c",
 *    destination_owner_slug: "kaarina-kaikkonen-i-no-longer-hear-you-singing",
 *    owner_type: "fair",
 *    owner_id: "6303add6f2f46c000d17c449",
 *    owner_slug: "spring-slash-break-art-show-2022"
 *    total_matches_count: 3,
 *    position: 1
 *  }
 * ```
 */
export interface SelectedArtworkFromReverseImageSearch {
  action: ActionType.selectedArtworkFromReverseImageSearch
  context_screen_owner_type: ScreenOwnerType
  destination_owner_type?: ScreenOwnerType
  destination_owner_id?: string
  destination_owner_slug?: string
  owner_type: ScreenOwnerType
  owner_id: string
  owner_slug: string
  total_matches_count: number
  position: number
}
