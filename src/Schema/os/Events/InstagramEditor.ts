import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "."

/**
 * Schemas describing Art OS Instagram Editor events
 * @packageDocumentation
 */

/**
 * A partner clicks "Connect" or "Cancel" in the account connection modal. The same
 * modal is used for both Instagram and Mailchimp; `label` identifies which service it
 * is, and `context_page_owner_type` identifies the surface it was opened from.
 *
 * This schema describes events sent to Segment from [[OsClickedConnectModal]]
 *
 * @example Instagram connect
 * ```
 * {
 *   action: "clickedConnectModal",
 *   context_module: "connectModal",
 *   context_page_owner_type: "studioInstagram",
 *   label: "instagram",
 *   value: "connect"
 * }
 * ```
 *
 * @example Mailchimp cancel
 * ```
 * {
 *   action: "clickedConnectModal",
 *   context_module: "connectModal",
 *   context_page_owner_type: "studioMailchimp",
 *   label: "mailchimp",
 *   value: "cancel"
 * }
 * ```
 */
export interface OsClickedConnectModal {
  action: OsActionType.clickedConnectModal
  context_module: OsContextModule.connectModal
  context_page_owner_type: OsOwnerType
  label: "instagram" | "mailchimp"
  value: "connect" | "cancel"
}

/**
 * A partner selects or deselects an image from the Image Bank in the Instagram editor.
 *
 * This schema describes events sent to Segment from [[OsClickedImageBankImage]]
 *
 * @example Select
 * ```
 * {
 *   action: "clickedImageBankImage",
 *   context_module: "imageBank",
 *   context_page_owner_type: "studioInstagram",
 *   value: "selected"
 * }
 * ```
 *
 * @example Deselect
 * ```
 * {
 *   action: "clickedImageBankImage",
 *   context_module: "imageBank",
 *   context_page_owner_type: "studioInstagram",
 *   value: "deselected"
 * }
 * ```
 */
export interface OsClickedImageBankImage {
  action: OsActionType.clickedImageBankImage
  context_module: OsContextModule.imageBank
  context_page_owner_type: OsOwnerType.studioInstagram
  value: "selected" | "deselected"
}

/**
 * A partner uploads an image into the Image Bank.
 * Fires when the upload is initiated (file selected).
 *
 * This schema describes events sent to Segment from [[OsClickedUploadImageBank]]
 *
 * @example
 * ```
 * {
 *   action: "clickedUploadImageBank",
 *   context_module: "imageBank",
 *   context_page_owner_type: "studioInstagram",
 *   field: "file",
 *   value: "filename.png"
 * }
 * ```
 */
export interface OsClickedUploadImageBank {
  action: OsActionType.clickedUploadImageBank
  context_module: OsContextModule.imageBank
  context_page_owner_type: OsOwnerType.studioInstagram
  field: "file"
  value: string
}

/**
 * A partner reorders or removes an image in the Image Bank management view.
 *
 * This schema describes events sent to Segment from [[OsClickedImageBankManagement]]
 *
 * @example Reorder
 * ```
 * {
 *   action: "clickedImageBankManagement",
 *   context_module: "imageBank",
 *   context_page_owner_type: "studioInstagram",
 *   value: "reorder"
 * }
 * ```
 *
 * @example Remove
 * ```
 * {
 *   action: "clickedImageBankManagement",
 *   context_module: "imageBank",
 *   context_page_owner_type: "studioInstagram",
 *   value: "remove"
 * }
 * ```
 */
export interface OsClickedImageBankManagement {
  action: OsActionType.clickedImageBankManagement
  context_module: OsContextModule.imageBank
  context_page_owner_type: OsOwnerType.studioInstagram
  value: "reorder" | "remove"
}

/**
 * A partner interacts with the aspect-ratio toggle or zoom crop control in the image editor.
 * `label` identifies which control was used.
 *
 * This schema describes events sent to Segment from [[OsClickedAspectRatio]]
 *
 * @example Aspect ratio toggle
 * ```
 * {
 *   action: "clickedAspectRatio",
 *   context_module: "imageEditor",
 *   context_page_owner_type: "studioInstagram",
 *   label: "image aspect ratio"
 * }
 * ```
 *
 * @example Zoom/crop
 * ```
 * {
 *   action: "clickedAspectRatio",
 *   context_module: "imageEditor",
 *   context_page_owner_type: "studioInstagram",
 *   label: "image zoom"
 * }
 * ```
 */
export interface OsClickedAspectRatio {
  action: OsActionType.clickedAspectRatio
  context_module: OsContextModule.imageEditor
  context_page_owner_type: OsOwnerType.studioInstagram
  label: "image aspect ratio" | "image zoom"
}

/**
 * A partner clicks "Cancel" or "Continue" in the Instagram post publish confirmation modal.
 *
 * This schema describes events sent to Segment from [[OsClickedPublishConfirmation]]
 *
 * @example Continue
 * ```
 * {
 *   action: "clickedPublishConfirmation",
 *   context_module: "publishConfirmationModal",
 *   context_page_owner_type: "studioInstagram",
 *   value: "continue"
 * }
 * ```
 *
 * @example Cancel
 * ```
 * {
 *   action: "clickedPublishConfirmation",
 *   context_module: "publishConfirmationModal",
 *   context_page_owner_type: "studioInstagram",
 *   value: "cancel"
 * }
 * ```
 */
export interface OsClickedPublishConfirmation {
  action: OsActionType.clickedPublishConfirmation
  context_module: OsContextModule.publishConfirmationModal
  context_page_owner_type: OsOwnerType.studioInstagram
  value: "cancel" | "continue"
}

/**
 * A partner publishes an Instagram post or downloads a PNG from the Instagram editor.
 *
 * `content` is a generic catch-all (same pattern as {@link OsCreatedStudioContent}) holding
 * post metadata fields: artworkTitle, artistNames, postCaption, collaborators, aspectRatio,
 * imageCount, etc. It is kept generic so the same event can serve multiple studio surfaces.
 *
 * This schema describes events sent to Segment from [[OsCreatedInstagramContent]]
 *
 * @example Publish
 * ```
 * {
 *   action: "createdStudioContent",
 *   context_module: "instagramEditor",
 *   context_page_owner_type: "studioInstagram",
 *   value: "instagram post",
 *   brand_kit: true,
 *   content: {
 *     artworkTitle: "Xpto",
 *     artistNames: ["Jane Doe", "John Doe"],
 *     postCaption: "FooBar",
 *     collaborators: ["bonnie", "clyde"],
 *     aspectRatio: "4:5",
 *     imageCount: 3
 *   }
 * }
 * ```
 *
 * @example PNG download
 * ```
 * {
 *   action: "createdStudioContent",
 *   context_module: "instagramEditor",
 *   context_page_owner_type: "studioInstagram",
 *   value: "instagram png download",
 *   brand_kit: false,
 *   content: {
 *     aspectRatio: "1:1",
 *     imageCount: 2
 *   }
 * }
 * ```
 */
export interface OsCreatedInstagramContent {
  action: OsActionType.createdStudioContent
  context_module: OsContextModule.instagramEditor
  context_page_owner_type: OsOwnerType.studioInstagram
  value: "instagram post" | "instagram png download"
  brand_kit: boolean
  /** Generic catch-all for post metadata included in the created content */
  content: Record<string, unknown>
}

export type OsInstagramEditor =
  | OsClickedAspectRatio
  | OsClickedConnectModal
  | OsClickedImageBankImage
  | OsClickedImageBankManagement
  | OsClickedPublishConfirmation
  | OsClickedUploadImageBank
  | OsCreatedInstagramContent
