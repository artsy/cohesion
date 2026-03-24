import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsActionType } from "."

/**
 * Event fired after user deletes an artwork template
 *
 * @example
 * ```
 * {
 *   action: "deletedArtworkTemplate",
 *   context_module: "Artworks - templates",
 *   template_id: "template-id",
 *   user_id: "some-user-id",
 * }
 * ```
 */
export interface ArtworkTemplatesPageDeleteArtworkTemplate {
  action: CmsActionType.deletedArtworkTemplate
  context_module: CmsContextModule.artworkTemplates
  template_id: string
  user_id: string
}

/**
 * Event fired after user clicks Use Template on an artwork template
 *
 * @example
 * ```
 * {
 *   action: "clickedUseTemplate",
 *   context_module: "Artworks - templates",
 *   template_id: "template-id",
 *   user_id: "some-user-id",
 * }
 * ```
 */
export interface ArtworkTemplatesPageClickedUseTemplate {
  action: CmsActionType.clickedUseTemplate
  context_module: CmsContextModule.artworkTemplates
  template_id: string
  user_id: string
}

/**
 * Event fired when user clicks on navigation tab in artworks page
 *
 * @example
 * ```
 * {
 *   action: "clickedArtworkNavigationTab",
 *   context_module: "Artworks - templates",
 *   tabName: "All" | "Templates",
 *
 * }
 * ```
 */
export interface ArtworkTemplatesPageClickedArtworkNavigationTab {
  action: CmsActionType.clickedArtworkNavigationTab
  context_module: CmsContextModule.artworkTemplates
  tabName: string
}

export type CmsArtworkTemplatesPage =
  | ArtworkTemplatesPageDeleteArtworkTemplate
  | ArtworkTemplatesPageClickedUseTemplate
  | ArtworkTemplatesPageClickedArtworkNavigationTab
