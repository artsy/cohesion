/**
 * Master list of context modules available in web and iOS
 *
 * A component where an action is triggered
 * @packageDocumentation
 */
export enum ContextModule {
  aboutTheWork = "aboutTheWork",
  aboutThisAuction = "aboutThisAuction",
  articleArtist = "articleArtist",
  articleRail = "articleRail",
  articles = "articles",
  artistAuctionResults = "artistAuctionResults",
  artistCard = "artistCard",
  artistHeader = "artistHeader",
  artistHighDemandGrid = "artistHighDemandGrid",
  artistRecentlySold = "artistRecentlySold",
  artistSeriesRail = "artistSeriesRail",
  artistsTab = "artistsTab",
  artistsToFollowRail = "artistsToFollowRail",
  artworkGrid = "artworkGrid",
  artworkImage = "artworkImage",
  artworkRecentlySoldGrid = "artworkRecentlySoldGrid",
  artworkMetadata = "artworkMetadata",
  artworkSidebar = "artworkSidebar",
  artworksTab = "artworksTab",
  associatedViewingRoom = "associatedViewingRoom",
  auctionSidebar = "auctionSidebar",
  auctionCard = "auctionCard",
  auctionHome = "auctionHome",
  auctionRail = "auctionRail",
  auctionResult = "auctionResult",
  auctionResults = "auctionResults",
  auctionResultsForArtistsYouFollow = "auctionResultsForArtistsYouFollow",
  auctionResultsRail = "auctionResultsRail",
  auctionsInfo = "auctionsInfo",
  bannerPopUp = "bannerPopUp",
  browseFair = "browseFair",
  categoryRail = "categoryRail",
  cityGuideCard = "cityGuideCard",
  collectionDescription = "collectionDescription",
  collectionRail = "collectionRail",
  collectionCard = "collectionCard",
  consignSubmissionFlow = "consignSubmissionFlow",
  curatedHighlightsRail = "curatedHighlightsRail",
  currentAuctions = "currentAuctions",
  currentShowsRail = "currentShowsRail",
  exhibitorsTab = "exhibitorsTab",
  fairInfo = "fairInfo",
  fairOrganizerHeader = "fairOrganizerHeader",
  fairRail = "fairRail",
  fairCard = "fairCard",
  fairHome = "fairHome",
  fairsHeader = "fairsHeader",
  featuredArtists = "featuredArtists",
  featuredArtistsRail = "featuredArtistsRail",
  featuredCollection = "featuredCollection",
  featuredCollectionsRail = "featuredCollectionsRail",
  featuredViewingRoomsRail = "featuredViewingRoomsRail",
  footer = "footer",
  galleryBoothRail = "galleryBoothRail",
  geneHeader = "geneHeader",
  header = "header",
  inboxActiveBids = "inboxActiveBids",
  inboxClosedBids = "inboxClosedBids",
  inboxConversation = "inboxConversation",
  inboxInquiries = "inboxInquiries",
  intextTooltip = "intextTooltip",
  latestViewingRoomsRail = "latestViewingRoomsRail",
  liveAuctionRoom = "liveAuctionRoom",
  liveAuctionsRail = "liveAuctionsRail",
  mainCarousel = "mainCarousel",
  minimalCTABanner = "minimalCTABanner",
  moreFromThisSeries = "moreFromThisSeries",
  moreSeriesByThisArtist = "moreSeriesByThisArtist",
  myCollectionArtwork = "myCollectionArtwork",
  myCollectionHome = "myCollectionHome",
  marketInsights = "marketInsights",
  newWorksByArtistsYouFollowRail = "newWorksByArtistsYouFollowRail",
  newWorksByGalleriesYouFollowRail = "newWorksByGalleriesYouFollowRail",
  ordersShipping = "ordersShipping",
  ordersReview = "ordersReview",
  onboardingArtists = "onboardingArtists",
  onboardingBudget = "onboardingBudget",
  onboardingGenes = "onboardingGenes",
  onboardingInterests = "onboardingInterests",
  otherCollectionsRail = "otherCollectionsRail",
  otherWorksByArtistRail = "otherWorksByArtistRail",
  otherWorksFromPartnerRail = "otherWorksFromPartnerRail",
  otherWorksFromShowRail = "otherWorksFromShowRail",
  otherWorksInAuctionRail = "otherWorksInAuctionRail",
  partnerHeader = "partnerHeader",
  pastAuctions = "pastAuctions",
  pastFairs = "pastFairs",
  popularArtistsRail = "popularArtistsRail",
  popUpModal = "popUpModal",
  presentingFair = "presentingFair",
  presentingPartner = "presentingPartner",
  priceDatabaseLanding = "priceDatabaseLanding",
  pushNotifications = "pushNotifications",
  priceEstimate = "priceEstimate",
  promoSpace = "promoSpace",
  recentlySavedRail = "recentlySavedRail",
  recentlyViewedRail = "recentlyViewedRail",
  recommendedArtistsRail = "recommendedArtistsRail",
  recommendedWorksForYouRail = "recommendedWorksForYouRail",
  relatedArticles = "relatedArticles",
  relatedArtistsRail = "relatedArtistsRail",
  relatedCollectionsRail = "relatedCollectionsRail",
  relatedWorksRail = "relatedWorksRail",
  saveWorksCTA = "saveWorksCTA",
  sellFooter = "sellFooter",
  sellHeader = "sellHeader",
  showHeader = "showHeader",
  showInfo = "showInfo",
  similarToWorksYouSavedRail = "similarToWorksYouSavedRail",
  similarToWorksYouViewedRail = "similarToWorksYouViewedRail",
  standoutLots = "standoutLots",
  tabBar = "tabBar",
  tagHeader = "tagHeader",
  toDoList = "toDoList",
  topWorksRail = "topWorksRail",
  trendingArtistsRail = "trendingArtistsRail",
  trendingLots = "trendingLots",
  upcomingAuctions = "upcomingAuctions",
  viewingRoom = "viewingRoom",
  voltArtworksEdit = "voltArtworksEdit",
  worksByPopularArtistsRail = "worksByPopularArtistsRail",
  worksByArtistsYouFollowRail = "worksByArtistsYouFollowRail",
  worksForSaleRail = "worksForSaleRail",
  yourActiveBids = "yourActiveBids",
}

