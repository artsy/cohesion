/**
 * All owner types available for iOS (screen) and web (page)
 * @packageDocumentation
 */
export enum OwnerType {
  artist = "artist",
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
  home = "home",
  inbox = "inbox",
  sale = "sale",
  search = "search",
  sell = "sell",
  savesAndFollows = "savesAndFollows",
  viewingRoom = "viewingRoom",
  viewingRoomArtworks = "viewingRoomArtworks",
  worksForYou = "worksForYou",
}

/**
 * Owner types available in iOS
 */
export type ScreenOwnerType =
  | OwnerType.artist
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
  | OwnerType.sale
  | OwnerType.search
  | OwnerType.savesAndFollows
  | OwnerType.sell
  | OwnerType.viewingRoom
  | OwnerType.viewingRoomArtworks
  | OwnerType.worksForYou

/**
 * Owner types available in web/mobile web
 */
export type PageOwnerType =
  | OwnerType.artist
  | OwnerType.artwork
  | OwnerType.auctions
  | OwnerType.collect
  | OwnerType.collection
  | OwnerType.consign
  | OwnerType.fair
  | OwnerType.gene
  | OwnerType.home
  | OwnerType.sale
  | OwnerType.search
  | OwnerType.worksForYou
