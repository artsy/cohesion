import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * A user taps on one of the cards on the "Meet your New Advisor" Rail on the home screen.
 *
 * This schema describes events sent to Segment from [[tappedProductCapabilitiesGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedProductCapabilitiesGroup",
 *    context_screen: "home",
 *    context_screen_owner_type: "home"
 *    context_module: "findTheArtYouWant",
 *  }
 * ```
 */

export interface TappedProductCapabilitiesGroup {
  action: ActionType.tappedProductCapabilitiesGroup
  context_screen: OwnerType.home
  context_screen_owner_type: OwnerType.home
  context_module:
    | ContextModule.findTheArtYouWant
    | ContextModule.myCollection
    | ContextModule.sell
    | ContextModule.priceDatabase
}
