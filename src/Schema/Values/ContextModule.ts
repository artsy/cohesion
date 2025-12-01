/**
 * Master list of context modules available in web and iOS
 *
 * A component where an action is triggered
 * @packageDocumentation
 */
export enum ContextModule {
  about = "about",
  aboutTheWork = "aboutTheWork",
  aboutThisAuction = "aboutThisAuction",
  account = "account",
  accountSettings = "accountSettings",
  accountTransactions = "accountTransactions",
  activity = "activity",
  activityRail = "activityRail",
  actNow = "actNow",
  adServer = "adServer",
  alertConfirmation = "alertConfirmation",
  alertDetails = "alertDetails",
  alertFilters = "alertFilters",
  alertsAll = "alertsAll",
  alertsList = "alertsList",
  alertsWithoutPrice = "alertsWithoutPrice",
  alertsWithPrice = "alertsWithPrice",
  article = "article",
  articleArtist = "articleArtist",
  articleRail = "articleRail",
  articles = "articles",
  articleTab = "articleTab",
  artistArtworksCreateAlertReminderMessage = "artistArtworksCreateAlertReminderMessage",
  artistArtworksFilterHeader = "artistArtworksFilterHeader",
  artistArtworksGridEnd = "artistArtworksGridEnd",
  artistAuctionResults = "artistAuctionResults",
  artistCard = "artistCard",
  artistGrid = "artistGrid",
  artistHeader = "artistHeader",
  artistHighDemandGrid = "artistHighDemandGrid",
  artistHighlights = "artistHighlights",
  artistRecentlySold = "artistRecentlySold",
  artistSeriesRail = "artistSeriesRail",
  artistSeriesTab = "artistSeriesTab",
  artistsTab = "artistsTab",
  artistsToFollowRail = "artistsToFollowRail",
  artworkActions = "artworkActions",
  artworkClosedLotHeader = "artworkClosedLotHeader",
  artworkDetails = "artworkDetails",
  artworkForm = "artworkForm",
  artworkGrid = "artworkGrid",
  artworkGridEmptyState = "artworkGridEmptyState",
  artworkImage = "artworkImage",
  artworkMetadata = "artworkMetadata",
  artworkRecentlySoldGrid = "artworkRecentlySoldGrid",
  artworkRecommendationsRail = "artworkRecommendationsRail",
  artworkSidebar = "artworkSidebar",
  artworksTab = "artworksTab",
  associatedViewingRoom = "associatedViewingRoom",
  auctionCard = "auctionCard",
  auctionHome = "auctionHome",
  auctionLots = "auctionLots",
  auctionLotsEndingSoonRail = "auctionLotsEndingSoonRail",
  auctionRail = "auctionRail",
  auctionRegistration = "auctionRegistration",
  auctionResult = "auctionResult",
  auctionResultComparableWorks = "auctionResultComparableWorks",
  auctionResults = "auctionResults",
  auctionResultsForArtistsYouFollow = "auctionResultsForArtistsYouFollow",
  auctionResultsForArtistsYouFollowCard = "auctionResultsForArtistsYouFollowCard",
  auctionResultsRail = "auctionResultsRail",
  auctionSidebar = "auctionSidebar",
  auctionsCard = "auctionsCard",
  auctionsInfo = "auctionsInfo",
  auctionsHubRail = "auctionsHubRail",
  auctionTab = "auctionTab",
  banner = "banner",
  bannerPopUp = "bannerPopUp",
  basedOnYourRecentSavesRail = "basedOnYourRecentSavesRail",
  boothsTab = "boothsTab",
  bottomTabs = "bottomTabs",
  browseFair = "browseFair",
  categoryRail = "categoryRail",
  cityGuideCard = "cityGuideCard",
  collectionCard = "collectionCard",
  collectionDescription = "collectionDescription",
  collectionRail = "collectionRail",
  collectorProfile = "collectorProfile",
  collectorProfileCard = "collectorProfileCard",
  consignmentInquiryForm = "consignmentInquiryForm",
  consignSubmissionFlow = "consignSubmissionFlow",
  contactInformation = "contactInformation",
  conversationBuyNowConfirmArtwork = "conversationBuyNowConfirmArtwork",
  conversationMakeOfferConfirmArtwork = "conversationMakeOfferConfirmArtwork",
  createAlert = "createAlert",
  createAlertHeader = "createAlertHeader",
  curatedCollections = "curatedCollections",
  curatedHighlightsRail = "curatedHighlightsRail",
  curatedTrendingArtistsRail = "curatedTrendingArtistsRail",
  curatorsPicksEmergingRail = "curatorsPicksEmergingRail",
  currentAuctions = "currentAuctions",
  currentShowsRail = "currentShowsRail",
  discoverSomethingNewRail = "discoverSomethingNewRail",
  doMoreOnArtsy = "doMoreOnArtsy",
  editAlert = "editAlert",
  exhibitorsTab = "exhibitorsTab",
  exploreBy = "exploreBy",
  fairCard = "fairCard",
  fairHome = "fairHome",
  fairInfo = "fairInfo",
  fairOrganizerHeader = "fairOrganizerHeader",
  fairRail = "fairRail",
  fairsHeader = "fairsHeader",
  fairTab = "fairTab",
  favoritesAlerts = "favoritesAlerts",
  favoritesFollows = "favoritesFollows",
  favoritesSaves = "favoritesSaves",
  featuredArtists = "featuredArtists",
  featuredArtistsRail = "featuredArtistsRail",
  featuredCollection = "featuredCollection",
  featuredCollectionsRail = "featuredCollectionsRail",
  featuredGalleriesRail = "featuredGalleriesRail",
  featuredRail = "featuredRail",
  featuredShowsRail = "featuredShowsRail",
  featuredViewingRoomsRail = "featuredViewingRoomsRail",
  filterScreen = "filterScreen",
  findTheArtYouWant = "findTheArtYouWant",
  follows = "follows",
  followedArtistListItem = "followedArtistListItem",
  followedGalleryListItem = "followedGalleryListItem",
  footer = "footer",
  frequentlyAskedQuestions = "frequentlyAskedQuestions",
  galleriesForYouBanner = "galleriesForYouBanner",
  galleriesNearYouRail = "galleriesNearYouRail",
  galleryBoothRail = "galleryBoothRail",
  galleryTab = "galleryTab",
  geneHeader = "geneHeader",
  header = "header",
  heroUnitsRail = "heroUnitsRail",
  inboxActiveBids = "inboxActiveBids",
  inboxClosedBids = "inboxClosedBids",
  inboxConversation = "inboxConversation",
  inboxInquiries = "inboxInquiries",
  infiniteDiscovery = "infiniteDiscovery",
  infiniteDiscoveryArtworkAboutTab = "infiniteDiscoveryArtworkAboutTab",
  infiniteDiscoveryArtworkCard = "infiniteDiscoveryArtworkCard",
  infiniteDiscoveryArtworkOtherWorksTab = "infiniteDiscoveryArtworkOtherWorksTab",
  infiniteDiscoveryBanner = "infiniteDiscoveryBanner",
  infiniteDiscoveryDrawer = "infiniteDiscoveryDrawer",
  inquiry = "inquiry",
  intextTooltip = "intextTooltip",
  latestViewingRoomsRail = "latestViewingRoomsRail",
  liveAuctionRoom = "liveAuctionRoom",
  liveAuctionsRail = "liveAuctionsRail",
  lotsForYouCard = "lotsForYouCard",
  lotsForYouRail = "lotsForYouRail",
  longPressContextMenu = "longPressContextMenu",
  mainCarousel = "mainCarousel",
  marketingCollectionTab = "marketingCollectionTab",
  marketInsights = "marketInsights",
  marketNews = "marketNews",
  minimalCTABanner = "minimalCTABanner",
  moreFromThisSeries = "moreFromThisSeries",
  moreSeriesByThisArtist = "moreSeriesByThisArtist",
  myCollection = "myCollection",
  myCollectionAddArtworkAddArtist = "myCollectionAddArtworkAddArtist",
  myCollectionArtwork = "myCollectionArtwork",
  myCollectionArtworkAbout = "myCollectionArtworkAbout",
  myCollectionArtworkInsights = "myCollectionArtworkInsights",
  myCollectionComparableWorks = "myCollectionComparableWorks",
  myCollectionHome = "myCollectionHome",
  myCollectionInsights = "myCollectionInsights",
  myCollectionInsightsMedianAuctionPriceChart = "myCollectionInsightsMedianAuctionPriceChart",
  myCollectionInsightsMedianAuctionRail = "myCollectionInsightsMedianAuctionRail",
  myCollectionMarketSignals = "myCollectionMarketSignals",
  myCollectionOnboarding = "myCollectionOnboarding",
  navBar = "navBar",
  newWorksByArtistsYouFollowRail = "newWorksByArtistsYouFollowRail",
  newWorksByGalleriesYouFollowRail = "newWorksByGalleriesYouFollowRail",
  newWorksForYouRail = "newWorksForYouRail",
  notification = "notification",
  onboardingActivity = "onboardingActivity",
  onboardingCollectorLevel = "onboardingCollectorLevel",
  onboardingFlow = "onboardingFlow",
  onboardingInterests = "onboardingInterests",
  ordersAccept = "ordersAccept",
  ordersCheckout = "ordersCheckout",
  ordersCollapsibleSummary = "ordersCollapsibleSummary",
  ordersCounter = "ordersCounter",
  ordersDetail = "ordersDetail",
  ordersFulfillment = "ordersFulfillment",
  ordersHistory = "ordersHistory",
  ordersNewPayment = "ordersNewPayment",
  ordersOffer = "ordersOffer",
  ordersPayment = "ordersPayment",
  ordersRespond = "ordersRespond",
  ordersReview = "ordersReview",
  ordersShipping = "ordersShipping",
  ordersShippingMethods = "ordersShippingMethods",
  ordersSubmitted = "ordersSubmitted",
  otherCollectionsRail = "otherCollectionsRail",
  otherWorksByArtistRail = "otherWorksByArtistRail",
  otherWorksFromPartnerRail = "otherWorksFromPartnerRail",
  otherWorksFromShowRail = "otherWorksFromShowRail",
  otherWorksInAuctionRail = "otherWorksInAuctionRail",
  partnerHeader = "partnerHeader",
  pastAuctions = "pastAuctions",
  pastFairs = "pastFairs",
  paymentFailed = "paymentFailed",
  popularArtistsRail = "popularArtistsRail",
  popUpModal = "popUpModal",
  presentingFair = "presentingFair",
  presentingPartner = "presentingPartner",
  priceDatabase = "priceDatabase",
  priceDatabaseLanding = "priceDatabaseLanding",
  priceEstimate = "priceEstimate",
  promoSpace = "promoSpace",
  pushNotifications = "pushNotifications",
  quickLinks = "quickLinks",
  recentlySavedRail = "recentlySavedRail",
  recentlyViewedRail = "recentlyViewedRail",
  recentPriceRanges = "recentPriceRanges",
  recommendedArtistsRail = "recommendedArtistsRail",
  recommendedWorksForYouRail = "recommendedWorksForYouRail",
  relatedArticles = "relatedArticles",
  relatedArtistsRail = "relatedArtistsRail",
  relatedCategories = "relatedCategories",
  relatedCollectionsRail = "relatedCollectionsRail",
  relatedWorksRail = "relatedWorksRail",
  saves = "saves",
  saveWorksCTA = "saveWorksCTA",
  sell = "sell",
  sellFooter = "sellFooter",
  sellHeader = "sellHeader",
  sellHowItWorks = "sellHowItWorks",
  sellMeetTheSpecialists = "sellMeetTheSpecialists",
  sellSpeakToTheTeam = "sellSpeakToTheTeam",
  sellStickyFooter = "sellStickyFooter",
  showHeader = "showHeader",
  showInfo = "showInfo",
  showsRail = "showsRail",
  showTab = "showTab",
  similarToWorksYouSavedRail = "similarToWorksYouSavedRail",
  similarToWorksYouViewedRail = "similarToWorksYouViewedRail",
  standoutLots = "standoutLots",
  tabBar = "tabBar",
  tagHeader = "tagHeader",
  toDoList = "toDoList",
  topAuctionLotsRail = "topAuctionLotsRail",
  topTab = "topTab",
  topWorksRail = "topWorksRail",
  trendingArtistsRail = "trendingArtistsRail",
  trendingLots = "trendingLots",
  troveArtworksRail = "troveArtworksRail",
  upcomingAuctions = "upcomingAuctions",
  upcomingAuctionsRail = "upcomingAuctionsRail",
  uploadPhotos = "uploadPhotos",
  viewingRoom = "viewingRoom",
  voltArtworksEdit = "voltArtworksEdit",
  worksByArtistsYouFollowRail = "worksByArtistsYouFollowRail",
  worksByPopularArtistsRail = "worksByPopularArtistsRail",
  worksForSaleRail = "worksForSaleRail",
  yourActiveBids = "yourActiveBids",
}

