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

/**
 * Triggered when a partner edits a field in the batch import flow.
 *
 * @example
 * ```
 * {
 *   action: "editedBatchImportField",
 *   context_module: "batchImportFlow",
 *   context_page_owner_type: "batchImport",
 *   context_page_owner_id: "67b646ecbe87376bfeb3f962",
 *   is_error: true
 * }
 * ```
 */
export interface CmsBatchImportEditedBatchImportField {
  action: CmsActionType.editedBatchImportField
  context_module: CmsContextModule.batchImportFlow
  context_page_owner_type: CmsOwnerType.batchImport
  context_page_owner_id: string
  is_error: boolean
}

/**
 * Tracks invalid and missing columns at the beginning and the end of the Batch Import review step
 *
 * @example
 * ```
 * {
    action: "batchImportTableContentSummary",
    context: "batchImportReviewFinished",
    context_module: "batchImportFlow",
    context_page_owner_type: "batchImport",
    context_page_owner_id: "67b646ecbe87376bfeb3f962",
    values: {
      artworkTitle": {
        optional: false,
        valid: 37,
        missing: 6,
        invalid: 0
      },
    }
 * }
 * ```
 */

export interface CmsBatchImportTableContentSummary {
  action: CmsActionType.batchImportTableContentSummary
  context: "batchImportReviewFinished"
  context_module: CmsContextModule.batchImportFlow
  context_page_owner_type: CmsOwnerType.batchImport
  context_page_owner_id: string
  values: Record<
    string,
    { optional: boolean; valid: number; missing: number; invalid: number }
  >
}

/**
 * Fired for every column the partner hides or shows.
 *
 * @example
 * ```
 * {
 *   action: "batchImportShowHideColumns",
 *   context_module: "batchImportFlow",
 *   label: "column name",
 *   value: "hide" or "show"
 * }
 * ```
 */
export interface CmsBatchImportShowHideColumns {
  action: CmsActionType.batchImportShowHideColumns
  context_module: CmsContextModule.batchImportFlow
  label: string
  value: "hide" | "show"
}

/**
 * Fired for every time a partner changes a unit either in the settings at the top or in line.
 *
 * @example
 * ```
 * {
 *   action: "batchImportChangedUnit",
 *   context_module: "batchImportFlow",
 *   label: "unit changed",
 *   value: "new value"
 * }
 * ```
 */
export interface CmsBatchImportChangedUnit {
  action: CmsActionType.batchImportChangedUnit
  context_module: CmsContextModule.batchImportFlow
  label: "unit changed"
  value: string
}

/**
 * Fired when a partner imports an image file on the page.
 *
 * @example
 * ```
 * {
 *   action: "batchImportAddedImageFile",
 *   context_module: "batchImportFlow"
 * }
 * ```
 */
export interface CmsBatchImportAddedImageFile {
  action: CmsActionType.batchImportAddedImageFile
  context_module: CmsContextModule.batchImportFlow
}

/**
 * Fired for every time a partner clicks confirm after adding an image on the review page.
 *
 * @example
 * ```
 * {
 *   action: "batchImportAddedImage",
 *   context_module: "batchImportFlow",
 *   artwork_import_row_id: "123",
 *   value: 3
 * }
 * ```
 */
export interface CmsBatchImportAddedImage {
  action: CmsActionType.batchImportAddedImage
  context_module: CmsContextModule.batchImportFlow
  artwork_import_row_id: string
  value: number
}

/**
 * Fired when a partner reorder images.
 *
 * @example
 * ```
 * {
 *   action: "batchImportReorderImage",
 *   context_module: "batchImportFlow",
 *   artwork_import_row_id: "123"
 * }
 * ```
 */
export interface CmsBatchImportReorderImage {
  action: CmsActionType.batchImportReorderImage
  context_module: CmsContextModule.batchImportFlow
  artwork_import_row_id: string
}

/**
 * Fired when a partner clicks delete on an image.
 *
 * @example
 * ```
 * {
 *   action: "batchImportClickDeleteImage",
 *   context_module: "batchImportFlow",
 *   artwork_import_row_id: "123"
 * }
 * ```
 */
export interface CmsBatchImportClickDeleteImage {
  action: CmsActionType.batchImportClickDeleteImage
  context_module: CmsContextModule.batchImportFlow
  artwork_import_row_id: string
}

export type CmsBatchImportFlow =
  | CmsBatchImportFlowClickImport
  | CmsBatchImportFlowClickAddCSV
  | CmsBatchImportFlowClickDownloadTemplate
  | CmsBatchImportFlowShownMissingInformation
  | CmsBatchImportFlowArtistNeedsMatching
  | CmsBatchImportClickExit
  | CmsBatchImportEditedBatchImportField
  | CmsBatchImportTableContentSummary
  | CmsBatchImportShowHideColumns
  | CmsBatchImportChangedUnit
  | CmsBatchImportAddedImageFile
  | CmsBatchImportAddedImage
  | CmsBatchImportReorderImage
  | CmsBatchImportClickDeleteImage
