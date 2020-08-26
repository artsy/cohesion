import {
  ActionType,
  AuthContextModule,
  FollowedArtist,
  FollowedGene,
  OwnerType,
  UnfollowedArtist,
  UnfollowedGene,
} from "../../Schema"

export interface FollowedArgs {
  contextModule: AuthContextModule
  contextOwnerId?: string
  contextOwnerSlug?: string
  contextOwnerType: OwnerType
  ownerId: string
  ownerSlug: string
}

/**
 *  A user follows an artist
 *
 * @example
 * ```
 * followedArtist({
 *   contextModule: ContextModule.artistSeriesRail
 *   contextOwnerId: "5359794d2a1e86c3741001f8",
 *   contextOwnerSlug: "andy-warhol",
 *   contextOwnerType: OwnerType.artist,
 *   ownerId: "5359794d1a1e86c3740001f7",
 *   ownerSlug: "sturtevant",
 * })
 * ```
 */
export const followedArtist = (args: FollowedArgs): FollowedArtist => {
  return follow(args, OwnerType.artist) as FollowedArtist
}

/**
 *  A user unfollows an artist
 *
 * @example
 * ```
 * unfollowedArtist({
 *   contextModule: ContextModule.artistSeriesRail
 *   contextOwnerId: "5359794d2a1e86c3741001f8",
 *   contextOwnerSlug: "andy-warhol",
 *   contextOwnerType: OwnerType.artist,
 *   OwnerId: "5359794d1a1e86c3740001f7",
 *   OwnerSlug: "sturtevant",
 * })
 * ```
 */
export const unfollowedArtist = (args: FollowedArgs): UnfollowedArtist => {
  return follow(args, OwnerType.artist, true) as UnfollowedArtist
}

/**
 *  A user follows a gene
 *
 * @example
 * ```
 * followedGene({
 *   contextModule: ContextModule.intextTooltip,
 *   contextOwnerId: "5359794d2a1e86c3741001f8",
 *   contextOwnerSlug: "artsy-editorial-future-of-art",
 *   contextOwnerType: OwnerType.article,
 *   ownerId: "5359794d1a1e86c3740001f7",
 *   ownerSlug: "surrealism",
 * })
 * ```
 */
export const followedGene = (args: FollowedArgs): FollowedGene => {
  return follow(args, OwnerType.gene) as FollowedGene
}

/**
 *  A user unfollows a gene
 *
 * @example
 * ```
 * unfollowedGene({
 *   contextModule: ContextModule.intextTooltip,
 *   contextOwnerId: "5359794d2a1e86c3741001f8",
 *   contextOwnerSlug: "artsy-editorial-future-of-art",
 *   contextOwnerType: OwnerType.article,
 *   ownerId: "5359794d1a1e86c3740001f7",
 *   ownerSlug: "surrealism",
 * })
 * ```
 */
export const unfollowedGene = (args: FollowedArgs): UnfollowedGene => {
  return follow(args, OwnerType.gene, true) as UnfollowedGene
}

const follow = (
  {
    contextModule,
    contextOwnerId,
    contextOwnerSlug,
    contextOwnerType,
    ownerId,
    ownerSlug,
  }: FollowedArgs,
  ownerType: OwnerType.artist | OwnerType.gene,
  isUnfollow?: boolean,
): UnfollowedArtist | FollowedArtist | FollowedGene | UnfollowedGene => {
  let action: ActionType

  switch (ownerType) {
    case OwnerType.artist: {
      action = isUnfollow
        ? ActionType.unfollowedArtist
        : ActionType.followedArtist
      break
    }
    case OwnerType.gene: {
      action = isUnfollow ? ActionType.unfollowedGene : ActionType.followedGene
    }
  }

  return {
    action,
    context_module: contextModule,
    context_owner_id: contextOwnerId,
    context_owner_slug: contextOwnerSlug,
    context_owner_type: contextOwnerType,
    owner_id: ownerId,
    owner_slug: ownerSlug,
    owner_type: ownerType,
  }
}
