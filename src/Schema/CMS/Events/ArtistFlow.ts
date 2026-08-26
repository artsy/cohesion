/**
 * Schemas describing CMS Artist events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsOwnerType } from "../Values/CmsOwnerType"
import { CmsActionType } from "."

/**
 * Fired when a user clicks the "Featured in Editorial" badge on the artist list
 * or artist show page, navigating to the associated article.
 *
 * @example
 * ```
 * {
 *   action: "clickedFeaturedInEditorialBadge",
 *   context_module: "artistList",
 *   context_page_owner_id: "derrick-adams",
 *   context_page_owner_type: "artist",
 *   destination_path: "/article/some-editorial-slug",
 * }
 * ```
 */
export interface CmsClickedFeaturedInEditorialBadge {
  action: CmsActionType.clickedFeaturedInEditorialBadge
  context_module: CmsContextModule.artistShow | CmsContextModule.artistList
  context_page_owner_id: string
  context_page_owner_type: CmsOwnerType.artist
  destination_path: string
}

export type CmsArtistFlow = CmsClickedFeaturedInEditorialBadge
