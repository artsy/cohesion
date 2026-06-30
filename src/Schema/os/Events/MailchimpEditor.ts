import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "."

/**
 * Schemas describing Art OS Mailchimp Editor events
 * @packageDocumentation
 */

/**
 * A partner clicks "Cancel" or "Continue" in the Mailchimp campaign send confirmation modal.
 *
 * This schema describes events sent to Segment from [[OsClickedSendConfirmation]]
 *
 * @example Continue
 * ```
 * {
 *   action: "clickedSendConfirmation",
 *   context_module: "sendConfirmationModal",
 *   context_page_owner_type: "studioMailchimp",
 *   value: "continue"
 * }
 * ```
 *
 * @example Cancel
 * ```
 * {
 *   action: "clickedSendConfirmation",
 *   context_module: "sendConfirmationModal",
 *   context_page_owner_type: "studioMailchimp",
 *   value: "cancel"
 * }
 * ```
 */
export interface OsClickedSendConfirmation {
  action: OsActionType.clickedSendConfirmation
  context_module: OsContextModule.sendConfirmationModal
  context_page_owner_type: OsOwnerType.studioMailchimp
  value: "cancel" | "continue"
}

/**
 * A partner sends a Mailchimp campaign or downloads a PDF from the Mailchimp editor.
 *
 * `content` is a generic catch-all holding campaign metadata fields: artworkTitle,
 * artistNames, subject, recipientCount, etc. It is kept generic so the same pattern
 * can serve multiple studio surfaces.
 *
 * This schema describes events sent to Segment from [[OsCreatedMailchimpContent]]
 *
 * @example Send campaign
 * ```
 * {
 *   action: "createdStudioContent",
 *   context_module: "mailchimpEditor",
 *   context_page_owner_type: "studioMailchimp",
 *   value: "mailchimp campaign",
 *   brand_kit: true,
 *   content: {
 *     artworkTitle: "Xpto",
 *     artistNames: ["Jane Doe", "John Doe"],
 *     subject: "New artwork available",
 *     recipientCount: 150
 *   }
 * }
 * ```
 *
 * @example PDF download
 * ```
 * {
 *   action: "createdStudioContent",
 *   context_module: "mailchimpEditor",
 *   context_page_owner_type: "studioMailchimp",
 *   value: "pdf download",
 *   brand_kit: false,
 *   content: {
 *     artworkTitle: "Xpto",
 *     artistNames: ["Jane Doe", "John Doe"]
 *   }
 * }
 * ```
 */
export interface OsCreatedMailchimpContent {
  action: OsActionType.createdStudioContent
  context_module: OsContextModule.mailchimpEditor
  context_page_owner_type: OsOwnerType.studioMailchimp
  value: "mailchimp campaign" | "pdf download"
  brand_kit: boolean
  /** Generic catch-all for campaign metadata included in the created content */
  content: Record<string, unknown>
}

export type OsMailchimpEditor =
  | OsClickedSendConfirmation
  | OsCreatedMailchimpContent
