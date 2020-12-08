import {
  ActionType,
  ContextModule,
  ScreenOwnerType,
  TappedInfoBubble,
} from "../../Schema"

export interface TappedInfoBubbleArgs {
  contextModule: ContextModule
  contextScreenOwnerType: ScreenOwnerType
  contextScreenOwnerId?: string
  contextScreenOwnerSlug?: string
  subject: "auctionResults" | "demandIndex"
}

export const tappedInfoBubble = ({
  contextModule,
  contextScreenOwnerType,
  contextScreenOwnerId,
  contextScreenOwnerSlug,
  subject,
}: TappedInfoBubbleArgs): TappedInfoBubble => {
  return {
    action: ActionType.tappedInfoBubble,
    context_module: contextModule,
    context_screen_owner_id: contextScreenOwnerId,
    context_screen_owner_slug: contextScreenOwnerSlug,
    context_screen_owner_type: contextScreenOwnerType,
    subject,
  }
}
