/**
 * All owner types available for iOS (screen) and web (page)
 *
 * @packageDocumentation
 */
export enum OwnerType {
  activities = "activities",
  activity = "activity",
  album = "album",
  allArtistSeries = "allArtistSeries",
  alerts = "alerts",
  alertDetails = "alertDetails",
  alertConfirmation = "alertConfirmation",
  alertFilters = "alertFilters",
  alertsInfoModal = "alertsInfoModal",
  article = "article",
  articles = "articles",
  artist = "artist",
  artistArticles = "artistArticles",
  artistAuctionResults = "artistAuctionResults",
  artists = "artists",
  artistSeries = "artistSeries",
  artwork = "artwork",
  artworkPriceFilter = "artworkPriceFilter",
  artworkRecommendations = "artworkRecommendations",
  auction = "auction",
  auctionResult = "auctionResult",
  auctionResultsForArtistsYouFollow = "auctionResultsForArtistsYouFollow",
  auctionResultsRail = "auctionResultsRail",
  auctions = "auctions",
  cityGuideGuide = "cityGuideGuide",
  cityGuideMap = "cityGuideMap",
  cityPicker = "cityPicker",
  collect = "collect",
  collection = "collection",
  collections = "collections",
  collectionsCategory = "collectionsCategory",
  consign = "consign",
  consignmentFlow = "consignmentFlow",
  consignmentInquiry = "consignmentInquiry",
  consignmentSubmission = "consignmentSubmission",
  conversation = "conversation",
  conversationMakeOfferConfirmArtwork = "conversationMakeOfferConfirmArtwork",
  createAlert = "createAlert",
  demand = "demand",
  editAlert = "editAlert",
  editProfile = "editProfile",
  explore = "explore",
  fair = "fair",
  fairArtworks = "fairArtworks",
  fairs = "fairs",
  follows = "follows",
  galleries = "galleries",
  galleriesForYou = "galleriesForYou",
  gene = "gene",
  home = "home",
  inbox = "inbox",
  inboxBids = "inboxBids",
  inboxConversation = "inboxConversation",
  inboxInquiries = "inboxInquiries",
  infiniteDiscovery = "infiniteDiscovery",
  lotsByArtistsYouFollow = "lotsByArtistsYouFollow",
  lotsForYou = "lotsForYou",
  marketNews = "marketNews",
  myCollection = "myCollection",
  myCollectionAddArtworkArtist = "myCollectionAddArtworkArtist",
  myCollectionArtwork = "myCollectionArtwork",
  myCollectionArtworkAbout = "MyCollectionArtworkAbout",
  myCollectionArtworkInsights = "MyCollectionArtworkInsights",
  myCollectionInsights = "myCollectionInsights",
  myCollectionInsightsMedianAuctionPrice = "myCollectionInsightsMedianAuctionPrice",
  myCollectionOnboarding = "myCollectionOnboarding",
  myCollectionUploadingFlow = "myCollectionUploadingFlow",
  newWorksForYou = "newWorksForYou",
  newWorksFromGalleriesYouFollow = "newWorksFromGalleriesYouFollow",
  notification = "notification",
  onboarding = "onboarding",
  ordersAccept = "orders-accept",
  ordersCounter = "orders-counter",
  ordersHistory = "orders-history",
  ordersNewPayment = "orders-new-payment",
  ordersOffer = "orders-offer",
  ordersPayment = "orders-payment",
  ordersRespond = "orders-respond",
  ordersReview = "orders-review",
  ordersShipping = "orders-shipping",
  ordersSubmitted = "orders-submitted",
  partner = "partner",
  partnerShowsArtworks = "partnerShowsArtworks",
  priceDatabase = "priceDatabase",
  profile = "profile",
  recentlyViewed = "recentlyViewed",
  sale = "sale",
  saleInformation = "saleInformation",
  savedSearch = "savedSearch",
  savedSearches = "savedSearches",
  saves = "saves",
  savesInfoModal = "savesInfoModal",
  savesAndFollows = "savesAndFollows",
  search = "search",
  settings = "settings",
  sell = "sell",
  sendOffers = "sendOffers",
  show = "show",
  shows = "shows",
  similarToRecentlyViewed = "similarToRecentlyViewed",

