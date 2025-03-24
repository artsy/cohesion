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
 *   action: "click",
 *   context_module: "batchImportFlow",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   label: "click import",
 *   referrer: ""
 * }
 * ```
 */
export interface CmsBatchImportFlowClickImport {
  action: "click"
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
 *   action: "click",
 *   context_module: "batchImportFlow",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   label: "click add CSV"
 * }
 * ```
 */
export interface CmsBatchImportFlowClickAddCSV {
  action: "click"
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
 *   action: "click",
 *   context_module: "batchImportFlow",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   label: "click download template"
 * }
 * ```
 */
export interface CmsBatchImportFlowClickDownloadTemplate {
  action: "click"
  context_module: CmsContextModule.batchImportFlow
  context_page_owner_type: CmsOwnerType.batchImport
  context_page_owner_id: string
  label: "click download template"
}

/**
 * An error occurred during CSV import.
 *
 * @example
 * ```
 * {
 *   action: "csvImportError",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   // list of errors
 *   value: [ "error1", "error2" ]
 * }
 * ```
 */
export interface CmsBatchImportFlowImportError {
  action: CmsActionType.csvImportError
  context_page_owner_type: CmsOwnerType.batchImport
  context_page_owner_id: string
  value: string[]
}

/**
 * Some artworks have missing information warnings.
 *
 * @example
 * ```
 * {
 *   action: "shownMissingInformation",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   // number of artworks with warnings
 *   value: 5
 * }
 * ```
 */
export interface CmsBatchImportFlowShownMissingInformation {
  action: CmsActionType.shownMissingInformation
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
 *   action: "artistNeedsMatching",
 *   context_page_owner_type: "batchImportArtistMatching",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   // number of artists with missing matching
 *   value: 3
 * }
 * ```
 */
export interface CmsBatchImportFlowArtistNeedsMatching {
  action: CmsActionType.artistNeedsMatching
  context_page_owner_type: CmsOwnerType.batchImportArtistMatching
  context_page_owner_id: string
  value: number
}

/**
 * Partners click to see highlighted warning / error
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "batchImportFlow",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   label: "click import"
 * }
 * ```
 */
export interface CmsBatchImportClickSeeWarning {
  action: "click"
  context_module: CmsContextModule.batchImportFlow
  context_page_owner_type: CmsOwnerType.batchImport
  context_page_owner_id: string
  label: "click see warning csv"
}

/**
 * Partners click to exit the batch import flow
 *
 * @example
 * ```
 * {
 *   action: "click",
 *   context_module: "batchImportFlow",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   label: "click import"
 * }
 * ```
 */
export interface CmsBatchImportClickExit {
  action: "click"
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
