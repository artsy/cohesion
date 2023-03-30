/**
 * Schema describing 'auction/id' events
 * @packageDocumentation
 */

import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * A user viewed an auction page. This is a track event that fires in addition to the pageview event for marketing tool purposes.
 *
 * This schema describes events sent to Segment from {@link ActionType.auctionPageView}
 *
 *  @example
 *  ```
 *  {
 *    action: "auctionPageView",
 *    auction_slug: "impact-project-healthy-minds",
 *    sale_id: "622ba9ec812d93000bc8e95d",
 *    user_id: "5bd8b675776bd6002c86526c"
 *  }
 * ```
 */
export interface AuctionPageView {
  action: ActionType.auctionPageView
  auction_slug: string
  sale_id: string
  user_id: string
}

/**
 * A user viewed a bid page. This is a track event that fires in addition to the pageview event for marketing tool purposes.
 *
 * This schema describes events sent to Segment from {@link ActionType.bidPageView}
 *
 *  @example
 *  ```
 *  {
 *    action: "bidPageView",
 *    artwork_slug: "hank-willis-thomas-love-over-rules-15"
 *    auction_slug: "impact-project-healthy-minds",
 *    sale_id: "622ba9ec812d93000bc8e95d",
 *    user_id: "5bd8b675776bd6002c86526c"
 *  }
 * ```
 */
export interface BidPageView {
  action: ActionType.bidPageView
  artwork_slug: string
  auction_slug: string
  sale_id: string
  user_id: string
}

/**
 * A user clicked on one of their active bids.
 *
 * This schema describes events sent to Segment from {@link ActionType.clickedActiveBid}
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedActiveBid",
 *    artwork_slug: "hank-willis-thomas-love-over-rules-15"
 *    auction_slug: "impact-project-healthy-minds",
 *    user_id: "5bd8b675776bd6002c86526c"
 *  }
 * ```
 */
export interface ClickedActiveBid {
  action: ActionType.clickedActiveBid
  artwork_slug: string
  auction_slug: string
  user_id: string
}

/**
 * A user clicks to register to bid.
 *
 * This schema describes events sent to Segment from {@link ActionType.clickedRegisterToBid}
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedRegisterToBid",
 *    context_module: "auctionHome",
 *    context_owner_id: "622ba9ec812d93000bc8e95d",
 *    context_owner_slug: "impact-project-healthy-minds",
 *    context_owner_type: "auction"
 *  }
 * ```
 */
export interface ClickedRegisterToBid {
  action: ActionType.clickedRegisterToBid
  context_module: ContextModule.auctionHome
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: OwnerType.auction
}

/**
 * A user confirms their bid.
 *
 * This schema describes events sent to Segment from {@link ActionType.confirmBid}
 *
 *  @example
 *  ```
 *  {
 *    action: "confirmBid",
 *    bidder_id: "5bd8b675776bd6002c86526c",
 *    bidder_position_id: "622ba9ec812d93000bc8e95d"
 *  }
 * ```
 */
export interface ConfirmBid {
  action: ActionType.confirmBid
  bidder_id: string
  bidder_position_id: string
}

/**
 * A user views the confirm registration page. This is a track event that fires in addition to the pageview event for marketing tool purposes.
 *
 * This schema describes events sent to Segment from {@link ActionType.confirmRegistrationPageview}
 *
 *  @example
 *  ```
 *  {
 *    action: "confirmBid",
 *    context_module: "auctionHome"
 *  }
 * ```
 */
export interface ConfirmRegistrationPageview {
  action: ActionType.confirmRegistrationPageview
  context_module: ContextModule.auctionHome
}

/**
 * A user enters a live auction.
 *
 * This schema describes events sent to Segment from {@link ActionType.enterLiveAuction}
 *
 *  @example
 *  ```
 *  {
 *    action: "enterLiveAuction",
 *    context_module: "auction_home",
 *    destination_path: "/auction/impact-project-healthy-minds",
 *    subject: "Enter Live Auction"
 *  }
 * ```
 */
export interface EnterLiveAuction {
  action: ActionType.enterLiveAuction
  context_module: ContextModule.auctionHome
  destination_path: string
  subject: string
}

/**
 * A user selects their max bid.
 *
 * This schema describes events sent to Segment from {@link ActionType.maxBidSelected}
 *
 *  @example
 *  ```
 *  {
 *    action: "maxBidSelected",
 *    bidder_id: "5bd8b675776bd6002c86526c",
 *    selected_max_bid_minor: 100
 *  }
 * ```
 */
export interface MaxBidSelected {
  action: ActionType.maxBidSelected
  bidder_id: string
  selected_max_bid_minor: number
}

/**
 * A user views the auction registration page. This is a track event that fires in addition to the pageview event for marketing tool purposes.
 *
 * This schema describes events sent to Segment from {@link ActionType.registrationPageView}
 *
 *  @example
 *  ```
 *  {
 *    action: "registrationPageView",
 *    context_module: "auctionHome"
 *  }
 * ```
 */
export interface RegistrationPageView {
  action: ActionType.registrationPageView
  context_module: ContextModule.auctionHome
}

/**
 * A user submits their auction registration.
 *
 * This schema describes events sent to Segment from {@link ActionType.registrationSubmitted}
 *
 *  @example
 *  ```
 *  {
 *    action: "registrationSubmitted",
 *    auction_slug: "impact-project-healthy-minds",
 *    auction_state: "live",
 *    bidder_id: "5bd8b675776bd6002c86526c",
 *    sale_id: "622ba9ec812d93000bc8e95d",
 *    user_id: "5bd8b675776bd6002c86526c"
 *  }
 * ```
 */
export interface RegistrationSubmitted {
  action: ActionType.registrationSubmitted
  auction_slug: string
  auction_state: string
  bidder_id: string
  sale_id: string
  user_id: string
}