  submitArtworkStepStart = "submitArtworkStepStart",
  submitArtworkStepSelectArtist = "submitArtworkStepSelectArtist",
  submitArtworkStepAddTitle = "submitArtworkStepAddTitle",
  submitArtworkStepAddPhotos = "submitArtworkStepAddPhotos",
  submitArtworkStepAddDetails = "submitArtworkStepAddDetails",
  submitArtworkStepPurchaseHistory = "submitArtworkStepPurchaseHistory",
  submitArtworkStepAddDimensions = "submitArtworkStepAddDimensions",
  submitArtworkStepAddPhoneNumber = "submitArtworkStepAddPhoneNumber",
  submitArtworkStepCompleteYourSubmission = "submitArtworkStepCompleteYourSubmission",
  submitArtworkStepArtistRejected = "submitArtworkStepArtistRejected",
  submitArtworkStepSelectArtworkMyCollectionArtwork = "submitArtworkStepSelectArtworkMyCollectionArtwork",
  submitArtworkStepShippingLocation = "submitArtworkStepShippingLocation",
  submitArtworkStepFrameInformation = "submitArtworkStepFrameInformation",
  submitArtworkStepAddtionalDocuments = "submitArtworkStepAddtionalDocuments",
  submitArtworkStepCondition = "submitArtworkStepCondition",
  submitArtworkStepCompleteYourSubmissionPostApproval = "submitArtworkStepCompleteYourSubmissionPostApproval",

  tag = "tag",
  upcomingAuctions = "upcomingAuctions",
  user = "user",
  viewingRoom = "viewingRoom",
  viewingRoomArtworkPage = "viewingRoomArtworkPage",
  viewingRoomArtworks = "viewingRoomArtworks",
  viewingRoomList = "viewingRoomList",
  viewingRooms = "viewingRooms",
  worksForYou = "worksForYou",
}

/**
 * Owner types available in iOS/Android
 */
export type ScreenOwnerType =
  | OwnerType.album
  | OwnerType.activities
  | OwnerType.activity
  | OwnerType.allArtistSeries
  | OwnerType.alerts
  | OwnerType.alertDetails
  | OwnerType.alertConfirmation
  | OwnerType.alertFilters
  | OwnerType.alertsInfoModal
  | OwnerType.article
  | OwnerType.articles
  | OwnerType.artist
  | OwnerType.artistArticles
  | OwnerType.artistAuctionResults
  | OwnerType.artistSeries
  | OwnerType.artwork
  | OwnerType.artworkPriceFilter
  | OwnerType.artworkRecommendations
  | OwnerType.auctionResult
  | OwnerType.auctionResultsForArtistsYouFollow
  | OwnerType.auctions
  | OwnerType.cityGuideGuide
  | OwnerType.cityGuideMap
  | OwnerType.cityPicker
  | OwnerType.collection
  | OwnerType.collectionsCategory
  | OwnerType.consign
  | OwnerType.consignmentFlow
  | OwnerType.consignmentInquiry
  | OwnerType.consignmentSubmission
  | OwnerType.conversation
  | OwnerType.conversationMakeOfferConfirmArtwork
  | OwnerType.createAlert
  | OwnerType.editAlert
  | OwnerType.editProfile
  | OwnerType.explore
  | OwnerType.fair
  | OwnerType.fairArtworks
  | OwnerType.follows
  | OwnerType.galleriesForYou
  | OwnerType.gene
  | OwnerType.home
  | OwnerType.inbox
  | OwnerType.inboxBids
  | OwnerType.inboxConversation
  | OwnerType.inboxInquiries
  | OwnerType.lotsByArtistsYouFollow
  | OwnerType.lotsForYou
  | OwnerType.marketNews
  | OwnerType.myCollection
  | OwnerType.myCollectionAddArtworkArtist
  | OwnerType.myCollectionArtwork
  | OwnerType.myCollectionArtwork
  | OwnerType.myCollectionArtworkAbout
  | OwnerType.myCollectionArtworkInsights
  | OwnerType.myCollectionInsights
  | OwnerType.myCollectionInsightsMedianAuctionPrice
  | OwnerType.myCollectionOnboarding
  | OwnerType.newWorksForYou
  | OwnerType.newWorksFromGalleriesYouFollow
  | OwnerType.notification
  | OwnerType.onboarding
  | OwnerType.partner
  | OwnerType.priceDatabase
  | OwnerType.profile
  | OwnerType.recentlyViewed
  | OwnerType.sale
  | OwnerType.saleInformation
  | OwnerType.savedSearch
  | OwnerType.savedSearches
  | OwnerType.saves
  | OwnerType.savesInfoModal
  | OwnerType.savesAndFollows
  | OwnerType.search
  | OwnerType.sell
  | OwnerType.settings
  | OwnerType.show
  | OwnerType.shows
  | OwnerType.submitArtworkStepStart
  | OwnerType.submitArtworkStepSelectArtist
  | OwnerType.submitArtworkStepAddTitle
  | OwnerType.submitArtworkStepAddPhotos
  | OwnerType.submitArtworkStepAddDetails
  | OwnerType.submitArtworkStepPurchaseHistory
  | OwnerType.submitArtworkStepAddDimensions
  | OwnerType.submitArtworkStepAddPhoneNumber
  | OwnerType.submitArtworkStepCompleteYourSubmission
  | OwnerType.submitArtworkStepArtistRejected
  | OwnerType.submitArtworkStepSelectArtworkMyCollectionArtwork
  | OwnerType.submitArtworkStepShippingLocation
  | OwnerType.submitArtworkStepFrameInformation
  | OwnerType.submitArtworkStepAddtionalDocuments
  | OwnerType.submitArtworkStepCondition
  | OwnerType.submitArtworkStepCompleteYourSubmissionPostApproval
  | OwnerType.similarToRecentlyViewed
  | OwnerType.tag
  | OwnerType.upcomingAuctions
  | OwnerType.viewingRoom
  | OwnerType.viewingRoomArtworkPage
  | OwnerType.viewingRoomArtworks
  | OwnerType.viewingRoomList
  | OwnerType.worksForYou

