import { CmsArtworkFilter } from "./ArtworkFilter"
import { CmsBatchImportFlow } from "./BatchImportFlow"
import { CmsUploadArtworkFlow } from "./UploadArtworkFlow"

/**
 * List of valid schemas for CMS analytics actions
 *
 * Each event describes one ActionType
 */
export type CmsEvent =
  | CmsArtworkFilter
  | CmsBatchImportFlow
  | CmsUploadArtworkFlow

/**
 * List of all CMS actions
 *
 * Each CmsActionType corresponds with a table in Redshift.
 */
export enum CmsActionType {
  /**
   * Corresponds to {@link CmsBatchImportFlow}
   */
  artistNeedsMatching = "artistNeedsMatching",

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
   * Corresponds to {@link CmsArtworkFilter}
   */
  searchedArtwork = "searched artwork",

  /**
   * Corresponds to {@link BatchImportFlow}
   */
  shownMissingInformation = "shownMissingInformation",
}
