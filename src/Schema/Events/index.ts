import { AddToCalendar } from "./AddToCalendar"
import {
  AuthImpression,
  CreatedAccount,
  OnboardingUserInputData,
  ResetYourPassword,
  SuccessfullyLoggedIn,
} from "./Authentication"
import {
  ClickedAddNewShippingAddress,
  ClickedAddWorksToFair,
  ClickedAppDownload,
  ClickedArticleGroup,
  ClickedArtistGroup,
  ClickedArtistSeriesGroup,
  ClickedArtworkGroup,
  ClickedAuctionGroup,
  ClickedBuyerProtection,
  ClickedChangePage,
  ClickedChangePaymentMethod,
  ClickedChangeShippingAddress,
  ClickedChangeShippingMethod,
  ClickedCollectionGroup,
  ClickedCreateAlert,
  ClickedDeliveryMethod,
  ClickedEditArtwork,
  ClickedExpansionToggle,
  ClickedFairCard,
  ClickedFairGroup,
  ClickedGalleryGroup,
  ClickedLoadMore,
  ClickedMainArtworkGrid,
  ClickedNavigationTab,
  ClickedOfferOption,
  ClickedOnArtworkShippingUnitsDropdown,
  ClickedOnArtworkShippingWeight,
  ClickedOnFramedMeasurements,
  ClickedOnFramedMeasurementsDropdown,
  ClickedOnSubmitOrder,
  ClickedPartnerCard,
  ClickedPromoSpace,
  ClickedSelectShippingOption,
  ClickedShippingAddress,
  ClickedShowGroup,
  ClickedShowMore,
  ClickedSnooze,
  ClickedVerifyIdentity,
  ClickedViewingRoomCard,
} from "./Click"
import {
  ArtworkDetailsCompleted,
  ConsignmentSubmitted,
  SubmitAnotherArtwork,
  UploadPhotosCompleted,
  ViewArtworkMyCollection,
} from "./Consignments"
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
  PriceDatabaseFilterParamsChanged,
} from "./FilterAndSort"
import {
  AddCollectedArtwork,
  DeleteCollectedArtwork,
  EditCollectedArtwork,
  TappedCollectedArtwork,
  TappedCollectedArtworkImages,
} from "./MyCollection"
import { PromptForReview } from "./PromptForReview"
import { DeletedSavedSearch, EditedSavedSearch } from "./SavedSearch"
import { FollowEvents } from "./SavesAndFollows"
import {
  ConsignmentArtistFailed,
  FocusedOnPriceDatabaseSearchInput,
  FocusedOnSearchInput,
  SearchedPriceDatabase,
  SearchedWithNoResults,
  SelectedItemFromPriceDatabaseSearch,
  SelectedItemFromSearch,
} from "./Search"
import { Share } from "./Share"
import { SaleScreenLoadComplete, Screen, TimeOnPage } from "./System"
import {
  TappedArticleGroup,
  TappedArtistGroup,
  TappedArtistSeriesGroup,
  TappedArtworkGroup,
  TappedAuctionGroup,
  TappedAuctionResultGroup,
  TappedBid,
  TappedBuyNow,
  TappedCollectionGroup,
  TappedConsign,
  TappedContactGallery,
  TappedCreateAlert,
  TappedExploreGroup,
  TappedFairCard,
  TappedFairGroup,
  TappedInfoBubble,
  TappedLink,
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
import { ToggledNotification, ToggledSavedSearch } from "./Toggle"
import { ToggledAccordion } from "./UserExperienceInteractions"

/**
 * Master list of valid schemas for analytics actions
 *
 * Each event describes one ActionType
 */
export type Event =
  | AddToCalendar
  | AddCollectedArtwork
  | ArtworkDetailsCompleted
  | AuctionResultsFilterParamsChanged
  | AuthImpression
  | CreatedAccount
  | ClickedAddNewShippingAddress
  | ClickedAddWorksToFair
  | ClickedAppDownload
  | ClickedArticleGroup
  | ClickedArtistGroup
  | ClickedArtistSeriesGroup
  | ClickedArtworkGroup
  | ClickedAuctionGroup
  | ClickedBuyerProtection
  | ClickedChangePage
  | ClickedChangePaymentMethod
  | ClickedChangeShippingAddress
  | ClickedChangeShippingMethod
  | ClickedCollectionGroup
  | ClickedCreateAlert
  | ClickedDeliveryMethod
  | ClickedEditArtwork
  | ClickedExpansionToggle
  | ClickedFairCard
  | ClickedFairGroup
  | ClickedGalleryGroup
  | ClickedLoadMore
  | ClickedMainArtworkGrid
  | ClickedNavigationTab
  | ClickedOfferOption
  | ClickedOnArtworkShippingWeight
  | ClickedOnArtworkShippingUnitsDropdown
  | ClickedOnFramedMeasurements
  | ClickedOnFramedMeasurementsDropdown
  | ClickedOnSubmitOrder
  | ClickedSnooze
  | ClickedPartnerCard
  | ClickedPromoSpace
  | ClickedSelectShippingOption
  | ClickedShippingAddress
  | ClickedShowGroup
  | ClickedShowMore
  | ClickedVerifyIdentity
  | ClickedViewingRoomCard
  | CommercialFilterParamsChanged
  | ConsignmentArtistFailed
  | ConsignmentSubmitted
  | DeleteCollectedArtwork
  | DeletedSavedSearch
  | EditCollectedArtwork
  | EditedSavedSearch
  | FocusedOnConversationMessageInput
  | FocusedOnSearchInput
  | FocusedOnPriceDatabaseSearchInput
  | FollowEvents
  | OnboardingUserInputData
  | PriceDatabaseFilterParamsChanged
  | PromptForReview
  | ResetYourPassword
  | SaleScreenLoadComplete
  | Screen
  | SearchedPriceDatabase
  | SearchedWithNoResults
  | SelectedItemFromSearch
  | SelectedItemFromPriceDatabaseSearch
  | SentConversationMessage
  | Share
  | SubmitAnotherArtwork
  | SuccessfullyLoggedIn
  | TappedArticleGroup
  | TappedArtistGroup
  | TappedArtistSeriesGroup
  | TappedArtworkGroup
  | TappedAuctionGroup
  | TappedAuctionResultGroup
  | TappedBid
  | TappedBuyNow
  | TappedCollectedArtwork
  | TappedCollectedArtworkImages
  | TappedCollectionGroup
  | TappedConsign
  | TappedContactGallery
  | TappedCreateAlert
  | TappedExploreGroup
  | TappedFairCard
  | TappedFairGroup
  | TappedInboxConversation
  | TappedInfoBubble
  | TappedLink
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
  | ToggledAccordion
  | ToggledNotification
  | ToggledSavedSearch
  | UploadPhotosCompleted
  | ViewArtworkMyCollection

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
   * Corresponds to {@link ArtworkDetailsCompleted}
   */
  artworkDetailsCompleted = "artworkDetailsCompleted",
  /**
   * Corresponds to {@link AuctionResultsFilterParamsChanged}
   */
  auctionResultsFilterParamsChanged = "auctionResultsFilterParamsChanged",
  /**
   * Corresponds to {@link ClickedAddNewShippingAddress}
   */
  clickedAddNewShippingAddress = "clickedAddNewShippingAddress",
  /**
   * Corresponds to {@link ClickedAddWorksToFair}
   */
  clickedAddWorksToFair = "clickedAddWorksToFair",
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
   * Corresponds to {@link ClickedBuyerProtection}
   */
  clickedBuyerProtection = "clickedBuyerProtection",
  /**
   * Corresponds to {@link ClickedChangePage}
   */
  clickedChangePage = "clickedChangePage",
  /**
   * Corresponds to {@link ClickedChangeShippingAddress}
   */
  clickedChangeShippingAddress = "clickedChangeShippingAddress",
  /**
   * Corresponds to {@link ClickedChangeShippingMethod}
   */
  clickedChangeShippingMethod = "clickedChangeShippingMethod",
  /**
   * Corresponds to {@link ClickedChangePaymentMethod}
   */
  clickedChangePaymentMethod = "clickedChangePaymentMethod",
  /**
   * Corresponds to {@link ClickedCollectionGroup}
   */
  clickedCollectionGroup = "clickedCollectionGroup",
  /**
   * Corresponds to {@link ClickedCreateAlert}
   */
  clickedCreateAlert = "clickedCreateAlert",
  /**
   * Corresponds to {@link ClickedDeliveryMethod}
   */
  clickedDeliveryMethod = "clickedDeliveryMethod",
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
   * Corresponds to {@link ClickedFairGroup}
   */
  clickedGalleryGroup = "clickedGalleryGroup",
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
   * Corresponds to {@link ClickedOnArtworkShippingUnitsDropdown}
   */
  clickedOfferOption = "clickedOfferOption",
  /**
   * Corresponds to {@link ClickedOfferOption}
   */
  clickedOnArtworkShippingUnitsDropdown = "clickedOnArtworkShippingUnitsDropdown",
  /**
   * Corresponds to {@link ClickedOnArtworkShippingWeight}
   */
  clickedOnArtworkShippingWeight = "clickedOnArtworkShippingWeight",
  /**
   * Corresponds to {@link ClickedOnFramedMeasurements}
   */
  clickedOnFramedMeasurements = "clickedOnFramedMeasurements",
  /**
   * Corresponds to {@link ClickedOnFramedMeasurementsDropdown}
   */
  clickedOnFramedMeasurementsDropdown = "clickedOnFramedMeasurementsDropdown",
  /**
   * Corresponds to {@link ClickedOnSubmitOrder}
   */
  clickedOnSubmitOrder = "clickedOnSubmitOrder",
  /**
   * Corresponds to {@link ClickedSnooze}
   */
  clickedSnooze = "clickedSnooze",
  /**
   * Corresponds to {@link ClickedPartnerCard}
   */
  clickedPartnerCard = "clickedPartnerCard",
  /**
   * Corresponds to {@link ClickedPromoSpace}
   */
  clickedPromoSpace = "clickedPromoSpace",
  /**
   * Corresponds to {@link ClickedSelectShippingOption}
   */
  clickedSelectShippingOption = "clickedSelectShippingOption",
  /**
   * Corresponds to {@link ClickedShippingAddress}
   */
  clickedShippingAddress = "clickedShippingAddress",
  /**
   * Corresponds to {@link ClickedShowGroup}
   */
  clickedShowGroup = "clickedShowGroup",
  /**
   * Corresponds to {@link ClickedShowMore}
   */
  clickedShowMore = "clickedShowMore",
  /**
   * Corresponds to {@link ClickedVerifyIdentiity}
   */
  clickedVerifyIdentity = "clickedVerifyIdentity",
  /**
   * Corresponds to {@link ClickedViewingRoomCard}
   */
  clickedViewingRoomCard = "clickedViewingRoomCard",
  /**
   * Corresponds to {@link CommercialFilterParamsChanged}
   */
  commercialFilterParamsChanged = "commercialFilterParamsChanged",
  /**
   * Corresponds to {@link ConsignmentArtistFailed}
   */
  consignmentArtistFailed = "consignmentArtistFailed",
  /**
   * Corresponds to {@link ConsignmentSubmitted}
   */
  consignmentSubmitted = "consignmentSubmitted",
  /**
   * Corresponds to {@link ContactInformationCompleted}
   */
  contactInformationCompleted = "contactInformationCompleted",
  /**
   * Corresponds to {@link ContactGallery}
   */
  contactGallery = "contactGallery",
  /**
   * Corresponds to {@link CreatedAccount}
   */
  createdAccount = "createdAccount",
  /**
   * Corresponds to {@link DeleteCollectedArtwork}
   */
  deleteCollectedArtwork = "deleteCollectedArtwork",
  /**
   * Corresponds to {@link DeletedSavedSearch}
   */
  deletedSavedSearch = "deletedSavedSearch",
  /**
   * Corresponds to {@link EditCollectedArtwork}
   */
  editCollectedArtwork = "editCollectedArtwork",
  /**
   * Corresponds to {@link EditedSavedSearch}
   */
  editedSavedSearch = "editedSavedSearch",
  /**
   * Corresponds to {@link FocusedOnConversationMessageInput}
   */
  focusedOnConversationMessageInput = "focusedOnConversationMessageInput",
  /**
   * Corresponds to {@link FocusedOnSearchInput}
   */
  focusedOnSearchInput = "focusedOnSearchInput",
  /**
   * Corresponds to {@link FocusedOnPriceDatabaseSearchInput}
   */
  focusedOnPriceDatabaseSearchInput = "focusedOnPriceDatabaseSearchInput",
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
   * Corresponds to {@link PriceDatabaseFilterParamsChanged}
   */
  priceDatabaseFilterParamsChanged = "priceDatabaseFilterParamsChanged",
  /**
   * Corresponds to {@link PromptForReview}
   */
  promptForReview = "promptForReview",
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
   * Corresponds to {@link SearchedPriceDatabase}
   */
  searchedPriceDatabase = "searchedPriceDatabase",
  /**
   * Corresponds to {@link SearchedWithNoResults}
   */
  searchedWithNoResults = "searchedWithNoResults",
  /**
   * Corresponds to {@link SelectedItemFromSearch}
   */
  selectedItemFromSearch = "selectedItemFromSearch",
  /**
   * Corresponds to {@link SelectedItemFromPriceDatabaseSearch}
   */
  selectedItemFromPriceDatabaseSearch = "selectedItemFromPriceDatabaseSearch",
  /**
   * Corresponds to {@link sentArtworkInquiry}
   */
  sentArtworkInquiry = "sentArtworkInquiry",
  /**
   * Corresponds to {@link SentConversationMessage}
   */
  sentConversationMessage = "sentConversationMessage",
  /**
   * Corresponds to {@link Share}
   */
  share = "share",
  /**
   * Corresponds to {@link experimentViewed}
   */
  experimentViewed = "experimentViewed",
  /**
   * Corresponds to {@link SubmitAnotherArtwork}
   */
  submitAnotherArtwork = "submitAnotherArtwork",
  /**
   * Corresponds to {@link SuccessfullyLoggedIn}
   */
  successfullyLoggedIn = "successfullyLoggedIn",
  /**
   * Corresponds to {@link TappedArticleGroup}
   */
  tappedArticleGroup = "tappedArticleGroup",
  /**
   * Corresponds to {@link TappedShowGroup}
   */
  tappedShowGroup = "tappedShowGroup",
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
   * Corresponds to {@link TappedBid}
   */
  tappedBid = "tappedBid",
  /**
   * Corresponds to {@link TappedBuyNow}
   */
  tappedBuyNow = "tappedBuyNow",
  /**
   * Corresponds to {@link TappedCollectedArtwork}
   */
  tappedCollectedArtwork = "tappedCollectedArtwork",
  /**
   * Corresponds to {@link TappedMyCollectionAddArtworkArtist}
   */
  tappedMyCollectionAddArtworkArtist = "tappedMyCollectionAddArtworkArtist",
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
   * Corresponds to {@link TappedContactGallery}
   */
  tappedContactGallery = "tappedContactGallery",
  /**
   * Corresponds to {@link TappedCreateAlert}
   */
  tappedCreateAlert = "tappedCreateAlert",
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
   * Corresponds to {@link TappedLink}
   */
  tappedLink = "tappedLink",
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
   * Corresponds to {@link ToggledAccordion}
   */
  toggledAccordion = "toggledAccordion",
  /**
   * Corresponds to {@link ToggledNotification}
   */
  toggledNotification = "toggledNotification",
  /**
   * Corresponds to {@link ToggledSavedSearch}
   */
  toggledSavedSearch = "toggledSavedSearch",
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
  /**
   * Corresponds to {@link UploadPhotosCompleted}
   */
  uploadPhotosCompleted = "uploadPhotosCompleted",
  /**
   * Corresponds to {@link ViewArtworkMyCollection}
   */
  viewArtworkMyCollection = "viewArtworkMyCollection",
}
