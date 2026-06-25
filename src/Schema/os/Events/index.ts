import {
  ClickedAddBrandKitFile,
  ClickedBrandKitColor,
  ClickedBrandKitFont,
  ClickedSaveBrandKit,
} from "./BrandKit"
import { OsClickEvent } from "./Click"
import { OsConnectedAppsFlow } from "./ConnectedAppsFlow"
import { OsInventoryTable } from "./InventoryTable"
import { OsMaterialsEditor } from "./MaterialsEditor"
import { OsMultiAddFlow } from "./MultiAddFlow"
import { OsSubmitEvent } from "./Submit"

/**
 * List of valid schemas for Art OS analytics actions
 *
 * Each event describes one ActionType
 */
export type OsEvent =
  | OsMultiAddFlow
  | ClickedBrandKitColor
  | ClickedBrandKitFont
  | ClickedAddBrandKitFile
  | ClickedSaveBrandKit
  | OsConnectedAppsFlow
  | OsClickEvent
  | OsInventoryTable
  | OsMaterialsEditor
  | OsSubmitEvent

/**
 * List of all Art OS actions
 *
 * Each OsActionType corresponds with a table in Redshift.
 */
export enum OsActionType {
  /**
   * Corresponds to {@link OsInventoryTable}
   */
  addedArtist = "addedArtist",

  /**
   * Corresponds to {@link OsInventoryTable}
   */
  addedArtworkDocument = "addedArtworkDocument",

  /**
   * Corresponds to {@link OsInventoryTable}
   */
  addedLocation = "addedLocation",

  /**
   * Corresponds to {@link BulkEditedArtworks}
   */
  bulkEditedArtworks = "bulkEditedArtworks",

  /**
   * Corresponds to {@link CancelledArtworkImport}
   */
  cancelledArtworkImport = "cancelledArtworkImport",

  /**
   * Corresponds to {@link OsClickedActionsDropdown}
   */
  clickedActionsDropdown = "clickedActionsDropdown",

  /**
   * Corresponds to {@link ClickedAddFromFile}
   */
  clickedAddFromFile = "clickedAddFromFile",

  /*
   * Corresponds to {@link OsInventoryTable}
   */
  clickedArtworkRow = "clickedArtworkRow",

  /**
   * Corresponds to {@link ClickedCancelBulkEdit}
   */
  clickedCancelBulkEdit = "clickedCancelBulkEdit",

  /**
   * Corresponds to {@link OsInventoryTable}
   */
  clickedEditionSetRow = "clickedEditionSetRow",

  /**
   * Corresponds to {@link ClickedConnectAccount}
   */
  clickedConnectAccount = "clickedConnectAccount",

  /**
   * Corresponds to {@link ClickedConnectAccountModal}
   */
  clickedConnectAccountModal = "clickedConnectAccountModal",

  /**
   * Corresponds to {@link OsClickedBrandKitModal}
   */
  clickedBrandKitModal = "clickedBrandKitModal",

  /**
   * Corresponds to {@link ClickedExitDropZone}
   */
  clickedExitDropZone = "clickedExitDropZone",

  /**
   * Corresponds to {@link OsClickedExitEditor}
   */
  clickedExitEditor = "clickedExitEditor",

  /**
   * Corresponds to {@link OsInventoryTable}
   */
  clickedImagesModal = "clickedImagesModal",

  /**
   * Corresponds to {@link CompletedArtworkImport}
   */
  completedArtworkImport = "completedArtworkImport",

  /**
   * Corresponds to {@link CreatedImportedArtworks}
   */
  createdImportedArtworks = "createdImportedArtworks",

  /**
   * Corresponds to {@link OsCreatedStudioContent}
   */
  createdStudioContent = "createdStudioContent",

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
   * Corresponds to {@link OsInventoryTable}
   */
  removedArtworkDocument = "removedArtworkDocument",

  /**
   * Corresponds to {@link ResumedArtworkImport}
   */
  resumedArtworkImport = "resumedArtworkImport",

  /**
   * Corresponds to {@link OsInventoryTable}
   */
  savedArtworkImages = "savedArtworkImages",

  /**
   * Corresponds to {@link StartedArtworkImport}
   */
  startedArtworkImport = "startedArtworkImport",
}
