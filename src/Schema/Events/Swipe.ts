/**
 * Schemas describing Swipe events
 * @packageDocumentation
 */

import { ContextModule } from "../Values/ContextModule"
import { ScreenOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Interface for SwipedInfiniteDiscoveryArtwork action in the app
 *
 * This schema describes events sent to Segment from [[swipedInfiniteDiscoveryArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "swipedInfiniteDiscoveryArtwork",
 *    context_module: "infiniteDiscovery",
 *    context_screen_owner_id: "artwork-id",
 *    context_screen_owner_slug: "artwork-slug",
 *    context_screen_owner_type: "infiniteDiscoveryArtwork"
 *  }
 *  ```
 */
export interface SwipedInfiniteDiscoveryArtwork {
  action: ActionType.swipedInfiniteDiscoveryArtwork
  context_module: ContextModule
  context_screen_owner_id: string
  context_screen_owner_slug: string
  context_screen_owner_type: ScreenOwnerType
}

export interface SwipedUp {
  action: ActionType.swipedUp
  context_module: ContextModule
  context_screen_owner_id: string
  context_screen_owner_slug: string
  context_screen_owner_type: ScreenOwnerType
}
