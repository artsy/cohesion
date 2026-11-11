import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "."

/**
 * Schemas describing Art OS Filter, Sort & Search events
 * @packageDocumentation
 */

/**
 * A partner opens the filter drawer via the Filter pill in the inventory or collection view.
 *
 * This schema describes events sent to Segment from [[OsClickedFilterDrawer]]
 *
 * @example
 * ```
 * {
 *   action: "clickedFilterDrawer",
 *   context_module: "artworkFilters",
 *   context_page_owner_type: "inventory",
 *   value: 2
 * }
 * ```
 */
export interface OsClickedFilterDrawer {
  action: OsActionType.clickedFilterDrawer
  context_module: OsContextModule.artworkFilters
  context_page_owner_type: OsOwnerType.inventory | OsOwnerType.collection
  /** Number of active filters when opening the drawer */
  value: number
}

/**
 * A partner applies a filter in the filter drawer.
 * One event fires per selection; `label` identifies the filter type
 * and `value` carries the selected value.
 *
 * This schema describes events sent to Segment from [[OsAppliedFilter]]
 *
 * @example Availability filter
 * ```
 * {
 *   action: "appliedFilter",
 *   context_module: "artworkFilters",
 *   context_page_owner_type: "inventory",
 *   label: "availability",
 *   value: "for sale"
 * }
 * ```
 *
 * @example Artist filter
 * ```
 * {
 *   action: "appliedFilter",
 *   context_module: "artworkFilters",
 *   context_page_owner_type: "collection",
 *   label: "artist",
 *   value: "<artistId>"
 * }
 * ```
 */
export interface OsAppliedFilter {
  action: OsActionType.appliedFilter
  context_module: OsContextModule.artworkFilters
  context_page_owner_type: OsOwnerType.inventory | OsOwnerType.collection
  label: "availability" | "status" | "location" | "artist" | "coa"
  value: string
}

/**
 * A partner removes a single filter via the selected-filter pill or the per-section Clear link.
 *
 * This schema describes events sent to Segment from [[OsRemovedFilter]]
 *
 * @example
 * ```
 * {
 *   action: "removedFilter",
 *   context_module: "artworkFilters",
 *   context_page_owner_type: "inventory",
 *   label: "availability",
 *   value: "for sale"
 * }
 * ```
 */
export interface OsRemovedFilter {
  action: OsActionType.removedFilter
  context_module: OsContextModule.artworkFilters
  context_page_owner_type: OsOwnerType.inventory | OsOwnerType.collection
  label: "availability" | "status" | "location" | "artist" | "coa"
  value: string
}

/**
 * A partner clears all active filters via the "Clear all" button.
 *
 * This schema describes events sent to Segment from [[OsClearedFilters]]
 *
 * @example
 * ```
 * {
 *   action: "clearedFilters",
 *   context_module: "artworkFilters",
 *   context_page_owner_type: "inventory",
 *   value: 3
 * }
 * ```
 */
export interface OsClearedFilters {
  action: OsActionType.clearedFilters
  context_module: OsContextModule.artworkFilters
  context_page_owner_type: OsOwnerType.inventory | OsOwnerType.collection
  /** Number of filters cleared */
  value: number
}

/**
 * A partner clicks a sortable column header to sort the artwork table.
 * A column-header click cycles ascending → descending → default.
 *
 * This schema describes events sent to Segment from [[OsSortedColumn]]
 *
 * @example
 * ```
 * {
 *   action: "sortedColumn",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "inventory",
 *   label: "date added",
 *   value: "asc"
 * }
 * ```
 */
export interface OsSortedColumn {
  action: OsActionType.sortedColumn
  context_module: OsContextModule.artworkTable
  context_page_owner_type: OsOwnerType.inventory | OsOwnerType.collection
  /** The column being sorted */
  label: string
  value: "asc" | "desc" | "default"
}

/**
 * A partner submits a keyword search in the artwork search bar.
 * Fires on the debounced commit (not per keystroke).
 *
 * This schema describes events sent to Segment from [[OsSearchedArtworks]]
 *
 * @example
 * ```
 * {
 *   action: "searchedArtworks",
 *   context_module: "artworkSearch",
 *   context_page_owner_type: "inventory",
 *   is_partner_search_profile: true,
 *   query: "Kelly",
 *   search_id: "6f1c2a9e-3b4d-4e8a-9d57-0c1b2a3d4e5f",
 *   value: 42
 * }
 * ```
 */
export interface OsSearchedArtworks {
  action: OsActionType.searchedArtworks
  context_module: OsContextModule.artworkSearch
  context_page_owner_type: OsOwnerType.inventory | OsOwnerType.collection
  /**
   * Whether the search used the partner inventory search profile (`PARTNER_INVENTORY`).
   * Optional for senders that predate the partner search profile.
   */
  is_partner_search_profile?: boolean
  /** The committed search string */
  query: string
  /**
   * Identifies this search. The [[OsClickedArtworkSearchResult]] events sent for
   * its results carry the same value, which joins each click to its exact search.
   * Optional for senders that predate it.
   */
  search_id?: string
  /** Number of results after the search resolves */
  value: number
}

/**
 * A partner opens or selects an artwork in the artwork table while a keyword
 * search is active. `interaction` is "opened" when the partner expands the row or
 * opens the Edit Artwork drawer, and "selected" when they check the row's
 * checkbox (unchecking does not fire). It carries the same `query` and
 * `search_id` as [[OsSearchedArtworks]], which carries the result count, so the
 * two join to measure how often a search leads to opening or selecting a result.
 *
 * "opened" fires alongside [[OsClickedArtworkRow]] (row expanded) or
 * [[OsClickedEditArtworkButton]] (drawer opened). Don't add it to those when
 * counting row expands or drawer opens.
 *
 * This schema describes events sent to Segment from [[OsClickedArtworkSearchResult]]
 *
 * @example Row expanded or Edit Artwork drawer opened
 * ```
 * {
 *   action: "clickedArtworkSearchResult",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   interaction: "opened",
 *   is_partner_search_profile: true,
 *   query: "Kelly",
 *   search_id: "6f1c2a9e-3b4d-4e8a-9d57-0c1b2a3d4e5f"
 * }
 * ```
 *
 * @example Row checkbox checked
 * ```
 * {
 *   action: "clickedArtworkSearchResult",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "collection",
 *   artwork_id: "abc123",
 *   interaction: "selected",
 *   is_partner_search_profile: false,
 *   query: "Kelly",
 *   search_id: "0a7e5d41-8c2f-4b36-a1e9-52d6f3c8b7a4"
 * }
 * ```
 */
export interface OsClickedArtworkSearchResult {
  action: OsActionType.clickedArtworkSearchResult
  context_module: OsContextModule.artworkTable
  context_page_owner_type: OsOwnerType.inventory | OsOwnerType.collection
  artwork_id: string
  /** "opened" = row expanded or Edit Artwork drawer opened, "selected" = row checkbox checked */
  interaction: "opened" | "selected"
  /** Whether the active search used the partner inventory search profile (`PARTNER_INVENTORY`) */
  is_partner_search_profile: boolean
  /** The active search string */
  query: string
  /**
   * The `search_id` of the [[OsSearchedArtworks]] event for the active search.
   * Absent when the page loaded with the search already in the URL, because no
   * search event was sent for it.
   */
  search_id?: string
}

export type OsFilterSortSearch =
  | OsAppliedFilter
  | OsClearedFilters
  | OsClickedArtworkSearchResult
  | OsClickedFilterDrawer
  | OsRemovedFilter
  | OsSearchedArtworks
  | OsSortedColumn
