import { OSConnectedAppsFlow } from "./ConnectedAppsFlow"
import { OsMultiAddFlow } from "./MultiAddFlow"

/**
 * List of valid schemas for Art OS analytics actions
 *
 * Each event describes one ActionType
 */
export type OsEvent = OsMultiAddFlow | OSConnectedAppsFlow

/**
 * List of all Art OS actions
 *
 * Each OsActionType corresponds with a table in Redshift.
 */
export enum OsActionType {
  /**
   * Corresponds to {@link CancelledArtworkImport}
   */
  cancelledArtworkImport = "cancelledArtworkImport",

  /**
   * Corresponds to {@link ClickedAddFromFile}
   */
  clickedAddFromFile = "clickedAddFromFile",

  /**
   * Corresponds to {@link ClickedConnectAccount}
   */
  clickedConnectAccount = "clickedConnectAccount",

  /**
   * Corresponds to {@link ClickedConnectAccountModal}
   */
  clickedConnectAccountModal = "clickedConnectAccountModal",

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
