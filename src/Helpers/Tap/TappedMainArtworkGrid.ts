import {
  ActionType,
  ContextModule,
  OwnerType,
  ScreenOwnerType,
  TappedMainArtworkGrid,
} from "../../Schema"

export interface TappedMainArtworkGridArgs {
  contextScreenOwnerType: ScreenOwnerType
  contextScreenOwnerId?: string
  contextScreenOwnerSlug?: string
  destinationScreenOwnerId: string
  destinationScreenOwnerSlug: string
  position?: number
  sort?: string
}

/**
 *  A user taps an artwork in the main artworkGrid (App)
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
  contextScreenOwnerType,
  contextScreenOwnerId,
  contextScreenOwnerSlug,
  destinationScreenOwnerId,
  destinationScreenOwnerSlug,
  position,
  sort,
}: TappedMainArtworkGridArgs): TappedMainArtworkGrid => {
  return {
    action: ActionType.tappedMainArtworkGrid,
    context_module: ContextModule.artworkGrid,
    context_screen_owner_id: contextScreenOwnerId,
    context_screen_owner_slug: contextScreenOwnerSlug,
    context_screen_owner_type: contextScreenOwnerType,
    destination_screen_owner_id: destinationScreenOwnerId,
    destination_screen_owner_slug: destinationScreenOwnerSlug,
    destination_screen_owner_type: OwnerType.artwork,
    position,
    sort,
    type: "thumbnail",
  }
}
