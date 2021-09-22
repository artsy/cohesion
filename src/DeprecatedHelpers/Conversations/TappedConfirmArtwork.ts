import { OwnerType } from "../../Schema"
import { TappedConfirmArtwork } from "../../Schema/Events/Conversations"

/**
 * A user tapped the confirm offer CTA in an inquiry
 *
 * @example
 * ```
 * tappedConfirmArtwork()
 * ```
 *
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const tappedConfirmArtwork = (): TappedConfirmArtwork => {
  return {
    context_module: OwnerType.conversationMakeOfferConfirmArtwork,
    context_owner_type: OwnerType.conversation,
  }
}
