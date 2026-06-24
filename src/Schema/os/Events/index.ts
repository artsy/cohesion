import { OsClickEvent } from "./Click"
import { OsMultiAddFlow } from "./MultiAddFlow"
import { OsSubmitEvent } from "./Submit"

/**
 * List of valid schemas for Art OS analytics actions
 *
 * Each event describes one ActionType
 */
export type OsEvent = OsMultiAddFlow | OsClickEvent | OsSubmitEvent

/**
 * List of all Art OS actions
 *
 * Each OsActionType corresponds with a table in Redshift.
 */
export enum OsActionType {
  /**
   * Corresponds to {@link BulkEditedArtworks}
   */
  bulkEditedArtworks = "bulkEditedArtworks",

  /**
   * Corresponds to {@link CancelledArtworkImport}
   */
  cancelledArtworkImport = "cancelledArtworkImport",

  /**
   * Corresponds to {@link ClickedActionsDropdown}
   */
  clickedActionsDropdown = "clickedActionsDropdown",

  /**
   * Corresponds to {@link ClickedAddFromFile}
   */
  clickedAddFromFile = "clickedAddFromFile",

  /**
   * Corresponds to {@link ClickedCancelBulkEdit}
   */
  clickedCancelBulkEdit = "clickedCancelBulkEdit",

  /**
   * Corresponds to {@link ClickedExitDropZone}
   */
  clickedExitDropZone = "clickedExitDropZone",

  /**
   * Corresponds to {@link CompletedArtworkImport}
   */
  completedArtworkImport = "completedArtworkImport",

  /**
   * Corresponds to {@link CreatedImportedArtworks}
   */
  createdImportedArtworks = "createdImportedArtworks",

  /**
   * Corresponds to {@link DeletedArtwork}
   */
  deletedArtwork = "deletedArtwork",

  /**
   * Corresponds to {@link DistributedArtworks}
   */
  distributedArtworks = "distributedArtworks",

  /**
   * Corresponds to {@link EditedArtworkField}
   */
  editedArtworkField = "editedArtworkField",

  /**
   * Corresponds to {@link ResumedArtworkImport}
   */
  resumedArtworkImport = "resumedArtworkImport",

  /**
   * Corresponds to {@link StartedArtworkImport}
   */
  startedArtworkImport = "startedArtworkImport",
}
