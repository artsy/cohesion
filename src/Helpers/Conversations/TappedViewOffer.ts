import { ActionType, OwnerType } from "../../Schema"
import { TappedViewOffer } from "../../Schema/Events/Conversations"

export interface TappedViewOfferArgs {
  id: string
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
  id,
  cta,
}: TappedViewOfferArgs): TappedViewOffer => {
  return {
    action: ActionType.tappedViewOffer,
    context_owner_type: OwnerType.conversation,
    impulse_conversation_id: id,
    subject: cta,
  }
}
