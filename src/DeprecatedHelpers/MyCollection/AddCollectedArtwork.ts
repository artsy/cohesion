import { ActionType, ContextModule, OwnerType } from "../../Schema"
import { AddCollectedArtwork, Platform } from "../../Schema/Events/MyCollection"

export interface AddCollectedArtworkArgs {
  platform: Platform
}
/**
 * A user adds an artwork to their My Collection
 *
 * @example
 * ```
 * addCollectedArtwork()
 * ```
 *
 */
export const addCollectedArtwork = ({
  platform,
}: AddCollectedArtworkArgs): AddCollectedArtwork => {
  return {
    action: ActionType.addCollectedArtwork,
    context_module: ContextModule.myCollectionHome,
    context_owner_type: OwnerType.myCollection,
    platform,
  }
}
