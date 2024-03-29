import { ContextModule } from "../Values/ContextModule"
import { OwnerType, PageOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing Search events
 * @packageDocumentation
 */

/**
 * A user focuses on a search box
 *
 * This schema describes events sent to Segment from [[focusedOnSearchInput]]
 *
 *  @example
 *  ```
 *  {
 *    action: "focusedOnSearchInput",
 *    context_module: "header",
 *    context_owner_type: "home"
 *  }
 * ```
 */
export interface FocusedOnSearchInput {
  action: ActionType.focusedOnSearchInput
  context_module: ContextModule
  context_owner_type: PageOwnerType
  context_owner_id?: string
  context_owner_slug?: string
}

/**
 * A user selects an item from search
 *
 * This schema describes events sent to Segment from [[selectedItemFromSearch]]
 *
 *  @example
 *  ```
 *  {
 *    action: "selectedItemFromSearch",
 *    context_module: "priceEstimate",
 *    context_owner_type: "consign",
 *    owner_type: "artist",
 *    owner_id: "5df3e3fa485efe0012c37055",
 *    owner_slug: "andy-warhol",
 *    query: "andy warhol"
 *  }
 * ```
 */
export interface SelectedItemFromSearch {
  action: ActionType.selectedItemFromSearch
  context_module: ContextModule
  context_owner_type: PageOwnerType
  context_owner_id?: string
  context_owner_slug?: string
  destination_owner_type?: PageOwnerType
  destination_owner_id?: string
  destination_owner_slug?: string
  owner_type: OwnerType
  owner_id: string
  owner_slug: string
  query: string
}

/**
 * A user searches with no results
 *
 * This schema describes events sent to Segment from [[searchedWithNoResults]]
 *
 *  @example
 *  ```
 *  {
 *    action: "searchedWithNoResults",
 *    context_module: "header",
 *    context_owner_type: "home",
 *    destination_owner_type: "search",
 *    query: "andhuwe"
 *  }
 * ```
 */
export interface SearchedWithNoResults {
  action: ActionType.searchedWithNoResults
  context_module: ContextModule
  context_owner_type: PageOwnerType
  context_owner_id?: string
  context_owner_slug?: string
  destination_owner_type?: PageOwnerType
  query: string
}

/**
 * A user searches with results
 *
 * This schema describes events sent to Segment from [[searchedWithResults]]
 *
 *  @example
 *  ```
 *  {
 *    action: "searchedWithResults",
 *    context_module: "header",
 *    context_owner_type: "home",
 *    destination_owner_type: "search",
 *    query: "Banksy"
 *  }
 * ```
 */
export interface SearchedWithResults {
  action: ActionType.searchedWithResults
  context_module: ContextModule
  context_owner_type: PageOwnerType
  context_owner_id?: string
  context_owner_slug?: string
  destination_owner_type?: PageOwnerType
  query: string
}

/**
 * A user queries the Artsy Price Database, including the artist_id, string queried, and applied filters
 *
 * This schema describes events sent to Segment from [[searchedPriceDatabase]]
 *
 *  @example
 *  ```
 *  {
 *    action: "searchedPriceDatabase",
 *    context_module: "priceDatabaseLanding",
 *    context_owner_type: "priceDatabase",
 *    destination_owner_type: "artistAuctionResults",
 *    destination_owner_id: "4e9746234e77d300010010c6",
 *    destination_owner_slug: "franz-kline",
 *    filters: "{"medium": "print", "size": "large"}"
 *    query: "franz kline"
 *  }
 * ```
 */
export interface SearchedPriceDatabase {
  action: ActionType.searchedPriceDatabase
  context_module: ContextModule.priceDatabaseLanding
  context_owner_type: OwnerType.priceDatabase
  destination_owner_type: OwnerType.artistAuctionResults
  destination_owner_id: string
  destination_owner_slug: string
  filters: string
  query: string
}

/**
 * A user focuses on the Artsy Price Database search box
 *
 * This schema describes events sent to Segment from [[focusedOnPriceDatabaseSearchInput]]
 *
 *  @example
 *  ```
 *  {
 *    action: "focusedOnPriceDatabaseSearchInput",
 *    context_module: "priceDatabaseLanding",
 *    context_owner_type: "priceDatabase"
 *  }
 * ```
 */
export interface FocusedOnPriceDatabaseSearchInput {
  action: ActionType.focusedOnPriceDatabaseSearchInput
  context_module: ContextModule.priceDatabaseLanding
  context_owner_type: OwnerType.priceDatabase
}

/**
 * A user selects an artist from the Price Database artist search
 *
 * This schema describes events sent to Segment from [[selectedItemFromPriceDatabaseSearch]]
 *
 *  @example
 *  ```
 *  {
 *    action: "selectedItemFromPriceDatabaseSearch",
 *    context_module: "priceDatabaseLanding",
 *    context_owner_type: "priceDatabase",
 *    owner_type: "artist",
 *    owner_id: "5df3e3fa485efe0012c37055",
 *    owner_slug: "andy-warhol",
 *    query: "andy warhol"
 *  }
 * ```
 */
export interface SelectedItemFromPriceDatabaseSearch {
  action: ActionType.selectedItemFromPriceDatabaseSearch
  context_module: ContextModule.priceDatabaseLanding
  context_owner_type: OwnerType.priceDatabase
  owner_type: OwnerType.artist
  owner_id: string
  owner_slug: string
  query: string
}

/**
 * A user searches for an artist in the consignment submission flow but receives an error and cannot search
 *
 * This schema describes events sent to Segment from [[consignmentArtistFailed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "consignmentArtistFailed",
 *    context_module: "consignSubmissionFlow",
 *    context_owner_type: "consign",
 *    query: "artist we are not accepting submissions for"
 *  }
 * ```
 */
export interface ConsignmentArtistFailed {
  action: ActionType.consignmentArtistFailed
  context_module: ContextModule.consignSubmissionFlow
  context_owner_type: OwnerType.consign
  query: string
}

/**
 * A user selects a quick navigation item within a search suggestion
 *
 * This schema describes events sent to Segment from [[selectedSearchSuggestionQuickNavigationItem]]
 *
 *  @example
 *  ```
 *  {
 *    action: "selectedSearchSuggestionQuickNavigationItem",
 *    context_module: "header",
 *    destination_path: "/artist/andy-warhol/works-for-sale",
 *    label: "Auction Results"
 *  }
 *  ```
 */
export interface SelectedSearchSuggestionQuickNavigationItem {
  action: ActionType.selectedSearchSuggestionQuickNavigationItem
  context_module?: ContextModule
  destination_path: string
  label: "Artworks" | "Auction Results"
}

/**
 * User fills address and has/or not auto completion with results
 *
 * This schema describes events sent to Segment from [[addressAutoCompletionResult]]
 *
 *  @example
 *  ```
 *  {
 *    action: "addressAutoCompletionResult",
 *    context_module:"OrdersShipping",
 *    context_owner_type: "orders-shipping",
 *    context_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *    input: "Weserstr."
 *    suggested_addresses_results: 3
 *  }
 * ```
 */
export interface AddressAutoCompletionResult {
  action: ActionType.addressAutoCompletionResult
  context_module: ContextModule
  context_owner_type: PageOwnerType
  context_owner_id?: string
  input: string
  suggested_addresses_results: number
}

/**
 * A User selects one address from the address auto completion options
 *
 * This schema describes events sent to Segment from [[selectedItemFromAddressAutoCompletion]]
 *
 *  @example
 *  ```
 *  {
 *    action: "selectedItemFromAddressAutoCompletion",
 *    context_module:"OrdersShipping",
 *    context_owner_type: "orders-shipping",
 *    context_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *    input: "Wes"
 *    item: "Weserstr."
 *  }
 * ```
 */
export interface SelectedItemFromAddressAutoCompletion {
  action: ActionType.selectedItemFromAddressAutoCompletion
  context_module: ContextModule
  context_owner_type: PageOwnerType
  context_owner_id?: string
  input: string
  item: string
}

/**
 * User edits a suggested address
 *
 * This schema describes events sent to Segment from [[editedAutocompletedAddress]]
 *
 *  @example
 *  ```
 *  {
 *    action: "editedAutocompletedAddress",
 *    context_module:"OrdersShipping",
 *    context_owner_type: "orders-shipping",
 *    context_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *    field: "Address line 2"
 *  }
 * ```
 */
export interface EditedAutocompletedAddress {
  action: ActionType.editedAutocompletedAddress
  context_module: ContextModule
  context_owner_type: PageOwnerType
  context_owner_id?: string
  field: string
}
