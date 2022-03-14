/**
 * Schema describing 'auction/id' events
 * @packageDocumentation
 */

import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

export interface BidPageView {
  action: ActionType.bidPageView
  artwork_slug: string
  auction_slug: string
  sale_id: string
  user_id: string
}

export interface ClickedActiveBid {
  action: ActionType.clickedActiveBid
  artwork_slug: string
  auction_slug: string
  user_id: string
}

export interface ClickedRegisterToBid {
  action: ActionType.clickedRegisterToBid
  context_module: ContextModule.auctionHome
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: OwnerType.auction
}

export interface ConfirmBid {
  action: ActionType.confirmBid
  bidder_id: string
  bidder_position_id: string
}

export interface ConfirmRegistrationPageview {
  action: ActionType.confirmRegistrationPageview
  context_module: ContextModule.auctionHome
}

export interface EnterLiveAuction {
  action: ActionType.enterLiveAuction
  context_module: ContextModule.auctionHome
  destination_path: string
  subject: string
}

export interface MaxBidSelected {
  action: ActionType.maxBidSelected
  bidder_id: string
  selected_max_bid_minor: number
}

export interface RegistrationPageView {
  action: ActionType.registrationPageView
  context_module: ContextModule.auctionHome
}
export interface RegistrationSubmitted {
  action: ActionType.registrationSubmitted
  auction_slug: string
  auction_state: string
  bidder_id: string
  sale_id: string
  user_id: string
}
