import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing Art Assistant events
 * @packageDocumentation
 */

/**
 * A user sends a message to Art Assistant, the conversational search flow.
 *
 * `conversation_id` is generated on the client when the chat opens (and again when the
 * user starts a new chat), so every message in the same chat shares it.
 * `message_id` joins to [[receivedArtAssistantResponse]] and [[artAssistantTurnFailed]]
 * via their `prompt_message_id`.
 *
 * `message` carries the user's own words, so it is only populated while message content
 * tracking is enabled; the rest of the event is always sent.
 *
 * This schema describes events sent to Segment from [[sentArtAssistantMessage]]
 *
 *  @example
 *  ```
 *  {
 *    action: "sentArtAssistantMessage",
 *    character_count: 42,
 *    context_module: "artAssistant",
 *    context_screen_owner_type: "artAssistant",
 *    conversation_id: "6f1b8b0e-1f27-4a0e-9d6f-2c2f2a3d1f45",
 *    message: "large black and white paintings under $5K",
 *    message_id: "a12c9d3e-6a41-4a59-8c0b-5f9b0a1d2e77",
 *    message_index: 0,
 *    type: "suggestion"
 *  }
 * ```
 */
export interface SentArtAssistantMessage {
  action: ActionType.sentArtAssistantMessage
  /** Number of characters in the message the user sent */
  character_count: number
  context_module: ContextModule.artAssistant
  context_screen_owner_type: OwnerType.artAssistant
  /** Client-generated id shared by every message in the same chat */
  conversation_id: string
  /** The user's message. Only populated while message content tracking is enabled */
  message?: string
  /** Client-generated id of this message */
  message_id: string
  /** Zero-based position of this message within the conversation */
  message_index: number
  /** Whether the text came from a tapped suggestion or was typed by the user */
  type: "suggestion" | "typed"
}

/**
 * Art Assistant finishes answering a message, with the final answer and any entities it
 * found. It fires once per turn, when the agent reports the turn complete.
 *
 * `duration_ms` and `time_to_first_token_ms` are measured on the client from the moment
 * the message was sent, so together they describe how long the user waited and how long
 * the agent worked before it started answering. `item_type` and `item_ids` describe the
 * entities shown alongside the answer — artworks today, other entity types later.
 *
 * `response` carries the agent's own words, so it is only populated while message content
 * tracking is enabled; the rest of the event is always sent. It holds the final answer
 * only, without the intermediate activity updates ("Thinking...", "Searching artworks...")
 * the user saw while waiting.
 *
 * A turn that ends without an answer is reported by [[artAssistantTurnFailed]] instead.
 *
 * This schema describes events sent to Segment from [[receivedArtAssistantResponse]]
 *
 *  @example
 *  ```
 *  {
 *    action: "receivedArtAssistantResponse",
 *    context_module: "artAssistant",
 *    context_screen_owner_type: "artAssistant",
 *    conversation_id: "6f1b8b0e-1f27-4a0e-9d6f-2c2f2a3d1f45",
 *    duration_ms: 8213,
 *    item_count: 2,
 *    item_ids: ["5e9a7a238483bf000e2c4c5e", "5d2c9b1e8b3b310012f1a0c4"],
 *    item_type: "artwork",
 *    message_id: "b34d1f88-0c53-4f8a-9c2e-7b1f4a6d5e23",
 *    prompt_message_id: "a12c9d3e-6a41-4a59-8c0b-5f9b0a1d2e77",
 *    response: "Here are a few large black and white paintings under $5,000.",
 *    stop_reason: "end_turn",
 *    time_to_first_token_ms: 6104,
 *    tool_call_count: 3
 *  }
 * ```
 */
export interface ReceivedArtAssistantResponse {
  action: ActionType.receivedArtAssistantResponse
  context_module: ContextModule.artAssistant
  context_screen_owner_type: OwnerType.artAssistant
  /** Client-generated id shared by every message in the same chat */
  conversation_id: string
  /** Milliseconds from sending the message to the final answer */
  duration_ms: number
  /** Number of entities shown alongside the answer */
  item_count: number
  /** Ids of the entities shown alongside the answer, in display order */
  item_ids: string[]
  /** The type of entity shown alongside the answer, absent when the answer has none */
  item_type?:
    | OwnerType.artist
    | OwnerType.artwork
    | OwnerType.partner
    | OwnerType.show
    | OwnerType.viewingRoom
  /** Client-generated id of the assistant message holding the answer */
  message_id: string
  /** `message_id` of the [[sentArtAssistantMessage]] this answers */
  prompt_message_id: string
  /** The agent's final answer. Only populated while message content tracking is enabled */
  response?: string
  /** Why the agent ended the turn, as reported by the server */
  stop_reason: string
  /** Milliseconds from sending the message to the first streamed token of the answer */
  time_to_first_token_ms?: number
  /** Number of tools the agent called while answering */
  tool_call_count: number
}

/**
 * An Art Assistant turn ends without an answer for the user. `outcome` tells the failures
 * apart: the stream broke (`stream_error`), it broke after the answer had already been
 * shown (`trailing_stream_error`), it went quiet for too long (`idle_timeout`), it closed
 * with no answer (`ended_without_answer`), the agent gave up (`stopped_without_answer`),
 * or the user had no valid session (`unauthenticated`).
 *
 * `error_status` is the HTTP status behind the failure when there was one — 401 and 429
 * separate expired sessions and rate limiting from genuine breakage.
 *
 * This schema describes events sent to Segment from [[artAssistantTurnFailed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "artAssistantTurnFailed",
 *    context_module: "artAssistant",
 *    context_screen_owner_type: "artAssistant",
 *    conversation_id: "6f1b8b0e-1f27-4a0e-9d6f-2c2f2a3d1f45",
 *    duration_ms: 60012,
 *    message_id: "b34d1f88-0c53-4f8a-9c2e-7b1f4a6d5e23",
 *    outcome: "idle_timeout",
 *    prompt_message_id: "a12c9d3e-6a41-4a59-8c0b-5f9b0a1d2e77"
 *  }
 * ```
 */
export interface ArtAssistantTurnFailed {
  action: ActionType.artAssistantTurnFailed
  context_module: ContextModule.artAssistant
  context_screen_owner_type: OwnerType.artAssistant
  /** Client-generated id shared by every message in the same chat */
  conversation_id: string
  /** Milliseconds from sending the message to the failure */
  duration_ms: number
  /** HTTP status behind the failure, when it came with one */
  error_status?: number
  /** Client-generated id of the assistant message that failed */
  message_id: string
  /** What went wrong */
  outcome:
    | "ended_without_answer"
    | "idle_timeout"
    | "stopped_without_answer"
    | "stream_error"
    | "trailing_stream_error"
    | "unauthenticated"
  /** `message_id` of the [[sentArtAssistantMessage]] that was being answered */
  prompt_message_id: string
  /** Why the agent ended the turn, when the server reported a stop reason */
  stop_reason?: string
}
