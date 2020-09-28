/**
 * Master list of context modules available in web and iOS
 *
 * A component where an action is triggered
 * @packageDocumentation
 */
export enum ContextModule {
  aboutTheWork = "aboutTheWork",
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
  auctionSidebar = "auctionSidebar",
  auctionCard = "auctionCard",
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
  fairInfo = "fairInfo",
  fairsHeader = "fairsHeader",
  fairRail = "fairRail",
  fairCard = "fairCard",
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
  liveAuctionsRail = "liveAuctionsRail",
  mainCarousel = "mainCarousel",
  minimalCTABanner = "minimalCTABanner",
  moreFromThisSeries = "moreFromThisSeries",
  moreSeriesByThisArtist = "moreSeriesByThisArtist",
  newWorksByArtistsYouFollowRail = "newWorksByArtistsYouFollowRail",
  newWorksByGalleriesYouFollowRail = "newWorksByGalleriesYouFollowRail",
  otherCollectionsRail = "otherCollectionsRail",
  otherWorksByArtistRail = "otherWorksByArtistRail",
  otherWorksFromPartnerRail = "otherWorksFromPartnerRail",
  otherWorksFromShowRail = "otherWorksFromShowRail",
  otherWorksInAuctionRail = "otherWorksInAuctionRail",
  partnerHeader = "partnerHeader",
  pastFairs = "pastFairs",
  popularArtistsRail = "popularArtistsRail",
  popUpModal = "popUpModal",
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
  | ContextModule.auctionSidebar
  | ContextModule.auctionRail
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
  | ContextModule.worksForSaleRail
  | ContextModule.viewingRoom
