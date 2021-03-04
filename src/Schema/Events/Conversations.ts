import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * A user taps or clicks to accept an offer
 *
 * This schema describes events sent to Segment from [[acceptOffer]]
 *
 *  @example
 *  ```
 *  {
 *    action: "acceptOffer",
 *    context_owner_type: "inboxConversation"
 *    impulse_conversation_id: "198"
 *    subject: "Confirm & Pay"
 *  }
 * ```
 */
export interface AcceptOffer {
  action: ActionType.AcceptOffer
  context_owner_type: OwnerType.reviewOffer
  impulse_conversation_id: string
  subject: string
}

/**
 * A user taps or clicks to counter an offer
 *
 * This schema describes events sent to Segment from [[counterOffer]]
 *
 *  @example
 *  ```
 *  {
 *    action: "counterOffer",
 *    context_owner_type: "inboxConversation"
 *    impulse_conversation_id: "198"
 *    subject: "Send a counteroffer"
 *  }
 * ```
 */
export interface CounterOffer {
  action: ActionType.CounterOffer
  context_owner_type: OwnerType.reviewOffer
  impulse_conversation_id: string
  subject: string
}

/**
 * A user taps or clicks to decline an offer
 *
 * This schema describes events sent to Segment from [[declineOffer]]
 *
 *  @example
 *  ```
 *  {
 *    action: "declineOffer",
 *    context_owner_type: "inboxConversation"
 *    impulse_conversation_id: "198"
 *    subject: "Decline"
 *  }
 * ```
 */
export interface DeclineOffer {
  action: ActionType.DeclineOffer
  context_owner_type: OwnerType.reviewOffer
  impulse_conversation_id: string
  subject: string
}

/**
 * Schemas describing Conversation events
 * @packageDocumentation
 */

/**
 * A user focused on message input on a conversation
 *
 * This schema describes events sent to Segment from [[focusedOnConversationMessageInput]]
 *
 *  @example
 *  ```
 *  {
 *    action: "focusedOnConversationMessageInput",
 *    impulse_conversation_id: "198"
 *  }
 * ```
 */
export interface FocusedOnConversationMessageInput {
  action: ActionType.focusedOnConversationMessageInput
  impulse_conversation_id: string
}

/**
 * A user taps or clicks the make offer button
 *
 * This schema describes events sent to Segment from [[makeOffer]]
 *
 *  @example
 *  ```
 *  {
 *    action: "makeOffer",
 *    context_owner_type: "inboxConversation"
 *    impulse_conversation_id: "198"
 *  }
 * ```
 */
export interface MakeOffer {
  action: ActionType.MakeOffer
  context_owner_type: OwnerType.inboxConversation
  impulse_conversation_id: string
}

/**
 * A user successfully sends a message to partner from a conversation
 *
 * This schema describes events sent to Segment from [[sentConversationMessage]]
 *
 *  @example
 *  ```
 *  {
 *    action: "sentConversationMessage",
 *    impulse_conversation_id: "198",
 *    impulse_message_id: "8765"
 *  }
 * ```
 */
export interface SentConversationMessage {
  action: ActionType.sentConversationMessage
  impulse_conversation_id: string
  impulse_message_id: string
}

/**
 * A user taps an inquiry message within their inbox
 *
 * This schema describes events sent to Segment from [[tappedInboxConversation]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedInboxConversation",
 *    context_module: "inboxInquiries",
 *    context_screen_owner_type: "inboxInquiries",
 *    destination_screen_owner_type: "inboxConversation",
 *    destination_screen_owner_id: "5df3e3fa485efe0012c37055",
 *    artwork_id: "5fa1bb26522ad2000edb793f",
 *    partner_id: "51912367a0134c613000001d"
 *  }
 * ```
 */
export interface TappedInboxConversation {
  action: ActionType.tappedInboxConversation
  context_module: ContextModule.inboxInquiries
  context_screen_owner_type: OwnerType.inboxInquiries
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: OwnerType.inboxConversation
  destination_screen_owner_id: string
  artwork_id: string
  partner_id: string
}

/**
 * A user taps or clicks to view an offer
 *
 * This schema describes events sent to Segment from [[viewOffer]]
 *
 *  @example
 *  ```
 *  {
 *    action: "viewOffer",
 *    context_owner_type: "inboxConversation"
 *    impulse_conversation_id: "198"
 *    subject: "Offer Accepted"
 *  }
 * ```
 */
export interface ViewOffer {
  action: ActionType.ViewOffer
  context_owner_type: OwnerType.inboxConversation
  impulse_conversation_id: string
  subject: string
}
