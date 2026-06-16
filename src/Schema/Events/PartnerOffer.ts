import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing partner offer events for all systems
 * @packageDocumentation
 */

/**
 * A user has seen the partner offer cta in conversations.
 *
 * This schema describes events sent to Segment from [[PartnerOffer]]
 *
 *  @example
 *  ```
 *  {
 *    action: "partnerOfferInConversationViewed",
 *    context_owner_type: "conversations"
 *    context_owner_id: "55002921"
 *  }
 * ```
 */
export interface PartnerOfferInConversationViewed {
  action: ActionType.partnerOfferInConversationViewed
  context_owner_type: OwnerType.conversation
  context_owner_id: string
}
