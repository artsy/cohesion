import { ActionType } from "../../Events"
import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"

/**
 * Schemas describing Art OS Brand Kit events
 * @packageDocumentation
 */

/**
 * User clicks on a brand kit color option
 *
 * This schema describes events sent to Segment from [[clickedBrandKitColor]]
 *
 * @example
 * ```
 * {
 *   action: "clickedBrandKitColor",
 *   context_module: "brandKitEditor",
 *   context_page_owner_type: "brandSettings",
 *   field: "text",
 *   value: "#9C9EEA"
 * }
 * ```
 */
export interface ClickedBrandKitColor {
  action: ActionType.clickedBrandKitColor
  context_module: OsContextModule.brandKit
  context_page_owner_type: OsOwnerType.studio
  field: string
  value: string
}

/**
 * User clicks on a brand kit font option
 *
 * This schema describes events sent to Segment from [[clickedBrandKitFont]]
 *
 * @example
 * ```
 * {
 *   action: "clickedBrandKitFont",
 *   context_module: "brandKitEditor",
 *   context_page_owner_type: "brandSettings",
 *   field: "font_family",
 *   value: "Courier"
 * }
 * ```
 */
export interface ClickedBrandKitFont {
  action: ActionType.clickedBrandKitFont
  context_module: OsContextModule.brandKit
  context_page_owner_type: OsOwnerType.studio
  field: string
  value: string
}

/**
 * User clicks to add a brand kit file
 *
 * This schema describes events sent to Segment from [[clickedAddBrandKitFile]]
 *
 * @example
 * ```
 * {
 *   action: "clickedAddBrandKitFile",
 *   context_module: "brandKitEditor",
 *   context_page_owner_type: "brandSettings",
 *   label: "brand kit logo",
 *   field: "file",
 *   value: "filename.png"
 * }
 * ```
 */
export interface ClickedAddBrandKitFile {
  action: ActionType.clickedAddBrandKitFile
  context_module: OsContextModule.brandKit
  context_page_owner_type: OsOwnerType.studio
  label: string
  field: string
  value: string
}

/**
 * User clicks to save brand kit settings
 *
 * This schema describes events sent to Segment from [[clickedSaveBrandKit]]
 *
 * @example
 * ```
 * {
 *   action: "clickedSaveBrandKit",
 *   context_module: "brandKitEditor",
 *   context_page_owner_type: "brandSettings"
 * }
 * ```
 */
export interface ClickedSaveBrandKit {
  action: ActionType.clickedSaveBrandKit
  context_module: OsContextModule.brandKit
  context_page_owner_type: OsOwnerType.studio
}
