import {
  ActionType,
  ContextModule,
  ScreenOwnerType,
  TappedRegisterToBid,
} from "../../Schema"

export interface TappedRegisterToBidArgs {
  contextModule: ContextModule
  contextScreenOwnerType: ScreenOwnerType
  contextScreenOwnerId: string
  contextScreenOwnerSlug: string
}

/**
 * A user taps on register to bid button within the iOS app
 *
 * @example
 * ```
 * tappedRegisterToBid({
 *   contextModule: true,
 *   contextScreenOwnerType: "sale",
 *   contextScreenOwnerId: "5359794d2a1e86c3741001f8",
 *   contextScreenOwnerSlug "auction-slug":
 * })
 * ```
 */

export const tappedRegisterToBid = ({
  contextModule,
  contextScreenOwnerType,
  contextScreenOwnerId,
  contextScreenOwnerSlug,
}: TappedRegisterToBidArgs): TappedRegisterToBid => {
  return {
    action: ActionType.tappedRegisterToBid,
    context_module: contextModule,
    context_screen_owner_type: contextScreenOwnerType,
    context_screen_owner_id: contextScreenOwnerId,
    context_screen_owner_slug: contextScreenOwnerSlug,
  }
}
