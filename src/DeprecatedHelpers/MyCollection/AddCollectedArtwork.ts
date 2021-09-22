import { ActionType, ContextModule, OwnerType } from "../../Schema"
import { AddCollectedArtwork } from "../../Schema/Events/MyCollection"

/**
 * A user adds an artwork to their My Collection
 *
 * @example
 * ```
 * addCollectedArtwork()
 * ```
 *
 */
export const addCollectedArtwork = (): AddCollectedArtwork => {
  return {
    action: ActionType.addCollectedArtwork,
    context_module: ContextModule.myCollectionHome,
    context_owner_type: OwnerType.myCollection,
  }
}
