import { ActionType } from "."
import { ContextModule } from "../Values/ContextModule"
import { FilterParams } from "../Values/FilterParams"
import { OwnerType } from "../Values/OwnerType"

/**
 * A user applies filters to a filterable/sortable module
 *
 * This schema describes events sent to Segment from [[CommercialFilterParamsChanged]]
 *
 *  @example
 *  ```
 *  {
 *    action: "commercialFilterParamsChanged",
 *    context_module: "artworkGrid",
 *    context_owner_type: "artist",
 *    context_owner_id: "58ba65b1275b24421f80a102",
 *    context_owner_slug: "tugo-cheng",
 *    changed: {acquireable = 1; priceRange = "1000-5000";},
 *    current: {acquireable = 0; priceRange = "*-*";}
 *  }
 * ```
 */
export interface CommercialFilterParamsChanged {
  action: ActionType.commercialFilterParamsChanged
  context_module: ContextModule
  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
  current: FilterParams
  changed: FilterParams
}
