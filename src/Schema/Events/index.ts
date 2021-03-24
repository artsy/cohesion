import { AddToCalendar } from "./AddToCalendar"
import {
  AuthImpression,
  CreatedAccount,
  OnboardingUserInputData,
  ResetYourPassword,
  SuccessfullyLoggedIn,
} from "./Authentication"
import {
  ClickedAppDownload,
  ClickedArticleGroup,
  ClickedArtistGroup,
  ClickedArtistSeriesGroup,
  ClickedArtworkGroup,
  ClickedAuctionGroup,
  ClickedCollectionGroup,
  ClickedEditArtwork,
  ClickedExpansionToggle,
  ClickedFairCard,
  ClickedFairGroup,
  ClickedLoadMore,
  ClickedMainArtworkGrid,
  ClickedNavigationTab,
  ClickedPartnerCard,
  ClickedShowMore,
  ClickedSnooze,
  ClickedViewingRoomCard,
} from "./Click"
import {
  FocusedOnConversationMessageInput,
  SentConversationMessage,
  TappedInboxConversation,
  TappedMakeOffer,
  TappedViewOffer,
} from "./Conversations"
import {
  AuctionResultsFilterParamsChanged,
  CommercialFilterParamsChanged,
} from "./FilterAndSort"
import {
  AddCollectedArtwork,
  DeleteCollectedArtwork,
  EditCollectedArtwork,
  TappedCollectedArtwork,
  TappedCollectedArtworkImages,
} from "./MyCollection"
import { FollowEvents } from "./SavesAndFollows"
import { Share } from "./Share"
import { SaleScreenLoadComplete, Screen, TimeOnPage } from "./System"
import {
  TappedArticleGroup,
  TappedArtistGroup,
  TappedArtistSeriesGroup,
  TappedArtworkGroup,
  TappedAuctionGroup,
  TappedAuctionResultGroup,
  TappedCollectionGroup,
  TappedConsign,
  TappedExploreGroup,
  TappedFairCard,
  TappedFairGroup,
  TappedInfoBubble,
  TappedMainArtworkGrid,
  TappedNavigationTab,
  TappedPartnerCard,
  TappedPromoSpace,
  TappedSell,
  TappedShowMore,
  TappedTabBar,
  TappedVerifyIdentity,
  TappedViewingRoomCard,
  TappedViewingRoomGroup,
} from "./Tap"
import { ToggledNotification } from "./Toggle"

/**
 * Master list of valid schemas for analytics actions
 *
 * Each event describes one ActionType
 */
