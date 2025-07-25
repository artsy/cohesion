import {
  ClickedActivityPanelNotificationItem,
  ClickedActivityPanelTab,
  ClickedNotificationsBell,
  TappedNotificationsBell,
} from "./ActivityPanel"
import { AddToCalendar } from "./AddToCalendar"
import {
  AddedArtworkToArtworkList,
  CreatedArtworkList,
  DeletedArtworkList,
  EditedArtworkList,
  ViewedArtworkList,
  ViewedSharedArtworkList,
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
  ClickedAskSpecialist,
  ClickedAuctionGroup,
  ClickedAuctionResultItem,
  ClickedBid,
  ClickedBuyerProtection,
  ClickedBuyNow,
  ClickedCancelExpressCheckout,
  ClickedChangePage,
  ClickedChangePaymentMethod,
  ClickedChangeShippingAddress,
  ClickedChangeShippingMethod,
  ClickedCloseValidationAddressModal,
  ClickedCollectionGroup,
  ClickedContactGallery,
  ClickedConversationsFilter,
  ClickedCreateAlert,
  ClickedDeliveryMethod,
  ClickedDismissInquiry,
  ClickedDownloadAppFooter,
  ClickedDownloadAppHeader,
  ClickedEditAlert,
  ClickedEditArtwork,
  ClickedEstimateShippingCost,
  ClickedExpandFilterPanel,
  ClickedExpansionToggle,
  ClickedExpressCheckout,
  ClickedFairCard,
  ClickedFairGroup,
  ClickedFulfillmentTab,
  ClickedGalleryGroup,
  ClickedHeroUnitGroup,
  ClickedImportFees,
  ClickedLoadMore,
  ClickedMainArtworkGrid,
  ClickedMakeOffer,
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
  ClickedOrderPage,
  ClickedOrderProgression,
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
  ClickedVisitHelpCenter,
  SubmittedOffer,
  SubmittedOrder,
} from "./Click"
import { EditedUserProfile, TappedEditedProfile } from "./CollectorProfile"
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
  SelectedFromDrawer,
  TappedAlertsGroup,
  TappedArtworkList,
  TappedFollowsGroup,
  TappedNewArtworkList,
  TappedOfferSettings,
} from "./Favorites"
import {
  AuctionResultsFilterParamsChanged,
  CommercialFilterParamsChanged,
  CommercialFilterSelectedAll,
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
  BannerViewed,
  CreateAlertReminderMessageViewed,
  EditProfileModalViewed,
  ErrorMessageViewed,
  ExpressCheckoutViewed,
  ItemViewed,
  OrderDetailsViewed,
  OrderProgressionViewed,
  ProgressiveOnboardingTooltipViewed,
  RailViewed,
  SavedAddressViewed,
  SavedPaymentMethodViewed,
  SendOffersBannerViewed,
  SendOffersErrorMessage,
  SendOffersModalViewed,
  ShippingEstimateViewed,
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
  TappedMyCollection,
  TappedMyCollectionAddArtworkArtist,
  TappedRequestPriceEstimate,
} from "./MyCollection"
import {
  TappedMyCollectionInsightsMedianAuctionPriceChartCareerHighlight,
  TappedMyCollectionInsightsMedianAuctionPriceChartCategory,
  TappedMyCollectionInsightsMedianAuctionPriceChartTimeframe,
  TappedMyCollectionInsightsMedianAuctionRailItem,
} from "./MyCollectionInsights"
import { PromptForReview } from "./PromptForReview"
import { SavedPriceRange } from "./SavedPriceRange"
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
import { DarkModeOptionUpdated } from "./Settings"
import { ClickedOpenInNewTabButton, ClickedShareButton, Share } from "./Share"
import { SwipedInfiniteDiscoveryArtwork, SwipedUp } from "./Swipe"
import { SaleScreenLoadComplete, Screen, TimeOnPage } from "./System"
import {
  Tapped3Dots,
  TappedActivityGroup,
  TappedArticleGroup,
  TappedArticleShare,
  TappedArtistGroup,
  TappedArtistSeriesGroup,
  TappedArtworkGroup,
  TappedAskSpecialist,
  TappedAuctionGroup,
  TappedAuctionResultGroup,
  TappedBid,
  TappedBrowseSimilarArtworks,
  TappedBuyerProtection,
  TappedBuyNow,
  TappedCardGroup,
  TappedChangePaymentMethod,
  TappedClearTask,
  TappedCollectionGroup,
  TappedConfirmSeeFewerWorks,
  TappedConsign,
  TappedConsignmentInquiry,
  TappedContactGallery,
  TappedCreateAlert,
  TappedExploreGroup,
  TappedFairCard,
  TappedFairGroup,
  TappedGlobalSearchBar,
  TappedImportFees,
  TappedInfoBubble,
  TappedLearnMore,
  TappedLink,
  TappedMainArtworkGrid,
  TappedMenuItemGroup,
  TappedNavigationPillsGroup,
  TappedNavigationTab,
  TappedPartnerCard,
  TappedPromoSpace,
  TappedSeeFewerWorks,
  TappedSell,
  TappedSellArtwork,
  TappedShare,
  TappedShowMore,
  TappedSkip,
  TappedTabBar,
  TappedTaskGroup,
  TappedVerifyIdentity,
  TappedViewingRoomCard,
  TappedViewingRoomGroup,
  TappedViewWork,
  TappedVisitHelpCenter,
} from "./Tap"
import {
  ToggledCollapsibleOrderSummary,
  ToggledNotification,
  ToggledSavedSearch,
} from "./Toggle"
import { UploadSizeLimitExceeded } from "./UploadSizeLimitExceeded"
import { ToggledAccordion } from "./UserExperienceInteractions"
import { ViewedVideo } from "./Video"