/**
 * Limited ContextModules available for web authentication events
 */
export type AuthContextModule =
  | ContextModule.aboutTheWork
  | ContextModule.accountSettings
  | ContextModule.accountTransactions
  | ContextModule.activity
  | ContextModule.articleTab
  | ContextModule.artistHeader
  | ContextModule.artistRecentlySold
  | ContextModule.artistSeriesRail
  | ContextModule.artistSeriesTab
  | ContextModule.artistsTab
  | ContextModule.artistsToFollowRail
  | ContextModule.artworkActions
  | ContextModule.artworkClosedLotHeader
  | ContextModule.artworkGrid
  | ContextModule.artworkImage
  | ContextModule.artworkSidebar
  | ContextModule.artworksTab
  | ContextModule.associatedViewingRoom
  | ContextModule.auctionHome
  | ContextModule.auctionLots
  | ContextModule.auctionLotsEndingSoonRail
  | ContextModule.auctionRail
  | ContextModule.auctionResult
  | ContextModule.auctionResultComparableWorks
  | ContextModule.auctionResults
  | ContextModule.auctionSidebar
  | ContextModule.auctionsInfo
  | ContextModule.auctionTab
  | ContextModule.bannerPopUp
  | ContextModule.boothsTab
  | ContextModule.bottomTabs
  | ContextModule.browseFair
  | ContextModule.categoryRail
  | ContextModule.collectionDescription
  | ContextModule.collectorProfile
  | ContextModule.consignSubmissionFlow
  | ContextModule.createAlert
  | ContextModule.currentShowsRail
  | ContextModule.fairInfo
  | ContextModule.fairOrganizerHeader
  | ContextModule.fairRail
  | ContextModule.fairsHeader
  | ContextModule.fairTab
  | ContextModule.featuredArtists
  | ContextModule.featuredArtistsRail
  | ContextModule.featuredGalleriesRail
  | ContextModule.footer
  | ContextModule.galleriesNearYouRail
  | ContextModule.galleryTab
  | ContextModule.geneHeader
  | ContextModule.header
  | ContextModule.heroUnitsRail
  | ContextModule.inquiry
  | ContextModule.intextTooltip
  | ContextModule.liveAuctionRoom
  | ContextModule.liveAuctionsRail
  | ContextModule.lotsForYouRail
  | ContextModule.mainCarousel
  | ContextModule.marketingCollectionTab
  | ContextModule.minimalCTABanner
  | ContextModule.myCollectionAddArtworkAddArtist
  | ContextModule.myCollectionHome
  | ContextModule.navBar
  | ContextModule.newWorksByGalleriesYouFollowRail
  | ContextModule.newWorksForYouRail
  | ContextModule.notification
  | ContextModule.onboardingActivity
  | ContextModule.onboardingCollectorLevel
  | ContextModule.onboardingFlow
  | ContextModule.onboardingInterests
  | ContextModule.otherWorksByArtistRail
  | ContextModule.otherWorksFromPartnerRail
  | ContextModule.otherWorksFromShowRail
  | ContextModule.otherWorksInAuctionRail
  | ContextModule.partnerHeader
  | ContextModule.pastFairs
  | ContextModule.popularArtistsRail
  | ContextModule.popUpModal
  | ContextModule.presentingFair
  | ContextModule.presentingPartner
  | ContextModule.priceEstimate
  | ContextModule.quickLinks
  | ContextModule.recentlyViewedRail
  | ContextModule.recentPriceRanges
  | ContextModule.recommendedArtistsRail
  | ContextModule.relatedArtistsRail
  | ContextModule.relatedCategories
  | ContextModule.relatedWorksRail
  | ContextModule.saveWorksCTA
  | ContextModule.sell
  | ContextModule.sellFooter
  | ContextModule.sellHeader
  | ContextModule.sellHowItWorks
  | ContextModule.sellStickyFooter
  | ContextModule.showHeader
  | ContextModule.showInfo
  | ContextModule.showTab
  | ContextModule.standoutLots
  | ContextModule.tagHeader
  | ContextModule.topAuctionLotsRail
  | ContextModule.topTab
  | ContextModule.topWorksRail
  | ContextModule.trendingArtistsRail
  | ContextModule.trendingLots
  | ContextModule.viewingRoom
  | ContextModule.worksByArtistsYouFollowRail
  | ContextModule.worksByPopularArtistsRail
  | ContextModule.worksForSaleRail
