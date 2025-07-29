/**
 * Schemas describing CMS Browse Galleries events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsOwnerType } from "../Values/CmsOwnerType"
import { CmsActionType } from "./index"

/**
 * User clicks on "Partner with Artsy" link
 *
 * @example
 * ```
 * {
 *   action: "clickedPartnerWithArtsy",
 *   context_module: "browseGalleriesHeader",
 *   context_page_owner_type: "browseGalleries"
 * }
 * ```
 */
export interface CmsBrowseGalleriesClickedPartnerWithArtsy {
  action: CmsActionType.clickedPartnerWithArtsy
  context_module: CmsContextModule.browseGalleriesHeader
  context_page_owner_type: CmsOwnerType.browseGalleries
}

/**
 * User clicks on "Gallery Insights" link
 *
 * @example
 * ```
 * {
 *   action: "clickedGalleryInsights",
 *   context_module: "browseGalleriesHeader",
 *   context_page_owner_type: "browseGalleries"
 * }
 * ```
 */
export interface CmsBrowseGalleriesClickedGalleryInsights {
  action: CmsActionType.clickedGalleryInsights
  context_module: CmsContextModule.browseGalleriesHeader
  context_page_owner_type: CmsOwnerType.browseGalleries
}

/**
 * User clicks on location filter dropdown
 *
 * @example
 * ```
 * {
 *   action: "clickedLocationFilter",
 *   context_module: "browseGalleriesFilters",
 *   context_page_owner_type: "browseGalleries",
 *   filter_type: "location"
 * }
 * ```
 */
export interface CmsBrowseGalleriesClickedLocationFilter {
  action: CmsActionType.clickedLocationFilter
  context_module: CmsContextModule.browseGalleriesFilters
  context_page_owner_type: CmsOwnerType.browseGalleries
  filter_type: "location"
}

/**
 * User clicks on specialties filter dropdown
 *
 * @example
 * ```
 * {
 *   action: "clickedSpecialtiesFilter",
 *   context_module: "browseGalleriesFilters",
 *   context_page_owner_type: "browseGalleries",
 *   filter_type: "specialties"
 * }
 * ```
 */
export interface CmsBrowseGalleriesClickedSpecialtiesFilter {
  action: CmsActionType.clickedSpecialtiesFilter
  context_module: CmsContextModule.browseGalleriesFilters
  context_page_owner_type: CmsOwnerType.browseGalleries
  filter_type: "specialties"
}

/**
 * User clicks on galleries filter dropdown
 *
 * @example
 * ```
 * {
 *   action: "clickedGalleriesFilter",
 *   context_module: "browseGalleriesFilters",
 *   context_page_owner_type: "browseGalleries",
 *   filter_type: "galleries"
 * }
 * ```
 */
export interface CmsBrowseGalleriesClickedGalleriesFilter {
  action: CmsActionType.clickedGalleriesFilter
  context_module: CmsContextModule.browseGalleriesFilters
  context_page_owner_type: CmsOwnerType.browseGalleries
  filter_type: "galleries"
}

/**
 * User clicks on a gallery card to view gallery details
 *
 * @example
 * ```
 * {
 *   action: "clickedGalleryCard",
 *   context_module: "browseGalleriesGrid",
 *   context_page_owner_type: "browseGalleries",
 *   gallery_id: "gallery-internal-id",
 *   gallery_name: "Friedman Benda",
 *   gallery_location: "New York, Los Angeles, Paris",
 *   is_women_owned: true,
 *   category: "Contemporary Design"
 * }
 * ```
 */
export interface CmsBrowseGalleriesClickedGalleryCard {
  action: CmsActionType.clickedGalleryCard
  context_module: CmsContextModule.browseGalleriesGrid
  context_page_owner_type: CmsOwnerType.browseGalleries
  gallery_id: string
  gallery_name: string
  gallery_location?: string
  is_women_owned?: boolean
  category?: string
}

/**
 * User clicks Follow button on gallery card
 *
 * @example
 * ```
 * {
 *   action: "clickedFollowGallery",
 *   context_module: "browseGalleriesGrid",
 *   context_page_owner_type: "browseGalleries",
 *   gallery_id: "gallery-internal-id",
 *   gallery_name: "Ella West Gallery",
 *   gallery_location: "Durham",
 *   is_women_owned: true,
 *   category: "Contemporary Design"
 * }
 * ```
 */
export interface CmsBrowseGalleriesClickedFollowGallery {
  action: CmsActionType.clickedFollowGallery
  context_module: CmsContextModule.browseGalleriesGrid
  context_page_owner_type: CmsOwnerType.browseGalleries
  gallery_id: string
  gallery_name: string
  gallery_location?: string
  is_women_owned?: boolean
  category?: string
}

export type CmsBrowseGalleries =
  | CmsBrowseGalleriesClickedPartnerWithArtsy
  | CmsBrowseGalleriesClickedGalleryInsights
  | CmsBrowseGalleriesClickedLocationFilter
  | CmsBrowseGalleriesClickedSpecialtiesFilter
  | CmsBrowseGalleriesClickedGalleriesFilter
  | CmsBrowseGalleriesClickedGalleryCard
  | CmsBrowseGalleriesClickedFollowGallery
