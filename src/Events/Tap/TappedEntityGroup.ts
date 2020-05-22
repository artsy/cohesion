import {
  ContextModule,
  EntityModuleType,
  EntityModuleHeight,
  TappedArtistGroup,
  TappedArtworkGroup,
  ActionType,
  TappedAuctionGroup,
  TappedCollectionGroup,
  TappedExploreGroup,
  TappedFairGroup,
  OwnerType,
  ScreenOwnerType,
} from "../../Schema"

export type TappedEntityDestinationType =
  | OwnerType.artist
  | OwnerType.artwork
  | OwnerType.collection
  | OwnerType.explore
  | OwnerType.fair
  | OwnerType.sale
  | OwnerType.auctions
  | OwnerType.savesAndFollows
  | OwnerType.gene
  | OwnerType.worksForYou

export interface TappedEntityGroupArgs {
  contextModule: ContextModule
  contextScreenOwnerType: ScreenOwnerType
  contextScreenOwnerId?: string
  contextScreenOwnerSlug?: string
  destinationScreenOwnerType: TappedEntityDestinationType
  destinationScreenOwnerId?: string
  destinationScreenOwnerSlug?: string
  horizontalSlidePosition?: number
  moduleHeight?: EntityModuleHeight
  type: EntityModuleType
}

/**
 *  A user taps a grouping of entities on iOS
 *
 *  The `action` type is inferred from `destinationScreenOwnerType`
 *
 * @example
 * ```
 * tappedEntityGroup({
 *   contextModule: ContextModule.trendingArtistsRail,
 *   contextScreenOwnerType: OwnerType.home,
 *   destinationScreenOwnerType: OwnerType.artist,
 *   destinationScreenOwnerId: "5359794d1a1e86c3740001f7",
 *   destinationScreenOwnerSlug: "andy-warhol",
 *   horizontalSlidePosition: 2,
 *   moduleHeight: "double",
 *   type: "thumbnail"
 * })
 * ```
 */
export const tappedEntityGroup = ({
  contextModule,
  contextScreenOwnerType,
  contextScreenOwnerId,
  contextScreenOwnerSlug,
  destinationScreenOwnerType,
  destinationScreenOwnerId,
  destinationScreenOwnerSlug,
  horizontalSlidePosition,
  moduleHeight,
  type,
}: TappedEntityGroupArgs):
  | TappedArtistGroup
  | TappedArtworkGroup
  | TappedAuctionGroup
  | TappedCollectionGroup
  | TappedExploreGroup
  | TappedFairGroup => {
  let action: ActionType
  switch (destinationScreenOwnerType) {
    case OwnerType.artist:
      action = ActionType.tappedArtistGroup
      break
    case OwnerType.artwork:
    case OwnerType.gene:
    case OwnerType.worksForYou:
    case OwnerType.savesAndFollows:
      action = ActionType.tappedArtworkGroup
      break
    case OwnerType.collection:
      action = ActionType.tappedCollectionGroup
      break
    case OwnerType.explore:
      action = ActionType.tappedExploreGroup
      break
    case OwnerType.fair:
      action = ActionType.tappedFairGroup
      break
    case OwnerType.sale:
    case OwnerType.auctions:
      action = ActionType.tappedAuctionGroup
      break
  }
  return {
    action,
    context_module: contextModule,
    context_screen_owner_type: contextScreenOwnerType,
    context_screen_owner_id: contextScreenOwnerId,
    context_screen_owner_slug: contextScreenOwnerSlug,
    destination_screen_owner_type: destinationScreenOwnerType,
    destination_screen_owner_id: destinationScreenOwnerId,
    destination_screen_owner_slug: destinationScreenOwnerSlug,
    horizontal_slide_position: horizontalSlidePosition,
    module_height: moduleHeight,
    type,
  }
}
