import { ActionType } from "."
import { AuthContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"

/**
 * Schemas describing save and follow events for all systems
 * @packageDocumentation
 */

export interface FollowedEntity {
  // action: ActionType.followedArtist | ActionType.followedGene | ActionType.unfollowedArtist | ActionType.unfollowedGene
  context_module: AuthContextModule
  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
  owner_type: OwnerType.artist | OwnerType.gene
  owner_id: string
  owner_slug: string
}

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
export interface FollowedArtist extends FollowedEntity {
  action: ActionType.followedArtist
}

/**
 * A user has followed a gene.
 *
 * This schema describes events sent to Segment from [[followedGene]]
 *
 *  @example
 *  ```
 *  {
 *    action: "followedGene",
 *    context_module: "intextTooltip"
 *    context_owner_type: "article"
 *    context_owner_id: "5359794d1a1e86c3740001f7"
 *    context_owner_slug: "artsy-editorial-future-of-art"
 *    owner_type: "gene"
 *    owner_id: "5359794d1a1e86c3740001f7"
 *    owner_slug: "surrealism"
 *  }
 * ```
 */
export interface FollowedGene extends FollowedEntity {
  action: ActionType.followedGene
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
export interface UnfollowedArtist extends FollowedEntity {
  action: ActionType.unfollowedArtist
}

/**
 * A user has unfollowed a gene.
 *
 * This schema describes events sent to Segment from [[unfollowedGene]]
 *
 *  @example
 *  ```
 *  {
 *    action: "unfollowedGene",
 *    context_module: "intextTooltip"
 *    context_owner_type: "article"
 *    context_owner_id: "5359794d1a1e86c3740001f7"
 *    context_owner_slug: "artsy-editorial-future-of-art"
 *    owner_type: "gene"
 *    owner_id: "5359794d1a1e86c3740001f7"
 *    owner_slug: "surrealism"
 *  }
 * ```
 */
export interface UnfollowedGene extends FollowedEntity {
  action: ActionType.unfollowedGene
}
