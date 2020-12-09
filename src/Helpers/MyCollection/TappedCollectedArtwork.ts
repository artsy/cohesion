import { ActionType, ContextModule, OwnerType } from "../../Schema"
import { TappedCollectedArtwork } from "../../Schema/Events/MyCollection"

export interface TappedCollectedArtworkArgs {
  contextOwnerId: string
  destinationOwnerId: string
  destinationOwnerSlug: string
}

/**
 *
 * A user taps an artwork in their My Collection
 *
 * @example
 * ```
 * tappedCollectionArtwork({
 *   contextOwnerId: "my-collection-id",
 *   destinationOwnerId: "my-artwork-id",
 *   destinationOwnerSlug: "my-artwork-slug",
 * })
 * ```
 */
export const tappedCollectedArtwork = ({
  contextOwnerId,
  destinationOwnerId,
  destinationOwnerSlug,
}: TappedCollectedArtworkArgs): TappedCollectedArtwork => {
  return {
    action: ActionType.tappedCollectedArtwork,
    context_module: ContextModule.myCollectionHome,
    context_owner_id: contextOwnerId,
    context_owner_type: OwnerType.myCollection,
    destination_owner_id: destinationOwnerId,
    destination_owner_slug: destinationOwnerSlug,
    destination_owner_type: OwnerType.myCollectionArtwork,
  }
}
