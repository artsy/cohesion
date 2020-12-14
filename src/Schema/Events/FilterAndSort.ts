import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Master list of filter params available in web and iOS, specific to the artwork grid
 *
 * Intended action by a user that triggered an event
 * @packageDocumentation
 */
export interface CommercialFilterParams {
  acquireable?: boolean
  artist_id?: string
  artistIDs?: string[]
  atAuction?: boolean
  color?: string
  /**
   * FIXME: this and other Range filters may be string[]
   */
  dimensionRange?: string
  estimateRange?: string
  forSale?: boolean
  height?: string
  includeArtworksByFollowedArtists?: boolean
  inquireableOnly?: boolean
  keyword?: string
  majorPeriods?: string[]
  medium?: string
  offerable?: boolean
  page?: number
  partnerID?: string
  priceRange?: string
  sizes?: string[]
  sort?: string
  term?: string
  width?: string
}

/**
 * Master list of filter params available in web and iOS, specific to auction results
 *
 * Intended action by a user that triggered an event
 * @packageDocumentation
 */
export interface AuctionResultsFilterParams {
  allowEmptyCreatedDates?: boolean
  categories?: string[]
  createdAfterYear?: string
  createdBeforeYear?: string
  earliestCreatedYear?: string
  latestCreatedYear?: string
  organizations?: string[]
  pageAndCursor?: string[]
  sizes?: string[]
  sort?: string
}

/**
 * A user applies filters to a filterable/sortable artworks or auction results module
 *
 * This schema describes events sent to Segment from [[commercialFilterParamsChanged]]
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
  context_module: ContextModule.artworkGrid | ContextModule.auctionResults
  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
  current: CommercialFilterParams | AuctionResultsFilterParams
  changed: CommercialFilterParams | AuctionResultsFilterParams
}
