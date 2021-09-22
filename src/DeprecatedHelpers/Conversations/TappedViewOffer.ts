import { ActionType, OwnerType } from "../../Schema"
import { TappedViewOffer } from "../../Schema/Events/Conversations"

export interface TappedViewOfferArgs {
  impulse_conversation_id: string
  cta: string
}

/**
 * A user tapped the view offer CTA in an inquiry
 *
 * @example
 * ```
 * tappedViewOffer({ id: "123", cta: "Offer Accepted" })
 * ```
 *
 */
export const tappedViewOffer = ({
  impulse_conversation_id,
  cta,
}: TappedViewOfferArgs): TappedViewOffer => {
  return {
    action: ActionType.tappedViewOffer,
    context_owner_type: OwnerType.conversation,
    impulse_conversation_id: impulse_conversation_id,
    subject: cta,
  }
}
