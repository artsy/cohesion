import { ActionType } from "../../Events"
import { OsContextModule } from "../Values/OsContextModule"

/**
 * Schemas describing Brand Kit events in the Online Store
 * @packageDocumentation
 */

/**
 * User clicks on a brand kit color option in the Online Store
 *
 * This schema describes events sent to Segment from [[clickedBrandKitColor]]
 *
 * @example
 * ```
 * {
 *   action: "clickedBrandKitColor",
 *   context_module: "brandKit",
 *   color_hex: "#FF5733",
 *   color_name: "Primary Red"
 * }
 * ```
 */
export interface ClickedBrandKitColor {
  action: ActionType.clickedBrandKitColor
  context_module: OsContextModule.brandKit
  color_hex?: string
  color_name?: string
}

/**
 * User clicks on a brand kit font option in the Online Store
 *
 * This schema describes events sent to Segment from [[clickedBrandKitFont]]
 *
 * @example
 * ```
 * {
 *   action: "clickedBrandKitFont",
 *   context_module: "brandKit",
 *   font_family: "Helvetica Neue",
 *   font_weight: "400"
 * }
 * ```
 */
export interface ClickedBrandKitFont {
  action: ActionType.clickedBrandKitFont
  context_module: OsContextModule.brandKit
  font_family?: string
  font_weight?: string
}

/**
 * User clicks to add a brand kit file in the Online Store
 *
 * This schema describes events sent to Segment from [[clickedAddBrandKitFile]]
 *
 * @example
 * ```
 * {
 *   action: "clickedAddBrandKitFile",
 *   context_module: "brandKit",
 *   file_type: "logo",
 *   file_format: "png"
 * }
 * ```
 */
export interface ClickedAddBrandKitFile {
  action: ActionType.clickedAddBrandKitFile
  context_module: OsContextModule.brandKit
  file_type?: string
  file_format?: string
}

/**
 * User clicks to save brand kit settings in the Online Store
 *
 * This schema describes events sent to Segment from [[clickedSaveBrandKit]]
 *
 * @example
 * ```
 * {
 *   action: "clickedSaveBrandKit",
 *   context_module: "brandKit",
 *   brand_kit_id: "12345"
 * }
 * ```
 */
export interface ClickedSaveBrandKit {
  action: ActionType.clickedSaveBrandKit
  context_module: OsContextModule.brandKit
  brand_kit_id?: string
}
