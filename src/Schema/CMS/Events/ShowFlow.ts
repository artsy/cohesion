/**
 * Schemas describing CMS Show events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"

/**
 * Add artwork to show
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: CmsContextModule.addArtworkToShow,
 *   artwork_id: "artwork-id",
 *   show_id: "show-id",
 *   user_id: "user-id",
 * }
 * ```
 */
export interface CmsShowAddArtworkToShow {
  action: "click"
  context_module: CmsContextModule.addArtworkToShow
  artwork_id: string
  show_id: string
  user_id: string
}

/**
 * Download original shot
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: CmsContextModule.showsInstallShots,
 *   artwork_id: "artwork-id",
 *   show_id: "show-id",
 *   user_id: "user-id",
 * }
 * ```
 */
export interface CmsShowDownloadOriginalShot {
  action: "click"
  context_module: CmsContextModule.showsInstallShots
  artwork_id: string
  show_id: string
  user_id: string
}

/**
 * Add show to inventory: a partner adds a show or fair booth from the CMS show
 * page to ArtOS inventory as a collection. Sent once the collection has been
 * created successfully, not when the button is clicked.
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   artwork_count: 12,
 *   context_module: CmsContextModule.addShowToInventory,
 *   partner_list_id: "partner-list-id",
 *   show_id: "show-id",
 *   user_id: "user-id",
 * }
 * ```
 */
export interface CmsShowAddShowToInventory {
  action: "click"
  artwork_count: number
  context_module: CmsContextModule.addShowToInventory
  partner_list_id: string
  show_id: string
  user_id: string
}

export type CmsShowFlow =
  | CmsShowAddArtworkToShow
  | CmsShowAddShowToInventory
  | CmsShowDownloadOriginalShot
