import { ContextModule } from "./ContextModule"
/*
 * Shared schema for authentication events
 */

/*
 * the component where an auth modal was triggered
 */
export type AuthContextModule = keyof typeof ContextModule

/**
 * the type of auth modal displayed
 */
export enum AuthModalType {
  forgot = "forgot",
  login = "login",
  signup = "signup",
}

/**
 * an action taken that prompted the user to signup or login
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
 * the type of action that opened the auth modal
 */
export type AuthTrigger = "click" | "timed"
