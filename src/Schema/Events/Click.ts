import { ContextModule } from "../Values/ContextModule"
import { EntityModuleType } from "../Values/EntityModuleType"
import { OwnerType, PageOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing Click events
 * @packageDocumentation

 */
/**
 *  A user clicks a grouping of entities on web
 *
 *  Events are separated by entity type
 *
 */

/**
 *  User clicks "Add Filters" button within the alert create/edit flow.
 *
 *  This schema describes events sent to Segment from [[clickedAddFilters]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedAddFilters",
 *    context_module: "alertDetails",
 *  }
 * ```
 */
export interface ClickedAddFilters {
  action: ActionType.clickedAddFilters
  context_module: ContextModule
}

/**
 *  User clicks to add new shipping address when entering the orders
 *  checkout flow.
 *
 *  This schema describes events sent to Segment from [[clickedAddNewShippingAddress]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedAddNewShippingAddress",
 *    context_module: "OrdersShipping",
 *    context_page_owner_type: "orders-shipping",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b"
 *  }
 * ```
 */
export interface ClickedAddNewShippingAddress {
  action: ActionType.clickedAddNewShippingAddress
  context_module: ContextModule
  context_page_owner_type: string
  context_page_owner_id: string
}

/**
 * A fair partner with an upcoming booth clicks on Add Works from CMS Checklist To-Do fair item.
 *
 *  This schema describes events sent to Segment from [[clickedAddWorksToFair]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedAddWorksToFair",
 *    context_module: "toDoList",
 *    context_page_owner_type: "home",
 *    destination_page_owner_type: "partner_shows",
 *    destination_page_owner_id: "603f847842d0c10007a960a8",
 *    destination_page_owner_slug: "xavier-hufkens-xavier-hufkens-at-art-brussels-2021",
 *    destination_path: "partner_shows/xavier-hufkens-xavier-hufkens-at-art-brussels-2021/artworks#show-add-artworks-modal"
 *  }
 * ```
 */
export interface ClickedAddWorksToFair {
  action: ActionType.clickedAddWorksToFair
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  destination_page_owner_type: PageOwnerType
  destination_page_owner_id: string
  destination_page_owner_slug: string
  destination_path: string
}
/**
 * A user clicks a grouping of articles on web
 *
 *  This schema describes events sent to Segment from [[clickedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedArticleGroup",
 *    context_module: "relatedArticles",
 *    context_page_owner_type: "fair",
 *    context_page_owner_id: "5e726bd22524980012caafb0",
 *    context_page_owner_slug: "arteba-special-edition",
 *    destination_page_owner_type: "article",
 *    destination_page_owner_id: "542f1ccc7261694847410400",
 *    destination_page_owner_slug: "acaw-acaw-presenter-charwei-tsai",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedArticleGroup extends ClickedEntityGroup {
  action: ActionType.clickedArticleGroup
}

/**
 * A user clicks a grouping of artists on web
 *
 *  This schema describes events sent to Segment from [[clickedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedArtistGroup",
 *    context_module: "trendingArtistsRail",
 *    context_page_owner_type: "home",
 *    destination_page_owner_type: "artist",
 *    destination_page_owner_id: "5359794d1a1e86c3740001f7",
 *    destination_page_owner_slug: "anthony-hunter",
 *    horizontal_slide_position: 1,
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedArtistGroup extends ClickedEntityGroup {
  action: ActionType.clickedArtistGroup
}

/**
 *  A user clicks a grouping of artist series on web.
 *
 *  If the series is boosted by the curation team, set curation_boost to true.
 *
 *  This schema describes events sent to Segment from [[clickedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedArtistSeriesGroup",
 *    context_module: "moreSeriesByThisArtist",
 *    context_page_owner_type: "artistSeries",
 *    context_page_owner_id: "5359794d1a1e86c3740001f7",
 *    context_page_owner_slug: "alex-katz-departure",
 *    destination_page_owner_type: "artistSeries",
 *    destination_page_owner_id: "5359794d1a1e86c3740001f7",
 *    destination_page_owner_slug: "alex-katz-black-dress",
 *    curation_boost: true,
 *    horizontal_slide_position: 1,
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedArtistSeriesGroup extends ClickedEntityGroup {
  action: ActionType.clickedArtistSeriesGroup
  destination_page_owner_type: OwnerType.artistSeries
}

/**
 * A user clicks a grouping of artworks on web. This includes all artwork groupings (i.e. artwork rails), except the main artwork grid on our core merchandising surfaces.
 * For our main artwork grids, we use the event [[clickedMainArtworkGrid]].
 *
 * This schema describes events sent to Segment from [[clickedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedArtworkGroup",
 *    context_module: "newWorksByArtistsYouFollowRail",
 *    context_page_owner_type: "home",
 *    destination_page_owner_type: "artwork",
 *    destination_page_owner_id: "5e9a7a238483bf000e2c4c5e",
 *    destination_page_owner_slug: "romain-jacquet-lagreze-makeshift-garden-hong-kong",
 *    horizontal_slide_position: 1,
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedArtworkGroup extends ClickedEntityGroup {
  action: ActionType.clickedArtworkGroup
}

/**
 * A user clicks a grouping of auctions on web
 *
 * This schema describes events sent to Segment from [[clickedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedAuctionGroup",
 *    context_module: "auctionsRail",
 *    context_page_owner_type: "home",
 *    destination_page_owner_type: "sale",
 *    destination_page_owner_id: "5e95b37a2fdcb20012a0e082",
 *    destination_page_owner_slug: "forum-auctions-colour-theory-4",
 *    horizontal_slide_position: 3,
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedAuctionGroup extends ClickedEntityGroup {
  action: ActionType.clickedAuctionGroup
}

/**
 * A user clicks a result of auctions on web
 *
 * This schema describes events sent to Segment from [[clickedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedAuctionResultItem",
 *    context_module: "auctionResult",
 *    context_page_owner_type: "artistAuctionResults",
 *    expanded: true
 *  }
 * ```
 */
export interface ClickedAuctionResultItem extends ClickedEntityGroup {
  action: ActionType.clickedAuctionResultItem
  expanded: boolean
}

/**
 * A user clicks a grouping of collections on web
 *
 * This schema describes events sent to Segment from [[clickedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedCollectionGroup",
 *    context_module: "collectionRail",
 *    context_page_owner_type: "home",
 *    destination_page_owner_type: "collection",
 *    destination_page_owner_slug: "limited-edition-prints-trending-artists",
 *    horizontal_slide_position: 2,
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedCollectionGroup extends ClickedEntityGroup {
  action: ActionType.clickedCollectionGroup
}

/**
 *  User clicks on Artsy's buyer protection link during their checkout flow.
 *
 *  This schema describes events sent to Segment from [[clickedBuyerProtection]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedBuyerProtection",
 *    context_module: "OrdersShipping",
 *    context_page_owner_type: "orders-shipping",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *    destination_page_owner_type: "articles",
 *    destination_page_owner_slug: "360048946973-How-does-Artsy-protect-me"
 *  }
 * ```
 */
export interface ClickedBuyerProtection {
  action: ActionType.clickedBuyerProtection
  context_module: ContextModule
  context_page_owner_type: string
  context_page_owner_id: string
  destination_page_owner_type: PageOwnerType
  destination_page_owner_slug: string
}

/**
 *  User clicks on Change Payment Method on the orders review page.
 *
 *  This schema describes events sent to Segment from [[clickedChangePaymentMethod]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedChangePaymentMethod",
 *    context_module: "OrdersReview",
 *    context_page_owner_type: "orders-review",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *  }
 * ```
 */
export interface ClickedChangePaymentMethod {
  action: ActionType.clickedChangePaymentMethod
  context_module: ContextModule
  context_page_owner_type: string
  context_page_owner_id: string
}

/**
 *  User clicks on Change Shipping Address on the orders review page.
 *
 *  This schema describes events sent to Segment from [[clickedChangeShippingAddress]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedChangeShippingAddress",
 *    context_module: "OrdersReview",
 *    context_page_owner_type: "orders-review",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *  }
 * ```
 */
export interface ClickedChangeShippingAddress {
  action: ActionType.clickedChangeShippingAddress
  context_module: ContextModule
  context_page_owner_type: string
  context_page_owner_id: string
}

/**
 *  User clicks on Change Shipping Method on the orders review page.
 *
 *  This schema describes events sent to Segment from [[clickedChangePaymentMethod]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedChangeShippingMethod",
 *    context_module: "OrdersReview",
 *    context_page_owner_type: "orders-review",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *  }
 * ```
 */
export interface ClickedChangeShippingMethod {
  action: ActionType.clickedChangeShippingMethod
  context_module: ContextModule
  context_page_owner_type: string
  context_page_owner_id: string
}

/**
 *  User selects delivery option (Shipping or Pick Up) when entering the orders
 *  checkout flow.
 *
 *  This schema describes events sent to Segment from [[clickedDeliveryMethod]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedDeliveryMethod",
 *    context_module: "OrdersShipping",
 *    context_page_owner_type: "orders-shipping",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *    subject: Pick up
 *  }
 * ```
 */
export interface ClickedDeliveryMethod {
  action: ActionType.clickedDeliveryMethod
  context_module: ContextModule
  context_page_owner_type: string
  context_page_owner_id: string
  subject: string
}

/**
 * A user clicks a grouping of fairs on web
 *
 * This schema describes events sent to Segment from [[clickedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedFairGroup",
 *    context_module: "fairRail",
 *    context_page_owner_type: "home",
 *    destination_page_owner_type: "fair",
 *    destination_page_owner_id: "5e726bd22524980012caafb0",
 *    destination_page_owner_slug: "arteba-special-edition",
 *    horizontal_slide_position: 2,
 *    module_height: "double",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedFairGroup extends ClickedEntityGroup {
  action: ActionType.clickedFairGroup
}

/**
 * A user clicks a grouping of galleries on web
 *
 * This schema describes events sent to Segment from [[clickedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedGalleryGroup",
 *    context_module: "featuredGalleries",
 *    context_page_owner_type: "home",
 *    destination_page_owner_type: "gallery",
 *    destination_page_owner_id: "5e726bd22524980012caafb0",
 *    destination_page_owner_slug: "arteba-special-edition",
 *    horizontal_slide_position: 2,
 *    module_height: "double",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedGalleryGroup extends ClickedEntityGroup {
  action: ActionType.clickedGalleryGroup
}

/**
 * A user clicks a grouping of shows on web
 *
 * This schema describes events sent to Segment from [[clickedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedShowGroup",
 *    context_module: "featuredShows",
 *    context_page_owner_type: "home",
 *    destination_page_owner_type: "show",
 *    destination_page_owner_id: "5e726bd22524980012caafb0",
 *    destination_page_owner_slug: "arteba-special-edition",
 *    horizontal_slide_position: 2,
 *    module_height: "double",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedShowGroup extends ClickedEntityGroup {
  action: ActionType.clickedShowGroup
}

/**
 * Shared interface for clicked group actions on web
 */
export interface ClickedEntityGroup {
  action:
    | ActionType.clickedArticleGroup
    | ActionType.clickedArtistGroup
    | ActionType.clickedArtistSeriesGroup
    | ActionType.clickedArtworkGroup
    | ActionType.clickedAuctionGroup
    | ActionType.clickedAuctionResultItem
    | ActionType.clickedCollectionGroup
    | ActionType.clickedFairGroup
    | ActionType.clickedGalleryGroup
    | ActionType.clickedMainArtworkGrid
    | ActionType.clickedShowGroup
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  curation_boost?: boolean
  destination_page_owner_type: PageOwnerType
  destination_page_owner_id?: string
  destination_page_owner_slug?: string
  horizontal_slide_position?: number
  type: EntityModuleType
}

/**
 * A user clicks a fair card
 *
 * This schema describes events sent to Segment from [[ClickedFairCard]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedFairCard",
 *    context_module: "fairCard",
 *    context_page_owner_type: "show",
 *    context_page_owner_id: "5df7daac8225960007129b4f",
 *    context_page_owner_slug: "mccormick-gallery-mccormick-gallery-at-palm-beach-modern-plus-contemporary-2020",
 *    destination_page_owner_type: "fair",
 *    destination_page_owner_id: "5df3e3fa485efe0012c37055",
 *    destination_page_owner_slug: "palm-beach-modern-plus-contemporary-2020",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedFairCard {
  action: ActionType.clickedFairCard
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  destination_page_owner_type: PageOwnerType
  destination_page_owner_id: string
  destination_page_owner_slug: string
  type: "thumbnail"
}

/**
 * A user clicks on an artwork in the main artwork grid, which is the main product feed we can find on our core merchandising surfaces.
 * Currently, this event only fires on our new artwork grids on the following pages: Collect, Collection, Artist works-for-sale, and Search Results.
 * Note: This event is separate from [[clickedArtworkGroup]] because it is an important and frequent event. Separating it out will make it easier for analysts to access.
 *
 * This schema describes events sent to Segment from [[clickedMainArtworkGrid]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedMainArtworkGrid",
 *    context_module: "artworkGrid",
 *    context_page_owner_type: "artist",
 *    context_page_owner_id: "4d8b926a4eb68a1b2c0000ae",
 *    context_page_owner_slug: "damien-hirst",
 *    destination_page_owner_type: "artwork",
 *    destination_page_owner_id: "53188b0d8b3b8192bb0005ae",
 *    destination_page_owner_slug: "damien-hirst-anatomy-of-an-angel",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedMainArtworkGrid {
  action: ActionType.clickedMainArtworkGrid
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  destination_page_owner_type: PageOwnerType
  destination_page_owner_id: string
  destination_page_owner_slug: string
  type: "thumbnail"
  position?: number
  sort?: string
}

/**
 * A user clicks on a navigation tab on web.
 *
 * This schema describes events sent to Segment from [[clickedMainArtworkGrid]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedNavigationTab",
 *    context_module: "exhibitorsTab",
 *    context_page_owner_type: "fair",
 *    context_page_owner_id: "5e726bd22524980012caafb0",
 *    context_page_owner_slug: "arteba-special-edition",
 *    destination_path: "/arteba-special-edition/artworks",
 *    subject: "Artworks"
 *  }
 * ```
 */
export interface ClickedNavigationTab {
  action: ActionType.clickedNavigationTab
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  destination_path: string
  subject: string
}

/**
 *  User clicks in one of the price options on the offer page
 *
 *  This schema describes events sent to Segment from [[clickedOfferOption]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOfferOption",
 *    flow: "Make Offer",
 *    context_page_owner_type: "orders-offer",
 *    context_page_owner_id: "dd0cbbb5-300b-4c49-92a1-fed55b077fa9",
 *    order_id: "407dd09f-4afd-4aad-a6cc-1d6704dc2b11",
 *    offer: "20% below the list price",
 *    amount: 2000,
 *    currency: "USD"
 *  }
 * ```
 */
export interface ClickedOfferOption {
  action: ActionType.clickedOfferOption
  flow: string
  context_page_owner_type: string
  context_page_owner_id: string
  order_id: string
  offer: string
  amount: number
  currency: string
}

/**
 * A Partner clicks on Artwork weight (without packaging) bar in the artwork edit page
 * in CMS.
 *
 * This schema describes events sent to Segment from [[clickedOnArtworkShippingWeight]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOnArtworkShippingWeight",
 *    context_module: "voltArtworksEdit",
 *    context_page_owner_type: "artwork",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *  }
 * ```
 */
export interface ClickedOnArtworkShippingWeight {
  action: ActionType.clickedOnArtworkShippingWeight
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
}

/**
 * A Partner clicks on Artwork weight dropdown to choose weight metric in the artwork edit page
 * in the CMS.
 *
 * This schema describes events sent to Segment from [[clickedOnArtworkShippingUnitsDropdown]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOnArtworkShippingUnitsDropdown",
 *    context_module: "voltArtworksEdit",
 *    context_page_owner_type: "artwork",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *    subject: "lb"
 *  }
 * ```
 */
export interface ClickedOnArtworkShippingUnitsDropdown {
  action: ActionType.clickedOnArtworkShippingUnitsDropdown
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  subject?: string
}

/**
 * A Partner clicks on framed measurements fields in the CMS artworks edit page.
 *
 * This schema describes events sent to Segment from [[clickedOnFramedMeasurements]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOnFramedMeasurements",
 *    context_module: "voltArtworksEdit",
 *    context_page_owner_type: "artwork",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *  }
 * ```
 */
export interface ClickedOnFramedMeasurements {
  action: ActionType.clickedOnFramedMeasurements
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
}

/**
 * A Partner clicks on Artwork frame dimension dropdowns to choose either frame dimensions (H, W, D) or diameter
 * and/or frame metric in the artwork edit page in the CMS.
 *
 * This schema describes events sent to Segment from [[clickedOnFramedMeasurementsDropdown]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOnFramedMeasurementsDropdown",
 *    context_module: "voltArtworksEdit",
 *    context_page_owner_type: "artwork",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *  }
 * ```
 */
export interface ClickedOnFramedMeasurementsDropdown {
  action: ActionType.clickedOnFramedMeasurementsDropdown
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
}

/**
 * A Partner clicks on one of the options (Accept collector's offer, Send a counteroffer, Decline collector's offer)
 * for offers on the orders page on CMS.
 *
 * This schema describes events sent to Segment from [[clickedOfferActions]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOfferActions",
 *    context_page_owner_type: "order",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *    order_id: "60de173a47476c000fd5c4cc"
 *    label: "Accept collector's offer"
 *    artwork_id: "60de173a47476c000fd5c4cc"
 *    flow: offer
 *    partner_id: "60de173a47476c000fd5c4cc"
 *  }
 * ```
 */
export interface ClickedOfferActions {
  action: ActionType.clickedOfferActions
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  order_id: string
  label: string
  artwork_id: string
  flow: string
  partner_id: string
}

/**
 * A Partner clicks on one of the the CTAs on the orders page on the orders page on CMS.
 * - Confirm order
 * - Confirm shipping contact and confirm order
 * - Accept offer
 * - Confirm shipping contact and accept offer
 * - Decline offer
 * - Send a counter offer
 * - Confirm shipping contact and send counter offer
 *
 * This schema describes events sent to Segment from [[clickedOrderPage]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOrderPage",
 *    context_page_owner_type: "order",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *    order_id: "60de173a47476c000fd5c4cc"
 *    label: "Confirm order"
 *    artwork_id: "60de173a47476c000fd5c4cc"
 *    flow: buy
 *    partner_id: "60de173a47476c000fd5c4cc"
 *  }
 * ```
 */
export interface ClickedOrderPage {
  action: ActionType.clickedOrderPage
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  order_id: string
  label: string
  artwork_id: string
  flow: string
  partner_id: string
}

/**
 *  User clicks on submit order on the orders review page.
 *
 *  This schema describes events sent to Segment from [[clickedOnSubmitOrder]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOnSubmitOrder",
 *    context_module: "OrdersReview",
 *    context_page_owner_type: "orders-review",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *  }
 * ```
 */
export interface ClickedOnSubmitOrder {
  action: ActionType.clickedOnSubmitOrder
  context_module: ContextModule
  context_page_owner_type: string
  context_page_owner_id: string
}

/**
 * A user clicks a partner card
 *
 * This schema describes events sent to Segment from [[ClickedPartnerCard]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedPartnerCard",
 *    context_module: "partnerCard",
 *    context_page_owner_type: "show",
 *    context_page_owner_id: "5bb539507a931b299b243dd5",
 *    context_page_owner_slug: "mccormick-gallery-vidvuds-zviedris-old-cities-and-ancient-walls",
 *    destination_page_owner_type: "partner",
 *    destination_page_owner_id: "4e2ed4c42ccd3c000100924f",
 *    destination_page_owner_slug: "mccormick-gallery",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedPartnerCard {
  action: ActionType.clickedPartnerCard
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  destination_page_owner_type: PageOwnerType
  destination_page_owner_id: string
  destination_page_owner_slug: string
  type: "thumbnail"
}

/**
 *  User clicks in one of the payment options on the payment pageview
 *
 *  This schema describes events sent to Segment from [[clickedPaymentMethod]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedPaymentMethod",
 *    flow: "Make Offer",
 *    context_page_owner_type: "orders-payment",
 *    order_id: "407dd09f-4afd-4aad-a6cc-1d6704dc2b11",
 *    subject: "click payment method",
 *    payment method: "bank transfer"
 *    amount: 2000,
 *    currency: "USD"
 *  }
 * ```
 */
export interface ClickedPaymentMethod {
  action: ActionType.clickedPaymentMethod
  flow: string
  context_page_owner_type: string
  order_id: string
  subject: string
  payment_method: string
  amount: number
  currency: string
}

/**
 *  User clicks in one of the payment details on the payment pageview
 *
 *  This schema describes events sent to Segment from [[clickedPaymentDetails]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedPaymentDetails",
 *    flow: "Make Offer",
 *    context_page_owner_type: "orders-payment",
 *    order_id: "407dd09f-4afd-4aad-a6cc-1d6704dc2b11",
 *    subject: "add another credit card",
 *  }
 * ```
 */
export interface ClickedPaymentDetails {
  action: ActionType.clickedPaymentDetails
  flow: string
  context_page_owner_type: string
  order_id: string
  subject: string
}
/**
 * After choosing Bank Transfer, when user clicks on save & continue
 * on the payment page, the balance account is checked
 *
 *  This schema describes events sent
 * to Segment from [[clickedBalanceAccountCheck]]
 *
 *  @example
 *  ```
 *  {
 *    action: "checkedAccountBalance",
 *    flow: "Make Offer",
 *    context_page_owner_type: "orders-payment",
 *    order_id: "407dd09f-4afd-4aad-a6cc-1d6704dc2b11"
 *    amount: 2000,
 *    currency: "USD"
 *    payment_method: "bank transfer"
 *    subject: "balance account check"
 *    outcome: "sucess"
 *  }
 * ```
 */
export interface CheckedAccountBalance {
  action: ActionType.checkedAccountBalance
  flow: string
  context_page_owner_type: string
  order_id: string
  amount: number
  currency: string
  payment_method: string
  subject: string
  outcome: string
}

/**
 *  User selects existing shipping address when entering the orders
 *  checkout flow.
 *
 *  This schema describes events sent to Segment from [[clickedShippingAddress]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedShippingAddress",
 *    context_module: "OrdersShipping",
 *    context_page_owner_type: "orders-shipping",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b"
 *  }
 * ```
 */
export interface ClickedShippingAddress {
  action: ActionType.clickedShippingAddress
  context_module: ContextModule
  context_page_owner_type: string
  context_page_owner_id: string
}

/**
 *  User chooses shipping option.
 *
 *  This schema describes events sent to Segment from [[clickedSelectShippingOption]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedSelectShippingOption",
 *    context_module: "OrdersShipping",
 *    context_page_owner_type: "orders-shipping",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *    subject: "UPS Ground"
 *  }
 * ```
 */
export interface ClickedSelectShippingOption {
  action: ActionType.clickedSelectShippingOption
  context_module: ContextModule
  context_page_owner_type: string
  context_page_owner_id: string
  subject: string
}

/**
 * A user clicks a show more button on web.
 *
 * This schema describes events sent to Segment from [[clickedMainArtworkGrid]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedShowMore",
 *    context_module: "exhibitorsTab",
 *    context_page_owner_type: "fair",
 *    context_page_owner_id: "5e726bd22524980012caafb0",
 *    context_page_owner_slug: "arteba-special-edition",
 *    subject: "Show More"
 *  }
 * ```
 */
export interface ClickedShowMore {
  action: ActionType.clickedShowMore
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  subject: string
}

/**
 * A user clicks a viewing room card
 *
 * This schema describes events sent to Segment from [[ClickedViewingRoomCard]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedViewingRoomCard",
 *    context_module: "viewingRoomCard",
 *    context_page_owner_type: "show",
 *    context_page_owner_id: "541890237261692168870700",
 *    context_page_owner_slug: "susan-eley-fine-art-susan-eley-fine-art-at-art-silicon-valley-slash-san-francisco",
 *    destination_page_owner_type: "viewing-room",
 *    destination_page_owner_id: "95f7dcfd-1996-45e1-9aab-979c38b2de59",
 *    destination_page_owner_slug: "susan-eley-fine-art-counterbalance",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface ClickedViewingRoomCard {
  action: ActionType.clickedViewingRoomCard
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  destination_page_owner_type: PageOwnerType
  destination_page_owner_id: string
  destination_page_owner_slug: string
  type: "thumbnail"
}

/**
 * A user clicks an app download link.
 *
 * This schema describes events sent to Segment from [[ClickedAppDownload]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedAppDownload",
 *    context_module: "sellFooter",
 *    context_page_owner_type: "consign",
 *    destination_path: "https://apps.apple.com/us/app/artsy-buy-sell-original-art/id703796080",
 *    subject: "Download the app"
 *  }
 * ```
 */
export interface ClickedAppDownload {
  action: ActionType.clickedAppDownload
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  destination_path: string
  subject: string
}

/**
 * A partner clicks on Edit Artwork from CMS Checklist To-Do Items.
 *
 * This schema describes events sent to Segment from [[ClickedEditArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedEditArtwork",
 *    context_module: "toDoList",
 *    context_page_owner_type: "home",
 *    destination_page_owner_type: "artworks",
 *    destination_page_owner_id: "5808b9a0cd530e658500008a",
 *    destination_page_owner_slug: "maddalena-ambrosio-untitled"
 *    destination_path: "/artworks/maddalena-ambrosio-untitled/edit"
 *    label: "Add images"
 *  }
 * ```
 */
export interface ClickedEditArtwork {
  action: ActionType.clickedEditArtwork
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  destination_page_owner_type: PageOwnerType
  destination_page_owner_id: string
  destination_page_owner_slug: string
  destination_path: string
  label: string
}

/**
 * A partner clicks on Snooze button from CMS Checklist To-Do Items.
 *
 * This schema describes events sent to Segment from [[ClickedSnooze]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedSnooze",
 *    context_module: "toDoList",
 *    context_page_owner_type: "home"
 *  }
 * ```
 */
export interface ClickedSnooze {
  action: ActionType.clickedSnooze
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
}

/**
 * A partner clicks on toggle arrow, displaying or hiding checklist items
 * from CMS Checklist To-Do Items.
 *
 * This schema describes events sent to Segment from [[ClickedExpansionToggle]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedExpansionToggle",
 *    context_module: "toDoList",
 *    context_page_owner_type: "home"
 *  }
 * ```
 */
export interface ClickedExpansionToggle {
  action: ActionType.clickedExpansionToggle
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
}

/**
 * A partner clicks a load 5 more button from CMS To-Do list
 * after completing daily tasks.
 *
 * This schema describes events sent to Segment from [[ClickedLoadMore]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedLoadMore",
 *    context_module: "toDoList",
 *    context_page_owner_type: "home"
 *    subject: "Load 5 More"
 *  }
 * ```
 */
export interface ClickedLoadMore {
  action: ActionType.clickedLoadMore
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  subject: string
}

/**
 * A user clicks into the identity verification flow on web
 *
 * This schema describes events sent to Segment from [[clickedVerifyIdentity]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedVerifyIdentity",
 *    context_module: "yourActiveBids",
 *    context_page_owner_type: "auctions",
 *    sale_id: "5fad78273c8451000d0c53b9"
 *    subject: "Complete registration"
 *  }
 * ```
 */
export interface ClickedVerifyIdentity {
  action: ActionType.clickedVerifyIdentity
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  sale_id?: string
  subject: string
}

/**
 * A user clicks the pagination on an artwork grid on web
 *
 * This schema describes events sent to Segment from [[clickedChangePage]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedChangePage",
 *    context_module: "artworkGrid",
 *    context_page_owner_type: "artist",
 *    context_page_owner_id: "4d8b926a4eb68a1b2c0000ae",
 *    context_page_owner_slug: "damien-hirst",
 *    page_changed: 2
 *    page_current: 1
 *  }
 * ```
 */
export interface ClickedChangePage {
  action: ActionType.clickedChangePage
  context_module: ContextModule.artworkGrid
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  page_changed: number
  page_current: number
}

/**
 * A user clicks a promo space
 *
 * This schema describes events sent to Segment from [[clickedPromoSpace]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedPromoSpace",
 *    context_module: "banner",
 *    context_screen_owner_type: "home",
 *    destination_screen_owner_type: "collection",
 *    destination_screen_owner_slug: "artists-impacted-museum-shows",
 *    destination_path: "/collection/artists-impacted-museum-shows",
 *    subject: "Browse by collection"
 *  }
 * ```
 */
export interface ClickedPromoSpace {
  action: ActionType.clickedPromoSpace
  context_module: ContextModule
  context_screen_owner_type: PageOwnerType
  destination_screen_owner_type?: PageOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  destination_path: string
  subject: string
}

/**
 * A user clicks create alert button
 *
 * This schema describes events sent to Segment from [[clickedCreateAlert]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedCreateAlert",
 *    context_page_owner_type: "artist",
 *    context_page_owner_id: "5359794d1a1e86c3740001f7",
 *    context_page_owner_slug: "anthony-hunter",
 *  }
 * ```
 */
export interface ClickedCreateAlert {
  action: ActionType.clickedCreateAlert
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
}

/**
 * A user clicks the external news source of an article
 *
 * This schema describes events sent to Segment from [[clickedExternalNewsSource]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedExternalNewsSource",
 *    context_page_owner_type: "article",
 *    context_page_owner_id: "62389c0a0b01c80022eb82a1",
 *    context_page_owner_slug: "artsy-editorial-making-generative-art-changed-understanding",
 *  }
 * ```
 */
export interface ClickedExternalNewsSource {
  action: ActionType.clickedExternalNewsSource
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: PageOwnerType
  destination_path: string
}

/**
 * A user clicks on the sponsor of an article
 *
 * This schema describes events sent to Segment from [[clickedSponsorLink]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedSponsorLink",
 *    context_page_owner_type: "article",
 *    context_page_owner_id: "62389c0a0b01c80022eb82a1",
 *    context_page_owner_slug: "artsy-editorial-making-generative-art-changed-understanding",
 *    destination_path: "https://www.bmw.com/",
 *  }
 * ```
 */
export interface ClickedSponsorLink {
  action: ActionType.clickedSponsorLink
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: PageOwnerType
  destination_path: string
}

/**
 * A user clicks to share an article
 *
 * This schema describes events sent to Segment from [[clickedArticleShare]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedArticleShare",
 *    context_page_owner_type: "article",
 *    context_page_owner_id: "62389c0a0b01c80022eb82a1",
 *    context_page_owner_slug: "artsy-editorial-making-generative-art-changed-understanding",
 *  }
 * ```
 */
export interface ClickedArticleShare {
  action: ActionType.clickedArticleShare
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: PageOwnerType
}

/**
 * A user clicks to play a video
 *
 * This schema describes events sent to Segment from [[clickedPlayVideo]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedPlayVideo",
 *    context_page_owner_type: "article",
 *    context_page_owner_id: "62389c0a0b01c80022eb82a1",
 *    context_page_owner_slug: "artsy-editorial-making-generative-art-changed-understanding",
 *  }
 * ```
 */
export interface ClickedPlayVideo {
  action: ActionType.clickedPlayVideo
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: PageOwnerType
}

/**
 * A user an entity within a tooltip. `type` will be an artist, gene, or partner.
 *
 * This schema describes events sent to Segment from [[clickedTooltip]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedTooltip",
 *    context_page_owner_type: "artist",
 *    context_page_owner_id: "4d8b926a4eb68a1b2c0000ae",
 *    context_page_owner_slug: "damien-hirst",
 *    destination_path: "/artist/damien-hirst",
 *    type: "artist",
 *  }
 * ```
 */
export interface ClickedTooltip {
  action: ActionType.clickedTooltip
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: PageOwnerType
  destination_path: string
  type: string
}

/**
 * A user clicks on the partner's website url on the partner page
 *
 * This schema describes events sent to Segment from [[clickedPartnerLink]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedPartnerLink",
 *    context_page_owner_type: "partner",
 *    context_page_owner_id: "62389c0a0b01c80022eb82a1",
 *    context_page_owner_slug: "heather-james-fine-art",
 *    destination_path: "https://www.heatherjames.com/",
 *  }
 * ```
 */
export interface ClickedPartnerLink {
  action: ActionType.clickedPartnerLink
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: PageOwnerType
  destination_path: string
}

/**
 * A user clicks on "Download order summary" on the order page on CMS
 *
 * This schema describes events sent to Segment from [[clickedOrderSummary]]
 *
 *  @example
 *  ```
 *  {
 action: "clickedOrderSummary",
 *    context_page_owner_type: "order",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *    label: "Download order summary"
 *    flow: offer
 *  }
 * ```
 */
export interface ClickedOrderSummary {
  action: ActionType.clickedOrderSummary
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  label: string
  flow: string
}

/**
 * A Partner clicks on price display dropdown to choose either exact price, price range or contact for price in the artwork edit page in the CMS.
 *
 * This schema describes events sent to Segment from [[clickedOnPriceDisplayDropdown]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOnPriceDisplayDropdown",
 *    context_module: "voltArtworksEdit",
 *    context_page_owner_type: "artwork",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *    label: "exact_price"
 *  }
 * ```
 */
export interface ClickedOnPriceDisplayDropdown {
  action: ActionType.clickedOnPriceDisplayDropdown
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  label: string
}

/**
 * A partner clicks the publish button on the artwork form page in CMS.
 *
 * This schema describes events sent to Segment from [[ClickedPublish]]
 *
 * @example
 * ```
 * {
 *    action: "clickedPublish",
 *    context_module: "artworkDetails" ,
 *    artwork_id: "60de173a47476c000fd5c4cc"
 *    label: "Publish"
 * }
 * ```
 */

export interface ClickedPublish {
  action: ActionType.clickedPublish
  context_module: ContextModule
  artwork_id: string
  label: string
}

/**
 * A Partner selects a filter on the conversations page in CMS.
 *
 * This schema describes events sent to Segment from [[ClickedConversationsFilter]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedConversationsFilter",
 *    label: [selected filter all, selected filter new, selected filter replied],
 *    context_module: "conversations",
 *    context_page_owner_type: "conversation",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *    partner_id: "35de173a47476c111fd5c4cc"
 *  }
 * ```
 */
export interface ClickedConversationsFilter {
  action: ActionType.clickedConversationsFilter
  label: string
  context_module: string
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  partner_id: string
}

/**
 * Partner clicks on dismiss inquiry modal on the conversations page in CMS.
 * They can click on: Select a reason, Cancel, Dismiss inquiry
 *
 * This schema describes events sent to Segment from [[clickedDismissInquiry]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedDismissInquiry"
 *    conversation_id: 123456
 *    label: [select a reason, cancel dismiss inquiry, dismiss inquiry]
 *    reason: [The artwork is no longer available, I already contacted this person, Other]
 *    context_module: "conversations",
 *    context_page_owner_type: "conversation",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *    artwork_id: "60de173a47476c000fd5c4cc"
 *    partner_id: "35de173a47476c111fd5c4cc"
 *  }
 * ```
 */
export interface ClickedDismissInquiry {
  action: ActionType.clickedDismissInquiry
  conversation_id: string
  label: string
  reason: string
  context_module: string
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  artwork_id: string
  partner_id: string
}
/**
 * Partner clicks on mark as spam modal on the conversations page in CMS.
 * They can click on: Cancel or Delete and Mark as Spam
 *
 * This schema describes events sent to Segment from [[clickedMarkSpam]]
 *
 *  @example
 *  ```
 *  {
 *    action: clickedMarkSpam
 *    conversation_id: 123456
 *    label: [mark as spam, cancel mark as spam, delete and mark as spam]
 *    context_module: "conversations",
 *    context_page_owner_type: "conversation",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *    artwork_id: "60de173a47476c000fd5c4cc"
 *    partner_id: "35de173a47476c111fd5c4cc"
 *  }
 * ```
 */
export interface ClickedMarkSpam {
  action: ActionType.clickedMarkSpam
  conversation_id: string
  label: string
  context_module: string
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  artwork_id: string
  partner_id: string
}
/**
 * User clicks on "Set this work as sold" on the dismiss inquiry modal on the CMS conversation page
 * after selecting the option "The work is no longer available"
 *
 * This schema describes events sent to Segment from [[clickedMarkSold]]
 *
 *  @example
 *  ```
 *  {
 *    action: clickedMarkSold
 *    conversation_id: 123456
 *    context_module: "conversations",
 *    context_page_owner_type: "conversation",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *    artwork_id: "60de173a47476c000fd5c4cc"
 *    partner_id: "35de173a47476c111fd5c4cc"
 *  }
 * ```
 */
export interface ClickedMarkSold {
  action: ActionType.clickedMarkSold
  conversation_id: string
  context_module: string
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  artwork_id: string
  partner_id: string
}

/**
 * A Partner clicks on the Buy Now checkbox for selecting selling options in the artwork edit page in the CMS.
 *
 * This schema describes events sent to Segment from [[clickedOnBuyNowCheckbox]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOnBuyNowCheckbox",
 *    context_module: "voltArtworksEdit",
 *    context_page_owner_type: "artwork",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *    label: ["true", "false"]
 *  }
 * ```
 */
export interface ClickedOnBuyNowCheckbox {
  action: ActionType.clickedOnBuyNowCheckbox
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  label: boolean
}

/**
 * A Partner clicks on the Make Offer checkbox for selecting selling options in the artwork edit page in the CMS.
 *
 * This schema describes events sent to Segment from [[clickedOnMakeOfferCheckbox]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOnMakeOfferCheckbox",
 *    context_module: "voltArtworksEdit",
 *    context_page_owner_type: "artwork",
 *    context_page_owner_id: "60de173a47476c000fd5c4cc"
 *    label: ["true", "false"]
 *  }
 * ```
 */
export interface ClickedOnMakeOfferCheckbox {
  action: ActionType.clickedOnMakeOfferCheckbox
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  label: boolean
}

/**
 * A Partner clicks on the Duplicate button for duplicating an artwork in the CMS.
 *
 * This schema describes events sent to Segment from [[clickedOnDuplicateArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOnDuplicateArtwork",
 *    context_module: "voltArtworksEdit",
 *    original_artwork_id: "60de173a47476c000fd5c4cc"
 *    label: "Duplicate"
 *    flow: ["artworksList", "duplicateModal"]
 *  }
 * ```
 */
export interface ClickedOnDuplicateArtwork {
  action: ActionType.clickedOnDuplicateArtwork
  context_module: ContextModule
  original_artwork_id: string
  label: string
  flow: string
}
/**
 *  User clicks on one of the buttons on the validation address modal.
 *
 *  This schema describes events sent to Segment from [[clickedValidationAddressOptions]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedValidationAddressOptions",
 *    context_module: "OrdersShipping",
 *    context_page_owner_type: "orders-shipping",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *    user_id: "61bcda16515b038ce5000104"
 *    subject: Check your delivery address
 *    option: Recommended
 *    label: Use This Address
 *  }
 * ```
 */
export interface ClickedValidationAddressOptions {
  action: ActionType.clickedValidationAddressOptions
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  user_id: string
  subject: string
  option: string
  label: string
}
/**
 *  User clicks in one of the options that closes the modal (buttons, x or away from the screen).
 *
 *  This schema describes events sent to Segment from [[clickedCloseValidationAddressModal]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedCloseValidationAddressModal",
 *    context_module: "OrdersShipping",
 *    context_page_owner_type: "orders-shipping",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *    subject: Check your delivery address
 *    option: Recommended
 *    label: X
 *  }
 * ```
 */
export interface ClickedCloseValidationAddressModal {
  action: ActionType.clickedCloseValidationAddressModal
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  subject: string
  option: string
  label: string
}

/**
 *  User clicks on the CMS nav bar
 *
 *  This schema describes events sent to Segment from [[clickedNavBar]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedNavBar",
 *    context_module: "navBar"
 *    context_page_owner_type: "orders",
 *    context_page_owner_id: "57e60c68-a198-431e-8a02-6ecb01e3a99b",
 *    destination_path: "/artworks"
 *    subject: "Artworks"
 *  }
 * ```
 */
export interface ClickedNavBar {
  action: ActionType.clickedNavBar
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  destination_path: string
  subject: string
}

/**
 *  User clicks on Upload artwork button in CMS.
 *
 *  This schema describes events sent to Segment from [[clickedUploadArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedUploadArtwork",
 *    context_module: "alerts-price"
 *    context_page_owner_type: "demand",
 *    context_page_owner_id: "",
 *    artist_id: "4212691337420",
 *    search_criteria_id: "4212691337420"
 *    subject: "Upload Artworks"
 *  }
 * ```
 */
export interface ClickedUploadArtwork {
  action: ActionType.clickedUploadArtwork
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  artist_id?: string
  search_criteria_id?: string
  subject: string
}

/**
 *  User clicks on the gallery representation pill under featured representation on the artist page
 *
 *  This schema describes events sent to Segment from [[clickedVerifiedRepresentative]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedVerifiedRepresentative",
 *    context_module: ""
 *    context_page_owner_type: PageOwnerType
 *    context_page_owner_id?: "artist_id"
 *    destination_page_owner_type: PageOwnerType
 *    destination_page_owner_id?: "partner_id"
 *  }
 * ```
 */
export interface ClickedVerifiedRepresentative {
  action: ActionType.clickedVerifiedRepresentative
  context_module?: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  destination_page_owner_type: PageOwnerType
  destination_page_owner_id: string
}

/**
 * A user clicks one of the related categories(genes) in the artist about tab
 *
 *  This schema describes events sent to Segment from [[clickedGene]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedGene",
 *    context_module : "Young British Artists",
 *    context_page_owner_type: "Artwork",
 *    context_page_owner_id: "58de681f275b2464fcdde097",
 *    context_page_owner_slug: "damien-hirst",
 *    destination_page_owner_type: "Gene"
 *    destination_page_owner_id: "58de681f275b2464fcdde097"
 *    subject: ""
 *  }
 * ```
 */
export interface ClickedGene {
  action: ActionType.clickedGene
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  context_page_owner_slug?: string
  destination_page_owner_type: PageOwnerType
  destination_page_owner_id: string
  subject?: string
}

/**
 * A user clicks one of the Highlight and Achievement toggles in the artist header
 *
 * This schema describes events sent to Segment from [[clickedHighlightAchievement]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedHighlightAchievement",
 *    context_module : "Active Secondary Market",
 *    context_page_owner_type: "Artwork",
 *    context_page_owner_id: "58de681f275b2464fcdde097",
 *    context_page_owner_slug: "damien-hirst",
 *    destination_page_owner_type: "Gene"
 *    destination_page_owner_id: "58de681f275b2464fcdde097"
 *    subject: ""
 *  }
 * ```
 */
export interface ClickedHighlightAchievement {
  action: ActionType.clickedHighlightAchievement
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  context_page_owner_slug?: string
}

/**
 * A user clicks expand filter panel in CMS
 *
 * This schema describes events sent to Segment from [[clickedExpandFilterPanel]]
 *
 *  @example
 *  ```
 *  {
 *    action: "ClickedExpandFilterPanel",
 *    context_page_owner_type: "Demand",
 *    context_page_owner_id: "",
 *    context_page_owner_slug: ""
 *    label: "Filters"
 *  }
 * ```
 */
export interface ClickedExpandFilterPanel {
  action: ActionType.clickedExpandFilterPanel
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  context_page_owner_slug?: string
  label: string
}

/**
 * A user clicks a filter in the alert filter panel
 *
 * This schema describes events sent to Segment from [[ClickedAlertsFilters]]
 *
 *  @example
 *  ```
 *  {
 *    action: "ClickedAlertsFilters",
 *    context_page_owner_type: "Demand",
 *    context_page_owner_id: "",
 *    context_page_owner_slug: "",
 *    changed: "{"represented_artists":["true"]}"
 *    current: "{}"
 *  }
 * ```
 */
export interface ClickedAlertsFilters {
  action: ActionType.clickedAlertsFilters
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  context_page_owner_slug?: string
  changed: string
  current: string
}

/**
 * A user clicks on Start Sendind Offers on the marketing banner in CMS
 *
 * This schema describes events sent to Segment from [[ClickedStartSendingOffers]]
 *
 *  @example
 *  ```
 *  {
 *    action: "ClickedAlertsFilters",
 *    context_page_owner_type: "Home",
 *    context_page_owner_id: "",
 *    context_page_owner_slug: "",
 *    partner_id: "61bcda16515b038ce5000104"
 *  }
 * ```
 */
 export interface ClickedStartSendingOffers {
  action: ActionType.clickedStartSendingOffers
  context_page_owner_type: PageOwnerType
  context_page_owner_id: string
  context_page_owner_slug?: string
  partner_id: string
}

/**
 * A user clicks on Send Offer on the Send Offers page in CMS
 *
 * This schema describes events sent to Segment from [[ClickedSendOffer]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedSendOffer",
 *    context_module: "Send offers",
 *    context_page_owner_type: "send-offers",
 *    context_page_owner_id: "",
 *    context_page_owner_slug: "",
 *    partner_id: "61bcda16515b038ce5000104", 
 *    arwork_id: "60de173a47476c000fd5c4cc",
 *    price: $20,000,
 *    last_offer_sent: 20,
 *    new_saves: 5,
 *    page: 1
 *  }
 * ```
 */
 export interface ClickedSendOffer {
  action: ActionType.clickedSendOffer
  context_page_module: string
  context_page_owner_type: string
  context_page_owner_id: string
  context_page_owner_slug?: string
  partner_id: string
  artwork_id: string
  price: number
  last_offer_sent: number
  new_saves: number
  page: number
}

/**
 * A user clicks on Add Missing Artworks Details on the Send Offers page in CMS
 *
 * This schema describes events sent to Segment from [[ClickedAddMissingArtworksDetails]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedAddMissingArtworksDetails",
 *    context_module: "Send offers",
 *    context_page_owner_type: "send-offers",
 *    context_page_owner_id: "",
 *    context_page_owner_slug: "",
 *    partner_id: "61bcda16515b038ce5000104", 
 *    arwork_id: "60de173a47476c000fd5c4cc",
 *    price: $20,000,
 *    last_offer_sent: 20,
 *    new_saves: 5,
 *    page: 1
 *  }
 * ```
 */
 export interface ClickedAddMissingArtworksDetails {
  action: ActionType.clickedAddMissingArtworksDetails
  context_page_module: string
  context_page_owner_type: string
  context_page_owner_id: string
  context_page_owner_slug?: string
  partner_id: string
  artwork_id: string
  price: number
  last_offer_sent: number
  new_saves: number
  page: number
}


/**
 * A user clicks on pagination on the Send Offers page in CMS
 *
 * This schema describes events sent to Segment from [[ClickedOnPagination]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOnPagination",
 *    context_module: "Send offers",
 *    context_page_owner_type: "send-offers",
 *    context_page_owner_id: "",
 *    context_page_owner_slug: "",
 *    partner_id: "61bcda16515b038ce5000104", 
 *    label: "1",
 *    current_page: 1,
 *    next_page: 2
 *  }
 * ```
 */
 export interface ClickedOnPagination {
  action: ActionType.clickedOnPagination
  context_page_module: string
  context_page_owner_type: string
  context_page_owner_id: string
  context_page_owner_slug?: string
  partner_id: string
  label: string
  current_page: number
  next_page: number
}

/**
 * A user clicks on Send Offers to Collectors in the modal for partner offers.
 *
 * This schema describes events sent to Segment from [[ClickedSendOfferCollectors]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedSendOfferCollectors",
 *    context_module: "Send offers",
 *    context_page_owner_type: "send-offers",
 *    context_page_owner_id: "",
 *    context_page_owner_slug: "",
 *    partner_id: "61bcda16515b038ce5000104", 
 *    arwork_id: "60de173a47476c000fd5c4cc",
 *    price: $20,000,
 *    collectors: 4
 *  }
 * ```
 */
 export interface ClickedSendOfferCollectors {
  action: ActionType.clickedSendOfferCollectors
  context_page_module: string
  context_page_owner_type: string
  context_page_owner_id: string
  context_page_owner_slug?: string
  partner_id: string
  artwork_id: string
  price: number
  collectors: number
}

/**
 * A user clicks on Send Offers to Collectors in the modal for partner offers.
 *
 * This schema describes events sent to Segment from [[ClickedOnSendOffersIcons]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedOnSendOffersIcons",
 *    context_module: "Send offers",
 *    context_page_owner_type: "send-offers",
 *    context_page_owner_id: "",
 *    context_page_owner_slug: "",
 *    partner_id: "61bcda16515b038ce5000104", 
 *    label: "saves"
 *  }
 * ```
 */
 export interface ClickedOnSendOffersIcons {
  action: ActionType.clickedOnSendOffersIcons
  context_page_module: string
  context_page_owner_type: string
  context_page_owner_id: string
  context_page_owner_slug?: string
  partner_id: string
  label: string
}