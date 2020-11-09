import {
  ActionType,
  ClickedArtworkGroup,
  ContextModule,
  OwnerType,
  PageOwnerType,
} from "../../Schema"

export interface ClickedArtworkGroupArgs {
  contextModule: ContextModule
  contextPageOwnerType: PageOwnerType
  contextPageOwnerId?: string
  contextPageOwnerSlug?: string
  artworkID: string
  artworkSlug: string
  horizontalSlidePosition: number
}

/**
 *  A user clicks an artwork in an artwork grouping on web
 *
 * @example
 * ```
 * clickedArtworkGroup({
 *   artworkID: "5359794d1a1e86c3740001f7",
 *   artworkSlug: "andy-warhol-skull",
 *   contextModule: ContextModule.topWorksRail,
 *   contextPageOwnerId: "5359794d1a1e86c3740001f7",
 *   contextPageOwnerSlug: "andy-warhol",
 *   contextPageOwnerType: OwnerType.artist,
 *   horizontalSlidePosition: 2,
 * })
 * ```
 */
export const clickedArtworkGroup = ({
  artworkID,
  artworkSlug,
  contextModule,
  contextPageOwnerType,
  contextPageOwnerId,
  contextPageOwnerSlug,
  horizontalSlidePosition,
}: ClickedArtworkGroupArgs): ClickedArtworkGroup => {
  return {
    action: ActionType.clickedArtworkGroup,
    context_module: contextModule,
    context_page_owner_id: contextPageOwnerId,
    context_page_owner_slug: contextPageOwnerSlug,
    context_page_owner_type: contextPageOwnerType,
    destination_page_owner_id: artworkID,
    destination_page_owner_slug: artworkSlug,
    destination_page_owner_type: OwnerType.artwork,
    horizontal_slide_position: horizontalSlidePosition,
    type: "thumbnail",
  }
}

export interface ClickedArtworkGroupHeaderArgs {
  contextModule: ContextModule
  contextPageOwnerType: PageOwnerType
  contextPageOwnerId: string
  contextPageOwnerSlug: string
  destinationPageOwnerId: string
  destinationPageOwnerSlug: string
  destinationPageOwnerType: PageOwnerType
  type: "header" | "viewAll"
}

/**
 *  A user clicks a header link in an artwork grouping on web
 *
 * @example
 * ```
 * clickedArtworkGroupHeader({
 *   contextModule: ContextModule.moreFromThisSeries,
 *   contextPageOwnerId: "5359794d1a1e86c3740001f7",
 *   contextPageOwnerSlug: "andy-warhol-skull",
 *   contextPageOwnerType: OwnerType.artwork,
 *   destinationPageOwnerId: "5359794d1a1e86c3740001f7",
 *   destinationPageOwnerSlug: "andy-warhol-skulls",
 *   destinationPageOwnerType: OwnerType.artistSeries,
 *   type: "viewAll",
 * })
 * ```
 */
export const clickedArtworkGroupHeader = ({
  contextModule,
  contextPageOwnerType,
  contextPageOwnerId,
  contextPageOwnerSlug,
  destinationPageOwnerId,
  destinationPageOwnerSlug,
  destinationPageOwnerType,
  type,
}: ClickedArtworkGroupHeaderArgs): ClickedArtworkGroup => {
  return {
    action: ActionType.clickedArtworkGroup,
    context_module: contextModule,
    context_page_owner_id: contextPageOwnerId,
    context_page_owner_slug: contextPageOwnerSlug,
    context_page_owner_type: contextPageOwnerType,
    destination_page_owner_id: destinationPageOwnerId,
    destination_page_owner_slug: destinationPageOwnerSlug,
    destination_page_owner_type: destinationPageOwnerType,
    type,
  }
}
