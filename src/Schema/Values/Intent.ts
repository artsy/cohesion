/**
 * Master list of intent available in web and iOS
 *
 * Intended action by a user that triggered an event
 * @packageDocumentation
 */
export enum Intent {
  bid = "bid",
  buyNow = "buyNow",
  consign = "consign",
  followArtist = "followArtist",
  followPartner = "followPartner",
  followGene = "followGene",
  forgot = "forgot",
  inquire = "inquire",
  login = "login",
  seeEstimateAuctionRecords = "seeEstimateAuctionRecords",
  seePriceAuctionRecords = "seePriceAuctionRecords",
  seeRealizedPriceAuctionRecords = "seeRealizedPriceAuctionRecords",
  makeOffer = "makeOffer",
  registerToBid = "registerToBid",
  requestConditionReport = "requestConditionReport",
  saveArtwork = "saveArtwork",
  signup = "signup",
  viewAuctionResults = "viewAuctionResults",
  viewArtist = "viewArtist",
  viewEditorial = "viewEditorial",
  viewFair = "viewFair",
  viewViewingRoom = "viewViewingRoom",
}

/**
 * Limited Intent available for web authentication events
 *
 * An action taken that prompted the user to view an authentication form
 */
export type AuthIntent =
  | Intent.bid
  | Intent.buyNow
  | Intent.consign
  | Intent.followArtist
  | Intent.followGene
  | Intent.followPartner
  | Intent.forgot
  | Intent.inquire
  | Intent.login
  | Intent.seeEstimateAuctionRecords
  | Intent.seePriceAuctionRecords
  | Intent.seeRealizedPriceAuctionRecords
  | Intent.makeOffer
  | Intent.registerToBid
  | Intent.requestConditionReport
  | Intent.saveArtwork
  | Intent.signup
  | Intent.viewAuctionResults
  | Intent.viewArtist
  | Intent.viewEditorial
  | Intent.viewFair
  | Intent.viewViewingRoom
