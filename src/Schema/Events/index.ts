import {
  ClickedActivityPanelNotificationItem,
  ClickedActivityPanelTab,
  ClickedNotificationsBell,
} from "./ActivityPanel"
import { AddToCalendar } from "./AddToCalendar"
import {
  AuctionPageView,
  BidPageView,
  ClickedActiveBid,
  ClickedRegisterToBid,
  ConfirmBid,
  ConfirmRegistrationPageview,
  EnterLiveAuction,
  MaxBidSelected,
  RegistrationPageView,
  RegistrationSubmitted,
} from "./Auction"
import {
  AuthImpression,
  CompletedOnboarding,
  CreatedAccount,
  OnboardingUserInputData,
  ResetYourPassword,
  StartedOnboarding,
  SuccessfullyLoggedIn,
} from "./Authentication"
import {
  CheckedAccountBalance,
  ClickedAddNewShippingAddress,
  ClickedAddWorksToFair,
  ClickedAppDownload,
  ClickedArticleGroup,
  ClickedArtistGroup,
  ClickedArtistSeriesGroup,
  ClickedArtworkGroup,
  ClickedAuctionGroup,
  ClickedAuctionResultItem,
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
  ClickedOfferActions,
  ClickedOfferOption,
  ClickedOnArtworkShippingUnitsDropdown,
  ClickedOnArtworkShippingWeight,
  ClickedOnFramedMeasurements,
  ClickedOnFramedMeasurementsDropdown,
  ClickedOnPriceDisplayDropdown,
  ClickedOnSubmitOrder,
  ClickedOrderPage,
  ClickedOrderSummary,
  ClickedPartnerCard,
  ClickedPartnerLink,
  ClickedPaymentDetails,
  ClickedPaymentMethod,
  ClickedPromoSpace,
  ClickedSelectShippingOption,
  ClickedShippingAddress,
  ClickedShowGroup,
  ClickedShowMore,
  ClickedSnooze,
  ClickedVerifyIdentity,
  ClickedViewingRoomCard,
} from "./Click"
import { EditedUserProfile } from "./CollectorProfile"
import {
  ArtworkDetailsCompleted,
  ConsignmentSubmitted,
  ContactInformationCompleted,
  SentConsignmentInquiry,
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
import { ExperimentViewed } from "./ExperimentViewed"
import {
  AuctionResultsFilterParamsChanged,
  CommercialFilterParamsChanged,
  PriceDatabaseFilterParamsChanged,
  SelectedRecentPriceRange,
} from "./FilterAndSort"
import {
  MyCollectionOnboardingCompleted,
  TappedExploreMyCollection,
  VisitMyCollection,
  VisitMyCollectionOnboardingSlide,
} from "./HomeFeedMyCollectionOnboarding"
import { Impression } from "./Impression"
import {
  AddCollectedArtwork,
  DeleteCollectedArtwork,
  EditCollectedArtwork,
  SaveCollectedArtwork,
  SentRequestPriceEstimate,
  TappedCollectedArtwork,
  TappedCollectedArtworkImages,
  TappedRequestPriceEstimate,
} from "./MyCollection"
import {
  TappedMyCollectionInsightsMedianAuctionPriceChartCareerHighlight,
  TappedMyCollectionInsightsMedianAuctionPriceChartCategory,
  TappedMyCollectionInsightsMedianAuctionPriceChartTimeframe,
  TappedMyCollectionInsightsMedianAuctionRailItem,
} from "./MyCollectionInsights"
import { PromptForReview } from "./PromptForReview"
import {
  SearchedReverseImageWithNoResults,
  SearchedReverseImageWithResults,
  SelectedArtworkFromReverseImageSearch,
  TappedPickImageFromLibrary,
  TappedReverseImageSearch,
  TappedToggleCameraFlash,
} from "./ReverseImageSearch"
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
  TappedConsignmentInquiry,
  TappedContactGallery,
  TappedCreateAlert,
  TappedExploreGroup,
  TappedFairCard,
  TappedFairGroup,
  TappedInfoBubble,
  TappedLearnMore,
  TappedLink,
  TappedMainArtworkGrid,
  TappedNavigationTab,
  TappedPartnerCard,
  TappedPromoSpace,
  TappedSell,
  TappedSellArtwork,
  TappedShowMore,
  TappedSkip,
  TappedTabBar,
  TappedVerifyIdentity,
  TappedViewingRoomCard,
  TappedViewingRoomGroup,
} from "./Tap"
import { ToggledNotification, ToggledSavedSearch } from "./Toggle"
import { UploadSizeLimitExceeded } from "./UploadSizeLimitExceeded"
import { ToggledAccordion } from "./UserExperienceInteractions"
import { ViewedVideo } from "./Video"

