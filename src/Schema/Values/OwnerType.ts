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
  artistAuctionResults = "artistAuctionResults",
  artists = "artists",
  artistSeries = "artistSeries",
  artwork = "artwork",
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
  consign = "consign",
  consignmentFlow = "consignmentFlow",
  consignmentSubmission = "consignmentSubmission",
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
  myCollectionAddArtworkArtist = "myCollectionAddArtworkArtist",
  myCollectionArtwork = "myCollectionArtwork",
  myCollectionArtworkAbout = "MyCollectionArtworkAbout",
  myCollectionArtworkInsights = "MyCollectionArtworkInsights",
  myCollectionInsights = "myCollectionInsights",
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
  savesAndFollows = "savesAndFollows",
  search = "search",
  sell = "sell",
  show = "show",
  shows = "shows",
  tag = "tag",
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
  | OwnerType.cityGuideGuide
  | OwnerType.cityGuideMap
  | OwnerType.cityPicker
  | OwnerType.collection
  | OwnerType.consign
  | OwnerType.consignmentFlow
  | OwnerType.consignmentSubmission
  | OwnerType.conversation
  | OwnerType.conversationMakeOfferConfirmArtwork
  | OwnerType.explore
  | OwnerType.fair
  | OwnerType.fairArtworks
  | OwnerType.gene
  | OwnerType.home
  | OwnerType.inbox
  | OwnerType.inboxBids
  | OwnerType.inboxConversation
  | OwnerType.inboxInquiries
  | OwnerType.myCollection
  | OwnerType.myCollectionAddArtworkArtist
  | OwnerType.myCollectionArtwork
  | OwnerType.myCollectionArtwork
  | OwnerType.myCollectionArtworkAbout
  | OwnerType.myCollectionArtworkInsights
  | OwnerType.myCollectionInsights
  | OwnerType.newWorksForYou
  | OwnerType.onboarding
  | OwnerType.partner
  | OwnerType.profile
  | OwnerType.sale
  | OwnerType.saleInformation
  | OwnerType.savedSearch
  | OwnerType.savedSearches
  | OwnerType.savesAndFollows
  | OwnerType.search
  | OwnerType.sell
  | OwnerType.show
  | OwnerType.shows
  | OwnerType.tag
  | OwnerType.viewingRoom
  | OwnerType.viewingRoomArtworkPage
  | OwnerType.viewingRoomArtworks
  | OwnerType.viewingRoomList
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
  | OwnerType.savedSearch
  | OwnerType.savedSearches
  | OwnerType.search
  | OwnerType.show
  | OwnerType.shows
  | OwnerType.tag
  | OwnerType.user
  | OwnerType.viewingRoom
  | OwnerType.viewingRooms
  | OwnerType.worksForYou