/**
 * Limited ContextModules available for web authentication events
 */
export type AuthContextModule =
  | ContextModule.aboutTheWork
  | ContextModule.artistHeader
  | ContextModule.artistRecentlySold
  | ContextModule.artistSeriesRail
  | ContextModule.artistsTab
  | ContextModule.artistsToFollowRail
  | ContextModule.artworkGrid
  | ContextModule.artworkImage
  | ContextModule.artworkSidebar
  | ContextModule.associatedViewingRoom
  | ContextModule.auctionSidebar
  | ContextModule.auctionRail
  | ContextModule.auctionHome
  | ContextModule.auctionResult
  | ContextModule.auctionResults
  | ContextModule.auctionsInfo
  | ContextModule.bannerPopUp
  | ContextModule.browseFair
  | ContextModule.categoryRail
  | ContextModule.collectionDescription
  | ContextModule.consignSubmissionFlow
  | ContextModule.currentShowsRail
  | ContextModule.fairInfo
  | ContextModule.fairOrganizerHeader
  | ContextModule.fairRail
  | ContextModule.fairsHeader
  | ContextModule.featuredArtists
  | ContextModule.featuredArtistsRail
  | ContextModule.footer
  | ContextModule.geneHeader
  | ContextModule.header
  | ContextModule.intextTooltip
  | ContextModule.liveAuctionRoom
  | ContextModule.liveAuctionsRail
  | ContextModule.mainCarousel
  | ContextModule.minimalCTABanner
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
  | ContextModule.recentlyViewedRail
  | ContextModule.recommendedArtistsRail
  | ContextModule.relatedArtistsRail
  | ContextModule.relatedWorksRail
  | ContextModule.saveWorksCTA
  | ContextModule.showHeader
  | ContextModule.showInfo
  | ContextModule.standoutLots
  | ContextModule.tagHeader
  | ContextModule.topWorksRail
  | ContextModule.trendingLots
  | ContextModule.worksByPopularArtistsRail
  | ContextModule.worksByArtistsYouFollowRail
  | ContextModule.worksForSaleRail
  | ContextModule.viewingRoom
