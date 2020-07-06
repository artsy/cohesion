import {
  ActionType,
  ContextModule,
  OwnerType,
  TappedTabBar,
} from "../../Schema"

export interface TappedTabBarArgs {
  badge: boolean
  tab: string
}

/**
 * A user taps an icon in the Tab Bar within the iOS app
 *
 * badge is true if present, false if not
 *
 * tab describes the icon tapped by the user
 *
 * @example
 * ```
 * tappedTabBar({
 *   badge: false,
 *   tab: "sell"
 * })
 * ```
 */
export const tappedTabBar = ({ badge }: TappedTabBarArgs): TappedTabBar => {
  return {
    action: ActionType.tappedTabBar,
    badge,
    context_module: ContextModule.tabBar,
    context_screen_owner_type: OwnerType.home,
    tab: "sell",
  }
}
