import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing Conversation events
 * @packageDocumentation
 */

/**
 * A user focused on message input on a conversation
 *
 * This schema describes events sent to Segment from {@link ActionType.focusedOnConversationMessageInput}
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
 * A user successfully sends a message to partner from a conversation
 *
 * This schema describes events sent to Segment from {@link ActionType.sentConversationMessage}
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
 * This schema describes events sent to Segment from {@link ActionType.tappedInboxConversation}
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
 * A user taps the make offer button either on an artwork page (BNMO) or inquiry conversation.
 *
 * This schema describes events sent to Segment from {@link ActionType.tappedMakeOffer}
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedMakeOffer",
 *    context_owner_type: "conversation"
 *    impulse_conversation_id: "198"
 *  }
 * ```
 */
export interface TappedMakeOffer {
  action: ActionType.tappedMakeOffer
  context_owner_type: OwnerType
  context_owner_slug?: string
  context_owner_id?: string
  impulse_conversation_id?: string
}

/**
 * A user taps to view an offer
 *
 * This schema describes events sent to Segment from {@link ActionType.tappedViewOffer}
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedViewOffer",
 *    context_owner_type: "conversation"
 *    impulse_conversation_id: "198"
 *    subject: "Offer Accepted"
 *  }
 * ```
 */
export interface TappedViewOffer {
  action: ActionType.tappedViewOffer
  context_owner_type: OwnerType.conversation
  impulse_conversation_id: string
  subject: string
}

export interface TappedConfirmArtwork {
  context_module: string
  context_owner_type: OwnerType.conversation
}
