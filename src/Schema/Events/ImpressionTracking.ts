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
  item_type: "artwork" | "card"
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
 * A user viewed a tooltip. `type` will describe what tooltip it is (follow, edit-follows, etc.)
 *
 * This schema describes events sent to Segment from [[tooltipViewed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tooltipViewed",
 *    context_module: "newWorksForYouRail",
 *    context_owner_type: "home",
 *    type: "long-press-artwork-context-menu"
 *  }
 * ```
 */
export interface ProgressiveOnboardingTooltipViewed {
  action: ActionType.tooltipViewed
  context_module: ContextModule
  context_owner_type?: OwnerType
  type: string
}

/**
 * A user viewed a toast. `subject` will describe what toast it is.
 *
 * This schema describes events sent to Segment from [[viewedToast]]
 *
 *  @example
 *  ```
 *  {
 *    action: "viewedToast",
 *    context_module: "artworkGrid",
 *    context_screen_owner_type: "artworkRecommendations",
 *    subject: "Set an artwork budget in your profile at any time."
 *  }
 * ```
 */
export interface ViewedToast {
  action: ActionType.viewedToast
  context_module?: ContextModule
  context_screen_owner_type: OwnerType
  subject: string
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
 * User sees a shipping estimate. estimate_available = false when artwork is disqualified
 * from arta (due to size, weight, origin country) and therefore does not show an estimate
 *
 * This schema describes events sent to segment from [[ArtsyShippingEstimateViewed]]
 *
 * @example
 * ```
 * {
 *    action: "shippingEstimateViewed",
 *    context_page_owner_type: "artwork",
 *    context_page_owner_id: "58de681f275b2464fcdde097",
 *    context_page_owner_slug: "damien-hirst",
 *    origin: "New York, NY, US",
 *    destination: "Chicago, IL, US",
 *    estimate_available: true | false
 *    minimum_estimate: 24 | null
 *    maximum_estimate: 78 | null
 *    estimate_currency: "USD"
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
  estimate_available: boolean
  minimum_estimate?: number | null
  maximum_estimate?: number | null
  estimate_currency: string
}

/**
 * A user views express checkout
 *
 * This schema describes events sent to Segment from [[ExpressCheckoutViewed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "expressCheckoutViewed",
 *    context_page_owner_type: "ordersShipping",
 *    context_page_owner_slug: "radna-segal-pearl",
 *    context_page_owner_id: "6164889300d643000db86504",
 *    flow: "Buy now" | "Make offer" | "Partner offer"
 *    credit_card_wallet_types: ["applePay", "googlePay"]
 *  }
 * ```
 */
export interface ExpressCheckoutViewed {
  action: ActionType.expressCheckoutViewed
  context_page_owner_type: OwnerType
  context_page_owner_slug: string
  context_page_owner_id: string
  flow: string
  credit_card_wallet_types: string[]
}

/**
 * A user views a saved address
 *
 * This schema describes events sent to Segment from [[SavedAddressViewed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "savedAddressViewed",
 *    context_page_owner_type: "orders-checkout",
 *    context_page_owner_id: "6164889300d643000db86504",
 *    flow: "Buy now" | "Make offer" | "Partner offer"
 *  }
 * ```
 */
export interface SavedAddressViewed {
  action: ActionType.savedAddressViewed
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  flow: string
}

/**
 * A user views a saved payment method
 *
 * This schema describes events sent to Segment from [[SavedPaymentMethodViewed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "savedPaymentMethodViewed",
 *    context_page_owner_type: "orders-checkout",
 *    context_page_owner_id: "6164889300d643000db86504",
 *    flow: "Buy now" | "Make offer" | "Partner offer"
 *    payment_methods: ["CREDIT_CARD", "US_BANK_ACCOUNT"]
 *  }
 * ```
 */
export interface SavedPaymentMethodViewed {
  action: ActionType.savedPaymentMethodViewed
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  flow: string
  payment_methods: string[]
}

/**
 * A user views a step in checkout
 *
 * This schema describes events sent to Segment from [[OrderProgressionViewed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "orderProgressionViewed",
 *    context_module: "OrdersOffer" | "OrdersFulfillment" | "OrdersShippingMethods" | "OrdersPayment" | OrdersReview"
 *    context_page_owner_type: "orders-checkout",
 *    context_page_owner_id: "b0ac7b78-ee9b-4fa8-b0ca-b726169db217",
 *    flow: "Buy now" | "Make offer" | "Partner offer"
 *  }
 * ```
 */
export interface OrderProgressionViewed {
  action: ActionType.orderProgressionViewed
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  flow: string
}

/**
 * A user views the order details page. Event used to track the displayed message
 *
 * This schema describes events sent to Segment from [[orderDetailsViewed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "orderDetailsViewed",
 *    context_module: "ordersDetail"
 *    context_owner_type: "orders-detail",
 *    context_owner_id: "b0ac7b78-ee9b-4fa8-b0ca-b726169db217",
 *    message_type: "CANCELLED" | "SHIPPING_EXPRESS" | ...
 *  }
 * ```
 */
export interface OrderDetailsViewed {
  action: ActionType.orderDetailsViewed
  context_module: ContextModule
  context_owner_type: OwnerType
  context_owner_id: string
  message_type: string
}

/**
 * A user sees the "immersive view" option appear on screen
 *
 * This schema describes events sent to Segment from [[ImmersiveViewOptionViewed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "immersiveViewOptionViewed",
 *    context_module: "artworkGrid",
 *    context_page_owner_type: "collection",
 *    context_page_owner_id: "43048d29-8fc1-4e06-ab20-2e816953934f",
 *  }
 * ```
 */
export interface ImmersiveViewOptionViewed {
  action: ActionType.immersiveViewOptionViewed
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
}

/**
 * An artwork is displayed in immersive view
 *
 * This schema describes events sent to Segment from [[ImmersiveViewArtworkDisplayed]]
 *
 *  @example
 *  ```
 *  {
 *    action: "immersiveViewArtworkDisplayed",
 *    context_module: "artworkGrid",
 *    context_page_owner_type: "collection",
 *    context_page_owner_id: "43048d29-8fc1-4e06-ab20-2e816953934f",
 *    artwork_id: "5d9d3a0e8b0c6c0007e9c8a1"
 *  }
 * ```
 */
export interface ImmersiveViewArtworkDisplayed {
  action: ActionType.immersiveViewArtworkDisplayed
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  artwork_id: string
}

/**
 * User views a navigation dropdown on web
 * - Desktop: triggered after hovering over a top-level nav item (e.g., "Artists") with delay
 * - Mobile web: triggered when drilling down into the navigation menu hierarchy
 *
 * This schema describes events sent to Segment from [[NavigationDropdownViewed]].
 *
 *  @example Desktop hover (always level 0):
 *  ```
 *  {
 *    action: "navigationDropdownViewed",
 *    context_module: "header",
 *    context_page_owner_type: "home",
 *    navigation_item: "Artists",
 *    level: 0,
 *    interaction_type: "hover"
 *  }
 *  ```
 *
 *  @example Mobile web drilldown (level 1):
 *  ```
 *  {
 *    action: "navigationDropdownViewed",
 *    context_module: "header",
 *    context_page_owner_type: "home",
 *    navigation_item: "Blue-Chip Artists",
 *    level: 1,
 *    interaction_type: "drilldown"
 *  }
 *  ```
 */
export interface NavigationDropdownViewed {
  action: ActionType.navigationDropdownViewed
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  navigation_item: string
  level: number
  interaction_type: "hover" | "drilldown"
}
