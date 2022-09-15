import { ActionType, ContextModule, OwnerType } from "../../Schema"
import {
  EditCollectedArtwork,
  Platform,
} from "../../Schema/Events/MyCollection"

export interface EditCollectedArtworkArgs {
  contextOwnerId: string
  contextOwnerSlug: string
  platform: Platform
}

/**
 * A user edits an artwork in their My Collection
 *
 * @example
 * ```
 * editCollectedArtwork({
 *   contextOwnerId: "1234455",
 *   contextOwnerSlug: "my-artwork-slug"
 * })
 * ```
 */
export const editCollectedArtwork = ({
  contextOwnerId,
  contextOwnerSlug,
  platform,
}: EditCollectedArtworkArgs): EditCollectedArtwork => {
  return {
    action: ActionType.editCollectedArtwork,
    context_module: ContextModule.myCollectionArtwork,
    context_owner_id: contextOwnerId,
    context_owner_slug: contextOwnerSlug,
    context_owner_type: OwnerType.myCollectionArtwork,
    platform,
  }
}
