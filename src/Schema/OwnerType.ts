/**
 * All owner types available for iOS (screen) and web (page)
 * @packageDocumentation
 */
export enum OwnerType {
  artist = "artist",
  artwork = "artwork",
  auctions = "auctions",
  cityGuideGuide = "cityGuideGuide",
  cityGuideMap = "cityGuideMap",
  cityPicker = "cityPicker",
  collection = "collection",
  consign = "consign",
  explore = "explore",
  fair = "fair",
  inbox = "inbox",
  sale = "sale",
  search = "search",
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
  | OwnerType.cityGuideGuide
  | OwnerType.cityGuideMap
  | OwnerType.cityPicker
  | OwnerType.consign
  | OwnerType.collection
  | OwnerType.explore
  | OwnerType.fair
  | OwnerType.inbox
  | OwnerType.sale
  | OwnerType.search
  | OwnerType.savesAndFollows
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
  | OwnerType.collection
  | OwnerType.consign
  | OwnerType.fair
  | OwnerType.search
