import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * A user taps "Explore My Collection" (onboarding flow) on the "Do more on Artsy".
 *
 * This schema describes events sent to Segment from [[tappedExploreMyCollection]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedExploreMyCollection",
 *    context_screen: "home",
 *    context_screen_owner_type: "home"
 *    context_module: "doMoreOnArtsy",
 *    destination_screen_owner_type: "myCollectionOnboarding",
 *  }
 * ```
 */
export interface TappedExploreMyCollection {
  action: ActionType.tappedExploreMyCollection
  context_screen: OwnerType.home
  context_screen_owner_type: OwnerType.home
  context_module: ContextModule.doMoreOnArtsy
  destination_screen_owner_type: OwnerType.myCollectionOnboarding
}
