import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsActionType } from "."

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
 *   user_id: "some-user-id",
 *   artwork_ids: ['some-artwork-id'],
 * }
 * ```
 */
export interface UploadArtworkFlowCreateArtworks {
  action: CmsActionType.createdArtwork
  context_module: CmsContextModule.uploads
  label: "View my artworks"
  artwork_ids: string[]
}

export type CmsUploadArtworkFlow =
  | UploadArtworkFlowClickSelectExistingArtist
  | UploadArtworkFlowClickFinishUploadingImages
  | UploadArtworkFlowClickViewMyArtworks
  | UploadArtworkFlowCreateArtworks
