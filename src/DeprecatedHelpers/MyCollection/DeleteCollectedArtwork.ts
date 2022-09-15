import { ActionType, ContextModule, OwnerType } from "../../Schema"
import {
  DeleteCollectedArtwork,
  Platform,
} from "../../Schema/Events/MyCollection"

export interface DeleteCollectedArtworkArgs {
  contextOwnerId: string
  contextOwnerSlug: string
  platform: Platform
}

/**
 * A user deletes an artwork in their My Collection
 *
 * @example
 * ```
 * deleteCollectedArtwork({
 *   contextOwnerId: "1234455",
 *   contextOwnerSlug: "my-artwork-slug"
 * })
 * ```
 */
export const deleteCollectedArtwork = ({
  contextOwnerId,
  contextOwnerSlug,
  platform,
}: DeleteCollectedArtworkArgs): DeleteCollectedArtwork => {
  return {
    action: ActionType.deleteCollectedArtwork,
    context_module: ContextModule.myCollectionArtwork,
    context_owner_id: contextOwnerId,
    context_owner_slug: contextOwnerSlug,
    context_owner_type: OwnerType.myCollectionArtwork,
    platform,
  }
}
