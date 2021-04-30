import {
  ActionType,
  CommercialFilterParamsChanged,
  ContextModule,
  OwnerType,
} from "../../Schema"

export interface CommercialFilterParamsChangedArgs {
  current: string
  changed: string
  contextOwnerId?: string
  contextOwnerSlug?: string
  contextOwnerType: OwnerType
}

/**
 * A user changed filters on the main artworkGrid
 *
 * @example
 * ```
 * commercialFilterParamsChanged({
 *   context_owner_type: OwnerType.artist,
 *   context_owner_id: "58ba65b1275b24421f80a102",
 *   context_owner_slug: "tugo-cheng",
 *   changed: '{"acquireable": 1, "priceRange": "1000-5000"}',
 *   current: '{"acquireable": 0, "priceRange": "*-*"}'
 * })
 * ```
 */
export const commercialFilterParamsChanged = ({
  changed,
  contextOwnerId,
  contextOwnerSlug,
  contextOwnerType,
  current,
}: CommercialFilterParamsChangedArgs): CommercialFilterParamsChanged => ({
  action: ActionType.commercialFilterParamsChanged,
  changed,
  context_module: ContextModule.artworkGrid,
  context_owner_id: contextOwnerId,
  context_owner_slug: contextOwnerSlug,
  context_owner_type: contextOwnerType,
  current,
})
