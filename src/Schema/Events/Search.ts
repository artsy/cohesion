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
