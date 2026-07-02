import {
  ClickedAddBrandKitFile,
  ClickedBrandKitColor,
  ClickedBrandKitFont,
  ClickedSaveBrandKit,
} from "./BrandKit"
import { OsClickEvent } from "./Click"
import { OsConnectedAppsFlow } from "./ConnectedAppsFlow"
import { OsFilterSortSearch } from "./FilterSortSearch"
import { OsInstagramEditor } from "./InstagramEditor"
import { OsInventoryTable } from "./InventoryTable"
import { OsMailchimpEditor } from "./MailchimpEditor"
import { OsMaterialsEditor } from "./MaterialsEditor"
import { OsMultiAddFlow } from "./MultiAddFlow"
import { OsOnboardingFlow } from "./OnboardingFlow"
import { OsSubmitEvent } from "./Submit"
import { OsToggleEvent } from "./Toggle"

/**
 * List of valid schemas for Art OS analytics actions
 *
 * Each event describes one ActionType
 */
export type OsEvent =
  | ClickedAddBrandKitFile
  | ClickedBrandKitColor
  | ClickedBrandKitFont
  | ClickedSaveBrandKit
  | OsClickEvent
  | OsConnectedAppsFlow
  | OsFilterSortSearch
  | OsInstagramEditor
  | OsInventoryTable
  | OsMailchimpEditor
  | OsMaterialsEditor
  | OsMultiAddFlow
  | OsOnboardingFlow
  | OsSubmitEvent
  | OsToggleEvent

/**
 * List of all Art OS actions
 *
 * Each OsActionType corresponds with a table in Redshift.
 */
export enum OsActionType {
  /**
   * Corresponds to {@link OsFilterSortSearch}
   */
  appliedFilter = "appliedFilter",

  /**
   * Corresponds to {@link OsInventoryTable}
   */
  addedArtist = "addedArtist",

  /**
   * Corresponds to {@link OsInventoryTable}
   */
  addedArtworkDocument = "addedArtworkDocument",

  /**
   * Corresponds to {@link AddedArtworksToList}
   */
  addedArtworksToList = "addedArtworksToList",

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
   * Corresponds to {@link ClickedAddEditionSet}
   */
  clickedAddEditionSet = "clickedAddEditionSet",

  /**
   * Corresponds to {@link ClickedAddFromFile}
   */
  clickedAddFromFile = "clickedAddFromFile",

  /**
   * Corresponds to {@link ClickedAddUniqueWork}
   */
  clickedAddUniqueWork = "clickedAddUniqueWork",

  /*
   * Corresponds to {@link OsInventoryTable}
   */
  clickedArtworkRow = "clickedArtworkRow",

  /**
   * Corresponds to {@link OsInstagramEditor}
   */
  clickedAspectRatio = "clickedAspectRatio",

  /**
   * Corresponds to {@link OsClickedBrandKitModal}
   */
  clickedBrandKitModal = "clickedBrandKitModal",

  /**
   * Corresponds to {@link ClickedCancelBulkEdit}
   */
  clickedCancelBulkEdit = "clickedCancelBulkEdit",

  /**
   * Corresponds to {@link OsFilterSortSearch}
   */
  clickedFilterDrawer = "clickedFilterDrawer",

  /**
   * Corresponds to {@link ClickedConnectAccount}
   */
  clickedConnectAccount = "clickedConnectAccount",

  /**
   * Corresponds to {@link ClickedConnectAccountModal}
   */
  clickedConnectAccountModal = "clickedConnectAccountModal",

  /**
   * Corresponds to {@link OsInstagramEditor}
   */
  clickedConnectModal = "clickedConnectModal",

  /**
   * Corresponds to {@link OsInventoryTable}
   */
  clickedEditionSetRow = "clickedEditionSetRow",

  /**
   * Corresponds to {@link ClickedExitDropZone}
   */
  clickedExitDropZone = "clickedExitDropZone",

  /**
   * Corresponds to {@link OsClickedExitEditor}
   */
  clickedExitEditor = "clickedExitEditor",

  /**
   * Corresponds to {@link OsInstagramEditor}
   */
  clickedImageBankImage = "clickedImageBankImage",

  /**
   * Corresponds to {@link OsInstagramEditor}
   */
  clickedImageBankManagement = "clickedImageBankManagement",

