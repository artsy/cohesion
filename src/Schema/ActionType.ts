import {
  TappedFairGroup,
  TappedArtistGroup,
  TappedArtworkGroup,
  TappedAuctionGroup,
  TappedCollectionGroup,
  TappedExploreGroup,
} from "./Event/Tap"
import {
  AuthImpression,
  CreatedAccount,
  ResetYourPassword,
  SuccessfullyLoggedIn,
} from "./Event/Authentication"

/**
 * The top-level actions an Event describes.
 *
 * Each ActionType corresponds with a table in Redshift.
 * @packageDocumentation
 */
export enum ActionType {
  /**
   * Corresponds to {@link AuthImpression}
   */
  authImpression = "authImpression",
  createdAccount = "createdAccount",
  resetYourPassword = "resetYourPassword",
  successfullyLoggedIn = "successfullyLoggedIn",
  tappedArtistGroup = "tappedArtistGroup",
  tappedArtworkGroup = "tappedArtworkGroup",
  tappedAuctionGroup = "tappedAuctionGroup",
  tappedCollectionGroup = "tappedCollectionGroup",
  tappedExploreGroup = "tappedExploreGroup",
  tappedFairGroup = "tappedFairGroup",
}

/**
 * Master list of valid schemas for analytics actions
 */
export type AnalyticsAction =
  | AuthImpression
  | CreatedAccount
  | ResetYourPassword
  | SuccessfullyLoggedIn
  | TappedArtistGroup
  | TappedArtworkGroup
  | TappedAuctionGroup
  | TappedCollectionGroup
  | TappedExploreGroup
  | TappedFairGroup
