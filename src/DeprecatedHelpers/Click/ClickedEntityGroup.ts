import {
  ActionType,
  ClickedArtistGroup,
  ClickedArtworkGroup,
  ClickedAuctionGroup,
  ClickedCollectionGroup,
  ClickedFairGroup,
  ContextModule,
  EntityModuleType,
  OwnerType,
  PageOwnerType,
} from "../../Schema"

export type ClickedEntityDestinationType =
  | OwnerType.artist
  | OwnerType.artwork
  | OwnerType.collection
  | OwnerType.fair
  | OwnerType.sale
  | OwnerType.auctions
  | OwnerType.gene
  | OwnerType.worksForYou
  | OwnerType.newWorksFromGalleriesYouFollow

export interface ClickedEntityGroupArgs {
  contextModule: ContextModule
  contextPageOwnerType: PageOwnerType
  contextPageOwnerId?: string
  contextPageOwnerSlug?: string
  destinationPageOwnerType: ClickedEntityDestinationType
  destinationPageOwnerId?: string
  destinationPageOwnerSlug?: string
  horizontalSlidePosition?: number
  type: EntityModuleType
}

/**
 *  A user clicks a grouping of entities on web
 *
 *  The `action` type is inferred from `destinationPageOwnerType`
 *
 * @example
 * ```
 * clickedEntityGroup({
 *   contextModule: ContextModule.trendingArtistsRail,
 *   contextPageOwnerType: OwnerType.home,
 *   destinationPageOwnerType: OwnerType.artist,
 *   destinationPageOwnerId: "5359794d1a1e86c3740001f7",
 *   destinationPageOwnerSlug: "andy-warhol",
 *   horizontalSlidePosition: 2,
 *   type: "thumbnail"
 * })
 * ```
 */
export const clickedEntityGroup = ({
  contextModule,
  contextPageOwnerType,
  contextPageOwnerId,
  contextPageOwnerSlug,
  destinationPageOwnerType,
  destinationPageOwnerId,
  destinationPageOwnerSlug,
  horizontalSlidePosition,
  type,
}: ClickedEntityGroupArgs):
  | ClickedArtistGroup
  | ClickedArtworkGroup
  | ClickedAuctionGroup
  | ClickedCollectionGroup
  | ClickedFairGroup => {
  let action: ActionType
  switch (destinationPageOwnerType) {
    case OwnerType.artist:
      action = ActionType.clickedArtistGroup
      break
    case OwnerType.artwork:
    case OwnerType.gene:
    case OwnerType.worksForYou:
      action = ActionType.clickedArtworkGroup
      break
    case OwnerType.newWorksFromGalleriesYouFollow:
      action = ActionType.clickedArtworkGroup
      break
    case OwnerType.collection:
      action = ActionType.clickedCollectionGroup
      break
    case OwnerType.fair:
      action = ActionType.clickedFairGroup
      break
    case OwnerType.sale:
    case OwnerType.auctions:
      action = ActionType.clickedAuctionGroup
      break
  }

  return {
    action,
    context_module: contextModule,
    context_page_owner_id: contextPageOwnerId,
    context_page_owner_slug: contextPageOwnerSlug,
    context_page_owner_type: contextPageOwnerType,
    destination_page_owner_id: destinationPageOwnerId,
    destination_page_owner_slug: destinationPageOwnerSlug,
    destination_page_owner_type: destinationPageOwnerType,
    horizontal_slide_position: horizontalSlidePosition,
    type,
  }
}
