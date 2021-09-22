import { ActionType, ContextModule, OwnerType } from "../../Schema"
import { TappedCollectedArtworkImages } from "../../Schema/Events/MyCollection"

export interface TappedCollectedArtworkImagesArgs {
  contextOwnerId: string
  contextOwnerSlug: string
}

/**
 *
 * A user taps into images of an artwork in their My Collection
 *
 * @example
 * ```
 * tappedCollectedArtworkImages({
 *   contextOwnerId: "my-artwork-id",
 *   contextOwnerSlug: "my-artwork-slug"
 * })
 * ```
 */
export const tappedCollectedArtworkImages = ({
  contextOwnerId,
  contextOwnerSlug,
}: TappedCollectedArtworkImagesArgs): TappedCollectedArtworkImages => {
  return {
    action: ActionType.tappedCollectedArtworkImages,
    context_module: ContextModule.myCollectionArtwork,
    context_owner_id: contextOwnerId,
    context_owner_slug: contextOwnerSlug,
    context_owner_type: OwnerType.myCollectionArtwork,
  }
}