/**
 * Owner types available in web/mobile web
 */
export type PageOwnerType =
  | OwnerType.activities
  | OwnerType.activity
  | OwnerType.alertConfirmation
  | OwnerType.article
  | OwnerType.articles
  | OwnerType.artist
  | OwnerType.artistAuctionResults
  | OwnerType.artists
  | OwnerType.artistSeries
  | OwnerType.artwork
  | OwnerType.auctions
  | OwnerType.collect
  | OwnerType.collection
  | OwnerType.collections
  | OwnerType.consign
  | OwnerType.demand
  | OwnerType.editProfile
  | OwnerType.fair
  | OwnerType.fairs
  | OwnerType.galleries
  | OwnerType.gene
  | OwnerType.home
  | OwnerType.marketNews
  | OwnerType.myCollectionArtworkInsights
  | OwnerType.myCollectionInsights
  | OwnerType.onboarding
  | OwnerType.ordersAccept
  | OwnerType.ordersCounter
  | OwnerType.ordersNewPayment
  | OwnerType.ordersOffer
  | OwnerType.ordersPayment
  | OwnerType.ordersRespond
  | OwnerType.ordersReview
  | OwnerType.ordersShipping
  | OwnerType.ordersSubmitted
  | OwnerType.partner
  | OwnerType.partnerShowsArtworks
  | OwnerType.priceDatabase
  | OwnerType.profile
  | OwnerType.sale
  | OwnerType.savedSearch
  | OwnerType.savedSearches
  | OwnerType.saves
  | OwnerType.search
  | OwnerType.sendOffers
  | OwnerType.show
  | OwnerType.shows
  | OwnerType.submitArtworkStepStart
  | OwnerType.submitArtworkStepSelectArtist
  | OwnerType.submitArtworkStepAddTitle
  | OwnerType.submitArtworkStepAddPhotos
  | OwnerType.submitArtworkStepAddDetails
  | OwnerType.submitArtworkStepPurchaseHistory
  | OwnerType.submitArtworkStepAddDimensions
  | OwnerType.submitArtworkStepAddPhoneNumber
  | OwnerType.submitArtworkStepCompleteYourSubmission
  | OwnerType.submitArtworkStepArtistRejected
  | OwnerType.submitArtworkStepSelectArtworkMyCollectionArtwork
  | OwnerType.submitArtworkStepShippingLocation
  | OwnerType.submitArtworkStepFrameInformation
  | OwnerType.submitArtworkStepAddtionalDocuments
  | OwnerType.submitArtworkStepCondition
  | OwnerType.submitArtworkStepCompleteYourSubmissionPostApproval
  | OwnerType.tag
  | OwnerType.user
  | OwnerType.viewingRoom
  | OwnerType.viewingRooms
  | OwnerType.worksForYou
  | OwnerType.newWorksFromGalleriesYouFollow
