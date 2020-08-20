import { ActionType } from "."
import { AuthContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"

/**
 * Schemas describing save and follow events for all systems
 * @packageDocumentation
 */

/**
 * A user has followed an artist.
 *
 * This schema describes events sent to Segment from [[followedArtist]]
 *
 *  @example
 *  ```
 *  {
 *    action: "followedArtist",
 *    context_module: "featuredArtists"
 *    context_owner_type: "artistSeries"
 *    context_owner_id: "5359794d1a1e86c3740001f7"
 *    context_owner_slug: "alex-katz-departure"
 *    owner_type: "artist"
 *    owner_id: "5359794d1a1e86c3740001f7"
 *    owner_slug: "alex-katz"
 *  }
 * ```
 */
export interface FollowedArtist {
  action: ActionType.followedArtist
  context_module: AuthContextModule
  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
  owner_type: OwnerType.artist
  owner_id: string
  owner_slug: string
}

/**
 * A user has unfollowed an artist.
 *
 * This schema describes events sent to Segment from [[unfollowedArtist]]
 *
 *  @example
 *  ```
 *  {
 *    action: "unfollowedArtist",
 *    context_module: "featuredArtists"
 *    context_owner_type: "artistSeries"
 *    context_owner_id: "5359794d1a1e86c3740001f7"
 *    context_owner_slug: "alex-katz-departure"
 *    owner_type: "artist"
 *    owner_id: "5359794d1a1e86c3740001f7"
 *    owner_slug: "alex-katz"
 *  }
 * ```
 */
export interface UnfollowedArtist {
  action: ActionType.unfollowedArtist
  context_module: ContextModule
  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
  owner_type: OwnerType.artist
  owner_id: string
  owner_slug: string
}
