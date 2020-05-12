import {
  TappedFairGroup,
  TappedArtistGroup,
  TappedArtworkGroup,
  TappedAuctionGroup,
  TappedCollectionGroup,
  TappedExploreGroup,
  TappedConsign,
} from "./Events/Tap"
import {
  AuthImpression,
  CreatedAccount,
  ResetYourPassword,
  SuccessfullyLoggedIn,
} from "./Events/Authentication"

/**
 * The top-level actions an Event describes.
 *
 * Each ActionType corresponds with a table in Redshift.
 */
export enum ActionType {
  /**
   * Corresponds to {@link AuthImpression}
   */
  authImpression = "authImpression",
  /**
   * Corresponds to {@link CreatedAccount}
   */
  createdAccount = "createdAccount",
  /**
   * Corresponds to {@link ResetYourPassword}
   */
  resetYourPassword = "resetYourPassword",
  /**
   * Corresponds to {@link SuccessfullyLoggedIn}
   */
  successfullyLoggedIn = "successfullyLoggedIn",
  /**
   * Corresponds to {@link TappedArtistGroup}
   */
  tappedArtistGroup = "tappedArtistGroup",
  /**
   * Corresponds to {@link TappedArtworkGroup}
   */
  tappedArtworkGroup = "tappedArtworkGroup",
  /**
   * Corresponds to {@link TappedAuctionGroup}
   */
  tappedAuctionGroup = "tappedAuctionGroup",
  /**
   * Corresponds to {@link TappedCollectionGroup}
   */
  tappedCollectionGroup = "tappedCollectionGroup",
  /**
   * Corresponds to {@link TappedExploreGroup}
   */
  tappedExploreGroup = "tappedExploreGroup",
  /**
   * Corresponds to {@link TappedFairGroup}
   */
  tappedFairGroup = "tappedFairGroup",

  tappedConsign = "tappedConsign",
  /**
   * Corresponds to {@link tappedConsign}
   */
}

/**
 * Master list of valid schemas for analytics actions
 *
 * Each event describes one ActionType
 */
export type Event =
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
  | TappedConsign
