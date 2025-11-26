import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsActionType } from "."

/**
 * Click "Create from template" in upload artwork flow
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Uploads",
 *   label: "Create from template",
 * }
 * ```
 */
export interface UploadArtworkFlowClickedCreateFromTemplate {
  action: "click"
  context_module: CmsContextModule.uploads
  label: "Create from template"
}

/**
 * Click "Next" after selecting an existing artist
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Uploads",
 *   label: "Select existing artist",
 * }
 * ```
 */
export interface UploadArtworkFlowClickSelectExistingArtist {
  action: "click"
  context_module: CmsContextModule.uploads
  label: "Select existing artist"
}

/**
 * Click "Done" after uploading images
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Uploads",
 *   label: "Finish uploading image",
 *   artwork_ids: string[]
 * }
 * ```
 */
export interface UploadArtworkFlowClickFinishUploadingImages {
  action: "click"
  context_module: CmsContextModule.uploads
  label: "Finish uploading image"
  artwork_ids: string[]
}

/**
 * Click "Add Another Artwork" in Review page
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Uploads",
 *   label: "Add another artwork",
 *   template_id: "template-123",
 * }
 * ```
 */
export interface UploadArtworkFlowClickedAddAnotherArtwork {
  action: "click"
  context_module: CmsContextModule.uploads
  label: "Add another artwork"
  template_id: string
}

/**
 * Click "View my artworks" after creating artworks
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "Uploads",
 *   label: "View my artworks",
 *   artwork_ids: string[]
 * }
 * ```
 */
export interface UploadArtworkFlowClickViewMyArtworks {
  action: "click"
  context_module: CmsContextModule.uploads
  label: "View my artworks"
  artwork_ids: string[]
}

/**
 * Event fired after user created artworks
 *
 * @example
 * ```
 * {
 *   action: "created artwork",
 *   context_module: "Uploads",
 *   artwork_ids: ['some-artwork-id'],
 *   user_id: "some-user-id",
 * }
 * ```
 */
export interface UploadArtworkFlowCreateArtworks {
  action: CmsActionType.createdArtwork
  context_module: CmsContextModule.uploads
  artwork_ids: string[]
  user_id: string
}

/**
 * Event fired after user created artworks from template
 *
 * @example
 * ```
 * {
 *   action: "createdArtworkFromTemplate",
 *   context_module: "Uploads",
 *   template_id: "template-123",
 *   artwork_ids: ['some-artwork-id'],
 *   user_id: "some-user-id",
 * }
 * ```
 */
export interface UploadArtworkFlowCreateArtworksFromTemplate {
  action: CmsActionType.createdArtworkFromTemplate
  context_module: CmsContextModule.uploads
  template_id: string
  artwork_ids: string[]
  user_id: string
}

export type CmsUploadArtworkFlow =
  | UploadArtworkFlowClickedCreateFromTemplate
  | UploadArtworkFlowClickSelectExistingArtist
  | UploadArtworkFlowClickFinishUploadingImages
  | UploadArtworkFlowClickedAddAnotherArtwork
  | UploadArtworkFlowClickViewMyArtworks
  | UploadArtworkFlowCreateArtworks
  | UploadArtworkFlowCreateArtworksFromTemplate
