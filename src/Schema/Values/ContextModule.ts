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
  artworkSidebar = "artworkSidebar",
  artworksTab = "artworksTab",
  associatedViewingRoom = "associatedViewingRoom",
  auctionSidebar = "auctionSidebar",
  auctionCard = "auctionCard",
  auctionHome = "auctionHome",
  auctionRail = "auctionRail",
  auctionResults = "auctionResults",
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
  currentShowsRail = "currentShowsRail",
  exhibitorsTab = "exhibitorsTab",
  fairInfo = "fairInfo",
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
  newWorksByArtistsYouFollowRail = "newWorksByArtistsYouFollowRail",
  newWorksByGalleriesYouFollowRail = "newWorksByGalleriesYouFollowRail",
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
  pastFairs = "pastFairs",
  popularArtistsRail = "popularArtistsRail",
  popUpModal = "popUpModal",
  presentingFair = "presentingFair",
  presentingPartner = "presentingPartner",
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
  tabBar = "tabBar",
  tagHeader = "tagHeader",
  topWorksRail = "topWorksRail",
  trendingArtistsRail = "trendingArtistsRail",
  viewingRoom = "viewingRoom",
  worksByPopularArtistsRail = "worksByPopularArtistsRail",
  worksByArtistsYouFollowRail = "worksByArtistsYouFollowRail",
  worksForSaleRail = "worksForSaleRail",
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
  | ContextModule.auctionResults
  | ContextModule.auctionsInfo
  | ContextModule.bannerPopUp
  | ContextModule.browseFair
  | ContextModule.categoryRail
  | ContextModule.collectionDescription
  | ContextModule.consignSubmissionFlow
  | ContextModule.currentShowsRail
  | ContextModule.fairInfo
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
  | ContextModule.tagHeader
  | ContextModule.topWorksRail
  | ContextModule.worksByPopularArtistsRail
  | ContextModule.worksByArtistsYouFollowRail
  | ContextModule.worksForSaleRail
  | ContextModule.viewingRoom
