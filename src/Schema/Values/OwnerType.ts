/**
 * All owner types available for iOS (screen) and web (page)
 *
 * @packageDocumentation
 */
export enum OwnerType {
  allArtistSeries = "allArtistSeries",
  article = "article",
  articles = "articles",
  artist = "artist",
  artists = "artists",
  artistAuctionResults = "artistAuctionResults",
  artistSeries = "artistSeries",
  artwork = "artwork",
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
  consignmentFlow = "consignmentFlow",
  consignmentSubmission = "consignmentSubmission",
  consign = "consign",
  conversation = "conversation",
  conversationMakeOfferConfirmArtwork = "conversationMakeOfferConfirmArtwork",
  explore = "explore",
  fair = "fair",
  fairArtworks = "fairArtworks",
  fairs = "fairs",
  galleries = "galleries",
  gene = "gene",
  home = "home",
  inbox = "inbox",
  inboxBids = "inboxBids",
  inboxConversation = "inboxConversation",
  inboxInquiries = "inboxInquiries",
  myCollection = "myCollection",
  myCollectionArtwork = "myCollectionArtwork",
  myCollectionAddArtworkArtist = "myCollectionAddArtworkArtist",
  newWorksForYou = "newWorksForYou",
  onboarding = "onboarding",
  ordersAccept = "orders-accept",
  ordersCounter = "orders-counter",
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
  sale = "sale",
  saleInformation = "saleInformation",
  savedSearch = "savedSearch",
  savedSearches = "savedSearches",
  search = "search",
  sell = "sell",
  show = "show",
  shows = "shows",
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
 * Owner types available in iOS/Android
 */
export type ScreenOwnerType =
  | OwnerType.allArtistSeries
  | OwnerType.article
  | OwnerType.articles
  | OwnerType.artist
  | OwnerType.artistAuctionResults
  | OwnerType.artistSeries
  | OwnerType.artwork
  | OwnerType.auctionResult
  | OwnerType.auctionResultsForArtistsYouFollow
  | OwnerType.auctions
  | OwnerType.gene
  | OwnerType.cityGuideGuide
  | OwnerType.cityGuideMap
  | OwnerType.cityPicker
  | OwnerType.collection
  | OwnerType.consignmentFlow
  | OwnerType.consignmentSubmission
  | OwnerType.consign
  | OwnerType.conversation
  | OwnerType.conversationMakeOfferConfirmArtwork
  | OwnerType.explore
  | OwnerType.fair
  | OwnerType.fairArtworks
  | OwnerType.home
  | OwnerType.inbox
  | OwnerType.inboxBids
  | OwnerType.inboxConversation
  | OwnerType.inboxInquiries
  | OwnerType.myCollection
  | OwnerType.myCollectionArtwork
  | OwnerType.myCollectionAddArtworkArtist
  | OwnerType.newWorksForYou
  | OwnerType.onboarding
  | OwnerType.partner
  | OwnerType.profile
  | OwnerType.sale
  | OwnerType.saleInformation
  | OwnerType.savedSearch
  | OwnerType.savedSearches
  | OwnerType.search
  | OwnerType.savesAndFollows
  | OwnerType.sell
  | OwnerType.show
  | OwnerType.shows
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
  | OwnerType.artistAuctionResults
  | OwnerType.artistSeries
  | OwnerType.artwork
  | OwnerType.auctions
  | OwnerType.collect
  | OwnerType.collection
  | OwnerType.collections
  | OwnerType.consign
  | OwnerType.fair
  | OwnerType.fairs
  | OwnerType.galleries
  | OwnerType.gene
  | OwnerType.home
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
  | OwnerType.search
  | OwnerType.show
  | OwnerType.shows
  | OwnerType.user
  | OwnerType.viewingRoom
  | OwnerType.viewingRooms
  | OwnerType.worksForYou