  /**
   * Corresponds to {@link OsInventoryTable}
   */
  clickedImagesModal = "clickedImagesModal",

  /**
   * Corresponds to {@link ClickedOpenList}
   */
  clickedOpenList = "clickedOpenList",

  /**
   * Corresponds to {@link OsInstagramEditor}
   */
  clickedPublishConfirmation = "clickedPublishConfirmation",

  /**
   * Corresponds to {@link ClickedShowMeHow}
   */
  clickedShowMeHow = "clickedShowMeHow",

  /**
   * Corresponds to {@link OsMailchimpEditor}
   */
  clickedSendConfirmation = "clickedSendConfirmation",

  /**
   * Corresponds to {@link OsInstagramEditor}
   */
  clickedUploadImageBank = "clickedUploadImageBank",

  /**
   * Corresponds to {@link CompletedArtworkDistribution}
   */
  completedArtworkDistribution = "completedArtworkDistribution",

  /**
   * Corresponds to {@link CompletedArtworkImport}
   */
  completedArtworkImport = "completedArtworkImport",

  /**
   * Corresponds to {@link CompletedGettingStarted}
   */
  completedOnboarding = "completedOnboarding",

  /**
   * Corresponds to {@link ConvertedArtworkToUnique}
   */
  convertedArtworkToUnique = "convertedArtworkToUnique",

  /**
   * Corresponds to {@link CreatedEditionSet}
   */
  createdEditionSet = "createdEditionSet",

  /**
   * Corresponds to {@link CreatedImportedArtworks}
   */
  createdImportedArtworks = "createdImportedArtworks",

  /**
   * Corresponds to {@link CreatedList}
   */
  createdList = "createdList",

  /**
   * Corresponds to {@link OsMaterialsEditor}, {@link OsInstagramEditor}, and
   * {@link OsMailchimpEditor}
   */
  createdStudioContent = "createdStudioContent",

  /**
   * Corresponds to {@link OsFilterSortSearch}
   */
  clearedFilters = "clearedFilters",

  /**
   * Corresponds to {@link DeletedArtwork}
   */
  deletedArtwork = "deletedArtwork",

  /**
   * Corresponds to {@link DeletedList}
   */
  deletedList = "deletedList",

  /**
   * Corresponds to {@link DistributedArtworks}
   */
  distributedArtworks = "distributedArtworks",

  /**
   * Corresponds to {@link DistributedList}
   */
  distributedList = "distributedList",

  /**
   * Corresponds to {@link EditedArtworkField}
   */
  editedArtworkField = "editedArtworkField",

  /**
   * Corresponds to {@link EditedInventoryField}
   */
  editedInventoryField = "editedInventoryField",

  /**
   * Corresponds to {@link MovedArtworksBetweenLists}
   */
  movedArtworksBetweenLists = "movedArtworksBetweenLists",

  /**
   * Corresponds to {@link ProgressedGettingStarted}
   */
  progressedOnboarding = "progressedOnboarding",

  /**
   * Corresponds to {@link OsInventoryTable}
   */
  removedArtworkDocument = "removedArtworkDocument",

  /**
   * Corresponds to {@link OsFilterSortSearch}
   */
  removedFilter = "removedFilter",

  /**
   * Corresponds to {@link RemovedArtworksFromList}
   */
  removedArtworksFromList = "removedArtworksFromList",

  /**
   * Corresponds to {@link ResumedArtworkImport}
   */
  resumedArtworkImport = "resumedArtworkImport",

  /**
   * Corresponds to {@link OsInventoryTable}
   */
  savedArtworkImages = "savedArtworkImages",

  /**
   * Corresponds to {@link OsFilterSortSearch}
   */
  searchedArtworks = "searchedArtworks",

  /**
   * Corresponds to {@link OsFilterSortSearch}
   */
  sortedColumn = "sortedColumn",

  /**
   * Corresponds to {@link StartedArtworkImport}
   */
  startedArtworkImport = "startedArtworkImport",

  /**
   * Corresponds to {@link ToggledDistributionSync}
   */
  toggledDistributionSync = "toggledDistributionSync",

  /**
   * Corresponds to {@link UpdatedEditionSet}
   */
  updatedEditionSet = "updatedEditionSet",

  /**
   * Corresponds to {@link UpdatedList}
   */
  updatedList = "updatedList",
}
