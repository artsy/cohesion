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

export type CmsArtworkTemplatesPage =
  | ArtworkTemplatesPageDeleteArtworkTemplate
  | ArtworkTemplatesPageClickedUseTemplate
