import { ActionType, FocusedOnConversationMessageInput } from "../../Schema"

export interface FocusedOnConversationMessageInputArgs {
  impulseConversationId: string
}

/**
 * A user focuses the message input on web collector inbox
 *
 * @example
 * ```
 * focusedOnConversationMessageInput({
 *   impulseConversationId: "12345"
 * })
 * ```
 */
export const focusedOnConversationMessageInput = ({
  impulseConversationId,
}: FocusedOnConversationMessageInputArgs): FocusedOnConversationMessageInput => {
  return {
    action: ActionType.focusedOnConversationMessageInput,
    impulse_conversation_id: impulseConversationId,
  }
}
