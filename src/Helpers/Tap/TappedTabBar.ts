import {
  ActionType,
  ContextModule,
  OwnerType,
  TappedTabBar,
} from "../../Schema"
import { Tab } from "../../Schema/Values/Tab"

export interface TappedTabBarArgs {
  badge?: boolean
  tab: Tab
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
 *   badge: true,
 *   tab: "sell"
 * })
 * ```
 */
export const tappedTabBar = ({
  badge,
  tab,
}: TappedTabBarArgs): TappedTabBar => {
  return {
    action: ActionType.tappedTabBar,
    badge: badge || false,
    context_module: ContextModule.tabBar,
    context_screen_owner_type: OwnerType.home,
    tab,
  }
}
