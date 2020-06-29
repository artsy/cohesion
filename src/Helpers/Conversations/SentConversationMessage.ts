import { ActionType, SentConversationMessage } from "../../Schema"

export interface SentConversationMessageArgs {
  impulse_conversation_id: string
  impulse_message_id: string
}

/**
 * A user sends a message on web collector inbox
 *
 * @example
 * ```
 * sentConversationMessage({
 *   impulse_conversation_id: "12345",
 *   impulse_message_id: "54321"
 * })
 * ```
 */
export const sentConversationMessage = ({
  impulse_conversation_id,
  impulse_message_id,
}: SentConversationMessageArgs): SentConversationMessage => {
  return {
    action: ActionType.sentConversationMessage,
    impulse_conversation_id,
    impulse_message_id,
  }
}
