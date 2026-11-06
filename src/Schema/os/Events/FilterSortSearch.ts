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
 *   query: "Kelly",
 *   value: 42,
 *   query_length: 5,
 *   is_partner_search_profile: true
 * }
 * ```
 */
export interface OsSearchedArtworks {
  action: OsActionType.searchedArtworks
  context_module: OsContextModule.artworkSearch
  context_page_owner_type: OsOwnerType.inventory | OsOwnerType.collection
  /** The committed search string */
  query: string
  /** Number of results after the search resolves */
  value: number
  /**
   * Length of the committed search string.
   * Optional for senders that predate the partner search profile.
   */
  query_length?: number
  /**
   * Whether the search used the partner inventory search profile (`PARTNER_INVENTORY`).
   * Optional for senders that predate the partner search profile.
   */
  is_partner_search_profile?: boolean
}

/**
 * A partner opens or selects an artwork in the artwork table while a keyword
 * search is active. `interaction` is "opened" when the partner expands the row or
 * opens the Edit Artwork drawer, and "selected" when they check the row's
 * checkbox (unchecking does not fire). Pairs with [[OsSearchedArtworks]], which
 * carries the result count, to measure how often a search leads to opening or
 * selecting a result.
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
 *   query_length: 5,
 *   is_partner_search_profile: true
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
 *   query_length: 5,
 *   is_partner_search_profile: false
 * }
 * ```
 */
export interface OsClickedArtworkSearchResult {
  action: OsActionType.clickedArtworkSearchResult
  context_module: OsContextModule.artworkTable
  context_page_owner_type: OsOwnerType
  artwork_id: string
  /** "opened" = row expanded or Edit Artwork drawer opened, "selected" = row checkbox checked */
  interaction: "opened" | "selected"
  /** Length of the active search string */
  query_length: number
  /** Whether the active search used the partner inventory search profile (`PARTNER_INVENTORY`) */
  is_partner_search_profile: boolean
}

export type OsFilterSortSearch =
  | OsAppliedFilter
  | OsClearedFilters
  | OsClickedArtworkSearchResult
  | OsClickedFilterDrawer
  | OsRemovedFilter
  | OsSearchedArtworks
  | OsSortedColumn