/**
 * Master list of valid schemas for analytics actions
 *
 * Each event describes one ActionType
 */
export type Event =
  | AddCollectedArtwork
  | AddedArtworkToArtworkList
  | AddedToAlbum
  | AddressAutoCompletionResult
  | AddToCalendar
  | ArtworkDetailsCompleted
  | AuctionPageView
  | AuctionResultsFilterParamsChanged
  | AuthImpression
  | BannerViewed
  | BidPageView
  | CheckedAccountBalance
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
  | ClickedAskSpecialist
  | ClickedAuctionGroup
  | ClickedAuctionResultItem
  | ClickedBid
  | ClickedBuyerProtection
  | ClickedBuyNow
  | ClickedCancelExpressCheckout
  | ClickedChangePage
  | ClickedChangePaymentMethod
  | ClickedChangeShippingAddress
  | ClickedChangeShippingMethod
  | ClickedCloseValidationAddressModal
  | ClickedCollectionGroup
  | ClickedContactGallery
  | ClickedConversationsFilter
  | ClickedCreateAlert
  | ClickedDeliveryMethod
  | ClickedDismissInquiry
  | ClickedDownloadAppFooter
  | ClickedDownloadAppHeader
  | ClickedEditArtwork
  | ClickedEditAlert
  | ClickedEstimateShippingCost
  | ClickedExpandFilterPanel
  | ClickedExpansionToggle
  | ClickedExpressCheckout
  | ClickedFairCard
  | ClickedFairGroup
  | ClickedFulfillmentTab
  | ClickedGalleryGroup
  | ClickedHeroUnitGroup
  | ClickedImportFees
  | ClickedLoadMore
  | ClickedMainArtworkGrid
  | ClickedMakeOffer
  | ClickedMarketingModal
  | ClickedMarkSold
  | ClickedMarkSpam
  | ClickedNavBar
  | ClickedNavigationTab
  | ClickedNotificationsBell
  | ClickedOfferActions
  | ClickedOfferOption
  | ClickedOnArtworkShippingUnitsDropdown
  | ClickedOnArtworkShippingWeight
  | ClickedOnBuyNowCheckbox
  | ClickedOnDuplicateArtwork
  | ClickedOnFramedMeasurements
  | ClickedOnFramedMeasurementsDropdown
  | ClickedOnLearnMore
  | ClickedOnMakeOfferCheckbox
  | ClickedOnPagination
  | ClickedOnPriceDisplayDropdown
  | ClickedOnReadMore
  | ClickedOrderPage
  | ClickedOrderProgression
  | ClickedOrderSummary
  | ClickedOpenInNewTabButton
  | ClickedPartnerCard
  | ClickedPartnerLink
  | ClickedPaymentDetails
  | ClickedPaymentMethod
  | ClickedPromoSpace
  | ClickedPublish
  | ClickedRegisterToBid
  | ClickedSelectShippingOption
  | ClickedSendPartnerOffer
  | ClickedShareButton
  | ClickedShippingAddress
  | ClickedShowGroup
  | ClickedShowMore
  | ClickedSnooze
  | ClickedStartPartnerOffer
  | ClickedUpdateArtwork
  | ClickedUploadArtwork
  | ClickedValidationAddressOptions
  | ClickedVerifyIdentity
  | ClickedViewingRoomCard
  | ClickedViewWork
  | ClickedVisitHelpCenter
  | CommercialFilterParamsChanged
  | CommercialFilterSelectedAll
  | CompletedOfflineSync
  | CompletedOnboarding
  | ConfirmBid
  | ConfirmRegistrationPageview
  | ConsignmentArtistFailed
  | ConsignmentSubmitted
  | ContactInformationCompleted
  | CreatedAccount
  | CreateAlertReminderMessageViewed
  | CreatedAlbum
  | CreatedArtworkList
  | DarkModeOptionUpdated
  | DeleteCollectedArtwork
  | DeletedArtworkList
  | DeletedSavedSearch
  | EditCollectedArtwork
  | EditedAlert
  | EditedArtworkList
  | EditedAutocompletedAddress
  | EditedSavedSearch
  | EditedUserProfile
  | EditProfileModalViewed
  | EnterLiveAuction
  | ErrorMessageViewed
  | ExperimentViewed
  | ExpressCheckoutViewed
  | FocusedOnConversationMessageInput
  | FocusedOnPriceDatabaseSearchInput
  | FocusedOnSearchInput
  | FollowEvents
  | Impression
  | ItemViewed
  | MaxBidSelected
  | MyCollectionOnboardingCompleted
  | OnboardingUserInputData
  | OrderDetailsViewed
  | OrderProgressionViewed
  | PriceDatabaseFilterParamsChanged
  | PromptForReview
  | RailViewed
  | RegistrationPageView
  | RegistrationSubmitted
  | ResetYourPassword
  | SaleScreenLoadComplete
  | SaveCollectedArtwork
  | SavedAddressViewed
  | SavedCookieConsentPreferences
  | SavedPaymentMethodViewed
  | SavedPriceRange
  | Screen
  | SearchedPriceDatabase
  | SearchedWithNoResults
  | SearchedWithResults
  | SelectedItemFromAddressAutoCompletion
  | SelectedItemFromPriceDatabaseSearch
  | SelectedItemFromSearch
  | SelectedFromDrawer
  | SelectedRecentPriceRange
  | SelectedSearchSuggestionQuickNavigationItem
  | SendOffersBannerViewed
  | SendOffersErrorMessage
  | SendOffersModalViewed
  | SentConsignmentInquiry
  | SentContent
  | SentConversationMessage
  | SentRequestPriceEstimate
  | Share
  | ShippingEstimateViewed
  | StartedOnboarding
  | SubmitAnotherArtwork
  | SubmittedOffer
  | SubmittedOrder
  | SuccessfullyLoggedIn
  | SwipedInfiniteDiscoveryArtwork
  | SwipedUp
  | Tapped3Dots
  | TappedActivityGroup
  | TappedAlertsGroup
  | TappedArticleGroup
  | TappedArticleShare
  | TappedArtistGroup
  | TappedArtistSeriesGroup
  | TappedArtworkGroup
  | TappedArtworkList
  | TappedAskSpecialist
  | TappedAuctionGroup
  | TappedAuctionResultGroup
  | TappedBid
  | TappedBrowseSimilarArtworks
  | TappedBuyerProtection
  | TappedBuyNow
  | TappedCardGroup
  | TappedChangePaymentMethod
  | TappedClearTask
  | TappedCollectedArtwork
  | TappedCollectedArtworkImages
  | TappedCollectionGroup
  | TappedConfirmSeeFewerWorks
  | TappedConsign
  | TappedConsignmentInquiry
  | TappedContactGallery
  | TappedCreateAlert
  | TappedEditedProfile
  | TappedExploreGroup
  | TappedExploreMyCollection
  | TappedFairCard
  | TappedFairGroup
  | TappedFollowsGroup
  | TappedGlobalSearchBar
  | TappedImportFees
  | TappedInboxConversation
  | TappedInfoBubble
  | TappedLearnMore
  | TappedLink
  | TappedMainArtworkGrid
  | TappedMakeOffer
  | TappedMenuItemGroup
  | TappedMyCollection
  | TappedMyCollectionAddArtworkArtist
  | TappedMyCollectionInsightsMedianAuctionPriceChartCareerHighlight
  | TappedMyCollectionInsightsMedianAuctionPriceChartCategory
  | TappedMyCollectionInsightsMedianAuctionPriceChartTimeframe
  | TappedMyCollectionInsightsMedianAuctionRailItem
  | TappedNavigationPillsGroup
  | TappedNavigationTab
  | TappedNewArtworkList
  | TappedNotificationsBell
  | TappedOfferSettings
  | TappedPartnerCard
  | TappedProductCapabilitiesGroup
  | TappedPromoSpace
  | TappedRequestPriceEstimate
  | TappedSeeFewerWorks
  | TappedSell
  | TappedSellArtwork
  | TappedShare
  | TappedShowMore
  | TappedSkip
  | TappedTabBar
  | TappedTaskGroup
  | TappedVerifyIdentity
  | TappedViewingRoomCard
  | TappedViewingRoomGroup
  | TappedViewOffer
  | TappedViewWork
  | TappedVisitHelpCenter
  | TimeOnPage
  | ToggledAccordion
  | ToggledCollapsibleOrderSummary
  | ToggledNotification
  | ToggledPresentationModeSetting
  | ToggledSavedSearch
  | TooltipViewed
  | ProgressiveOnboardingTooltipViewed
  | UploadPhotosCompleted
  | UploadSizeLimitExceeded
  | ValidationAddressViewed
  | ViewArtworkMyCollection
  | ViewedArtworkList
  | ViewedSharedArtworkList
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
   * Corresponds to {@link BannerViewed}
   */
  bannerViewed = "bannerViewed",
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
   * Corresponds to {@link ClickedAskSpecialist}
   */
  clickedAskSpecialist = "clickedAskSpecialist",
  /**
   * Corresponds to {@link ClickedAuctionGroup}
   */
  clickedAuctionGroup = "clickedAuctionGroup",
  /**
   *    * Corresponds to {@link ClickedAuctionResultItem}
   */
  clickedAuctionResultItem = "clickedAuctionResultItem",
  /**
   * Corresponds to {@link ClickedBid}
   */
  clickedBid = "clickedBid",
  /**
   * Corresponds to {@link ClickedBuyerProtection}
   */
  clickedBuyerProtection = "clickedBuyerProtection",
  /**
   * Corresponds to {@link ClickedBuyNow}
   */
  clickedBuyNow = "clickedBuyNow",
  /**
   * Corresponds to {@link ClickedCancelExpressCheckout}
   */
  clickedCancelExpressCheckout = "clickedCancelExpressCheckout",
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
   * Corresponds to {@link ClickedCompleteYourProfile}
   */
  clickedCompleteYourProfile = "clickedCompleteYourProfile",
  /**
   * Corresponds to {@link ClickedContactGallery}
   */
  clickedContactGallery = "clickedContactGallery",
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
   * Corresponds to {@link ClickedEditAlert}
   */
  clickedEditAlert = "clickedEditAlert",
  /**
   * Corresponds to {@link ClickedEstimateShippingCost}
   */
  clickedEstimateShippingCost = "clickedEstimateShippingCost",
  /**
   * Corresponds to {@link ClickedExpansionToggle}
   */
  clickedExpansionToggle = "clickedExpansionToggle",
  /**
   * Corresponds to {@link ClickedExpandFilterPanel}
   */
  clickedExpandFilterPanel = "clickedExpandFilterPanel",
  /**
   * Corresponds to {@link ClickedExpressCheckout}
   */
  clickedExpressCheckout = "clickedExpressCheckout",
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
   * Corresponds to {@link ClickedFulfillmentTab}
   */
  clickedFulfillmentTab = "clickedFulfillmentTab",
  /**
   * Corresponds to {@link ClickedGalleryGroup}
   */
  clickedGalleryGroup = "clickedGalleryGroup",
  /**
   * Corresponds to {@link ClickedHeroUnitGroup}
   */
  clickedHeroUnitGroup = "clickedHeroUnitGroup",
  /**
   * Corresponds to {@link ClickedImportFees}
   */
  clickedImportFees = "clickedImportFees",
  /**
   * Corresponds to {@link ClickedLoadMore}
   */
  clickedLoadMore = "clickedLoadMore",
  /**
   * Corresponds to {@link ClickedMainArtworkGrid}
   */
  clickedMainArtworkGrid = "clickedMainArtworkGrid",
  /**
   * Corresponds to {@link ClickedMakeOffer}
   */
  clickedMakeOffer = "clickedMakeOffer",
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
   * Corresponds to {@link ClickedOrderProgression}
   */
  clickedOrderProgression = "clickedOrderProgression",
  /**
   * Corresponds to {@link ClickedPublish}
   */
  clickedPublish = "clickedPublish",
  /**
   * Corresponds to {@link ClickedSave}
   */
  clickedSave = "clickedSave",
  /**
   * Corresponds to {@link ClickedShareButton}
   */
  clickedShareButton = "clickedShareButton",
  /**
   * Corresponds to {@link ClickedOnReadMore}
   */
  clickedOnReadMore = "clickedOnReadMore",
  /**
   * Corresponds to {@link ClickedOrderPage}
   */
  clickedOrderPage = "clickedOrderPage",
  /**
   * Corresponds to {@link ClickedOrderSummary}
   */
  clickedOrderSummary = "clickedOrderSummary",
  /**
   * Corresponds to {@link ClickedOpenInNewTabButton}
   */
  clickedOpenInNewTabButton = "clickedOpenInNewTabButton",
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
   * Corresponds to {@link ClickedVisitHelpCenter}
   */
  clickedVisitHelpCenter = "clickedVisitHelpCenter",
  /**
   * Corresponds to {@link ClickedConversationHistoryItem}
   */
  clickedConversationHistoryItem = "clickedConversationHistoryItem",
  /**
   * Corresponds to {@link ClickedViewFullConversationHistory}
   */
  clickedViewFullConversationHistory = "clickedViewFullConversationHistory",
  /**
   * Corresponds to {@link ClickedHighlightAchievement}
   */
  clickedHighlightAchievement = "clickedHighlightAchievement",
  /**
   * Corresponds to {@link CommercialFilterParamsChanged}
   */
  commercialFilterParamsChanged = "commercialFilterParamsChanged",
  /**
   * Corresponds to {@link CommercialFilterSelectedAll}
   */
  commercialFilterSelectedAll = "commercialFilterSelectedAll",
  /**
   * Corresponds to {@link SelectedFromDrawer}
   */
  selectedFromDrawer = "selectedFromDrawer",

  /**
   * Corresponds to {@link clickedDownloadAppFooter}
   */
  clickedDownloadAppFooter = "clickedDownloadAppFooter",
  /**
   * Corresponds to {@link clickedDownloadAppHeader}
   */
  clickedDownloadAppHeader = "clickedDownloadAppHeader",
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
   * Corresponds to {@link CreateAlertReminderMessageViewed}
   */
  createAlertReminderMessageViewed = "createAlertReminderMessageViewed",
  /**
   * Corresponds to {@link CreatedArtworkList}
   */
  createdArtworkList = "createdArtworkList",
  /**
   * Corresponds to {@link DarkModeOptionUpdated}
   */
  darkModeOptionUpdated = "darkModeOptionUpdated",
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
   * Corresponds to {@link ExpressCheckoutViewed}
   */
  expressCheckoutViewed = "expressCheckoutViewed",
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
   * Corresponds to {@link OrderDetailsViewed}
   */
  orderDetailsViewed = "orderDetailsViewed",
  /**
   * Corresponds to {@link OrderProgressionViewed}
   */
  orderProgressionViewed = "orderProgressionViewed",
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
   * Corresponds to {@link SavedAddressViewed}
   */
  savedAddressViewed = "savedAddressViewed",
  /**
   * Corresponds to {@link SavedCookieConsentPreferences}
   */
  savedCookieConsentPreferences = "savedCookieConsentPreferences",
  /**
   * Corresponds to {@link SavedPaymentMethodViewed}
   */
  savedPaymentMethodViewed = "savedPaymentMethodViewed",
  /**
   * Corresponds to {@link SavedPriceRange}
   */
  savedPriceRange = "savedPriceRange",
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
   * Corresponds to {@link EditProfileModalViewed}
   */
  editProfileModalViewed = "editProfileModalViewed",
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
   * Corresponds to {@link ShippingEstimateViewed}
   */
  shippingEstimateViewed = "shippingEstimateViewed",
  /**
   * Corresponds to {@link StartedOnboarding}
   */
  startedOnboarding = "startedOnboarding",
  /**
   * Corresponds to {@link SubmitAnotherArtwork}
   */
  submitAnotherArtwork = "submitAnotherArtwork",
  /**
   * Corresponds to {@link SubmittedOffer}
   */
  submittedOffer = "submittedOffer",
  /**
   * Corresponds to {@link SubmittedOrder}
   */
  submittedOrder = "submittedOrder",
  /**
   * Corresponds to {@link SuccessfullyLoggedIn}
   */
  successfullyLoggedIn = "successfullyLoggedIn",
  /**
   * Corresponds to {@link SwipedInfiniteDiscoveryArtwork}
   */
  swipedInfiniteDiscoveryArtwork = "swipedInfiniteDiscoveryArtwork",
  /**
   * Corresponds to {@link SwipedUp}
   */
  swipedUp = "swipedUp",
  /**
   * Corresponds to {@link Tapped3Dots}
   */
  tapped3Dots = "tapped3Dots",
  /**
  /**
   * Corresponds to {@link TappedActivityGroup}
   */
  tappedActivityGroup = "tappedActivityGroup",
  /**
   * Corresponds to {@link TappedAlertsGroup}
   */
  tappedAlertsGroup = "tappedAlertsGroup",
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
   * Corresponds to {@link TappedArtworkList}
   */
  tappedArtworkList = "tappedArtworkList",
  /**
   * Corresponds to {@link TappedAskSpecialist}
   */
  tappedAskSpecialist = "tappedAskSpecialist",
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
   * Corresponds to {@link TappedPopover}
   */
  tappedPopover = "tappedPopover",
  /**
   * Corresponds to {@link TappedBrowseSimilarArtworks}
   */
  tappedBrowseSimilarArtworks = "tappedBrowseSimilarArtworks",
  /**
   * Corresponds to {@link TappedBuyerProtection}
   */
  tappedBuyerProtection = "tappedBuyerProtection",
  /**
   * Corresponds to {@link TappedBuyNow}
   */
  tappedBuyNow = "tappedBuyNow",
  /**
   * Corresponds to {@link TappedCardGroup}
   */
  tappedCardGroup = "tappedCardGroup",
  /**
   * Corresponds to {@link TappedClearTask}
   */
  tappedClearTask = "tappedClearTask",
  /**
   * Corresponds to {@link TappedCollectedArtwork}
   */
  tappedCollectedArtwork = "tappedCollectedArtwork",
  /**
   * Corresponds to {@link TappedChangePaymentMethod}
   */
  tappedChangePaymentMethod = "tappedChangePaymentMethod",
  /**
   * Corresponds to {@link TappedClose}
   */
  tappedClose = "tappedClose",
  /**
   * Corresponds to {@link TappedCollectedArtworkImages}
   */
  tappedCollectedArtworkImages = "tappedCollectedArtworkImages",
  /**
   * Corresponds to {@link TappedCollectionGroup}
   */
  tappedCollectionGroup = "tappedCollectionGroup",
  /**
   * Corresponds to {@link TappedCompleteYourProfile}
   */
  tappedCompleteYourProfile = "tappedCompleteYourProfile",
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
   * Corresponds to {@link TappedEditedProfile}
   */
  tappedEditedProfile = "tappedEditedProfile",
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
   * Corresponds to {@link TappedFollowsGroup}
   */
  tappedFollowsGroup = "tappedFollowsGroup",
  /**
   * Corresponds to {@link TappedHeroUnitGroup}
   */
  tappedHeroUnitGroup = "tappedHeroUnitGroup",
  /**
   * Corresponds to {@link TappedImportFees}
   */
  tappedImportFees = "tappedImportFees",
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
   * Corresponds to {@link TappedMenuItemGroup}
   */
  tappedMenuItemGroup = "tappedMenuItemGroup",
  /**
   * Corresponds to {@link TappedMyCollection}
   */
  tappedMyCollection = "tappedMyCollection",
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
   * Corresponds to {@link TappedNavigationPillsGroup}
   */
  tappedNavigationPillsGroup = "tappedNavigationPillsGroup",
  /**
   * Corresponds to {@link TappedNotificationsBell}
   */
  tappedNotificationsBell = "tappedNotificationsBell",
  /**
   * Corresponds to {@link TappedOfferSettings}
   */
  tappedOfferSettings = "tappedOfferSettings",
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
   * Corresponds to {@link TappedRewind}
   */
  tappedRewind = "tappedRewind",
  /**
   * Corresponds to {@link TappedConfirmSeeFewerWorks}
   */
  tappedConfirmSeeFewerWorks = "tappedConfirmSeeFewerWorks",
  /**
   * Corresponds to {@link TappedSeeFewerWorks}
   */
  tappedSeeFewerWorks = "tappedSeeFewerWorks",
  /**
   * Corresponds to {@link TappedSell}
   */
  tappedSell = "tappedSell",
  /**
   * Corresponds to {@link TappedSellArtwork}
   */
  tappedSellArtwork = "tappedSellArtwork",
  /**
   * Corresponds to {@link TappedShare}
   */
  tappedShare = "tappedShare",
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
   * Corresponds to {@link TappedTaskGroup}
   */
  tappedTaskGroup = "tappedTaskGroup",
  /**
   * Corresponds to {@link TappedToast}
   */
  tappedToast = "tappedToast",
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
   * Corresponds to {@link TappedVisitHelpCenter}
   */
  tappedVisitHelpCenter = "tappedVisitHelpCenter",
  /**
   * Corresponds to {@link TappedGlobalSearchBar}
   */
  tappedGlobalSearchBar = "tappedGlobalSearchBar",
  /**
   * Corresponds to {@link TappedGene}
   */
  tappedGene = "tappedGene",
  /**
   * Corresponds to {@link TappedHighlightAchievement}
   */
  tappedHighlightAchievement = "tappedHighlightAchievement",
  /**
   * Corresponds to {@link TappedNewArtworkList}
   */
  tappedNewArtworkList = "tappedNewArtworkList",
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
   * Corresponds to {@link ToggledCollapsibleOrderSummary}
   */
  toggledCollapsibleOrderSummary = "toggledCollapsibleOrderSummary",
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
   * Corresponds to {@link ViewedSharedArtworkList}
   */
  viewedSharedArtworkList = "viewedSharedArtworkList",
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
