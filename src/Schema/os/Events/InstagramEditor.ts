import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "."

/**
 * Schemas describing Art OS Instagram Editor events (Instagram post / PNG download)
 * @packageDocumentation
 */

/**
 * A partner clicks a button inside the "Connect" modal shown when an Instagram (or
 * Mailchimp) account is not yet connected. `label` distinguishes the integration and
 * `value` distinguishes the confirm action from the dismiss action.
 *
 * This schema describes events sent to Segment from [[OsClickedConnectModal]]
 *
 * @example
 * ```
 * {
 *   action: "clickedConnectModal",
 *   context_module: "connectModal",
 *   context_page_owner_type: "studioInstagram",
 *   label: "instagram",
 *   value: "connect"
 * }
 * ```
 */
export interface OsClickedConnectModal {
  action: OsActionType.clickedConnectModal
  context_module: OsContextModule.connectModal
  context_page_owner_type: OsOwnerType.studioInstagram
  label: "instagram" | "mailchimp"
  value: "connect" | "cancel"
}

/**
 * A partner clicks "Exit" in the Instagram editor header to leave the editor.
 *
 * This schema describes events sent to Segment from [[OsClickedExitEditor]]
 *
 * @example
 * ```
 * {
 *   action: "clickedExitEditor",
 *   context_module: "editorHeader",
 *   context_page_owner_type: "studioInstagram",
 *   label: "instagram editor"
 * }
 * ```
 */
export interface OsClickedExitEditor {
  action: OsActionType.clickedExitEditor
  context_module: OsContextModule.editorHeader
  context_page_owner_type: OsOwnerType.studioInstagram
  label: string
}

/**
 * A partner clicks a button in the Brand Kit prompt modal (the modal suggesting they
 * create a Brand Kit). `value` distinguishes the dismiss action from the create action.
 *
 * This schema describes events sent to Segment from [[OsClickedBrandKitModal]]
 *
 * @example
 * ```
 * {
 *   action: "clickedBrandKitModal",
 *   context_module: "brandKitPromptModal",
 *   context_page_owner_type: "studioInstagram",
 *   label: "instagram brand kit modal",
 *   value: "create"
 * }
 * ```
 */
export interface OsClickedBrandKitModal {
  action: OsActionType.clickedBrandKitModal
  context_module: OsContextModule.brandKitPromptModal
  context_page_owner_type: OsOwnerType.studioInstagram
  label: string
  value: "cancel" | "create"
}

/**
 * A partner selects or deselects an image from the Image Bank. `value` distinguishes
 * the two states.
 *
 * This schema describes events sent to Segment from [[OsClickedImageBankImage]]
 *
 * @example
 * ```
 * {
 *   action: "clickedImageBankImage",
 *   context_module: "imageBank",
 *   context_page_owner_type: "studioInstagram",
 *   value: "selected"
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
 * A partner uploads an image into the Image Bank. `field` is the form field and
 * `value` is the uploaded file name.
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
 * A partner reorders or removes an image in the Image Bank. `value` distinguishes the
 * two management actions.
 *
 * This schema describes events sent to Segment from [[OsClickedImageBankManagement]]
 *
 * @example
 * ```
 * {
 *   action: "clickedImageBankManagement",
 *   context_module: "imageBank",
 *   context_page_owner_type: "studioInstagram",
 *   value: "reorder"
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
 * A partner toggles the aspect ratio (or zoom/crop) in the image editor. `label`
 * describes the specific control that was used.
 *
 * This schema describes events sent to Segment from [[OsClickedAspectRatio]]
 *
 * @example
 * ```
 * {
 *   action: "clickedAspectRatio",
 *   context_module: "imageEditor",
 *   context_page_owner_type: "studioInstagram",
 *   label: "image aspect ratio"
 * }
 * ```
 */
export interface OsClickedAspectRatio {
  action: OsActionType.clickedAspectRatio
  context_module: OsContextModule.imageEditor
  context_page_owner_type: OsOwnerType.studioInstagram
  label: string
}

/**
 * A partner clicks a button in the Instagram post publishing confirmation modal.
 * `value` distinguishes the cancel action from continuing with the publish.
 *
 * This schema describes events sent to Segment from [[OsClickedPublishConfirmation]]
 *
 * @example
 * ```
 * {
 *   action: "clickedPublishConfirmation",
 *   context_module: "publishConfirmationModal",
 *   context_page_owner_type: "studioInstagram",
 *   value: "continue"
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
 * A partner creates Studio content from the Instagram editor. The same event covers
 * both publishing an Instagram post and downloading the generated PNG, distinguished
 * by `value`.
 *
 * `content` is a generic catch-all holding the post detail fields (e.g. only the
 * fields whose checkboxes are selected, plus caption, collaborators, aspect ratio and
 * image counts). It is kept generic on purpose — parsed ad-hoc downstream rather than
 * maintained as a rigid set of top-level fields — so the same event can serve
 * Instagram, Mailchimp, Materials, etc.
 *
 * This schema describes events sent to Segment from [[OsCreatedStudioContent]]
 *
 * @example
 * ```
 * {
 *   action: "createdStudioContent",
 *   context_module: "instagramEditor",
 *   context_page_owner_type: "studioInstagram",
 *   value: "instagram post",
 *   brand_kit: "true",
 *   content: {
 *     artworkTitle: "Xpto",
 *     artistNames: ["Jane Doe", "John Doe"],
 *     postCaption: "FooBar",
 *     collaborators: ["bonnie", "clyde"],
 *     aspectRatio: "4:5",
 *     imageCount: { artwork_id: "artwork-id", count: 4 }
 *   }
 * }
 * ```
 */
export interface OsCreatedStudioContent {
  action: OsActionType.createdStudioContent
  context_module: OsContextModule.instagramEditor
  context_page_owner_type: OsOwnerType.studioInstagram
  value: "instagram post" | "instagram png download"
  brand_kit: "true" | "false"
  /** Generic catch-all for the post detail fields included in the created content */
  content: Record<string, unknown>
}

export type OsInstagramEditor =
  | OsClickedAspectRatio
  | OsClickedBrandKitModal
  | OsClickedConnectModal
  | OsClickedExitEditor
  | OsClickedImageBankImage
  | OsClickedImageBankManagement
  | OsClickedPublishConfirmation
  | OsClickedUploadImageBank
  | OsCreatedStudioContent