export type Event =
  | AddToCalendar
  | AddCollectedArtwork
  | AuctionResultsFilterParamsChanged
  | AuthImpression
  | CreatedAccount
  | ClickedAppDownload
  | ClickedArticleGroup
  | ClickedArtistGroup
  | ClickedArtistSeriesGroup
  | ClickedArtworkGroup
  | ClickedAuctionGroup
  | ClickedCollectionGroup
  | ClickedEditArtwork
  | ClickedExpansionToggle
  | ClickedFairCard
  | ClickedFairGroup
  | ClickedLoadMore
  | ClickedMainArtworkGrid
  | ClickedNavigationTab
  | ClickedSnooze
  | ClickedPartnerCard
  | ClickedShowMore
  | ClickedViewingRoomCard
  | CommercialFilterParamsChanged
  | DeleteCollectedArtwork
  | EditCollectedArtwork
  | FocusedOnConversationMessageInput
  | FollowEvents
  | OnboardingUserInputData
  | ResetYourPassword
  | SaleScreenLoadComplete
  | Screen
  | SentConversationMessage
  | Share
  | SuccessfullyLoggedIn
  | TappedArticleGroup
  | TappedArtistGroup
  | TappedArtistSeriesGroup
  | TappedArtworkGroup
  | TappedAuctionGroup
  | TappedAuctionResultGroup
  | TappedCollectedArtwork
  | TappedCollectedArtworkImages
  | TappedCollectionGroup
  | TappedConsign
  | TappedExploreGroup
  | TappedFairCard
  | TappedFairGroup
  | TappedInboxConversation
  | TappedInfoBubble
  | TappedNavigationTab
  | TappedMainArtworkGrid
  | TappedMakeOffer
  | TappedPartnerCard
  | TappedPromoSpace
  | TappedSell
  | TappedShowMore
  | TappedTabBar
  | TappedVerifyIdentity
  | TappedViewingRoomCard
  | TappedViewingRoomGroup
  | TappedViewOffer
  | TimeOnPage
  | ToggledNotification

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
   * Corresponds to {@link AddToCalendar}
   */
  addToCalendar = "addToCalendar",
  /**
   * Corresponds to {@link AddCollectedArtwork}
   */
  addCollectedArtwork = "addCollectedArtwork",
  /**
   * Corresponds to {@link AuctionResultsFilterParamsChanged}
   */
  auctionResultsFilterParamsChanged = "auctionResultsFilterParamsChanged",
  /**
   * Corresponds to {@link ClickedAppDownload}
   */
  clickedAppDownload = "clickedAppDownload",
  /**
   * Corresponds to {@link ClickedArticleGroup}
   */
  clickedArticleGroup = "clickedArticleGroup",
  /**
   * Corresponds to {@link ClickedArtistGroup}
   */
  clickedArtistGroup = "clickedArtistGroup",
  /**
   * Corresponds to {@link ClickedArtistSeriesGroup}
   */
  clickedArtistSeriesGroup = "clickedArtistSeriesGroup",
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
   * Corresponds to {@link ClickedEditArtwork}
   */
  clickedEditArtwork = "clickedEditArtwork",
  /**
   * Corresponds to {@link ClickedExpansionToggle}
   */
  clickedExpansionToggle = "clickedExpansionToggle",
  /**
   * Corresponds to {@link ClickedFairCard}
   */
  clickedFairCard = "clickedFairCard",
  /**
   * Corresponds to {@link ClickedFairGroup}
   */
  clickedFairGroup = "clickedFairGroup",
  /**
   * Corresponds to {@link ClickedLoadMore}
   */
  clickedLoadMore = "clickedLoadMore",
  /**
  /**
   * Corresponds to {@link ClickedMainArtworkGrid}
   */
  clickedMainArtworkGrid = "clickedMainArtworkGrid",
  /**
   * Corresponds to {@link ClickedNavigationTab}
   */
  clickedNavigationTab = "clickedNavigationTab",
  /**
   * Corresponds to {@link ClickedSnooze}
   */
  clickedSnooze = "clickedSnooze",
  /**
   * Corresponds to {@link ClickedPartnerCard}
   */
  clickedPartnerCard = "clickedPartnerCard",
  /**
   * Corresponds to {@link ClickedShowMore}
   */
  clickedShowMore = "clickedShowMore",
  /**
   * Corresponds to {@link ClickedViewingRoomCard}
   */
  clickedViewingRoomCard = "clickedViewingRoomCard",
  /**
   * Corresponds to {@link CommercialFilterParamsChanged}
   */
  commercialFilterParamsChanged = "commercialFilterParamsChanged",
  /**
   * Corresponds to {@link CreatedAccount}
   */
  createdAccount = "createdAccount",
  /**
   * Corresponds to {@link DeleteCollectedArtwork}
   */
  deleteCollectedArtwork = "deleteCollectedArtwork",
  /**
   * Corresponds to {@link EditCollectedArtwork}
   */
  editCollectedArtwork = "editCollectedArtwork",
  /**
   * Corresponds to {@link FocusedOnConversationMessageInput}
   */
  focusedOnConversationMessageInput = "focusedOnConversationMessageInput",
  /**
   * Corresponds to {@link FocusedOnSearchInput}
   */
  focusedOnSearchInput = "focusedOnSearchInput",
  /**
   * Corresponds to {@link FollowedArtist}
   */
  followedArtist = "followedArtist",
  /**
   * Corresponds to {@link FollowedFair}
   */
  followedFair = "followedFair",
  /**
   * Corresponds to {@link FollowedGene}
   */
  followedGene = "followedGene",
  /**
   * Corresponds to {@link FollowedPartner}
   */
  followedPartner = "followedPartner",
  /**
   * Corresponds to {@link OnboardingUserInputData}
   */
  onboardingUserInputData = "onboardingUserInputData",
  /**
   * Corresponds to {@link ResetYourPassword}
   */
  resetYourPassword = "resetYourPassword",
  /**
   * Corresponds to {@link SaleScreenLoadComplete}
   */
  saleScreenLoadComplete = "saleScreenLoadComplete",
  /**
   * Corresponds to {@link Screen}
   */
  screen = "screen",
  /**
   * Corresponds to {@link SearchedWithNoResults}
   */
  searchedWithNoResults = "searchedWithNoResults",
  /**
   * Corresponds to {@link SelectedItemFromSearch}
   */
  selectedItemFromSearch = "selectedItemFromSearch",
  /**
   * Corresponds to {@link SentConversationMessage}
   */
  sentConversationMessage = "sentConversationMessage",
  /**
   * Corresponds to {@link Share}
   */
  share = "share",
  /**
   * Corresponds to {@link SuccessfullyLoggedIn}
   */
  successfullyLoggedIn = "successfullyLoggedIn",
  /**
   * Corresponds to {@link TappedArticleGroup}
   */
  tappedArticleGroup = "tappedArticleGroup",
  /**
   * Corresponds to {@link TappedArtistGroup}
   */
  tappedArtistGroup = "tappedArtistGroup",
  /**
   * Corresponds to {@link TappedArtistSeriesGroup}
   */
  tappedArtistSeriesGroup = "tappedArtistSeriesGroup",
  /**
   * Corresponds to {@link TappedArtworkGroup}
   */
  tappedArtworkGroup = "tappedArtworkGroup",
  /**
   * Corresponds to {@link TappedAuctionGroup}
   */
  tappedAuctionGroup = "tappedAuctionGroup",
  /**
   * Corresponds to {@link TappedAuctionResultGroup}
   */
  tappedAuctionResultGroup = "tappedAuctionResultGroup",
  /**
   * Corresponds to {@link TappedCollectedArtwork}
   */
  tappedCollectedArtwork = "tappedCollectedArtwork",
  /**
   * Corresponds to {@link TappedCollectedArtworkImages}
   */
  tappedCollectedArtworkImages = "tappedCollectedArtworkImages",
  /**
   * Corresponds to {@link TappedCollectionGroup}
   */
  tappedCollectionGroup = "tappedCollectionGroup",
  /**
   * Corresponds to {@link TappedConsign}
   */
  tappedConsign = "tappedConsign",
  /**
   * Corresponds to {@link TappedExploreGroup}
   */
  tappedExploreGroup = "tappedExploreGroup",
  /**
   * Corresponds to {@link TappedFairGroup}
   */
  tappedFairGroup = "tappedFairGroup",
  /**
   * Corresponds to {@link TappedFairCard}
   */
  tappedFairCard = "tappedFairCard",
  /**
   * Corresponds to {@link TappedInboxConversation}
   */
  tappedInboxConversation = "tappedInboxConversation",
  /**
   * Corresponds to {@link TappedInfoBubble}
   */
  tappedInfoBubble = "tappedInfoBubble",
  /**
   * Corresponds to {@link TappedMainArtworkGrid}
   */
  tappedMainArtworkGrid = "tappedMainArtworkGrid",
  /**
   * Corresponds to {@link TappedMakeOffer}
   */
  tappedMakeOffer = "tappedMakeOffer",
  /**
   * Corresponds to {@link TappedNavigationTab}
   */
  tappedNavigationTab = "tappedNavigationTab",
  /**
   * Corresponds to {@link TappedPartnerCard}
   */
  tappedPartnerCard = "tappedPartnerCard",
  /**
   * Corresponds to {@link TappedPromoSpace}
   */
  tappedPromoSpace = "tappedPromoSpace",
  /**
   * Corresponds to {@link TappedRegisterToBid}
   */
  tappedRegisterToBid = "tappedRegisterToBid",
  /**
   * Corresponds to {@link TappedSell}
   */
  tappedSell = "tappedSell",
  /**
   * Corresponds to {@link TappedShowMore}
   */
  tappedShowMore = "tappedShowMore",
  /**
   * Corresponds to {@link TappedTabBar}
   */
  tappedTabBar = "tappedTabBar",
  /**
   * Corresponds to {@link TappedVerifyIdentity}
   */
  tappedVerifyIdentity = "tappedVerifyIdentity",
  /**
   * Corresponds to {@link TappedViewingRoomCard}
   */
  tappedViewingRoomCard = "tappedViewingRoomCard",
  /**
   * Corresponds to {@link TappedViewingRoomGroup}
   */
  tappedViewingRoomGroup = "tappedViewingRoomGroup",
  /**
   * Corresponds to {@link TappedViewOffer}
   */
  tappedViewOffer = "tappedViewOffer",
  /**
   * Corresponds to {@link TimeOnPage}
   */
  timeOnPage = "timeOnPage",
  /**
   * Corresponds to {@link ToggledNotification}
   */
  toggledNotification = "toggledNotification",
  /**
   * Corresponds to {@link UnfollowedArtist}
   */
  unfollowedArtist = "unfollowedArtist",
  /**
   * Corresponds to {@link UnfollowedFair}
   */
  unfollowedFair = "unfollowedFair",
  /**
   * Corresponds to {@link UnfollowedGene}
   */
  unfollowedGene = "unfollowedGene",
  /**
   * Corresponds to {@link UnfollowedPartner}
   */
  unfollowedPartner = "unfollowedPartner",
}
