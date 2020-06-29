import { ActionType } from "."

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
