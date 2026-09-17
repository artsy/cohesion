import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing Art Assistant events
 *
 * Note: these events deliberately carry no field for the assistant's response.
 * Responses are recorded server-side, where they can be redacted and expired;
 * they are larger than Segment's per-event limit and must not be sent here.
 *
 * @packageDocumentation
 */

/**
 * A user sends a prompt to the Art Assistant
 *
 * `prompt` is redacted and truncated on the client before being sent.
 * `prompt_length` is the length before truncation, so the proportion of
 * prompts being cut off stays visible.
 *
 * This schema describes events sent to Segment from [[sentArtAssistantPrompt]]
 *
 *  @example
 *  ```
 *  {
 *    action: "sentArtAssistantPrompt",
 *    context_screen_owner_type: "artAssistant",
 *    conversation_id: "b4f1c0de-1f0a-4f5c-9d3a-2b7e8c1a5d10",
 *    turn_index: 0,
 *    prompt: "Large blue abstract painting for a living room, under $10k",
 *    prompt_length: 57
 *  }
 * ```
 */
export interface SentArtAssistantPrompt {
  action: ActionType.sentArtAssistantPrompt
  context_screen_owner_type: OwnerType.artAssistant
  conversation_id: string
  turn_index: number
  prompt: string
  prompt_length: number
}

/**
 * A user taps one of the suggested prompts on the Art Assistant landing state
 *
 * This schema describes events sent to Segment from [[tappedArtAssistantSuggestion]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedArtAssistantSuggestion",
 *    context_screen_owner_type: "artAssistant",
 *    conversation_id: "b4f1c0de-1f0a-4f5c-9d3a-2b7e8c1a5d10",
 *    subject: "Emerging photographers showing in Berlin right now",
 *    position: 1
 *  }
 * ```
 */
export interface TappedArtAssistantSuggestion {
  action: ActionType.tappedArtAssistantSuggestion
  context_screen_owner_type: OwnerType.artAssistant
  conversation_id: string
  subject: string
  position: number
}

/**
 * A user taps an artwork the Art Assistant recommended
 *
 * `turn_index` and `position` together identify which answer the artwork came
 * from and where in that answer it appeared.
 *
 * This schema describes events sent to Segment from [[tappedArtAssistantArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedArtAssistantArtwork",
 *    context_screen_owner_type: "artAssistant",
 *    conversation_id: "b4f1c0de-1f0a-4f5c-9d3a-2b7e8c1a5d10",
 *    turn_index: 2,
 *    artwork_id: "4d8b92b34eb68a1b2c0003f4",
 *    artwork_slug: "andy-warhol-skull",
 *    position: 0
 *  }
 * ```
 */
export interface TappedArtAssistantArtwork {
  action: ActionType.tappedArtAssistantArtwork
  context_screen_owner_type: OwnerType.artAssistant
  conversation_id: string
  turn_index: number
  artwork_id: string
  artwork_slug: string
  position: number
}

/**
 * A user rates an Art Assistant answer
 *
 * `reason` is only present on a negative rating, and comes from a fixed list
 * rather than free text so it can be aggregated.
 *
 * This schema describes events sent to Segment from [[ratedArtAssistantAnswer]]
 *
 *  @example
 *  ```
 *  {
 *    action: "ratedArtAssistantAnswer",
 *    context_screen_owner_type: "artAssistant",
 *    conversation_id: "b4f1c0de-1f0a-4f5c-9d3a-2b7e8c1a5d10",
 *    turn_index: 2,
 *    rating: "down",
 *    reason: "irrelevant"
 *  }
 * ```
 */
export interface RatedArtAssistantAnswer {
  action: ActionType.ratedArtAssistantAnswer
  context_screen_owner_type: OwnerType.artAssistant
  conversation_id: string
  turn_index: number
  rating: "up" | "down"
  reason?:
    | "inaccurate"
    | "irrelevant"
    | "misunderstood"
    | "too_slow"
    | "not_enough_results"
    | "other"
}
