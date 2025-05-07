/**
 * Schemas describing CMS ArtworkFilter events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsActionType } from "./index"

/**
 * Click on the duplicate artwork button
 *
 * @example
 * ```
 * {
 *   action: "clickedonduplicateartwork",
 * }
 * ```
 */
export interface CmsArtworkFilterClickDuplicateArtwork {
  action: CmsActionType.clickedOnDuplicateArtwork
}

/**
 * Click on the sort at the top right of the sreen
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Artworks - filter artworks",
 *   label: "change sorting method",
 *   title: "Sort by",
 * }
 * ```
 */
export interface CmsArtworkFilterClickSort {
  action: "click"
  context_module: CmsContextModule.artworkFilterFilterArtworks
  label: "change sorting method"
  title: string
}

/**
 * Filter through one of the filters at the top
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Artworks - filter artworks",
 *   label: Filter by <some filter>",
 *   value: "true",
 * }
 * ```
 */
export interface CmsArtworkFilterQuickEditClickFilter {
  action: "click"
  context_module: CmsContextModule.artworkFilterFilterArtworks
  label: string
  value: string
}

/**
 * Quick edit - change price
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Artworks - quick edit",
 *   label: "save price",
 *   artwork_id: "artwork_id",
 * }
 * ```
 */
export interface CmsArtworkFilterQuickEditSavePrice {
  action: "click"
  context_module: CmsContextModule.artworkFilterQuickEdit
  label: "save price"
  artwork_id: string
}

/**
 * Quick edit - change availability
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Artworks - quick edit",
 *   label: "change availability",
 *   artwork_id: "artwork_id",
 *   value: "for sale"
 * }
 * ```
 */
export interface CmsArtworkFilterQuickEditChangeAvailability {
  action: "click"
  context_module: CmsContextModule.artworkFilterQuickEdit
  label: "change availability"
  artwork_id: string
  value: string
}

/**
 * Quick edit - publish
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Artworks - quick edit",
 *   label: "publish",
 *   artwork_id: "artwork_id",
 * }
 * ```
 */
export interface CmsArtworkFilterQuickEditPublish {
  action: "click"
  context_module: CmsContextModule.artworkFilterQuickEdit
  label: "publish"
  artwork_id: string
}

/**
 * Click "import work " to enter the batch import flow
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: 'batchImportFlow',
 *   label: "click import works",
 * }
 * ```
 */
export interface CmsArtworkFilterQuickEditClickImport {
  action: "click"
  context_module: CmsContextModule.batchImportFlow
  label: "click import works"
}

/**
 * Search something using the search bar
 *
 * @example
 * ```
 * {
 *   action: "searched artwork",
 *   context_module: 'Artworks - search',
 *   value: "search input",
 * }
 * ```
 */
export interface CmsArtworkFilterSearch {
  action: CmsActionType.searchedArtwork
  context_module: CmsContextModule.artworkFilterSearch
  value: string
}

/**
 * Remove a filter from the filter bar
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: 'Artworks - filter artworks',
 *   label: "remove filter",
 * }
 * ```
 */
export interface CmsArtworkFilterRemoveFilter {
  action: "click"
  context_module: CmsContextModule.artworkFilterFilterArtworks
  label: "remove filter"
}

export type CmsArtworkFilter =
  | CmsArtworkFilterClickDuplicateArtwork
  | CmsArtworkFilterClickSort
  | CmsArtworkFilterQuickEditClickFilter
  | CmsArtworkFilterQuickEditSavePrice
  | CmsArtworkFilterQuickEditChangeAvailability
  | CmsArtworkFilterQuickEditPublish
  | CmsArtworkFilterQuickEditClickImport
  | CmsArtworkFilterRemoveFilter
  | CmsArtworkFilterSearch
