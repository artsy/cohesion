import {
  ActionType,
  ContextModule,
  OwnerType,
  ScreenOwnerType,
  TappedSell,
} from "../../Schema"

export interface TappedSellArgs {
  contextModule: ContextModule
  contextScreenOwnerType: ScreenOwnerType
  contextScreenOwnerId?: string
  contextScreenOwnerSlug?: string
  subject: string
}

export const tappedSell = ({
  contextModule,
  contextScreenOwnerType,
  contextScreenOwnerId,
  contextScreenOwnerSlug,
  subject,
}: TappedSellArgs): TappedSell => {
  return {
    action: ActionType.tappedSell,
    context_module: contextModule,
    context_screen_owner_id: contextScreenOwnerId,
    context_screen_owner_slug: contextScreenOwnerSlug,
    context_screen_owner_type: contextScreenOwnerType,
    destination_screen_owner_type: OwnerType.sell,
    subject,
  }
}
