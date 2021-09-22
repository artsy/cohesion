import { ActionType, ContextModule, OwnerType } from "../../Schema"
import { TappedInboxConversation } from "../../Schema/Events/Conversations"

/**
 * A user taps an inquiry message within their inbox
 *
 *  @example
 *  ```
 *  tappedInboxConversation({
 *    artwork_id: "5fa1bb26522ad2000edb793f",
 *    context_screen_owner_id: "6cf3e3fa485efe0012c37055",
 *    context_screen_owner_slug: "context-slug",
 *    destination_screen_owner_id: "5df3e3fa485efe0012c37055",
 *    partner_id: "51912367a0134c613000001d"
 *  })
 * ```
 */
export const tappedInboxConversation = (
  props: Omit<
    TappedInboxConversation,
    | "action"
    | "context_module"
    | "context_screen_owner_type"
    | "destination_screen_owner_type"
  >,
): TappedInboxConversation => {
  return {
    action: ActionType.tappedInboxConversation,
    artwork_id: props.artwork_id,
    context_module: ContextModule.inboxInquiries,
    context_screen_owner_id: props.context_screen_owner_id,
    context_screen_owner_slug: props.context_screen_owner_slug,
    context_screen_owner_type: OwnerType.inboxInquiries,
    destination_screen_owner_id: props.destination_screen_owner_id,
    destination_screen_owner_type: OwnerType.inboxConversation,
    partner_id: props.partner_id,
  }
}
