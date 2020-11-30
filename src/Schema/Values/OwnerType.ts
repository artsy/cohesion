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
  artistInsights = "artistInsights",
  artistSeries = "artistSeries",
  artwork = "artwork",
  auctionResult = "auctionResult",
  auctions = "auctions",
  gene = "gene",
  cityGuideGuide = "cityGuideGuide",
  cityGuideMap = "cityGuideMap",
  cityPicker = "cityPicker",
  collect = "collect",
  collection = "collection",
  collections = "collections",
  consignmentSubmission = "consignmentSubmission",
  consign = "consign",
  explore = "explore",
  fair = "fair",
  fairArtworks = "fairArtworks",
  fairs = "fairs",
  galleries = "galleries",
  home = "home",
  inbox = "inbox",
  myCollection = "myCollection",
  myCollectionArtwork = "myCollectionArtwork",
  partner = "partner",
  profile = "profile",
  sale = "sale",
  saleInformation = "saleInformation",
  search = "search",
  sell = "sell",
  show = "show",
  savesAndFollows = "savesAndFollows",
  viewingRoom = "viewingRoom",
  viewingRooms = "viewingRooms",
  viewingRoomArtworks = "viewingRoomArtworks",
  viewingRoomList = "viewingRoomList",
  viewingRoomArtworkPage = "viewingRoomArtworkPage",
  worksForYou = "worksForYou",
}

/**
 * Owner types available in iOS
 */
export type ScreenOwnerType =
  | OwnerType.allArtistSeries
  | OwnerType.article
  | OwnerType.articles
  | OwnerType.artist
  | OwnerType.artistInsights
  | OwnerType.artistSeries
  | OwnerType.artwork
  | OwnerType.auctionResult
  | OwnerType.auctions
  | OwnerType.gene
  | OwnerType.cityGuideGuide
  | OwnerType.cityGuideMap
  | OwnerType.cityPicker
  | OwnerType.collection
  | OwnerType.consignmentSubmission
  | OwnerType.consign
  | OwnerType.explore
  | OwnerType.fair
  | OwnerType.fairArtworks
  | OwnerType.home
  | OwnerType.inbox
  | OwnerType.myCollection
  | OwnerType.myCollectionArtwork
  | OwnerType.partner
  | OwnerType.profile
  | OwnerType.sale
  | OwnerType.saleInformation
  | OwnerType.search
  | OwnerType.savesAndFollows
  | OwnerType.sell
  | OwnerType.show
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
  | OwnerType.viewingRoom
  | OwnerType.viewingRooms
  | OwnerType.worksForYou
