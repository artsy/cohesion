import { ActionType, TappedNavigationTab } from "../../Schema"

/**
 * A user taps a navigation tab on App
 *
 *  @example
 *  ```
 *  tappedNavigationTab({
 *    context_module : "exhibitorsView",
 *    context_screen_owner_type: "fair",
 *    context_screen_owner_id: "5f4d80c972737e000deff1ed",
 *    context_screen_owner_slug: "latitude-art-fair-2020",
 *    subject: "View more"
 *  })
 * ```
 */
export const tappedNavigationTab = (
  props: Omit<TappedNavigationTab, "action">,
): TappedNavigationTab => {
  return {
    action: ActionType.tappedNavigationTab,
    context_module: props.context_module,
    context_screen_owner_id: props.context_screen_owner_id,
    context_screen_owner_slug: props.context_screen_owner_slug,
    context_screen_owner_type: props.context_screen_owner_type,
    subject: props.subject,
  }
}
