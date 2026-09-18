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

/**
 * The social network a CMS social handle belongs to.
 *
 * Instagram is the only network partners can enter today. Adding another one means
 * adding a member here rather than a new event.
 */
export type CmsSocialService = "instagram"

/**
 * @example
 * ```
 * {
 *   action: "enteredArtistSocialHandle",
 *   context_module: "artistOverviewSocials",
 *   context_page_owner_id: "derrick-adams",
 *   context_page_owner_type: "artist",
 *   handle: "derrickadamsny",
 *   outcome: "added",
 *   service: "instagram",
 * }
 * ```
 */
export interface CmsEnteredArtistSocialHandle {
  action: CmsActionType.enteredArtistSocialHandle
  context_module: CmsContextModule.artistOverviewSocials
  context_page_owner_id: string
  context_page_owner_type: CmsOwnerType.artist
  /** The saved handle, without the leading `@` */
  handle: string
  /** Whether the artist had no handle for this network before, or already had one */
  outcome: "added" | "updated"
  service: CmsSocialService
}

export type CmsArtistFlow =
  | CmsClickedFeaturedInEditorialBadge
  | CmsEnteredArtistSocialHandle
