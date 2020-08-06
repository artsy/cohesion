import { ActionType } from "."
import { ContextModule } from "../Values/ContextModule"
import { ScreenOwnerType } from "../Values/OwnerType"

/**
 * Schemas describing save and follow events
 * @packageDocumentation
 */

/**
 * A user has followed an artist on iOS.
 *
 * This schema describes events sent to Segment from [[followedArtist]]
 *
 *  @example
 *  ```
 *  {
 *    action: "followedArtist",
 *    context_module: "FeaturedArtists"
 *    context_screen_owner_type: "artistSeries"
 *    context_screen_owner_id: "5359794d1a1e86c3740001f7"
 *    context_screen_owner_slug: "alex-katz-departure"
 *    owner_type: "artist"
 *    owner_id: "5359794d1a1e86c3740001f7"
 *    owner_slug: "alex-katz"
 *  }
 * ```
 */
export interface FollowedArtist {
  action: ActionType.followedArtist
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  owner_type: ScreenOwnerType
  owner_id: string
  owner_slug: string
}
