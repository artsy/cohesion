/**
 * Schemas describing CMS Quick Reply events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsActionType } from "."

/**
 * User clicks on the icon to open the menu of quick replies
 *
 * context_page_owner_id is the impulse conversation ID
 *
 * @example
 * ```
 * {
 *   action: "openedMenu",
 *   context_module: "conversations",
 *   context_page_owner_id: "496984",
 * }
 * ```
 */
export interface CmsQuickReplyOpenedMenu {
  action: CmsActionType.openedMenu
  context_module: CmsContextModule.conversations
  context_page_owner_id: string
}

/**
 * User clicks on the trash can icon to delete a template
 *
 * @example
 * ```
 * {
 *   action: "clickedDeleteTemplate",
 *   context_module: "conversations",
 *   context_page_owner_id: "496984",
 *   conversation_template_id: "80912749071",
 * }
 * ```
 */
export interface CmsQuickReplyClickedDeleteTemplate {
  action: CmsActionType.clickedDeleteTemplate
  context_module: CmsContextModule.conversations
  context_page_owner_id: string
  conversation_template_id: string
}

/**
 * User completes the flow and actually deletes the template
 *
 * @example
 * ```
 * {
 *   action: "deletedTemplate",
 *   context_module: "conversations",
 *   context_page_owner_id: "496984",
 *   conversation_template_id: "80912749071",
 * }
 * ```
 */
export interface CmsQuickReplyDeletedTemplate {
  action: CmsActionType.deletedTemplate
  context_module: CmsContextModule.conversations
  context_page_owner_id: string
  conversation_template_id: string
}

/**
 * User clicks on "+New" to create a new template
 *
 * @example
 * ```
 * {
 *   action: "clickedCreateNewTemplate",
 *   context_module: "conversations",
 *   context_page_owner_id: "496984",
 * }
 * ```
 */
export interface CmsQuickReplyClickedCreateNewTemplate {
  action: CmsActionType.clickedCreateNewTemplate
  context_module: CmsContextModule.conversations
  context_page_owner_id: string
}

/**
 * User completes the flow and actually creates a new custom template
 *
 * @example
 * ```
 * {
 *   action: "createdNewTemplate",
 *   context_module: "conversations",
 *   context_page_owner_id: "496984",
 *   conversation_template_id: "80912749071",
 * }
 * ```
 */
export interface CmsQuickReplyCreatedNewTemplate {
  action: CmsActionType.createdNewTemplate
  context_module: CmsContextModule.conversations
  context_page_owner_id: string
  conversation_template_id: string
}

/**
 * Event fires upon clicking "saved X response(s)"
 *
 * saved_templates is a string[] object that captures the checklist of templates
 * saved to the partner. Uses general names for saved_templates, not the titles
 * of the messages, in case copy changes.
 *
 * @example
 * ```
 * {
 *   action: "savedExampleTemplate",
 *   context_module: "conversations",
 *   context_page_owner_id: "496984",
 *   saved_templates: ["general", "unavailable"],
 *   conversation_template_ids: ["80912749071", "1231231231"],
 * }
 * ```
 */
export interface CmsQuickReplySavedExampleTemplate {
  action: CmsActionType.savedExampleTemplate
  context_module: CmsContextModule.conversations
  context_page_owner_id: string
  saved_templates: string[]
  conversation_template_ids: string[]
}

/**
 * User clicks on the edit icon
 *
 * @example
 * ```
 * {
 *   action: "clickedEditTemplate",
 *   context_module: "conversations",
 *   context_page_owner_id: "496984",
 *   conversation_template_id: "80912749071",
 * }
 * ```
 */
export interface CmsQuickReplyClickedEditTemplate {
  action: CmsActionType.clickedEditTemplate
  context_module: CmsContextModule.conversations
  context_page_owner_id: string
  conversation_template_id: string
}

/**
 * User completes the flow and clicks save response to update the template
 *
 * @example
 * ```
 * {
 *   action: "editedTemplate",
 *   context_module: "conversations",
 *   context_page_owner_id: "496984",
 *   conversation_template_id: "80912749071",
 * }
 * ```
 */
export interface CmsQuickReplyEditedTemplate {
  action: CmsActionType.editedTemplate
  context_module: CmsContextModule.conversations
  context_page_owner_id: string
  conversation_template_id: string
}

/**
 * User clicks "See message examples" to view example templates
 *
 * @example
 * ```
 * {
 *   action: "clickedSeeMessageExamples",
 *   context_module: "conversations",
 *   context_page_owner_id: "496984",
 * }
 * ```
 */
export interface CmsQuickReplyClickedSeeMessageExamples {
  action: CmsActionType.clickedSeeMessageExamples
  context_module: CmsContextModule.conversations
  context_page_owner_id: string
}

/**
 * Union type of all CMS Quick Reply events
 */
export type CmsQuickReplyFlow =
  | CmsQuickReplyOpenedMenu
  | CmsQuickReplyClickedDeleteTemplate
  | CmsQuickReplyDeletedTemplate
  | CmsQuickReplyClickedCreateNewTemplate
  | CmsQuickReplyCreatedNewTemplate
  | CmsQuickReplySavedExampleTemplate
  | CmsQuickReplyClickedEditTemplate
  | CmsQuickReplyEditedTemplate
  | CmsQuickReplyClickedSeeMessageExamples
