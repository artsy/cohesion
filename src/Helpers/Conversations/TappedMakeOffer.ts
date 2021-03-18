import { ActionType, OwnerType } from "../../Schema"
import { TappedMakeOffer } from "../../Schema/Events/Conversations"

/**
 * A user tapped the make offer button in an inquiry
 *
 * @example
 * ```
 * tappedMakeOffer("123")
 * ```
 *
 */
export const tappedMakeOffer = (id: string): TappedMakeOffer => {
  return {
    action: ActionType.tappedMakeOffer,
    context_owner_type: OwnerType.conversation,
    impulse_conversation_id: id,
  }
}
