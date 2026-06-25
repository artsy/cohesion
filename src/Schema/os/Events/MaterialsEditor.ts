import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "."

/**
 * Schemas describing Art OS Materials (Tearsheet / Checklist) events
 * @packageDocumentation
 */

/**
 * A partner selects "Tearsheet" or "Checklist" from the inventory actions dropdown
 * to open the Materials editor. The dropdown is surfaced three ways: the artwork's
 * actions, bulk actions, and the right-click context menu.
 *
 * This schema describes events sent to Segment from [[OsClickedActionsDropdown]]
 *
 * @example
 * ```
 * {
 *   action: "clickedActionsDropdown",
 *   context_module: "actionsDropdown",
 *   context_page_owner_type: "inventory",
 *   value: "Tearsheet"
 * }
 * ```
 */
export interface OsClickedActionsDropdown {
  action: OsActionType.clickedActionsDropdown
  context_module: OsContextModule.actionsDropdown
  context_page_owner_type: OsOwnerType
  value: "Tearsheet" | "Checklist" | "Instagram Post"
}

/**
 * A partner clicks "Exit" in the Materials editor header to leave the editor.
 *
 * This schema describes events sent to Segment from [[OsClickedExitEditor]]
 *
 * @example
 * ```
 * {
 *   action: "clickedExitEditor",
 *   context_module: "editorHeader",
 *   context_page_owner_type: "studioMaterials",
 *   label: "materials editor"
 * }
 * ```
 */
export interface OsClickedExitEditor {
  action: OsActionType.clickedExitEditor
  context_module: OsContextModule.editorHeader
  context_page_owner_type: OsOwnerType
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
 *   context_page_owner_type: "studioMaterials",
 *   label: "materials brand kit modal",
 *   value: "create"
 * }
 * ```
 */
export interface OsClickedBrandKitModal {
  action: OsActionType.clickedBrandKitModal
  context_module: OsContextModule.brandKitPromptModal
  context_page_owner_type: OsOwnerType
  label: string
  value: "cancel" | "create"
}

/**
 * A partner creates a material (Tearsheet or Checklist PDF) from the Materials editor.
 *
 * `content` is a generic catch-all holding the artwork detail fields included in the
 * generated material (e.g. only the fields whose checkboxes are selected). It is kept
 * generic on purpose — parsed ad-hoc downstream rather than maintained as a rigid set
 * of top-level fields — so the same event can serve Materials, Mailchimp, Instagram, etc.
 *
 * This schema describes events sent to Segment from [[OsCreatedStudioContent]]
 *
 * @example
 * ```
 * {
 *   action: "createdStudioContent",
 *   context_module: "materialsEditor",
 *   context_page_owner_type: "studioMaterials",
 *   value: "tearsheet",
 *   brand_kit: true,
 *   content: {
 *     artworkTitle: "Xpto",
 *     artistNames: ["Jane Doe", "John Doe"],
 *     date: "2025"
 *   }
 * }
 * ```
 */
export interface OsCreatedStudioContent {
  action: OsActionType.createdStudioContent
  context_module: OsContextModule.materialsEditor
  context_page_owner_type: OsOwnerType.studioMaterials
  value: "tearsheet" | "checklist"
  brand_kit: boolean
  /** Generic catch-all for the artwork detail fields included in the generated material */
  content: Record<string, unknown>
}

export type OsMaterialsEditor =
  | OsClickedActionsDropdown
  | OsClickedBrandKitModal
  | OsClickedExitEditor
  | OsCreatedStudioContent
