import { CmsArtworkFilter } from "./ArtworkFilter"
import { CmsBatchImportFlow } from "./BatchImportFlow"
import { CmsBulkEditFlow } from "./BulkEditFlow"
import { CmsSettingsFlow } from "./SettingsFlow"
import { CmsShowFlow } from "./ShowFlow"
import { CmsUploadArtworkFlow } from "./UploadArtworkFlow"

/**
 * List of valid schemas for CMS analytics actions
 *
 * Each event describes one ActionType
 */
export type CmsEvent =
  | CmsArtworkFilter
  | CmsBulkEditFlow
  | CmsBatchImportFlow
  | CmsUploadArtworkFlow
  | CmsSettingsFlow
  | CmsShowFlow

/**
 * List of all CMS actions
 *
 * Each CmsActionType corresponds with a table in Redshift.
 */
export enum CmsActionType {
  /**
   * Corresponds to {@link SettingsFlow}
   */
  addedNewLocation = "addedNewLocation",

  /**
   * Corresponds to {@link CmsBatchImportFlow}
   */
  artistNeedsMatching = "artistNeedsMatching",

  /**
   * Corresponds to {@link CmsBatchImportTableContentSummary}
   */
  batchImportTableContentSummary = "batchImportTableContentSummary",

  /**
   * Corresponds to {@link CmsBulkEditFlow}
   */
  bulkEditFailed = "bulkEditFailed",

  /**
   * Corresponds to {@link CmsArtworkFilter}
   */
  clickedOnDuplicateArtwork = "clickedonduplicateartwork",

  /**
   * Corresponds to {@link CmsUploadArtworkFlow}
   */
  createdArtwork = "created artwork",

  /**
   * Corresponds to {@link CmsBatchImportFlow}
   */
  csvImportError = "csvImportError",

  /**
   * Corresponds to {@link CmsBatchImportFlow}
   */
  editedBatchImportField = "editedBatchImportField",

  /**
   * Corresponds to {@link SettingsFlow}
   */
  editedLocation = "editedLocation",

  /**
   * Corresponds to {@link CmsBulkEditFlow}
   */
  processingStarted = "processingStarted",

  /**
   * Corresponds to {@link CmsBulkEditFlow}
   */
  processingCompleted = "processingCompleted",

  /**
   * Corresponds to {@link CmsArtworkFilter}
   */
  searchedArtwork = "searched artwork",

  /**
   * Corresponds to {@link CmsBulkEditFlow}
   */
  shownConflicts = "shownConflicts",

  /**
   * Corresponds to {@link CmsBulkEditFlow}
   */
  shownMaxEditLimitReached = "shownMaxEditLimitReached",

  /**
   * Corresponds to {@link CmsBulkEditFlow}
   */
  shownResolvedAllConflicts = "shownResolvedAllConflicts",

  /**
   * Corresponds to {@link BatchImportFlow}
   */
  shownMissingInformation = "shownMissingInformation",
}
