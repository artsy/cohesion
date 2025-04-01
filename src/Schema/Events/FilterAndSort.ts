import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * A user applies filters to a filterable/sortable artwork grid
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
 *    changed: '{"acquireable": 1, "priceRange": "1000-5000"}',
 *    current: '{"acquireable": 0, "priceRange": "*-*"}'
 *  }
 * ```
 */
export interface CommercialFilterParamsChanged {
  action: ActionType.commercialFilterParamsChanged
  context_module: ContextModule.artworkGrid
  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
  current: string
  changed: string
  query?: string
}

/**
 * A user filters an artwork grid facet by keyword, and then selects all resulting options
 *
 * This schema describes events sent to Segment from [[commercialFilterSelectedAll]]
 *
 *  @example
 *  ```
 *  {
 *    action: "commercialFilterSelectedAll",
 *    context_module: "artworkGrid",
 *    context_owner_type: "artist",
 *    context_owner_id: "58ba65b1275b24421f80a102",
 *    context_owner_slug: "tugo-cheng",
 *    facet: "locationCities",
 *    query: "africa",
 *  }
 * ```
 */
export interface CommercialFilterSelectedAll {
  action: ActionType.commercialFilterSelectedAll
  context_module: ContextModule.artworkGrid
  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
  facet: string
  query: string
}

/**
 * A user selects a follow category
 *
 * This schema describes events sent to Segment from [[selectedFromDrawer]]
 *
 *  @example
 *  ```
 *  {
 *    action: "selectedFromDrawer",
 *    context_screen: "favoritesFollows",
 *    query: "artists",
 *  }
 * ```
 */
export interface SelectedFromDrawer {
  action: ActionType.selectedFromDrawer
  context_screen: OwnerType.favoritesFollows
  subject: "artists" | "galleries" | "categories" | "shows"
}

/**
 * A user applies filters to a filterable/sortable auction results module
 *
 * This schema describes events sent to Segment from [[auctionResultsFilterParamsChanged]]
 *
 *  @example
 *  ```
 *  {
 *    action: "auctionResultsFilterParamsChanged",
 *    context_module: "artistAuctionResults",
 *    context_owner_type: "artist",
 *    context_owner_id: "510ade6c4926534fd80000e9",
 *    context_owner_slug: "alex-da-corte",
 *    changed: '{"createdAfterYear": 2014}',
 *    current: '{"createdAfterYear": 2008, "sort": "DATE_DESC"}'
 *  }
 * ```
 */
export interface AuctionResultsFilterParamsChanged {
  action: ActionType.auctionResultsFilterParamsChanged
  context_module:
    | ContextModule.auctionResults
    | ContextModule.artistAuctionResults
  /** artistAuctionResults should be used for the Artist Insights feature (Auction results tab on web, Insights tab on app) */
  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
  current: string
  changed: string
}

/**
 * A user applies filters to a filterable/sortable Price Database module
 *
 * This schema describes events sent to Segment from [[priceDatabaseFilterParamsChanged]]
 *
 *  @example
 *  ```
 *  {
 *    action: "priceDatabaseFilterParamsChanged",
 *    context_module: "priceDatabaseLanding",
 *    context_owner_type: "priceDatabase",
 *    changed: '{"medium": "painting"}',
 *    current: '{"medium": "print", "size": "large"}'
 *  }
 * ```
 */
export interface PriceDatabaseFilterParamsChanged {
  action: ActionType.priceDatabaseFilterParamsChanged
  context_module: ContextModule.priceDatabaseLanding
  context_owner_type: OwnerType.priceDatabase
  current: string
  changed: string
}

/**
 * A user selects a recent price range from the price filter screen
 *
 * This schema describes events sent to Segment from [[selectedRecentPriceRange]]
 *
 *  @example
 *  ```
 *  {
 *    action: "selectedRecentPriceRange",
 *    context_module: "recentPriceRanges",
 *    context_screen_owner_type: "artworkPriceFilter",
 *    collector_profile_sourced: true
 *  }
 * ```
 */
export interface SelectedRecentPriceRange {
  action: ActionType.selectedRecentPriceRange
  context_module: ContextModule.recentPriceRanges
  context_screen_owner_type: OwnerType.artworkPriceFilter
  collector_profile_sourced: boolean
}
