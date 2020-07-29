import {
  ActionType,
  ContextModule,
  OwnerType,
  ScreenOwnerType,
  TappedMainArtworkGrid,
} from "../../Schema"

export interface TappedMainArtworkGridArgs {
  contextPageOwnerType: ScreenOwnerType
  contextPageOwnerId?: string
  contextPageOwnerSlug?: string
  destinationPageOwnerId: string
  destinationPageOwnerSlug: string
}

/**
 *  A user taps an artwork in the main artowrkGrid (iOS)
 *
 * @example
 * ```
 * tappedMainArtworkGrid({
 *   contextPageOwnerType: OwnerType.artist,
 *   contextPageOwnerId: "5359794d2a1e86c3741001f8",
 *   contextPageOwnerSlug: "andy-warhol",
 *   destinationPageOwnerId: "5359794d1a1e86c3740001f7",
 *   destinationPageOwnerSlug: "andy-warhol-skull",
 * })
 * ```
 */
export const tappedMainArtworkGrid = ({
  contextPageOwnerType,
  contextPageOwnerId,
  contextPageOwnerSlug,
  destinationPageOwnerId,
  destinationPageOwnerSlug,
}: TappedMainArtworkGridArgs): TappedMainArtworkGrid => {
  return {
    action: ActionType.tappedMainArtworkGrid,
    context_module: ContextModule.artworkGrid,
    context_page_owner_id: contextPageOwnerId,
    context_page_owner_slug: contextPageOwnerSlug,
    context_page_owner_type: contextPageOwnerType,
    destination_page_owner_id: destinationPageOwnerId,
    destination_page_owner_slug: destinationPageOwnerSlug,
    destination_page_owner_type: OwnerType.artwork,
    type: "thumbnail",
  }
}
