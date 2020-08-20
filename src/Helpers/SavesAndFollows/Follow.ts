import {
  ActionType,
  AuthContextModule,
  FollowedArtist,
  OwnerType,
  UnfollowedArtist,
} from "../../Schema"

export interface FollowedArtistArgs {
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
 *   contextOwnerType: OwnerType.artist,
 *   contextOwnerId: "5359794d2a1e86c3741001f8",
 *   contextOwnerSlug: "andy-warhol",
 *   ownerId: "5359794d1a1e86c3740001f7",
 *   ownerSlug: "sturtevant",
 * })
 * ```
 */
export const followedArtist = (args: FollowedArtistArgs): FollowedArtist => {
  return followArtist(args) as FollowedArtist
}

/**
 *  A user unfollows an artist
 *
 * @example
 * ```
 * unfollowedArtist({
 *   contextModule: ContextModule.artistSeriesRail
 *   contextOwnerType: OwnerType.artist,
 *   contextOwnerId: "5359794d2a1e86c3741001f8",
 *   contextOwnerSlug: "andy-warhol",
 *   OwnerId: "5359794d1a1e86c3740001f7",
 *   OwnerSlug: "sturtevant",
 * })
 * ```
 */
export const unfollowedArtist = (
  args: FollowedArtistArgs,
): UnfollowedArtist => {
  return followArtist(args, true) as UnfollowedArtist
}

const followArtist = (
  {
    contextModule,
    contextOwnerId,
    contextOwnerSlug,
    contextOwnerType,
    ownerId,
    ownerSlug,
  }: FollowedArtistArgs,
  isUnfollow?: boolean,
): UnfollowedArtist | FollowedArtist => {
  let action: ActionType
  if (isUnfollow) {
    action = ActionType.unfollowedArtist
  } else {
    action = ActionType.followedArtist
  }
  return {
    action,
    context_module: contextModule,
    context_owner_id: contextOwnerId,
    context_owner_slug: contextOwnerSlug,
    context_owner_type: contextOwnerType,
    owner_id: ownerId,
    owner_slug: ownerSlug,
    owner_type: OwnerType.artist,
  }
}
