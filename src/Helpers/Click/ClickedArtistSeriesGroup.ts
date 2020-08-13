import {
  ActionType,
  ClickedArtistSeriesGroup,
  ContextModule,
  OwnerType,
  PageOwnerType,
} from "../../Schema"

export interface ClickedArtistSeriesGroupArgs {
  contextModule: ContextModule
  contextPageOwnerType: PageOwnerType
  contextPageOwnerId?: string
  contextPageOwnerSlug?: string
  curationBoost?: boolean
  destinationPageOwnerId: string
  destinationPageOwnerSlug: string
  horizontalSlidePosition?: number
}

/**
 *  A user clicks a grouping of artist series (web)
 *
 * @example
 * ```
 * clickedArtistSeriesGroup({
 *   contextModule: ContextModule.artistSeriesRail
 *   contextPageOwnerType: OwnerType.artist,
 *   contextPageOwnerId: "5359794d2a1e86c3741001f8",
 *   contextPageOwnerSlug: "andy-warhol",
 *   curationBoost: true,
 *   destinationPageOwnerId: "5359794d1a1e86c3740001f7",
 *   destinationPageOwnerSlug: "andy-warhol-skulls",
 *   horizontalSlidePosition: 3
 * })
 * ```
 */
export const clickedArtistSeriesGroup = ({
  contextModule,
  contextPageOwnerType,
  contextPageOwnerId,
  contextPageOwnerSlug,
  curationBoost,
  destinationPageOwnerId,
  destinationPageOwnerSlug,
  horizontalSlidePosition,
}: ClickedArtistSeriesGroupArgs): ClickedArtistSeriesGroup => {
  return {
    action: ActionType.clickedArtistSeriesGroup,
    context_module: contextModule,
    context_page_owner_id: contextPageOwnerId,
    context_page_owner_slug: contextPageOwnerSlug,
    context_page_owner_type: contextPageOwnerType,
    curation_boost: curationBoost || false,
    destination_page_owner_id: destinationPageOwnerId,
    destination_page_owner_slug: destinationPageOwnerSlug,
    destination_page_owner_type: OwnerType.artistSeries,
    horizontal_slide_position: horizontalSlidePosition,
    type: "thumbnail",
  }
}
