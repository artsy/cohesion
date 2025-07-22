import { ScreenOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * A user saves a price range
 *
 * This schema describes events sent to Segment from [[savedPriceRange]]
 *
 *  @example
 *  ```
 *  {
 *    action: "savedPriceRange",
 *    context_screen_owner_type: "priceRange",
 *    context_module: "priceRange"
 *    value: "100-500"
 *  }
 * ```
 */
export interface SavedPriceRange {
  action: ActionType.savedPriceRange
  context_screen_owner_type: ScreenOwnerType
  context_module?: string
  value: string
}
