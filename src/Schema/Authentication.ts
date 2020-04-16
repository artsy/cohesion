import { ContextModule } from "./ContextModule"
/**
 * Shared schema for authentication events
 * @packageDocumentation
 */

/**
 * The component where an auth modal was triggered
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

/**
 * The type of authentication modal displayed
 */
export enum AuthModalType {
  forgot = "forgot",
  login = "login",
  signup = "signup",
}

/**
 * An action taken that prompted the user to view an authentication form
 */
export enum AuthIntent {
  bid = "bid",
  buyNow = "buyNow",
  consign = "consign",
  followArtist = "followArtist",
  followPartner = "followPartner",
  followGene = "followGene",
  forgot = "forgot",
  inquire = "inquire",
  login = "login",
  loginToSeeEstimate = "loginToSeeEstimate",
  loginToSeePrice = "loginToSeePrice",
  loginToSeeRealizedPrice = "loginToSeeRealizedPrice",
  makeOffer = "makeOffer",
  registerToBid = "registerToBid",
  requestConditionReport = "requestConditionReport",
  saveArtwork = "saveArtwork",
  signup = "signup",
  viewAuctionResults = "viewAuctionResults",
  viewArtist = "viewArtist",
  viewEditorial = "viewEditorial",
  viewFair = "viewFair",
}

/**
 * The type of action that opened the authentication modal
 */
export type AuthTrigger = "click" | "timed"
