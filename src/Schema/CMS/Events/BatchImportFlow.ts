/**
 * Schemas describing CMS BatchImportFlow events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsOwnerType } from "../Values/CmsOwnerType"
import { CmsActionType } from "./index"

/**
 * A partner has clicked the import button and started the flow.
 *
 * @example
 * ```
 * {
 *   context_module: "batchImportFlow",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   label: "click import",
 *   referrer: ""
 * }
 * ```
 */
export interface CmsBatchImportFlowClickImport {
  context_module: CmsContextModule.batchImportFlow
  context_page_owner_type: CmsOwnerType.batchImport
  context_page_owner_id: string
  label: "click import works"
  referrer: ""
}

/**
 * A partner has clicked to add a CSV file.
 *
 * @example
 * ```
 * {
 *   context_module: "batchImportFlow",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   label: "click add CSV"
 * }
 * ```
 */
export interface CmsBatchImportFlowClickAddCSV {
  context_module: CmsContextModule.batchImportFlow
  context_page_owner_type: CmsOwnerType.batchImport
  context_page_owner_id: string
  label: "click add CSV"
}

/**
 * A partner has clicked to download the template.
 *
 * @example
 * ```
 * {
 *   context_module: "batchImportFlow",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   label: "click download template"
 * }
 * ```
 */
export interface CmsBatchImportFlowClickDownloadTemplate {
  context_module: CmsContextModule.batchImportFlow
  context_page_owner_type: CmsOwnerType.batchImport
  context_page_owner_id: string
  label: "click download template"
}

/**
 * Some artworks have missing information warnings.
 *
 * @example
 * ```
 * {
 *   event: "shownMissingInformation",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   // number of artworks with warnings
 *   value: 5
 * }
 * ```
 */
export interface CmsBatchImportFlowShownMissingInformation {
  event: CmsActionType.shownMissingInformation
  context_page_owner_type: CmsOwnerType.batchImport
  context_page_owner_id: string
  value: number
}

/**
 * Artists need matching during the batch import.
 *
 * @example
 * ```
 * {
 *   event: "artistNeedsMatching",
 *   context_page_owner_type: "batchImportArtistMatching",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   // number of artists with missing matching
 *   value: 3
 * }
 * ```
 */
export interface CmsBatchImportFlowArtistNeedsMatching {
  event: CmsActionType.artistNeedsMatching
  context_page_owner_type: CmsOwnerType.batchImportArtistMatching
  context_page_owner_id: string
  value: number
}

/**
 * Partners click to exit the batch import flow 
 *
 * @example
 * ```
 * {
*   context_module: "batchImportFlow",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   label: "click import"
 * }
 * ```
 */
export interface CmsBatchImportClickExit {
  context_module: CmsContextModule.batchImportFlow
  context_page_owner_type: CmsOwnerType.batchImport
  context_page_owner_id: string
  label: "click exit"
}

export type CmsBatchImportFlow =
  | CmsBatchImportFlowClickImport
  | CmsBatchImportFlowClickAddCSV
  | CmsBatchImportFlowClickDownloadTemplate
  | CmsBatchImportFlowShownMissingInformation
  | CmsBatchImportFlowArtistNeedsMatching
  | CmsBatchImportClickExit
