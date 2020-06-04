/**
 * Master list of context modules available in web and iOS
 * A component where an action is triggered
 * @packageDocumentation
 */
export enum ContextModule {
  aboutTheWork = "aboutTheWork",
  artistCard = "artistCard",
  artistHeader = "artistHeader",
  artistHighDemandGrid = "artistHighDemandGrid",
  artistRecentlySold = "artistRecentlySold",
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
  featuredArtistsRail = "featuredArtistsRail",
  featuredCollection = "featuredCollection",
  footer = "footer",
  geneHeader = "geneHeader",
  header = "header",
  intextTooltip = "intextTooltip",
  liveAuctionsRail = "liveAuctionsRail",
  mainCarousel = "mainCarousel",
  minimalCTABanner = "minimalCTABanner",
  newWorksByArtistsYouFollowRail = "newWorksByArtistsYouFollowRail",
  otherWorksByArtistRail = "otherWorksByArtistRail",
  otherWorksFromPartnerRail = "otherWorksFromPartnerRail",
  otherWorksFromShowRail = "otherWorksFromShowRail",
  otherWorksInAuctionRail = "otherWorksInAuctionRail",
  partnerHeader = "partnerHeader",
  pastFairs = "pastFairs",
  popularArtistsRail = "popularArtistsRail",
  popUpModal = "popUpModal",
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
  tagHeader = "tagHeader",
  topWorksRail = "topWorksRail",
  trendingArtistsRail = "trendingArtistsRail",
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