/**
 * Master list of valid schemas for analytics actions
 *
 * Each event describes one ActionType
 */
export type Event =
  | AddToCalendar
  | AddCollectedArtwork
  | ArtworkDetailsCompleted
  | AuctionPageView
  | AuctionResultsFilterParamsChanged
  | AuthImpression
  | BidPageView
  | CreatedAccount
  | ClickedActiveBid
  | ClickedActivityPanelNotificationItem
  | ClickedActivityPanelTab
  | ClickedAddNewShippingAddress
  | ClickedAddWorksToFair
  | ClickedAppDownload
  | ClickedArticleGroup
  | ClickedArtistGroup
  | ClickedArtistSeriesGroup
  | ClickedArtworkGroup
  | ClickedAuctionGroup
  | ClickedAuctionResultItem
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
  | ClickedNotificationsBell
  | ClickedOfferOption
  | ClickedOnArtworkShippingWeight
  | ClickedOnArtworkShippingUnitsDropdown
  | ClickedOnFramedMeasurements
  | ClickedOnFramedMeasurementsDropdown
  | ClickedOnPriceDisplayDropdown
  | ClickedOnSubmitOrder
  | ClickedSnooze
  | ClickedPartnerCard
  | ClickedPartnerLink
  | ClickedPaymentMethod
  | ClickedPaymentDetails
  | CheckedAccountBalance
  | ClickedPromoSpace
  | ClickedRegisterToBid
  | ClickedSelectShippingOption
  | ClickedShippingAddress
  | ClickedShowGroup
  | ClickedShowMore
  | ClickedVerifyIdentity
  | ClickedViewingRoomCard
  | ClickedOfferActions
  | ClickedOrderPage
  | ClickedOrderSummary
  | CommercialFilterParamsChanged
  | CompletedOnboarding
  | ConfirmBid
  | ConfirmRegistrationPageview
  | ConsignmentArtistFailed
  | ConsignmentSubmitted
  | ContactInformationCompleted
  | DeleteCollectedArtwork
  | DeletedSavedSearch
  | EditCollectedArtwork
  | EditedSavedSearch
  | EditedUserProfile
  | EnterLiveAuction
  | ExperimentViewed
  | UploadSizeLimitExceeded
  | FocusedOnConversationMessageInput
  | FocusedOnSearchInput
  | FocusedOnPriceDatabaseSearchInput
  | FollowEvents
  | Impression
  | MaxBidSelected
  | MyCollectionOnboardingCompleted
  | OnboardingUserInputData
  | PriceDatabaseFilterParamsChanged
  | PromptForReview
  | RegistrationPageView
  | RegistrationSubmitted
  | ResetYourPassword
  | SaleScreenLoadComplete
  | SaveCollectedArtwork
  | Screen
  | SearchedPriceDatabase
  | SearchedReverseImageWithNoResults
  | SearchedReverseImageWithResults
  | SearchedWithNoResults
  | SelectedArtworkFromReverseImageSearch
  | SelectedItemFromSearch
  | SelectedItemFromPriceDatabaseSearch
  | SelectedRecentPriceRange
  | SentConsignmentInquiry
  | SentConversationMessage
  | SentRequestPriceEstimate
  | Share
  | StartedOnboarding
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
  | TappedConsignmentInquiry
  | TappedCreateAlert
  | TappedExploreGroup
  | TappedExploreMyCollection
  | TappedFairCard
  | TappedFairGroup
  | TappedInboxConversation
  | TappedInfoBubble
  | TappedLink
  | TappedNavigationTab
  | TappedMainArtworkGrid
  | TappedMakeOffer
  | TappedMyCollectionInsightsMedianAuctionRailItem
  | TappedMyCollectionInsightsMedianAuctionPriceChartCareerHighlight
  | TappedMyCollectionInsightsMedianAuctionPriceChartCategory
  | TappedMyCollectionInsightsMedianAuctionPriceChartTimeframe
  | TappedPartnerCard
  | TappedPickImageFromLibrary
  | TappedPromoSpace
  | TappedRequestPriceEstimate
  | TappedReverseImageSearch
  | TappedSell
  | TappedSellArtwork
  | TappedShowMore
  | TappedLearnMore
  | TappedSkip
  | TappedTabBar
  | TappedToggleCameraFlash
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
  | ViewedVideo
  | VisitMyCollection
  | VisitMyCollectionOnboardingSlide

