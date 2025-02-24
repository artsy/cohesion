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
  label: "click import"
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
 * Import process was completed.
 *
 * @example
 * ```
 * {
 *   event: "importComplete",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   // original_csv_size = number of lines in csv
 *   // outcome = number of lines successfuly imported
 *   value: { original_csv_size: number, outcome: number }
 * }
 * ```
 */
export interface CmsBatchImportFlowImportComplete {
  event: CmsActionType.importComplete
  context_page_owner_type: CmsOwnerType.batchImport
  context_page_owner_id: string
  value: { original_csv_size: number; outcome: number }
}

/**
 * An error occurred during CSV import.
 *
 * @example
 * ```
 * {
 *   event: "csvImportError",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   // list of errors
 *   value: [ "error1", "error2" ]
 * }
 * ```
 */
export interface CmsBatchImportFlowImportError {
  event: CmsActionType.csvImportError
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

export type CmsBatchImportFlow =
  | CmsBatchImportFlowClickImport
  | CmsBatchImportFlowClickAddCSV
  | CmsBatchImportFlowClickDownloadTemplate
  | CmsBatchImportFlowImportComplete
  | CmsBatchImportFlowImportError
  | CmsBatchImportFlowShownMissingInformation
  | CmsBatchImportFlowArtistNeedsMatching
