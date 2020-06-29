import { ActionType, FocusedOnConversationMessageInput } from "../../Schema"

interface FocusedOnConversationMessageInputArgs {
  impulse_conversation_id: string
}

/**
 * A user focuses the message input on web collector inbox
 *
 * @example
 * ```
 * focusedOnConversationMessageInput({
 *   impulse_conversation_id: "12345"
 * })
 * ```
 */
export const focusedOnConversationMessageInput = ({
  impulse_conversation_id,
}: FocusedOnConversationMessageInputArgs): FocusedOnConversationMessageInput => {
  return {
    action: ActionType.focusedOnConversationMessageInput,
    impulse_conversation_id,
  }
}
