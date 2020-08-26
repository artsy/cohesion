/**
 * Master list of context modules available in web and iOS
 *
 * A component where an action is triggered
 * @packageDocumentation
 */
export enum ContextModule {
  aboutTheWork = "aboutTheWork",
  allArtistSeries = "allArtistSeries",
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
  currentShowsRail = "currentShowsRail",
  fairInfo = "fairInfo",
  fairsHeader = "fairsHeader",
  fairRail = "fairRail",
  fairCard = "fairCard",
  featuredArtists = "featuredArtists",
  featuredArtistsRail = "featuredArtistsRail",
  featuredCollection = "featuredCollection",
  featuredViewingRoomsRail = "featuredViewingRoomsRail",
  footer = "footer",
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
  relatedArtistsRail = "relatedArtistsRail",
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
  | ContextModule.allArtistSeries
  | ContextModule.artistHeader
  | ContextModule.artistRecentlySold
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
  | ContextModule.relatedArtistsRail
  | ContextModule.relatedWorksRail
  | ContextModule.saveWorksCTA
  | ContextModule.showHeader
  | ContextModule.showInfo
  | ContextModule.tagHeader
  | ContextModule.worksByPopularArtistsRail
  | ContextModule.worksForSaleRail
  | ContextModule.viewingRoom
