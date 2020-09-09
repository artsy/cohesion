import {
  ActionType,
  ClickedCollectionGroup,
  ContextModule,
  EntityModuleType,
  OwnerType,
  PageOwnerType,
} from "../../Schema"

export interface ClickedCollectionGroupArgs {
  contextModule: ContextModule
  contextPageOwnerType: PageOwnerType
  contextPageOwnerId?: string
  contextPageOwnerSlug?: string
  destinationPageOwnerId: string
  destinationPageOwnerSlug: string
  horizontalSlidePosition?: number
  type?: EntityModuleType
}

/**
 *  A user clicks a grouping of artist series (web)
 *
 * @example
 * ```
 * clickedCollectionGroup({
 *   contextModule: ContextModule.featuredCollectionsRail
 *   contextPageOwnerType: OwnerType.collection,
 *   contextPageOwnerId: "5359794d2a1e86c3741001f8",
 *   contextPageOwnerSlug: "contemporary",
 *   destinationPageOwnerId: "5359794d1a1e86c3740001f7",
 *   destinationPageOwnerSlug: "andy-warhol-skulls",
 *   horizontalSlidePosition: 3
 * })
 * ```
 */
export const clickedCollectionGroup = ({
  contextModule,
  contextPageOwnerType,
  contextPageOwnerId,
  contextPageOwnerSlug,
  destinationPageOwnerId,
  destinationPageOwnerSlug,
  horizontalSlidePosition,
  type,
}: ClickedCollectionGroupArgs): ClickedCollectionGroup => {
  return {
    action: ActionType.clickedCollectionGroup,
    context_module: contextModule,
    context_page_owner_id: contextPageOwnerId,
    context_page_owner_slug: contextPageOwnerSlug,
    context_page_owner_type: contextPageOwnerType,
    destination_page_owner_id: destinationPageOwnerId,
    destination_page_owner_slug: destinationPageOwnerSlug,
    destination_page_owner_type: OwnerType.collection,
    horizontal_slide_position: horizontalSlidePosition,
    type: type || "thumbnail",
  }
}
