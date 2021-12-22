import {
  ActionType,
  ContextModule,
  OwnerType,
  ScreenOwnerType,
  TappedMainArtworkGrid,
} from "../../Schema"

export interface TappedMainArtworkGridArgs {
  contextScreen?: string
  contextScreenOwnerType: ScreenOwnerType
  contextScreenOwnerId?: string
  contextScreenOwnerSlug?: string
  destinationScreenOwnerId: string
  destinationScreenOwnerSlug: string
  position?: number
  sort?: string
  query?: string
}

/**
 *  A user taps an artwork in the main artworkGrid (iOS)
 *
 * @example
 * ```
 * tappedMainArtworkGrid({
 *   contextScreenOwnerType: OwnerType.artist,
 *   contextScreenOwnerId: "5359794d2a1e86c3741001f8",
 *   contextScreenOwnerSlug: "andy-warhol",
 *   destinationScreenOwnerId: "5359794d1a1e86c3740001f7",
 *   destinationScreenOwnerSlug: "andy-warhol-skull",
 * })
 * ```
 */
export const tappedMainArtworkGrid = ({
  contextScreen,
  contextScreenOwnerType,
  contextScreenOwnerId,
  contextScreenOwnerSlug,
  destinationScreenOwnerId,
  destinationScreenOwnerSlug,
  position,
  sort,
  query,
}: TappedMainArtworkGridArgs): TappedMainArtworkGrid => {
  return {
    action: ActionType.tappedMainArtworkGrid,
    context_module: ContextModule.artworkGrid,
    context_screen: contextScreen,
    context_screen_owner_id: contextScreenOwnerId,
    context_screen_owner_slug: contextScreenOwnerSlug,
    context_screen_owner_type: contextScreenOwnerType,
    destination_screen_owner_id: destinationScreenOwnerId,
    destination_screen_owner_slug: destinationScreenOwnerSlug,
    destination_screen_owner_type: OwnerType.artwork,
    position,
    query,
    sort,
    type: "thumbnail",
  }
}
