/**
 * All owner types available for iOS (screen) and web (page)
 *
 * @packageDocumentation
 */
export enum OwnerType {
  artist = "artist",
  artistSeries = "artistSeries",
  artists = "artists",
  artwork = "artwork",
  auctions = "auctions",
  gene = "gene",
  cityGuideGuide = "cityGuideGuide",
  cityGuideMap = "cityGuideMap",
  cityPicker = "cityPicker",
  collect = "collect",
  collection = "collection",
  consignmentSubmission = "consignmentSubmission",
  consign = "consign",
  explore = "explore",
  fair = "fair",
  galleries = "galleries",
  home = "home",
  inbox = "inbox",
  partner = "partner",
  sale = "sale",
  search = "search",
  sell = "sell",
  savesAndFollows = "savesAndFollows",
  viewingRoom = "viewingRoom",
  viewingRoomArtworks = "viewingRoomArtworks",
  viewingRoomList = "viewingRoomList",
  viewingRoomArtworkPage = "viewingRoomArtworkPage",
  worksForYou = "worksForYou",
}

/**
 * Owner types available in iOS
 */
export type ScreenOwnerType =
  | OwnerType.artist
  | OwnerType.artistSeries
  | OwnerType.artwork
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
  | OwnerType.home
  | OwnerType.inbox
  | OwnerType.partner
  | OwnerType.sale
  | OwnerType.search
  | OwnerType.savesAndFollows
  | OwnerType.sell
  | OwnerType.viewingRoom
  | OwnerType.viewingRoomArtworks
  | OwnerType.viewingRoomList
  | OwnerType.viewingRoomArtworkPage
  | OwnerType.worksForYou

/**
 * Owner types available in web/mobile web
 */
export type PageOwnerType =
  | OwnerType.artist
  | OwnerType.artists
  | OwnerType.artwork
  | OwnerType.auctions
  | OwnerType.collect
  | OwnerType.collection
  | OwnerType.consign
  | OwnerType.fair
  | OwnerType.galleries
  | OwnerType.gene
  | OwnerType.home
  | OwnerType.partner
  | OwnerType.sale
  | OwnerType.search
  | OwnerType.worksForYou
