import {
  AuthImpression,
  CreatedAccount,
  ResetYourPassword,
  SuccessfullyLoggedIn,
} from "./Authentication"
import {
  ClickedArtistGroup,
  ClickedArtworkGroup,
  ClickedAuctionGroup,
  ClickedCollectionGroup,
  ClickedFairGroup,
  ClickedMainArtworkGrid,
} from "./Click"
import {
  FocusedOnConversationMessageInput,
  SentConversationMessage,
} from "./Conversations"
import {
  TappedArtistGroup,
  TappedArtworkGroup,
  TappedAuctionGroup,
  TappedCollectionGroup,
  TappedConsign,
  TappedExploreGroup,
  TappedFairGroup,
  TappedPromoSpace,
  TappedTabBar,
} from "./Tap"
import { TimeOnPage } from "./System"

/**
 * Master list of valid schemas for analytics actions
 *
 * Each event describes one ActionType
 */
export type Event =
  | AuthImpression
  | CreatedAccount
  | ClickedArtistGroup
  | ClickedArtworkGroup
  | ClickedAuctionGroup
  | ClickedCollectionGroup
  | ClickedFairGroup
  | ClickedMainArtworkGrid
  | FocusedOnConversationMessageInput
  | ResetYourPassword
  | SentConversationMessage
  | SuccessfullyLoggedIn
  | TappedArtistGroup
  | TappedArtworkGroup
  | TappedAuctionGroup
  | TappedCollectionGroup
  | TappedExploreGroup
  | TappedFairGroup
  | TappedConsign
  | TappedPromoSpace
  | TappedTabBar
  | TimeOnPage

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
   * Corresponds to {@link ClickedArtistGroup}
   */
  clickedArtistGroup = "clickedArtistGroup",
  /**
   * Corresponds to {@link ClickedArtworkGroup}
   */
  clickedArtworkGroup = "clickedArtworkGroup",
  /**
   * Corresponds to {@link ClickedAuctionGroup}
   */
  clickedAuctionGroup = "clickedAuctionGroup",
  /**
   * Corresponds to {@link ClickedCollectionGroup}
   */
  clickedCollectionGroup = "clickedCollectionGroup",
  /**
   * Corresponds to {@link ClickedFairGroup}
   */
  clickedFairGroup = "clickedFairGroup",
  /**
   * Corresponds to {@link ClickedMainArtworkGrid}
   */
  clickedMainArtworkGrid = "clickedMainArtworkGrid",
  /**
   * Corresponds to {@link CreatedAccount}
   */
  createdAccount = "createdAccount",
  /**
   * Corresponds to {@link FocusedOnConversationMessageInput}
   */
  focusedOnConversationMessageInput = "focusedOnConversationMessageInput",
  /**
   * Corresponds to {@link ResetYourPassword}
   */
  resetYourPassword = "resetYourPassword",
  /**
   * Corresponds to {@link SuccessfullyLoggedIn}
   */
  successfullyLoggedIn = "successfullyLoggedIn",
  /**
   * Corresponds to {@link SentConversationMessage}
   */
  sentConversationMessage = "sentConversationMessage",
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
  /**
   * Corresponds to {@link TappedConsign}
   */
  tappedConsign = "tappedConsign",
  /**
   * Corresponds to {@link TappedPromoSpace}
   */
  tappedPromoSpace = "tappedPromoSpace",
  /**
   * Corresponds to {@link TappedTabBar}
   */
  tappedTabBar = "tappedTabBar",
  /**
   * Corresponds to {@link TimeOnPage}
   */
  timeOnPage = "timeOnPage",
}
