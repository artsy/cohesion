import { ActionType, SentConversationMessage } from "../../Schema"

export interface SentConversationMessageArgs {
  impulseConversationId: string
  impulseMessageId: string
}

/**
 * A user sends a message on web collector inbox
 *
 * @example
 * ```
 * sentConversationMessage({
 *   impulseConversationId: "12345",
 *   impulseMessageId: "54321"
 * })
 * ```
 */
export const sentConversationMessage = ({
  impulseConversationId,
  impulseMessageId,
}: SentConversationMessageArgs): SentConversationMessage => {
  return {
    action: ActionType.sentConversationMessage,
    impulse_conversation_id: impulseConversationId,
    impulse_message_id: impulseMessageId,
  }
}
