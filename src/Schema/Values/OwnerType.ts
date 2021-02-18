/**
 * All owner types available for App (screen) and web (page)
 *
 * @packageDocumentation
 */
export enum OwnerType {
  aboutTheFair = "aboutTheFair",
  aboutTheShow = "aboutTheShow",
  allArtistSeries = "allArtistSeries",
  article = "article",
  articles = "articles",
  artist = "artist",
  artists = "artists",
  artistInsights = "artistInsights",
  artistSeries = "artistSeries",
  artwork = "artwork",
  artworkClassifications = "artworkClassifications",
  auctionResult = "auctionResult",
  auctions = "auctions",
  bidFlowBillingAddressPage = "yourBillingAddress",
  bidFlowConfirmBidPage = "confirmYourBid",
  bidFlowMaxBidPage = "yourMaxBid",
  bidFlowRegistration = "registration",
  bidFlowRegistrationResultConfirmed = "registrationConfirmed",
  bidFlowRegistrationResultError = "registrationError",
  bidFlowRegistrationResultPending = "registrationPending",
  bmwFairActivation = "bmwFairActivation",
  gene = "gene",
  cityGuideGuide = "cityGuideGuide",
  cityGuideMap = "cityGuideMap",
  cityGuideBMWList = "cityGuideBMWList",
  CityGuideClosingSoonList = "CityGuideClosingSoonList",
  cityGuideFairsList = "cityGuideFairsList",
  cityGuideGalleriesList = "cityGuideGalleriesList",
  cityGuideMuseumsList = "cityGuideMuseumsList",
  cityGuideOpeningSoonList = "cityGuideOpeningSoonList",
  cityGuideSavedList = "cityGuideSavedList",
  cityPicker = "cityPicker",
  collect = "collect",
  collection = "collection",
  collections = "collections",
  consignmentsOverView = "consignmentsOverview",
  consignmentsWelcome = "consignmentsWelcome",
  consignmentSubmission = "consignmentSubmission",
  conversationPage = "conversation",
  consign = "consign",
  explore = "explore",
  fair = "fair",
  fairArtworks = "fairArtworks",
  fairs = "fairs",
  fairMoreInfo = "fairMoreInfo",
  gallery = "gallery",
  galleries = "galleries",
  home = "home",
  inquiry = "inquiry",
  inbox = "inbox",
  inboxBids = "inboxBids",
  inboxConversation = "inboxConversation",
  inboxInquiries = "inboxInquiries",
  myCollection = "myCollection",
  myCollectionArtwork = "myCollectionArtwork",
  onboarding = "onboarding",
  partner = "partner",
  profile = "profile",
  sale = "sale",
  saleInformation = "saleInformation",
  search = "search",
  sell = "sell",
  show = "show",
  showMoreInfo = "moreInfo",
  savesAndFollows = "savesAndFollows",
  user = "user",
  viewingRoom = "viewingRoom",
  viewingRooms = "viewingRooms",
  viewingRoomArtworks = "viewingRoomArtworks",
  viewingRoomList = "viewingRoomList",
  viewingRoomArtworkPage = "viewingRoomArtworkPage",
  worksForYou = "worksForYou",
}

/**
 * Owner types available in App
 */
export type ScreenOwnerType =
  | OwnerType.aboutTheFair
  | OwnerType.aboutTheShow
  | OwnerType.allArtistSeries
  | OwnerType.article
  | OwnerType.articles
  | OwnerType.artist
  | OwnerType.artistInsights
  | OwnerType.artistSeries
  | OwnerType.artwork
  | OwnerType.artworkClassifications
  | OwnerType.auctionResult
  | OwnerType.auctions
  | OwnerType.bidFlowBillingAddressPage
  | OwnerType.bidFlowConfirmBidPage
  | OwnerType.bidFlowMaxBidPage
  | OwnerType.bidFlowRegistration
  | OwnerType.bidFlowRegistrationResultConfirmed
  | OwnerType.bidFlowRegistrationResultError
  | OwnerType.bidFlowRegistrationResultPending
  | OwnerType.bmwFairActivation
  | OwnerType.gene
  | OwnerType.cityGuideGuide
  | OwnerType.cityGuideMap
  | OwnerType.cityGuideBMWList
  | OwnerType.CityGuideClosingSoonList
  | OwnerType.cityGuideFairsList
  | OwnerType.cityGuideGalleriesList
  | OwnerType.cityGuideMuseumsList
  | OwnerType.cityGuideOpeningSoonList
  | OwnerType.cityGuideSavedList
  | OwnerType.cityPicker
  | OwnerType.collection
  | OwnerType.consignmentsOverView
  | OwnerType.consignmentsWelcome
  | OwnerType.consignmentSubmission
  | OwnerType.conversationPage
  | OwnerType.consign
  | OwnerType.explore
  | OwnerType.fair
  | OwnerType.fairArtworks
  | OwnerType.fairMoreInfo
  | OwnerType.gallery
  | OwnerType.home
  | OwnerType.inquiry
  | OwnerType.inbox
  | OwnerType.inboxBids
  | OwnerType.inboxConversation
  | OwnerType.inboxInquiries
  | OwnerType.myCollection
  | OwnerType.myCollectionArtwork
  | OwnerType.onboarding
  | OwnerType.partner
  | OwnerType.profile
  | OwnerType.sale
  | OwnerType.saleInformation
  | OwnerType.search
  | OwnerType.savesAndFollows
  | OwnerType.sell
  | OwnerType.show
  | OwnerType.showMoreInfo
  | OwnerType.viewingRoom
  | OwnerType.viewingRoomArtworks
  | OwnerType.viewingRoomList
  | OwnerType.viewingRoomArtworkPage
  | OwnerType.worksForYou

/**
 * Owner types available in web/mobile web
 */
export type PageOwnerType =
  | OwnerType.article
  | OwnerType.articles
  | OwnerType.artist
  | OwnerType.artists
  | OwnerType.artistSeries
  | OwnerType.artwork
  | OwnerType.auctions
  | OwnerType.collect
  | OwnerType.collection
  | OwnerType.collections
  | OwnerType.consign
  | OwnerType.fair
  | OwnerType.galleries
  | OwnerType.gene
  | OwnerType.home
  | OwnerType.partner
  | OwnerType.profile
  | OwnerType.sale
  | OwnerType.search
  | OwnerType.show
  | OwnerType.user
  | OwnerType.viewingRoom
  | OwnerType.viewingRooms
  | OwnerType.worksForYou
