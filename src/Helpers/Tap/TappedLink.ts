import {
  ActionType,
  ContextModule,
  ScreenOwnerType,
  TappedLink,
} from "../../Schema"

export interface TappedLinkArgs {
  contextModule: ContextModule
  contextScreenOwnerType: ScreenOwnerType
  contextScreenOwnerId?: string
  contextScreenOwnerSlug?: string
  destinationPath: string
  destinationScreenOwnerId?: string
  destinationScreenOwnerSlug?: string
  destinationScreenOwnerType?: ScreenOwnerType
}

export const tappedLink = ({
  contextModule,
  contextScreenOwnerType,
  contextScreenOwnerId,
  contextScreenOwnerSlug,
  destinationPath,
  destinationScreenOwnerSlug,
  destinationScreenOwnerId,
  destinationScreenOwnerType,
}: TappedLinkArgs): TappedLink => {
  return {
    action: ActionType.tappedLink,
    context_module: contextModule,
    context_screen_owner_id: contextScreenOwnerId,
    context_screen_owner_slug: contextScreenOwnerSlug,
    context_screen_owner_type: contextScreenOwnerType,
    destination_path: destinationPath,
    destination_screen_owner_id: destinationScreenOwnerId,
    destination_screen_owner_slug: destinationScreenOwnerSlug,
    destination_screen_owner_type: destinationScreenOwnerType,
  }
}
