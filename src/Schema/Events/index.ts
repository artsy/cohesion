import {
  ClickedActivityPanelNotificationItem,
  ClickedActivityPanelTab,
  ClickedNotificationsBell,
} from "./ActivityPanel"
import { AddToCalendar } from "./AddToCalendar"
import {
  AddedArtworkToArtworkList,
  CreatedArtworkList,
  DeletedArtworkList,
  EditedArtworkList,
  ViewedArtworkList,
} from "./ArtworkLists"
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
  ClickedAddFilters,
  ClickedAddMissingArtworksDetails,
  ClickedAddNewShippingAddress,
  ClickedAddWorksToFair,
  ClickedAlertsFilters,
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
  ClickedCloseValidationAddressModal,
  ClickedCollectionGroup,
  ClickedConversationsFilter,
  ClickedCreateAlert,
  ClickedDeliveryMethod,
  ClickedDismissInquiry,
  ClickedEditArtwork,
  ClickedExpandFilterPanel,
  ClickedExpansionToggle,
  ClickedFairCard,
  ClickedFairGroup,
  ClickedGalleryGroup,
  ClickedLoadMore,
  ClickedMainArtworkGrid,
  ClickedMarketingModal,
  ClickedMarkSold,
  ClickedMarkSpam,
  ClickedNavBar,
  ClickedNavigationTab,
  ClickedOfferActions,
  ClickedOfferOption,
  ClickedOnArtworkShippingUnitsDropdown,
  ClickedOnArtworkShippingWeight,
  ClickedOnBuyNowCheckbox,
  ClickedOnDuplicateArtwork,
  ClickedOnFramedMeasurements,
  ClickedOnFramedMeasurementsDropdown,
  ClickedOnLearnMore,
  ClickedOnMakeOfferCheckbox,
  ClickedOnPagination,
  ClickedOnPriceDisplayDropdown,
  ClickedOnReadMore,
  ClickedOnSubmitOrder,
  ClickedOrderPage,
  ClickedOrderSummary,
  ClickedPartnerCard,
  ClickedPartnerLink,
  ClickedPaymentDetails,
  ClickedPaymentMethod,
  ClickedPromoSpace,
  ClickedPublish,
  ClickedSelectShippingOption,
  ClickedSendPartnerOffer,
  ClickedShippingAddress,
  ClickedShowGroup,
  ClickedShowMore,
  ClickedSnooze,
  ClickedStartPartnerOffer,
  ClickedUpdateArtwork,
  ClickedUploadArtwork,
  ClickedValidationAddressOptions,
  ClickedVerifyIdentity,
  ClickedViewingRoomCard,
  ClickedViewWork,
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
import { SavedCookieConsentPreferences } from "./CookieConsent"
import { ExperimentViewed } from "./ExperimentViewed"
import {
  AuctionResultsFilterParamsChanged,
  CommercialFilterParamsChanged,
  PriceDatabaseFilterParamsChanged,
  SelectedRecentPriceRange,
} from "./FilterAndSort"
import {
  AddedToAlbum,
  CompletedOfflineSync,
  CreatedAlbum,
  SentContent,
  ToggledPresentationModeSetting,
} from "./Folio"
import { TappedProductCapabilitiesGroup } from "./HomeFeedArtsyOnboarding"
import {
  MyCollectionOnboardingCompleted,
  TappedExploreMyCollection,
  VisitMyCollection,
  VisitMyCollectionOnboardingSlide,
} from "./HomeFeedMyCollectionOnboarding"
import { Impression } from "./Impression"
import {
  ErrorMessageViewed,
  ItemViewed,
  RailViewed,
  SendOffersBannerViewed,
  SendOffersErrorMessage,
  SendOffersModalViewed,
  TooltipViewed,
  ValidationAddressViewed,
} from "./ImpressionTracking"
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
  DeletedSavedSearch,
  EditedAlert,
  EditedSavedSearch,
} from "./SavedSearch"
import { FollowEvents } from "./SavesAndFollows"
import {
  AddressAutoCompletionResult,
  ConsignmentArtistFailed,
  EditedAutocompletedAddress,
  FocusedOnPriceDatabaseSearchInput,
  FocusedOnSearchInput,
  SearchedPriceDatabase,
  SearchedWithNoResults,
  SearchedWithResults,
  SelectedItemFromAddressAutoCompletion,
  SelectedItemFromPriceDatabaseSearch,
  SelectedItemFromSearch,
  SelectedSearchSuggestionQuickNavigationItem,
} from "./Search"
import { Share } from "./Share"
import { SaleScreenLoadComplete, Screen, TimeOnPage } from "./System"
import {
  TappedActivityGroup,
  TappedArticleGroup,
  TappedArticleShare,
  TappedArtistGroup,
  TappedArtistSeriesGroup,
  TappedArtworkGroup,
  TappedAuctionGroup,
  TappedAuctionResultGroup,
  TappedBid,
  TappedBrowseSimilarArtworks,
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
  TappedViewWork,
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
  | AddedArtworkToArtworkList
  | AddedToAlbum
  | AddToCalendar
  | AddCollectedArtwork
  | AddressAutoCompletionResult
  | ArtworkDetailsCompleted
  | AuctionPageView
  | AuctionResultsFilterParamsChanged
  | AuthImpression
  | BidPageView
  | CreatedAccount
  | CreatedArtworkList
  | ClickedActiveBid
  | ClickedActivityPanelNotificationItem
  | ClickedActivityPanelTab
  | ClickedAddFilters
  | ClickedAddMissingArtworksDetails
  | ClickedAddNewShippingAddress
  | ClickedAddWorksToFair
  | ClickedAlertsFilters
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
  | ClickedExpandFilterPanel
  | ClickedExpansionToggle
  | ClickedFairCard
  | ClickedFairGroup
  | ClickedGalleryGroup
  | ClickedLoadMore
  | ClickedMainArtworkGrid
  | ClickedMarketingModal
  | ClickedNavigationTab
  | ClickedNavBar
  | ClickedNotificationsBell
  | ClickedOfferOption
  | ClickedOnArtworkShippingWeight
  | ClickedOnArtworkShippingUnitsDropdown
  | ClickedOnBuyNowCheckbox
  | ClickedOnDuplicateArtwork
  | ClickedOnFramedMeasurements
  | ClickedOnFramedMeasurementsDropdown
  | ClickedOnLearnMore
  | ClickedOnMakeOfferCheckbox
  | ClickedOnPagination
  | ClickedOnPriceDisplayDropdown
  | ClickedOnReadMore
  | ClickedPublish
  | ClickedOnSubmitOrder
  | ClickedSnooze
  | ClickedUploadArtwork
  | ClickedPartnerCard
  | ClickedPartnerLink
  | ClickedPaymentMethod
  | ClickedPaymentDetails
  | CheckedAccountBalance
  | ClickedPromoSpace
  | ClickedRegisterToBid
  | ClickedSelectShippingOption
  | ClickedSendPartnerOffer
  | ClickedShippingAddress
  | ClickedShowGroup
  | ClickedShowMore
  | ClickedStartPartnerOffer
  | ClickedVerifyIdentity
  | ClickedViewingRoomCard
  | ClickedOfferActions
  | ClickedOrderPage
  | ClickedOrderSummary
  | ClickedDismissInquiry
  | ClickedMarkSpam
  | ClickedMarkSold
  | ClickedConversationsFilter
  | ClickedUpdateArtwork
  | ClickedValidationAddressOptions
  | ClickedCloseValidationAddressModal
  | ClickedViewWork
  | CommercialFilterParamsChanged
  | CompletedOfflineSync
  | CompletedOnboarding
  | ConfirmBid
  | ConfirmRegistrationPageview
  | ConsignmentArtistFailed
  | ConsignmentSubmitted
  | ContactInformationCompleted
  | CreatedAlbum
  | DeleteCollectedArtwork
  | EditedAlert
  | DeletedArtworkList
  | DeletedSavedSearch
  | EditCollectedArtwork
  | EditedArtworkList
  | EditedAutocompletedAddress
  | EditedSavedSearch
  | EditedUserProfile
  | EnterLiveAuction
  | ErrorMessageViewed
  | ExperimentViewed
  | ItemViewed
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
  | RailViewed
  | ValidationAddressViewed
  | RegistrationPageView
  | RegistrationSubmitted
  | ResetYourPassword
  | SaleScreenLoadComplete
  | SaveCollectedArtwork
  | SavedCookieConsentPreferences
  | Screen
  | SearchedPriceDatabase
  | SearchedWithNoResults
  | SearchedWithResults
  | SelectedItemFromSearch
  | SelectedItemFromPriceDatabaseSearch
  | SelectedItemFromAddressAutoCompletion
  | SelectedRecentPriceRange
  | SelectedSearchSuggestionQuickNavigationItem
  | SendOffersBannerViewed
  | SendOffersErrorMessage
  | SendOffersModalViewed
  | SentContent
  | SentConsignmentInquiry
  | SentConversationMessage
  | SentRequestPriceEstimate
  | Share
  | StartedOnboarding
  | SubmitAnotherArtwork
  | SuccessfullyLoggedIn
  | TappedActivityGroup
  | TappedArticleGroup
  | TappedArticleShare
  | TappedArtistGroup
  | TappedArtistSeriesGroup
  | TappedArtworkGroup
  | TappedAuctionGroup
  | TappedAuctionResultGroup
  | TappedBid
  | TappedBrowseSimilarArtworks
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
  | TappedProductCapabilitiesGroup
  | TappedPromoSpace
  | TappedRequestPriceEstimate
  | TappedSell
  | TappedSellArtwork
  | TappedShowMore
  | TappedLearnMore
  | TappedSkip
  | TappedTabBar
  | TappedVerifyIdentity
  | TappedViewingRoomCard
  | TappedViewingRoomGroup
  | TappedViewOffer
  | TappedViewWork
  | TimeOnPage
  | ToggledAccordion
  | ToggledNotification
  | ToggledPresentationModeSetting
  | ToggledSavedSearch
  | TooltipViewed
  | UploadPhotosCompleted
  | ViewArtworkMyCollection
  | ViewedArtworkList
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
   * Corresponds to {@link AddedArtworkToArtworkList}
   */
  addedArtworkToArtworkList = "addedArtworkToArtworkList",
  /**
   * Corresponds to {@link AddedToAlbum}
   */
  addedToAlbum = "addedToAlbum",
  /**
   * Corresponds to {@link AddArtworkDetails}
   */
  addArtworkDetails = "addArtworkDetails",
  /**
   * Corresponds to {@link AddCollectedArtwork}
   */
  addCollectedArtwork = "addCollectedArtwork",
  /**
   * Corresponds to {@link AddressAutoCompletionResult}
   */
  addressAutoCompletionResult = "addressAutoCompletionResult",
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
   * Corresponds to {@link ClickedAddFilters}
   */
  clickedAddFilters = "clickedAddFilters",
  /**
   * Corresponds to {@link ClickedAddMissingArtworksDetails}
   */
  clickedAddMissingArtworksDetails = "clickedAddMissingArtworksDetails",
  /**
   * Corresponds to {@link ClickedAddNewShippingAddress}
   */
  clickedAddNewShippingAddress = "clickedAddNewShippingAddress",
  /**
   * Corresponds to {@link ClickedAddWorksToFair}
   */
  clickedAddWorksToFair = "clickedAddWorksToFair",
  /**
   * Corresponds to {@link ClickedAlertsFilters}
   */
  clickedAlertsFilters = "clickedAlertsFilters",
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
   * Corresponds to {@link ClickedBuyNow}
   */
  clickedBuyNow = "clickedBuyNow",
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
   * Corresponds to {@link ClickedExpandFilterPanel}
   */
  clickedExpandFilterPanel = "clickedExpandFilterPanel",
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
   * Corresponds to {@link ClickedOnBuyNowCheckbox}
   */
  clickedOnBuyNowCheckbox = "clickedOnBuyNowCheckbox",
  /**
   * Corresponds to {@link ClickedOnDuplicateArtwork}
   */
  clickedOnDuplicateArtwork = "clickedOnDuplicateArtwork",
  /**
   * Corresponds to {@link ClickedOnFramedMeasurements}
   */
  clickedOnFramedMeasurements = "clickedOnFramedMeasurements",
  /**
   * Corresponds to {@link ClickedOnFramedMeasurementsDropdown}
   */
  clickedOnFramedMeasurementsDropdown = "clickedOnFramedMeasurementsDropdown",
  /**
   * Corresponds to {@link ClickedOnLearnMore}
   */
  clickedOnLearnMore = "clickedOnLearnMore",
  /**
   * Corresponds to {@link ClickedOnMakeOfferCheckbox}
   */
  clickedOnMakeOfferCheckbox = "clickedOnMakeOfferCheckbox",
  /**
   * Corresponds to {@link ClickedOnPagination}
   */
  clickedOnPagination = "clickedOnPagination",
  /**
   * Corresponds to {@link ClickedOnPriceDisplayDropdown}
   */
  clickedOnPriceDisplayDropdown = "clickedOnPriceDisplayDropdown",
  /**
   * Corresponds to {@link ClickedPublish}
   */
  clickedPublish = "clickedPublish",
  /**
   * Corresponds to {@link ClickedOnReadMore}
   */
  clickedOnReadMore = "clickedOnReadMore",
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
  clickedDismissInquiry = "clickedDismissInquiry",
  /**
   * Corresponds to {@link ClickedDismissInquiry}
   */
  clickedMarkSpam = "clickedMarkSpam",
  /**
   * Corresponds to {@link ClickedMarkSpam}
   */
  clickedMarkSold = "clickedMarkSold",
  /**
   * Corresponds to {@link ClickedMarkSold}
   */
  clickedNavBar = "clickedNavBar",
  /**
   * Corresponds to {@link ClickedNavBar}
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
   * Corresponds to {@link ClickedStartPartnerOffer}
   */
  clickedStartPartnerOffer = "clickedStartPartnerOffer",
  /**
   * Corresponds to {@link ClickedSendPartnerOffer}
   */
  clickedSendPartnerOffer = "clickedSendPartnerOffer",
  /**
   * Corresponds to {@link ClickedShippingAddress}
   */
  clickedShippingAddress = "clickedShippingAddress",
  /**
   * Corresponds to {@link ClickedShowGroup}
   */
  clickedShowGroup = "clickedShowGroup",
  /**
   * Corresponds to {@link ClickedMarketingModal}
   */
  clickedMarketingModal = "clickedMarketingModal",
  /**
   * Corresponds to {@link ClickedShowMore}
   */
  clickedShowMore = "clickedShowMore",
  /**
   * Corresponds to {@link ClickedSnooze}
   */
  clickedSnooze = "clickedSnooze",
  /**
   * Corresponds to {@link ClickedUploadArtwork}
   */
  clickedUploadArtwork = "clickedUploadArtwork",
  /**
   * Corresponds to {@link ClickedSponsorLink}
   */
  clickedSponsorLink = "clickedSponsorLink",
  /**
   * Corresponds to {@link ClickedTooltip}
   */
  clickedTooltip = "clickedTooltip",
  /**
   * Corresponds to {@link ClickedUpdateArtwork}
   */
  clickedUpdateArtwork = "clickedUpdateArtwork",
  /**
   * Corresponds to {@link ClickedVerifyIdentity}
   */
  clickedVerifyIdentity = "clickedVerifyIdentity",
  /**
   * Corresponds to {@link ClickedViewingRoomCard}
   */
  clickedViewingRoomCard = "clickedViewingRoomCard",
  /**
   * Corresponds to {@link ClickedViewWork}
   */
  clickedViewWork = "clickedViewWork",
  /**
   * Corresponds to {@link ClickedValidationAddressOptions}
   */
  clickedValidationAddressOptions = "clickedValidationAddressOptions",
  /**
   * Corresponds to {@link ClickedCloseValidationAddressModal}
   */
  clickedCloseValidationAddressModal = "clickedCloseValidationAddressModal",
  /**
   * Corresponds to {@link ClickedVerifiedRepresentative}
   */
  clickedVerifiedRepresentative = "clickedVerifiedRepresentative",
  /**
   * Corresponds to {@link ClickedGene}
   */
  clickedGene = "clickedGene",
  /**
   * Corresponds to {@link ClickedHighlightAchievement}
   */
  clickedHighlightAchievement = "clickedHighlightAchievement",
  /**
   * Corresponds to {@link CommercialFilterParamsChanged}
   */
  commercialFilterParamsChanged = "commercialFilterParamsChanged",
  /**
   * Corresponds to {@link CompletedOfflineSync}
   */
  completedOfflineSync = "completedOfflineSync",
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
   * Corresponds to {@link CreatedAlbum}
   */
  createdAlbum = "createdAlbum",
  /**
   * Corresponds to {@link CreatedAccount}
   */
  createdAccount = "createdAccount",
  /**
   * Corresponds to {@link CreatedArtworkList}
   */
  createdArtworkList = "createdArtworkList",
  /**
   * Corresponds to {@link DeleteCollectedArtwork}
   */
  deleteCollectedArtwork = "deleteCollectedArtwork",
  /**
   * Corresponds to {@link DeletedArtworkList}
   */
  deletedArtworkList = "deletedArtworkList",
  /**
   * Corresponds to {@link DeletedSavedSearch}
   */
  deletedSavedSearch = "deletedSavedSearch",
  /**
   * Corresponds to {@link EditCollectedArtwork}
   */
  editCollectedArtwork = "editCollectedArtwork",
  /**
   * Corresponds to {@link EditedAutocompletedAddress}
   */
  editedAutocompletedAddress = "editedAutocompletedAddress",
  /**
   * Corresponds to {@link EditedArtworkList}
   */
  editedArtworkList = "editedArtworkList",
  /**
   * Corresponds to {@link editedAlert}
   */
  editedAlert = "editedAlert",
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
   * Corresponds to {@link ErrorMessageViewed}
   */
  errorMessageViewed = "errorMessageViewed",
  /**
   * Corresponds to {@link ExperimentViewed}
   */
  experimentViewed = "experiment_viewed", // intentional snake case to match tracked event
  /**
   * Corresponds to {@link ItemViewed}
   */
  itemViewed = "item_viewed", // intentional snake case to match tracked event
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
   * Corresponds to {@link LongPressedArtwork}
   */
  longPressedArtwork = "longPressedArtwork",
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
   * Corresponds to {@link RailViewed}
   */
  railViewed = "railViewed",
  /**
   * Corresponds to {@link ValidationAddressViewed}
   */
  validationAddressViewed = "validationAddressViewed",
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
   * Corresponds to {@link SavedCookieConsentPreferences}
   */
  savedCookieConsentPreferences = "savedCookieConsentPreferences",
  /**
   * Corresponds to {@link Screen}
   */
  screen = "screen",
  /**
   * Corresponds to {@link SelectedSearchSuggestionQuickNavigationItem}
   */
  selectedSearchSuggestionQuickNavigationItem = "selectedSearchSuggestionQuickNavigationItem",
  /**
   * Corresponds to {@link SentContent}
   */
  sentContent = "sentContent",
  /**
   * Corresponds to {@link SearchedPriceDatabase}
   */
  searchedPriceDatabase = "searchedPriceDatabase",
  /**
   * Corresponds to {@link SearchedWithNoResults}
   */
  searchedWithNoResults = "searchedWithNoResults",
  /**
   * Corresponds to {@link SearchedWithResults}
   */
  searchedWithResults = "searchedWithResults",
  /**
   * Corresponds to {@link SelectArtistFromSearch}
   */
  selectArtistFromSearch = "selectArtistFromSearch",
  /**
   * Corresponds to {@link selectArtworkFromGrid}
   */
  selectArtworkFromGrid = "selectArtworkFromGrid",
  /**
   * Corresponds to {@link SelectedItemFromPriceDatabaseSearch}
   */
  clickedConversationsFilter = "clickedConversationsFilter",
  /**
   * Corresponds to {@link ClickedConversationsFilter}
   */
  selectedItemFromPriceDatabaseSearch = "selectedItemFromPriceDatabaseSearch",
  /**
   * Corresponds to {@link SelectedItemFromSearch}
   */
  selectedItemFromSearch = "selectedItemFromSearch",
  /**
   * Corresponds to {@link SelectedItemFromAddressAutoCompletion}
   */
  selectedItemFromAddressAutoCompletion = "selectedItemFromAddressAutoCompletion",
  /**
   * Corresponds to {@link SelectedSuggestedFilter}
   */
  selectedSuggestedFilter = "selectedSuggestedFilter",
  /**
   * Corresponds to {@link SelectedRecentPriceRange}
   */
  selectedRecentPriceRange = "selectedRecentPriceRange",
  /**
   * Corresponds to {@link SendOffersBannerViewed}
   */
  sendOffersBannerViewed = "sendOffersBannerViewed",
  /**
   * Corresponds to {@link SendOffersErrorMessage}
   */
  sendOffersErrorMessage = "sendOffersErrorMessage",
  /**
   * Corresponds to {@link SendOffersModalViewed}
   */
  sendOffersModalViewed = "sendOffersModalViewed",
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
   * Corresponds to {@link TappedActivityGroup}
   */
  tappedActivityGroup = "tappedActivityGroup",
  /**
   * Corresponds to {@link TappedArticleGroup}
   */
  tappedArticleGroup = "tappedArticleGroup",
  /**
   * Corresponds to {@link TappedArticleShare}
   */
  tappedArticleShare = "tappedArticleShare",
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
   * Corresponds to {@link TappedBrowseSimilarArtworks}
   */
  tappedBrowseSimilarArtworks = "tappedBrowseSimilarArtworks",
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
   * Corresponds to {@link TappedCreateAlertHeader}
   */
  tappedCreateAlertHeader = "tappedCreateAlertHeader",
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
   * Corresponds to {@link TappedMenuItem}
   */
  tappeMenuItem = "tappeMenuItem",
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
   * Corresponds to {@link TappedProductCapabilitiesGroup}
   */
  tappedProductCapabilitiesGroup = "tappedProductCapabilitiesGroup",
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
   * Corresponds to {@link TappedViewWork}
   */
  tappedViewWork = "tappedViewWork",
  /**
   * Corresponds to {@link TappedVerifiedRepresentative}
   */
  tappedVerifiedRepresentative = "tappedVerifiedRepresentative",
  /**
   * Corresponds to {@link TappedGene}
   */
  tappedGene = "tappedGene",
  /**
   * Corresponds to {@link TappedHighlightAchievement}
   */
  tappedHighlightAchievement = "tappedHighlightAchievement",
  /**
   * Corresponds to {@link TappedNewsSection}
   */
  tappedNewsSection = "tappedNewsSection",
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
   * Corresponds to {@link ToggledPresentationModeSetting}
   */
  toggledPresentationModeSetting = "toggledPresentationModeSetting",
  /**
   * Corresponds to {@link ToggledSavedSearch}
   */
  toggledSavedSearch = "toggledSavedSearch",
  /**
   * Corresponds to {@link TooltipViewed}
   */
  tooltipViewed = "tooltipViewed",
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
   * Corresponds to {@link ViewedArtworkList}
   */
  viewedArtworkList = "viewedArtworkList",
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
