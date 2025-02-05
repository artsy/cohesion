import { ContextModule } from "../Values/ContextModule"
import { OwnerType, PageOwnerType } from "../Values/OwnerType"
import { ActionType } from "."
import { Platform } from "./MyCollection"

/**
 * Schemas describing rail_viewed events
 * @packageDocumentation
 */

/**
 * A user sees a rail of content
 *
 * This schema describes events sent to Segment from [[RailViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "rail_viewed",
 *    context_screen: "home",
 *    context_module: "Home"
 *    position_y: 2, // optional
 *  }
 * ```
 *
 */
export interface RailViewed {
  action: ActionType.railViewed
  context_module: ContextModule
  context_screen: OwnerType
  position_y?: number
}

/**
 * A user sees a an artwork in a rail
 *
 * This schema describes events sent to Segment from [[ItemViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "item_viewed",
 *    context_screen: "home",
 *    context_module: "newWorksforYouRail"
 *    item_id: "artwork-id"
 *    item_type: "artwork"
 *    position: 2, // optional
 *  }
 * ```
 *
 */
export interface ItemViewed {
  action: ActionType.itemViewed
  context_screen: OwnerType
  context_module: ContextModule
  item_id: string
  item_type: "artwork"
  position?: number
}

/**
 * A user viewed a tooltip. `type` will describe what tooltip it is (follow, edit-follows, etc.)
 *
 * This schema describes events sent to Segment from [[tooltipViewed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tooltipViewed",
 *    context_page_owner_type: "artist",
 *    context_page_owner_id: "4d8b926a4eb68a1b2c0000ae",
 *    context_page_owner_slug: "damien-hirst",
 *    type: "follow"
 *  }
 * ```
 */
export interface TooltipViewed {
  action: ActionType.tooltipViewed
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: PageOwnerType
  type: string
}

/**
 * A user sees a an error message
 *
 * This schema describes events sent to Segment from [[ErrorMessageViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "errorMessageViewed",
 *    context_owner_type: "orders",
 *    context_owner_id: "order-id",
 *    title: "This is an error",
 *    message: "Error message",
 *    error_code: "charge_authorization_failed",
 *    flow: "user submitting payment"
 *  }
 * ```
 *
 */
export interface ErrorMessageViewed {
  action: ActionType.errorMessageViewed
  context_owner_id: string
  context_owner_type: OwnerType
  title: string
  message: string
  error_code?: string
  flow: string
}

/**
 * User sees address validation modals.
 *
 * This schema describes events sent to Segment from [[ValidationAddressViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "validationAddressViewed",
 *    context_module: "OrdersShipping",
 *    context_page_owner_type: "orders-shipping",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *    user_id: "61bcda16515b038ce5000104"
 *    flow: "user adding shipping address",
 *    subject: "Check your delivery address",
      option: "review and confirm",
 *  }
 * ```
 *
 */
export interface ValidationAddressViewed {
  action: ActionType.validationAddressViewed
  context_module: string
  context_page_owner_type: string
  context_page_owner_id: string
  user_id: string
  flow: string
  subject: string
  option: string
}

/**
 * User sees banner "Make an offer, connect now" in CMS.
 *
 * This schema describes events sent to Segment from [[SendOffersBannerViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "sendOffersBannerViewed",
 *    context_module: "Home",
 *    context_page_owner_type: "home"
 *    partner_id: "61bcda16515b038ce5000104"
 *  }
 * ```
 *
 */
export interface SendOffersBannerViewed {
  action: ActionType.sendOffersBannerViewed
  context_module: string
  context_page_owner_type: PageOwnerType
  partner_id: string
}

/**
 * User sees modal send offers after clicking on Send Offer in CMS.
 *
 * This schema describes events sent to Segment from [[SendOffersModalViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "sendOffersModalViewed"
 *    context_module:"Send offers"
 *    context_page_owner_type: "sendOffers"
 *    context_page_owner_id: "",
 *    context_page_owner_slug: "",
 *    partner_id: "61bcda16515b038ce5000104"
 *    arwork_id: "60de173a47476c000fd5c4cc"
 *    price: $20,000
 *    collectors: 4
 *  }
 * ```
 *
 */
