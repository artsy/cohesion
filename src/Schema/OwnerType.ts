/**
 * Screen or page owner types, for Eigen and Force respectively
 * @packageDocumentation
 */
export enum OwnerType {
  artist = "artist",
  artwork = "artwork",
  auctions = "auctions",
  consign = "consign",
  cityGuideGuide = "cityGuideGuide",
  cityGuideMap = "cityGuideMap",
  cityPicker = "cityPicker",
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
  | OwnerType.consign
  | OwnerType.cityGuideGuide
  | OwnerType.cityGuideMap
  | OwnerType.cityPicker
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
  | OwnerType.consign
  | OwnerType.fair
  | OwnerType.search
