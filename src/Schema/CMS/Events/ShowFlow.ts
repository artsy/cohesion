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

export type CmsShowFlow = CmsShowAddArtworkToShow | CmsShowDownloadOriginalShot