export interface SendOffersModalViewed {
  action: ActionType.sendOffersModalViewed
  context_module: string
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  context_page_owner_slug: string
  partner_id: string
  artwork_id: string
  price: number
  collectors: number
}

/**
 * User sees an error message on the send offers modal if inputs a not acceptable price in CMS
 *
 * This schema describes events sent to Segment from [[SendOffersErrorMessage]].
 *
 *  @example
 *  ```
 *  {
 *    action: "sendOffersErrorMessage"
 *    context_module:"Send offers"
 *    context_page_owner_type: "sendOffers"
 *    context_page_owner_id: "",
 *    context_page_owner_slug: "",
 *    partner_id: "61bcda16515b038ce5000104"
 *    arwork_id: "60de173a47476c000fd5c4cc"
 *    price: $20,000
 *    collectors: 4
 *    message: "Offer amount within displayed price range"
 *  }
 * ```
 *
 */
export interface SendOffersErrorMessage {
  action: ActionType.sendOffersErrorMessage
  context_module: string
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  context_page_owner_slug: string
  partner_id: string
  artwork_id: string
  price: number
  collectors: number
  message: string
}

/**
 * User sees the edit profile modal after sending an inquiry
 *
 * This schema describes events sent to Segment from [[EditProfileModalViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "editProfileModalViewed",
 *    context_module: "inquiry"
 *    context_page_owner_type: "home"
 *    user_id: "61bcda16515b038ce5000104"
 *    inquiry_id: "61bcda16515b038ce5000104"
 *    platform: "web"
 *  }
 * ```
 *
 */
export interface EditProfileModalViewed {
  action: ActionType.editProfileModalViewed
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  user_id: string
  inquiry_id: string
  platform: Platform
}

/**
 * User sees the banner in the app
 *
 * This schema describes events sent to Segment from [[BannerViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "bannerViewed",
 *    context_screen: "home",
 *    context_module: "paymentFailed",
 *    item_type: "order" | "orders"
 *    item_id: "order-id" | ""
 *  }
 * ```
 *
 */
export interface BannerViewed {
  action: ActionType.bannerViewed
  context_screen: OwnerType
  context_module: ContextModule
  item_id: string
  item_type: string
}

/**
 * User sees the banner in the app
 *
 * This schema describes events sent to Segment from [[CreateAlertReminderMessageViewed]].
 *
 *  @example
 *  ```
 *  {
 *    action: "createAlertReminderMessageViewed",
 *    context_screen: "artist",
 *    context_module: "artistArtworksCreateAlertReminderMessage",
 *  }
 * ```
 *
 */
export interface CreateAlertReminderMessageViewed {
  action: ActionType.createAlertReminderMessageViewed
  context_screen: OwnerType.artist
  context_module: ContextModule.artistArtworksCreateAlertReminderMessage
}

/**
 * User sees a shipping estimate
 *
 * This schema describes events sent to segment from [[ArtsyShippingEstimateViewed]]
 *
 * @example
 * ```
 * {
 *  "action": "shippingEstimateViewed",
 *  "context_page_owner_type": "artwork",
 *   context_page_owner_id: "58de681f275b2464fcdde097",
 *   context_page_owner_slug: "damien-hirst",
 *  "origin": "New York, NY, US",
 *  "destination": "Chicago, IL, US",
 *  "minimum_estimate": 24
 *  "maximum_estimate": 78
 *  "estimate_currency": "USD"
 *
 * }
 * ```
 */
export interface ShippingEstimateViewed {
  action: ActionType.shippingEstimateViewed
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  context_page_owner_slug: string
  origin: string
  destination: string
  minimum_estimate: number
  maximum_estimate?: number | null
  estimate_currency: string
}