/**
 * The top-level actions an Event describes.
 *
 * Each ActionType corresponds with a table in Redshift.
 */
export enum ActionType {
  /**
   * Corresponds to {@link AddArtworkDetails}
   */
  addArtworkDetails = "addArtworkDetails",
  /**
   * Corresponds to {@link AddCollectedArtwork}
   */
  addCollectedArtwork = "addCollectedArtwork",
  /**
   * Corresponds to {@link AddNewArtistName}
   */
  addNewArtistName = "addNewArtistName",
  /**
   * Corresponds to {@link AddToCalendar}
   */
  addToCalendar = "addToCalendar",
  /**
   * Corresponds to {@link ArtworkDetailsCompleted}
   */
  artworkDetailsCompleted = "artworkDetailsCompleted",
  /**
   * Corresponds to {@link AuctionPageView}
   */
  auctionPageView = "auctionPageView",
  /**
   * Corresponds to {@link AuctionResultsFilterParamsChanged}
   */
  auctionResultsFilterParamsChanged = "auctionResultsFilterParamsChanged",
  /**
   * Corresponds to {@link AuthImpression}
   */
  authImpression = "authImpression",
  /**
   * Corresponds to {@link BidPageView}
   */
  bidPageView = "bidPageView",
  /**
   * Corresponds to {@link CheckedAccountBalance}
   */
  checkedAccountBalance = "checkedAccountBalance",
  /**
   * Corresponds to {@link ClickedActiveBid}
   */
  clickedActiveBid = "clickedActiveBid",
  /**
   * Corresponds to {@link ClickedActivityPanelNotificationItem}
   */
  clickedActivityPanelNotificationItem = "clickedActivityPanelNotificationItem",
  /**
   * Corresponds to {@link ClickedActivityPanelTab}
   */
  clickedActivityPanelTab = "clickedActivityPanelTab",
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
   * Corresponds to {@link ClickedArticleShare}
   */
  clickedArticleShare = "clickedArticleShare",
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
   *    * Corresponds to {@link ClickedAuctionResultItem}
   */
  clickedAuctionResultItem = "clickedAuctionResultItem",
  /**
   * Corresponds to {@link ClickedBuyerProtection}
   */
  clickedBuyerProtection = "clickedBuyerProtection",
  /**
   * Corresponds to {@link ClickedChangePage}
   */
  clickedChangePage = "clickedChangePage",
  /**
   * Corresponds to {@link ClickedChangePaymentMethod}
   */
  clickedChangePaymentMethod = "clickedChangePaymentMethod",
  /**
   * Corresponds to {@link ClickedChangeShippingAddress}
   */
  clickedChangeShippingAddress = "clickedChangeShippingAddress",
  /**
   * Corresponds to {@link ClickedChangeShippingMethod}
   */
  clickedChangeShippingMethod = "clickedChangeShippingMethod",
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
   * Corresponds to {@link ClickedExternalNewsSource}
   */
  clickedExternalNewsSource = "clickedExternalNewsSource",
  /**
   * Corresponds to {@link ClickedFairCard}
   */
  clickedFairCard = "clickedFairCard",
  /**
   * Corresponds to {@link ClickedFairGroup}
   */
  clickedFairGroup = "clickedFairGroup",
  /**
   * Corresponds to {@link ClickedGalleryGroup}
   */
  clickedGalleryGroup = "clickedGalleryGroup",
  /**
   * Corresponds to {@link ClickedLoadMore}
   */
  clickedLoadMore = "clickedLoadMore",
  /**
   * Corresponds to {@link ClickedMainArtworkGrid}
   */
  clickedMainArtworkGrid = "clickedMainArtworkGrid",
  /**
   * Corresponds to {@link ClickedMyCollectionInsightsMedianAuctionRailItem}
   */
  clickedMyCollectionInsightsMedianAuctionRailItem = "clickedMyCollectionInsightsMedianAuctionRailItem",
  /**
   * Corresponds to {@link ClickedNavigationTab}
   */
  clickedNavigationTab = "clickedNavigationTab",
  /**
   * Corresponds to {@link ClickedNotificationsBell}
   */
  clickedNotificationsBell = "clickedNotificationsBell",
  /**
   * Corresponds to {@link ClickedOfferActions}
   */
  clickedOfferActions = "clickedOfferActions",
  /**
   * Corresponds to {@link ClickedOfferOption}
   */
  clickedOfferOption = "clickedOfferOption",
  /**
   * Corresponds to {@link ClickedOnArtworkShippingUnitsDropdown}
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
   * Corresponds to {@link ClickedOnPriceDisplayDropdown}
   */
  clickedOnPriceDisplayDropdown = "clickedOnPriceDisplayDropdown",
  /**
   * Corresponds to {@link ClickedOnSubmitOrder}
   */
  clickedOnSubmitOrder = "clickedOnSubmitOrder",
  /**
   * Corresponds to {@link ClickedOrderPage}
   */
  clickedOrderPage = "clickedOrderPage",
  /**
   * Corresponds to {@link ClickedOrderSummary}
   */
  clickedOrderSummary = "clickedOrderSummary",
  /**
   * Corresponds to {@link ClickedPartnerCard}
   */
  clickedPartnerCard = "clickedPartnerCard",
  /**
   * Corresponds to {@link ClickedPartnerLink}
   */
  clickedPartnerLink = "clickedPartnerLink",
  /**
   * Corresponds to {@link ClickedPaymentMethod}
   */
  clickedPaymentMethod = "clickedPaymentMethod",
  /**
   * Corresponds to {@link ClickedPaymentDetails}
   */
  clickedPaymentDetails = "clickedPaymentDetails",
  /**
   * Corresponds to {@link ClickedPlayVideo}
   */
  clickedPlayVideo = "clickedPlayVideo",
  /**
   * Corresponds to {@link ClickedPromoSpace}
   */
  clickedPromoSpace = "clickedPromoSpace",
  /**
   * Corresponds to {@link ClickedRegisterToBid}
   */
  clickedRegisterToBid = "clickedRegisterToBid",
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
   * Corresponds to {@link ClickedSnooze}
   */
  clickedSnooze = "clickedSnooze",
  /**
   * Corresponds to {@link ClickedSponsorLink}
   */
  clickedSponsorLink = "clickedSponsorLink",
  /**
   * Corresponds to {@link ClickedTooltip}
   */
  clickedTooltip = "clickedTooltip",
  /**
   * Corresponds to {@link ClickedVerifyIdentity}
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
   * Corresponds to {@link CompletedOnboarding}
   */
  completedOnboarding = "completedOnboarding",
  /**
   * Corresponds to {@link ConfirmBid}
   */
  confirmBid = "confirmBid",
  /**
   * Corresponds to {@link ConfirmRegistrationPageview}
   */
  confirmRegistrationPageview = "confirmRegistrationPageview",
  /**
   * Corresponds to {@link ConsignmentArtistFailed}
   */
  consignmentArtistFailed = "consignmentArtistFailed",
  /**
   * Corresponds to {@link ConsignmentSubmitted}
   */
  consignmentSubmitted = "consignmentSubmitted",
  /**
   * Corresponds to {@link ContactGallery}
   */
  contactGallery = "contactGallery",
  /**
   * Corresponds to {@link ContactInformationCompleted}
   */
  contactInformationCompleted = "contactInformationCompleted",
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
   * Corresponds to {@link EditedUserProfile}
   */
  editedUserProfile = "editedUserProfile",
  /**
   * Corresponds to {@link EnterLiveAuction}
   */
  enterLiveAuction = "enterLiveAuction",
  /**
   * Corresponds to {@link ExperimentViewed}
   */
  experimentViewed = "experimentViewed",
  /**
   * Corresponds to {@link UploadSizeLimitExceeded}
   */
  uploadSizeLimitExceeded = "uploadSizeLimitExceeded",
  /**
   * Corresponds to {@link FocusedOnConversationMessageInput}
   */
  focusedOnConversationMessageInput = "focusedOnConversationMessageInput",
  /**
   * Corresponds to {@link FocusedOnPriceDatabaseSearchInput}
   */
  focusedOnPriceDatabaseSearchInput = "focusedOnPriceDatabaseSearchInput",
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
   * Corresponds to {@link Impression}
   */
  impression = "impression",
  /**
   * Corresponds to {@link MaxBidSelected}
   */
  maxBidSelected = "maxBidSelected",
  /**
   * Corresponds to {@link MyCollectionOnboardingCompleted}
   */
  myCollectionOnboardingCompleted = "myCollectionOnboardingCompleted",
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
   * Corresponds to {@link RegistrationPageView}
   */
  registrationPageView = "registrationPageView",
  /**
   * Corresponds to {@link RegistrationSubmitted}
   */
  registrationSubmitted = "registrationSubmitted",
  /**
   * Corresponds to {@link ResetYourPassword}
   */
  resetYourPassword = "resetYourPassword",
  /**
   * Corresponds to {@link SaleScreenLoadComplete}
   */
  saleScreenLoadComplete = "saleScreenLoadComplete",
  /**
   * Corresponds to {@link SaveCollectedArtwork}
   */
  saveCollectedArtwork = "saveCollectedArtwork",
  /**
   * Corresponds to {@link Screen}
   */
  screen = "screen",
  /**
   * Corresponds to {@link SearchedPriceDatabase}
   */
  searchedPriceDatabase = "searchedPriceDatabase",
  /**
   * Corresponds to {@link SearchedReverseImageWithNoResults}
   */
  searchedReverseImageWithNoResults = "searchedReverseImageWithNoResults",
  /**
   * Corresponds to {@link SearchedReverseImageWithResults}
   */
  searchedReverseImageWithResults = "searchedReverseImageWithResults",
  /**
   * Corresponds to {@link SearchedWithNoResults}
   */
  searchedWithNoResults = "searchedWithNoResults",
  /**
   * Corresponds to {@link SelectArtistFromSearch}
   */
  selectArtistFromSearch = "selectArtistFromSearch",
  /**
   * Corresponds to {@link selectArtworkFromGrid}
   */
  selectArtworkFromGrid = "selectArtworkFromGrid",
  /**
   * Corresponds to {@link SelectedArtworkFromReverseImageSearch}
   */
  selectedArtworkFromReverseImageSearch = "selectedArtworkFromReverseImageSearch",
  /**
   * Corresponds to {@link SelectedItemFromPriceDatabaseSearch}
   */
  selectedItemFromPriceDatabaseSearch = "selectedItemFromPriceDatabaseSearch",
  /**
   * Corresponds to {@link SelectedItemFromSearch}
   */
  selectedItemFromSearch = "selectedItemFromSearch",
  /**
   * Corresponds to {@link SelectedRecentPriceRange}
   */
  selectedRecentPriceRange = "selectedRecentPriceRange",
  /**
   * Corresponds to {@link sentArtworkInquiry}
   */
  sentArtworkInquiry = "sentArtworkInquiry",
  /**
   * Corresponds to {@link SentConsignmentInquiry}
   */
  sentConsignmentInquiry = "sentConsignmentInquiry",
  /**
   * Corresponds to {@link SentConversationMessage}
   */
  sentConversationMessage = "sentConversationMessage",
  /**
   * Corresponds to {@link SentRequestPriceEstimate}
   */
  sentRequestPriceEstimate = "sentRequestPriceEstimate",
  /**
   * Corresponds to {@link Share}
   */
  share = "share",
  /**
   * Corresponds to {@link StartedOnboarding}
   */
  startedOnboarding = "startedOnboarding",
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
   * Corresponds to {@link TappedConsignmentInquiry}
   */
  tappedConsignmentInquiry = "tappedConsignmentInquiry",
  /**
   * Corresponds to {@link TappedCreateAlert}
   */
  tappedCreateAlert = "tappedCreateAlert",
  /**
   * Corresponds to {@link TappedExploreGroup}
   */
  tappedExploreGroup = "tappedExploreGroup",
  /**
   * Corresponds to {@link TappedExploreMyCollection}
   */
  tappedExploreMyCollection = "tappedExploreMyCollection",
  /**
   * Corresponds to {@link TappedFairCard}
   */
  tappedFairCard = "tappedFairCard",
  /**
   * Corresponds to {@link TappedFairGroup}
   */
  tappedFairGroup = "tappedFairGroup",
  /**
   * Corresponds to {@link TappedInboxConversation}
   */
  tappedInboxConversation = "tappedInboxConversation",
  /**
   * Corresponds to {@link TappedInfoBubble}
   */
  tappedInfoBubble = "tappedInfoBubble",
  /**
   * Corresponds to {@link TappedLearnMore}
   */
  tappedLearnMore = "tappedLearnMore",
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
   * Corresponds to {@link TappedMyCollectionAddArtworkArtist}
   */
  tappedMyCollectionAddArtworkArtist = "tappedMyCollectionAddArtworkArtist",
  /**
   * Corresponds to {@link TappedMyCollectionInsightsMedianAuctionPriceChartCareerHighlight}
   */
  tappedMyCollectionInsightsMedianAuctionPriceChartCareerHighlight = "tappedMyCollectionInsightsMedianAuctionPriceChartCareerHighlight",
  /**
   * Corresponds to {@link TappedMyCollectionInsightsMedianAuctionPriceChartCategory}
   */
  tappedMyCollectionInsightsMedianAuctionPriceChartCategory = "TappedMyCollectionInsightsMedianAuctionPriceChartCategory",
  /**
   * Corresponds to {@link TappedMyCollectionInsightsMedianAuctionPriceChartTimeframe}
   */
  tappedMyCollectionInsightsMedianAuctionPriceChartTimeframe = "tappedMyCollectionInsightsMedianAuctionPriceChartTimeframe",
  /**
   * Corresponds to {@link TappedMyCollectionInsightsMedianAuctionRailItem}
   */
  tappedMyCollectionInsightsMedianAuctionRailItem = "tappedMyCollectionInsightsMedianAuctionRailItem",
  /**
   * Corresponds to {@link TappedNavigationTab}
   */
  tappedNavigationTab = "tappedNavigationTab",
  /**
   * Corresponds to {@link TappedPartnerCard}
   */
  tappedPartnerCard = "tappedPartnerCard",
  /**
   * Corresponds to {@link TappedPickImageFromLibrary}
   */
  tappedPickImageFromLibrary = "tappedPickImageFromLibrary",
  /**
   * Corresponds to {@link TappedPromoSpace}
   */
  tappedPromoSpace = "tappedPromoSpace",
  /**
   * Corresponds to {@link TappedRegisterToBid}
   */
  tappedRegisterToBid = "tappedRegisterToBid",
  /**
   * Corresponds to {@link TappedRequestPriceEstimate}
   */
  tappedRequestPriceEstimate = "tappedRequestPriceEstimate",
  /**
   * Corresponds to {@link TappedReverseImageSearch}
   */
  tappedReverseImageSearch = "tappedReverseImageSearch",
  /**
   * Corresponds to {@link TappedSell}
   */
  tappedSell = "tappedSell",
  /**
   * Corresponds to {@link TappedSellArtwork}
   */
  tappedSellArtwork = "tappedSellArtwork",
  /**
   * Corresponds to {@link TappedShowGroup}
   */
  tappedShowGroup = "tappedShowGroup",
  /**
   * Corresponds to {@link TappedShowMore}
   */
  tappedShowMore = "tappedShowMore",
  /**
   * Corresponds to {@link TappedSkip}
   */
  tappedSkip = "tappedSkip",
  /**
   * Corresponds to {@link TappedTabBar}
   */
  tappedTabBar = "tappedTabBar",
  /**
   * Corresponds to {@link TappedToggleCameraFlash}
   */
  tappedToggleCameraFlash = "tappedToggleCameraFlash",
  /**
   * Corresponds to {@link TappedUploadAnotherArtwork}
   */
  tappedUploadAnotherArtwork = "tappedUploadAnotherArtwork",
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
  /**
   * Corresponds to {@link ViewedVideo}
   */
  viewedVideo = "viewedVideo",
  /**
   * Corresponds to {@link visitMyCollection}
   */
  visitMyCollection = "visitMyCollection",
  /**
   * Corresponds to {@link VisitMyCollectionOnboardingSlide}
   */
  visitMyCollectionOnboardingSlide = "visitMyCollectionOnboardingSlide",
}
