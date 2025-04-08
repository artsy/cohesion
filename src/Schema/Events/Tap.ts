import { ContextModule } from "../Values/ContextModule"
import { EntityModuleType } from "../Values/EntityModuleType"
import { OwnerType, ScreenOwnerType } from "../Values/OwnerType"
import { Tab } from "../Values/Tab"
import { ActionType } from "."

/**
 * Schemas describing Tap events
 * @packageDocumentation
 */

/**
 * A user taps a grouping of articles on iOS
 *
 *  This schema describes events sent to Segment from [[tappedArticleGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedArticleGroup",
 *    context_module: "relatedArticles",
 *    context_screen_owner_type: "fair",
 *    context_screen_owner_id: "5e726bd22524980012caafb0",
 *    context_screen_owner_slug: "arteba-special-edition",
 *    destination_screen_owner_type: "article",
 *    destination_screen_owner_id: "542f1ccc7261694847410400",
 *    destination_screen_owner_slug: "acaw-acaw-presenter-charwei-tsai",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedArticleGroup extends TappedEntityGroup {
  action: ActionType.tappedArticleGroup
}

/**
 * A user taps a grouping of activity items
 *
 *  This schema describes events sent to Segment from [[tappedActivityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedActivityGroup",
 *    context_module: "activityRail",
 *    context_screen_owner_type: "home",
 *    destination_path: "/show/grimm-fools-errand",
 *    horizontal_slide_position: 1,
 *    type: "thumbnail"
 *  }
 * ```
 */

export interface TappedActivityGroup extends TappedEntityGroup {
  action: ActionType.tappedActivityGroup
  destination_path?: string
}

export interface TappedShowGroup extends TappedEntityGroup {
  action: ActionType.tappedShowGroup
}

/**
 * A user taps a grouping of artists on iOS
 *
 *  This schema describes events sent to Segment from [[tappedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedArtistGroup",
 *    context_module: "trendingArtistsRail",
 *    context_screen_owner_type: "home",
 *    destination_screen_owner_type: "artist",
 *    destination_screen_owner_id: "5359794d1a1e86c3740001f7",
 *    destination_screen_owner_slug: "anthony-hunter",
 *    horizontal_slide_position: 1,
 *    module_height: "double",
 *    type: "stub"
 *  }
 * ```
 */
export interface TappedArtistGroup extends TappedEntityGroup {
  action: ActionType.tappedArtistGroup
}

/**
 * A user taps a grouping of artist series on iOS. If the artist series was boosted by the curation team, then curation_boost will be set to true.
 *
 *  This schema describes events sent to Segment from [[tappedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedArtistSeriesGroup",
 *    context_module: "moreSeriesByThisArtist",
 *    context_screen_owner_type: "artistSeries",
 *    context_screen_owner_id: "5359794d1a1e86c3740001f7",
 *    context_screen_owner_slug: "alex-katz-departure",
 *    destination_screen_owner_type: "artistSeries",
 *    destination_screen_owner_id: "5359794d1a1e86c3740001f7",
 *    destination_screen_owner_slug: "alex-katz-black-dress",
 *    curation_boost: true,
 *    horizontal_slide_position: 1,
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedArtistSeriesGroup extends TappedEntityGroup {
  action: ActionType.tappedArtistSeriesGroup
  destination_screen_owner_type: OwnerType.artistSeries
}

/**
 * A user taps a grouping of hero units
 *
 *  This schema describes events sent to Segment from [[tappedHeroUnitGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedHeroUnitGroup",
 *    context_module: "heroUnitsRail",
 *    context_screen_owner_type: "home",
 *    destination_path: "/collection/art-for-large-spaces",
 *    horizontal_slide_position: 1,
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedHeroUnitGroup extends TappedEntityGroup {
  action: ActionType.tappedHeroUnitGroup
  destination_path?: string
}

/**
 * A user taps a grouping of artworks on iOS
 *
 * This schema describes events sent to Segment from [[tappedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedArtworkGroup",
 *    context_module: "newWorksByArtistsYouFollowRail",
 *    context_screen_owner_type: "home",
 *    destination_screen_owner_type: "artwork",
 *    destination_screen_owner_id: "5e9a7a238483bf000e2c4c5e",
 *    destination_screen_owner_slug: "romain-jacquet-lagreze-makeshift-garden-hong-kong",
 *    horizontal_slide_position: 1,
 *    module_height: "single",
 *    type: "thumbnail"
 *    signal_label: "Limited-Time Offer",
 *  }
 * ```
 */
export interface TappedArtworkGroup extends TappedEntityGroup {
  action: ActionType.tappedArtworkGroup
  signal_label?: string
  signal_lot_watcher_count?: number
  signal_bid_count?: number
}

/**
 * A user taps a grouping of auctions on iOS
 *
 * This schema describes events sent to Segment from [[tappedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedAuctionGroup",
 *    context_module: "auctionsRail",
 *    context_screen_owner_type: "home",
 *    destination_screen_owner_type: "sale",
 *    destination_screen_owner_id: "5e95b37a2fdcb20012a0e082",
 *    destination_screen_owner_slug: "forum-auctions-colour-theory-4",
 *    horizontal_slide_position: 3,
 *    module_height: "double",
 *    type: "thumbnail"
 *    signal_lot_watcher_count: 2,
 *    signal_bid_count: 1
 *  }
 * ```
 */
export interface TappedAuctionGroup extends TappedEntityGroup {
  action: ActionType.tappedAuctionGroup
  signal_label?: string
  signal_lot_watcher_count?: number
  signal_bid_count?: number
}

/**
 * A user taps a grouping of auction results on iOS
 *
 * This schema describes events sent to Segment from [[tappedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedAuctionResultGroup",
 *    context_module: "artistAuctionResults",
 *    context_screen_owner_type: "artistAuctionResults",
 *    context_screen_owner_id: "51aa03df8b3b8177260002ab",
 *    context_screen_owner_slug: "nicolas-party",
 *    destination_screen_owner_type: "auctionResult",
 *    destination_screen_owner_id: "6398282",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedAuctionResultGroup extends TappedEntityGroup {
  action: ActionType.tappedAuctionResultGroup
}

/**
 * A user clicks the Browse Similar Artworks button on an closed auction artwork page
 *
 * This schema describes events sent to Segment from [[tappedBrowseSimilarArtworks]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedBrowseSimilarArtworks",
 *    context_module: "artworkClosedLotHeader",
 *    context_page_owner_type: "artwork",
 *    context__owner_id: "5fad78273c8451000d0c53b9",
 *    context_screen_owner_slug: "andy-warhol",
 *  }
 * ```
 */
export interface TappedBrowseSimilarArtworks extends TappedEntityGroup {
  action: ActionType.tappedBrowseSimilarArtworks
}

/**
 * A user taps on clear (or swipes away) on a task notification in the app
 *
 * This schema describes events sent to Segment from [[tappedClearTask]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedClearTask",
 *    context_module : "Home",
 *    context_screen_owner_type: "Home",
 *    destination_path: "/orders/123",
 *    task_id: "23424132",
 *    task_type: "send_wire"
 *  }
 * ```
 */
export interface TappedClearTask {
  action: ActionType.tappedClearTask
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  destination_path: string
  task_id: string
  task_type: string
}

/**
 * A user taps a grouping of collections on iOS
 *
 * This schema describes events sent to Segment from [[tappedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedCollectionGroup",
 *    context_module: "collectionRail",
 *    context_screen_owner_type: "home",
 *    destination_screen_owner_type: "collection",
 *    destination_screen_owner_slug: "limited-edition-prints-trending-artists",
 *    horizontal_slide_position: 2,
 *    module_height: "double",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedCollectionGroup extends TappedEntityGroup {
  action: ActionType.tappedCollectionGroup
}

/**
 * A user taps a grouped explore module (City Guide, for example)
 *
 * This schema describes events sent to Segment from [[tappedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedExploreGroup",
 *    context_module: "cityGuideCard",
 *    context_screen_owner_type: "search",
 *    destination_screen_owner_type: "cityGuideGuide",
 *    module_height: "double",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedExploreGroup extends TappedEntityGroup {
  action: ActionType.tappedExploreGroup
}

/**
 * A user taps a grouping of fairs on iOS
 *
 * This schema describes events sent to Segment from [[tappedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedFairGroup",
 *    context_module: "fairRail",
 *    context_screen_owner_type: "home",
 *    destination_screen_owner_type: "fair",
 *    destination_screen_owner_id: "5e726bd22524980012caafb0",
 *    destination_screen_owner_slug: "arteba-special-edition",
 *    horizontal_slide_position: 2,
 *    module_height: "double",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedFairGroup extends TappedEntityGroup {
  action: ActionType.tappedFairGroup
}

/**
 * A user taps a grouping of cards
 *
 * This schema describes events sent to Segment from [[tappedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedCardGroup",
 *    context_module: "exploreBy",
 *    context_screen_owner_type: "home",
 *    destination_screen_owner_type: "collectionsCategory",
 *    destination_screen_owner_id: "5359794d1a1e86c3740001f7",
 *    destination_screen_owner_slug: "artworks-under-1000",
 *    horizontal_slide_position: 1,
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedCardGroup extends TappedEntityGroup {
  action: ActionType.tappedCardGroup
}

/**
 * Shared interface for tapped group actions in iOS
 *
 * This schema describes events sent to Segment from [[tappedEntityGroup]]
 */
export interface TappedEntityGroup {
  action:
    | ActionType.tappedActivityGroup
    | ActionType.tappedArticleGroup
    | ActionType.tappedArtistGroup
    | ActionType.tappedArtistSeriesGroup
    | ActionType.tappedArtworkGroup
    | ActionType.tappedAuctionGroup
    | ActionType.tappedAuctionResultGroup
    | ActionType.tappedBrowseSimilarArtworks
    | ActionType.tappedCardGroup
    | ActionType.tappedCollectionGroup
    | ActionType.tappedExploreGroup
    | ActionType.tappedFairGroup
    | ActionType.tappedHeroUnitGroup
    | ActionType.tappedNavigationPillsGroup
    | ActionType.tappedShowGroup
    | ActionType.tappedTaskGroup
    | ActionType.tappedViewingRoomGroup
    | ActionType.tappedFollowsGroup
    | ActionType.tappedAlertsGroup
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type?: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  curation_boost?: boolean
  horizontal_slide_position?: number
  module_height?: EntityModuleHeight
  type: EntityModuleType
}

export type EntityModuleHeight = "single" | "double"

/**
 * A user taps the Article Share button in iOS
 *
 * This schema describes events sent to Segment from [[tappedArticleShare]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedArticleShare",
 *    context_module: "article",
 *    context_screen_owner_type: "article",
 *    context_screen_owner_id: "some-article-id",
 *    context_screen_owner_id: "some-article-slug",
 *  }
 * ```
 */
export interface TappedArticleShare {
  action: ActionType.tappedArticleShare
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id: string
  context_screen_owner_slug: string
}

/**
 * A user taps a Consign button in iOS
 *
 * This schema describes events sent to Segment from [[tappedConsign]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedConsign",
 *    context_module: "sellHeader",
 *    context_screen_owner_type: "sell",
 *    destination_screen_owner_type: "consignmentSubmission",
 *    subject: "Start selling"
 *  }
 * ```
 */
export interface TappedConsign {
  action: ActionType.tappedConsign
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  destination_screen_owner_type: ScreenOwnerType
  /** The text of the tapped button */
  subject: string
}

/**
 * A user taps a fair card
 *
 * This schema describes events sent to Segment from [[tappedFairCard]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedFairCard",
 *    context_module: "fairCard",
 *    context_screen_owner_type: "show",
 *    context_screen_owner_id: "5df7daac8225960007129b4f",
 *    context_screen_owner_slug: "mccormick-gallery-mccormick-gallery-at-palm-beach-modern-plus-contemporary-2020",
 *    destination_screen_owner_type: "fair",
 *    destination_screen_owner_id: "5df3e3fa485efe0012c37055",
 *    destination_screen_owner_slug: "palm-beach-modern-plus-contemporary-2020",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedFairCard {
  action: ActionType.tappedFairCard
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id: string
  destination_screen_owner_slug: string
  type: "thumbnail"
}

/**
 * A user taps an information bubble
 *
 * This schema describes events sent to Segment from [[tappedInfoBubble]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedInfoBubble",
 *    context_module: "myCollectionArtwork",
 *    context_screen_owner_type: "myCollectionArtwork",
 *    subject: "auctionResults"
 *  }
 * ```
 */
export interface TappedInfoBubble {
  action: ActionType.tappedInfoBubble
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  subject:
    | "auctionResults"
    | "demandIndex"
    | "priceEstimate"
    | "artistMarketStatistics"
    | "auctionResultSalePrice"
    | "alertsHeader"
    | "followsHeader"
    | "signalYourInterestToGalleries"
    | "favoritesHeader"
}

/**
 * A user taps on an artwork in the main artwork grid, which is the main product feed we can find on our core merchandising surfaces.
 * Note: This event is separate from [[tappedArtworkGroup]] because it is an important and frequent event. Separating it out will make it easier for analysts to access.
 *
 * This schema describes events sent to Segment from [[tappedMainArtworkGrid]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedMainArtworkGrid",
 *    context_module: "artworkGrid",
 *    context_screen_owner_type: "artist",
 *    context_screen_owner_id: "4d8b926a4eb68a1b2c0000ae",
 *    context_screen_owner_slug: "damien-hirst",
 *    destination_screen_owner_type: "artwork",
 *    destination_screen_owner_id: "53188b0d8b3b8192bb0005ae",
 *    destination_screen_owner_slug: "damien-hirst-anatomy-of-an-angel",
 *    type: "thumbnail"
 *    signal_label: "Limited-Time Offer",
 *  }
 * ```
 */
export interface TappedMainArtworkGrid {
  action: ActionType.tappedMainArtworkGrid
  context_module: ContextModule
  context_screen?: string
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id: string
  destination_screen_owner_slug: string
  position?: number
  sort?: string
  type: "thumbnail"
  query?: string
  signal_label?: string
  signal_lot_watcher_count?: number
  signal_bid_count?: number
}

/**
 * A user taps the promo space on the iOS home screen
 *
 * This schema describes events sent to Segment from [[tappedPromoSpace]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedPromoSpace",
 *    context_module: "promoSpace",
 *    context_screen_owner_type: "home",
 *    destination_screen_owner_type: "collection",
 *    destination_screen_owner_slug: "artists-impacted-museum-shows",
 *    destination_path: "/collection/artists-impacted-museum-shows",
 *    subject: "Explore the collection"
 *  }
 * ```
 */
export interface TappedPromoSpace {
  action: ActionType.tappedPromoSpace
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  destination_screen_owner_type?: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  destination_path: string
  subject: string
}

/**
 * A user taps "Register to bid" on an iOS sale (auction) page
 *
 * This schema describes events sent to Segment from [[tappedRegisterToBid]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedRegisterToBid",
 *    context_module: "auctionHome",
 *    context_screen_owner_type: "sale",
 *    context_screen_owner_id: "5f8085e733d847000e3af175",
 *    context_screen_owner_slug: "forum-auctions-only-banksy-1"
 *  }
 * ```
 */
export interface TappedRegisterToBid {
  action: ActionType.tappedRegisterToBid
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id: string
  context_screen_owner_slug?: string
}

/**
 * A user taps on the rewind button
 *
 * This schema describes events sent to Segment from [[tappedRewind]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedRewind",
 *    context_module: "infiniteDiscovery",
 *    context_screen_owner_id: "artwork-id",
 *    context_screen_owner_slug: "artwork-slug",
 *    context_screen_owner_type: "infiniteDiscoveryArtwork"
 *  }
 * ```
 */
export interface TappedRewind {
  action: ActionType.tappedRewind
  context_module: ContextModule
  context_screen_owner_id: string
  context_screen_owner_slug: string
  context_screen_owner_type: ScreenOwnerType
}

/**
 * A user taps a button that navigates to the Sell With Artsy home screen (not the 'sell' icon in the tab bar)
 *
 * This schema describes events sent to Segment from [[tappedSell]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedSell",
 *    context_module: "myCollectionArtwork",
 *    context_screen_owner_type: "myCollectionArtwork",
 *    destination_screen_owner_type: "sell"
 *    subject: "Learn more"
 *  }
 * ```
 */
export interface TappedSell {
  action: ActionType.tappedSell
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: OwnerType.sell
  subject: string
}

/**
 * A user taps an icon on the tab bar
 *
 * This schema describes events sent to Segment from [[tappedTabBar]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedTabBar",
 *    badge: true
 *    context_module: "tabBar",
 *    context_screen_owner_type: "home",
 *    tab: "messages"
 *  }
 * ```
 */
export interface TappedTabBar {
  action: ActionType.tappedTabBar
  badge: boolean
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  tab: Tab
}

/**
 * A user taps a grouping of viewing rooms on iOS
 *
 * This schema describes events sent to Segment from [[tappedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedViewingRoomGroup",
 *    context_module: "featuredViewingRoomsRail",
 *    context_screen_owner_type: "home",
 *    destination_screen_owner_type: "viewingRoomList",
 *    type: "header"
 *  }
 * ```
 */
export interface TappedViewingRoomGroup extends TappedEntityGroup {
  action: ActionType.tappedViewingRoomGroup
}

/**
 * A user taps a Show More button on iOS
 *
 * This schema describes events sent to Segment from [[tappedShowMore]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedShowMore",
 *    context_module : "exhibitorsView",
 *    context_screen_owner_type: "fair",
 *    context_screen_owner_id: "5f4d80c972737e000deff1ed",
 *    context_screen_owner_slug: "latitude-art-fair-2020",
 *    subject: "Show More"
 *  }
 * ```
 */
export interface TappedShowMore {
  action: ActionType.tappedShowMore
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  /** The text of the tapped button */
  subject: string
}

/**
 * A user taps a navigation tab on iOS
 *
 * This schema describes events sent to Segment from [[tappedNavigationTab]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedNavigationTab",
 *    context_module : "exhibitorsView",
 *    context_screen_owner_type: "fair",
 *    context_screen_owner_id: "5f4d80c972737e000deff1ed",
 *    context_screen_owner_slug: "latitude-art-fair-2020"
 *  }
 * ```
 */
export interface TappedNavigationTab {
  action: ActionType.tappedNavigationTab
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  subject?: string
  query?: string
}

/**
 * A user taps a partner card
 *
 * This schema describes events sent to Segment from [[tappedPartnerCard]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedPartnerCard",
 *    context_module: "partnerCard",
 *    context_screen_owner_type: "show",
 *    context_screen_owner_id: "5bb539507a931b299b243dd5",
 *    context_screen_owner_slug: "mccormick-gallery-vidvuds-zviedris-old-cities-and-ancient-walls",
 *    destination_screen_owner_type: "partner",
 *    destination_screen_owner_id: "4e2ed4c42ccd3c000100924f",
 *    destination_screen_owner_slug: "mccormick-gallery",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedPartnerCard {
  action: ActionType.tappedPartnerCard
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id: string
  destination_screen_owner_slug: string
  type: "thumbnail"
}

/**
 * A user taps a viewing room card
 *
 * This schema describes events sent to Segment from [[tappedViewingRoomCard]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedViewingRoomCard",
 *    context_module: "viewingRoomCard",
 *    context_screen_owner_type: "show",
 *    context_screen_owner_id: "541890237261692168870700",
 *    context_screen_owner_slug: "susan-eley-fine-art-susan-eley-fine-art-at-art-silicon-valley-slash-san-francisco",
 *    destination_screen_owner_type: "viewing-room",
 *    destination_screen_owner_id: "95f7dcfd-1996-45e1-9aab-979c38b2de59",
 *    destination_screen_owner_slug: "susan-eley-fine-art-counterbalance",
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedViewingRoomCard {
  action: ActionType.tappedViewingRoomCard
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id: string
  destination_screen_owner_slug: string
  type: "thumbnail"
}

/**
 * A user taps into the identity verification flow on iOS
 *
 * This schema describes events sent to Segment from [[tappedVerifyIdentity]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedVerifyIdentity",
 *    context_module: "inboxActiveBids",
 *    context_screen_owner_type: "inboxBids",
 *    sale_id: "5fad78273c8451000d0c53b9"
 *    subject: "Complete registration"
 *  }
 * ```
 */
export interface TappedVerifyIdentity {
  action: ActionType.tappedVerifyIdentity
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  sale_id: string
  subject: string
}

/**
 * A user taps on any hyperlinked text
 *
 * This schema describes events sent to Segment from [[tappedLink]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedLink",
 *    context_module: "inboxActiveBids",
 *    context_screen_owner_type: "inboxBids",
 *    destination_screen_owner_slug: "/favorites"
 *    destination_path: '/favorites'
 *  }
 * ```
 */
export interface TappedLink {
  action: ActionType.tappedLink
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_path: string
  destination_screen_owner_type?: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
}

/**
 * A user taps on a close (modal) button
 *
 * This schema describes events sent to Segment from [[tappedClose]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedClose",
 *    context_module: "infiniteDiscovery",
 *  }
 * ```
 */
export interface TappedClose {
  action: ActionType.tappedClose
  context_module: ContextModule
}

/**
 * A user taps "Create alert button" on an app
 *
 * This schema describes events sent to Segment from [[tappedCreateAlert]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedCreateAlert",
 *    context_screen_owner_type: "artist",
 *    context_screen_owner_id: "58de681f275b2464fcdde097",
 *    context_screen_owner_slug: "anthony-hunter",
 *    context_module: "artworkGrid",
 *  }
 * ```
 */
export interface TappedCreateAlert {
  action: ActionType.tappedCreateAlert
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  context_module?: ContextModule
}

/**
 * A user taps "Bid" on an artwork page inside an Auction
 *
 * This schema describes events sent to Segment from [[tappedBid]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedBid",
 *    context_owner_type: "Artwork",
 *    context_owner_slug: "radna-segal-pearl",
 *    context_owner_id: "6164889300d643000db86504",
 *    signal_lot_watcher_count: 2,
 *    signal_bid_count: 1
 *  }
 * ```
 */

export interface TappedBid {
  action: ActionType.tappedBid
  context_owner_type: ScreenOwnerType
  context_owner_id: string
  context_owner_slug: string
  signal_label?: string
  signal_lot_watcher_count?: number
  signal_bid_count?: number
}

/**
 * A user taps "Purchase" on an artwork page (BNMO)
 *
 * This schema describes events sent to Segment from [[tappedBuyNow]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedBuyNow",
 *    context_owner_type: "Artwork",
 *    context_owner_slug: "radna-segal-pearl",
 *    context_owner_id: "6164889300d643000db86504",
 *    impulse_conversation_id: "198",
 *    flow: "Buy now" | "Partner offer"
 *    signal_label: "Limited-Time Offer",
 *  }
 * ```
 */

export interface TappedBuyNow {
  action: ActionType.tappedBuyNow
  context_module?: ContextModule
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: ScreenOwnerType
  flow?: "Buy now" | "Partner offer"
  impulse_conversation_id?: string
  signal_bid_count?: number
  signal_label?: string
  signal_lot_watcher_count?: number
}

/**
 * A user taps on 'Contact Gallery' on an artwork page
 *
 * This schema describes events sent to Segment from [[tappedContactGallery]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedContactGallery",
 *    context_owner_type: "Artwork",
 *    context_owner_slug: "radna-segal-pearl",
 *    context_owner_id: "6164889300d643000db86504",
 *    signal_label: "Limited-Time Offer",
 *  }
 * ```
 */

export interface TappedContactGallery {
  action: ActionType.tappedContactGallery
  context_owner_type: OwnerType
  context_owner_slug: string
  context_owner_id: string
  signal_label?: string
  signal_lot_watcher_count?: number
  signal_bid_count?: number
}

/**
 * A user taps a Skip button on My Collection add artwork flow
 *
 * This schema describes events sent to Segment from [[tappedSkip]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedSkip",
 *    context_module : "skipButton",
 *    context_screen_owner_type: "myCollectionAddArtworkArtist",
 *    context_screen_owner_id: "58de681f275b2464fcdde097",
 *    context_screen_owner_slug: "anthony-hunter",
 *    subject: "Skip choosing artwork"
 *  }
 * ```
 */
export interface TappedSkip {
  action: ActionType.tappedSkip
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  /** The text of the tapped button */
  subject: string
}

/**
 * A user taps a Sell button in SWA banner on My Collection Artwork page
 *
 * This schema describes events sent to Segment from [[tappedSellArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedSellArtwork",
 *    context_module : "myCollectionArtworkInsights", // or myCollectionArtworkAbout
 *    context_screen_owner_type: "myCollectionAddArtworkArtist",
 *    context_screen_owner_id: "58de681f275b2464fcdde097",
 *    context_screen_owner_slug: "anthony-hunter",
 *    subject: "Skip choosing artwork"
 *  }
 * ```
 */

export interface TappedSellArtwork {
  action: ActionType.tappedSellArtwork
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  /** The text of the tapped button */
  subject: string
}

/**
 * A user taps a Get in Touch button to begin an Inquiry about Consignments
 *
 * This schema describes events sent to Segment from [[tappedConsignmentInquiry]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedConsignmentInquiry",
 *    context_module : "sellHeader"
 *    context_screen: "sell",
 *    context_screen_owner_type: "sell",
 *    subject: "Get in Touch"
 *  }
 * ```
 */
export interface TappedConsignmentInquiry {
  action: ActionType.tappedConsignmentInquiry
  context_module: ContextModule
  context_screen: OwnerType
  context_screen_owner_type: OwnerType
  /** The text of the tapped button */
  subject: string
}

/**
 * A user taps a Learn More button in SWA banner on My Collection Artwork page
 *
 * This schema describes events sent to Segment from [[tappedLearnMore]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedLearnMore",
 *    context_module : "myCollectionArtworkInsights", // or myCollectionArtworkAbout
 *    context_screen_owner_type: "fair",
 *    context_screen_owner_id: "5f4d80c972737e000deff1ed",
 *    context_screen_owner_slug: "latitude-art-fair-2020",
 *    subject: "Learn More",
 *    flow: "Artsy Guarantee"
 *  }
 * ```
 */
export interface TappedLearnMore {
  action: ActionType.tappedLearnMore
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  /** The text of the tapped button */
  subject: string
  flow?: string
}

/**
 * A user long presses an artwork in the app to show a menu
 *
 * This schema describes events sent to Segment from [[longPressedArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "longPressedArtwork",
 *    context_module: "artworkGrid",
 *    context_screen_owner_type: "artist",
 *    context_owner_id: "6164889300d643000db86504",
 *    context_owner_slug: "radna-segal-pearl",
 *  }
 * ```
 */
export interface LongPressedArtwork {
  action: ActionType.longPressedArtwork
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
}

/**
 *  User taps on the gallery representation pill under featured representation on the artist page
 *
 *  This schema describes events sent to Segment from [[tappeddVerifiedRepresentative]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedVerifiedRepresentative",
 *    context_module: ""
 *    context_screen_owner_type: PageOwnerType
 *    context_screen_owner_id?: "artist_id"
 *    destination_screen_owner_type: PageOwnerType
 *    destination_screen_owner_id?: "partner_id"
 *  }
 * ```
 */
export interface TappedVerifiedRepresentative {
  action: ActionType.tappedVerifiedRepresentative
  context_module?: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id: string
}

/**
 * A user taps one of the related categories (genes) in the artist about tab
 *
 * This schema describes events sent to Segment from [[tappedGene]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedGene",
 *    context_module : "Young British Artists",
 *    context_screen_owner_type: "Artwork",
 *    context_screen_owner_id: "58de681f275b2464fcdde097",
 *    context_screen_owner_slug: "damien-hirst",
 *    destination_screen_owner_type: "Gene"
 *    destination_screen_owner_id: "58de681f275b2464fcdde097"
 *    subject: ""
 *  }
 * ```
 */
export interface TappedGene {
  action: ActionType.tappedGene
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id: string
  /** The text of the tapped button */
  subject: string
}

/**
 * A user taps one of the Highlight and Achievement toggles in the artist header
 *
 * This schema describes events sent to Segment from [[tappedHighlightAchievement]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedHighlightAchievement",
 *    context_module : "Active Secondary Market",
 *    context_screen_owner_type: "Artwork",
 *    context_screen_owner_id: "58de681f275b2464fcdde097",
 *    context_screen_owner_slug: "damien-hirst",
 *    destination_screen_owner_type: "Gene"
 *    destination_screen_owner_id: "58de681f275b2464fcdde097"
 *    subject: ""
 *  }
 * ```
 */
export interface TappedHighlightAchievement {
  action: ActionType.tappedHighlightAchievement
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id: string
  context_screen_owner_slug?: string
}

/**
 * A user taps the dedicated section to news in the app
 *
 * This schema describes events sent to Segment from [[tappedNewsSection]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedNewsSection",
 *    context_module : "", Home or News
 *    context_screen_owner_type: "Home",
 *    context_screen_owner_id: "58de681f275b2464fcdde097",
 *    destination_screen_owner_type: "Artwork"
 *    destination_screen_owner_id: "58de681f275b2464fcdde097"
 *  }
 * ```
 */
export interface TappedNewsSection {
  action: ActionType.tappedNewsSection
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id: string
}

/**
 * A user taps on a task notification in the app
 *
 * This schema describes events sent to Segment from [[tappedTaskGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedTaskGroup",
 *    context_module : "Home",
 *    context_screen_owner_type: "Home",
 *    destination_path: "/orders/123",
 *    task_id: "23424132",
 *    task_type: "send_wire"
 *  }
 * ```
 */
export interface TappedTaskGroup extends TappedEntityGroup {
  action: ActionType.tappedTaskGroup
  destination_path: string
  task_id: string
  task_type: string
}

/**
 * A user taps on a toast notification in the app
 *
 * This schema describes events sent to Segment from [[tappedToast]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedToast",
 *    context_module : "infiniteDiscovery",
 *    context_screen_owner_type: "Home",
 *    destination_screen_owner_type: "Saves",
 *    subject: "Tap here to navigate to your Saves area in your profile."
 *  }
 * ```
 */
export interface TappedToast {
  action: ActionType.tappedToast
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  destination_screen_owner_type?: ScreenOwnerType
  subject?: string
}

/**
 * A user clicks on View Work on the notification page.
 *
 * This schema describes events sent to Segment from [[tappedViewWork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedViewWork",
 *    context_module : "Notification"
 *    context_screen_owner_type: "notification",
 *    context_screen_owner_id: "770fa47d-8cc8-4267-93e7-2808544d2a98", (it will change depending on the notification type. For offers, we are using partner offer id)
 *    artwork_id: "6617b3410c1cd2000c6e11c7"
 *    notification_type: "offers" | "all" | "alerts" | "follows"
 *  }
 * ```
 */
export interface TappedViewWork {
  action: ActionType.tappedViewWork
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id: string
  artwork_id: string
  notification_type: string
}

/**
 * A user taps on the complete your profile prompt within the activity pannel
 *
 * This schema describes events sent to Segment from [[tappedCompleteYourProfile]]
 *
 */

export interface TappedCompleteYourProfile {
  action: ActionType.tappedCompleteYourProfile
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id: string
  context_screen_owner_slug?: string
  user_id: string
}

/**
 * A user taps to request a chage of payment method for the order/orders
 *
 * This schema describes event sent to Segment from [[tappedChangePaymentMethod]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedChangePaymentMethod",
 *    context_module : "ordersHistory" | "paymentFailed"
 *    context_screen "orders-history" | "home",
 *    item_id: "order-id" | ""
 *    item_type: "order" | "orders"
 *  }
 * ```
 */

export interface TappedChangePaymentMethod {
  action: ActionType.tappedChangePaymentMethod
  context_module: ContextModule
  context_screen: OwnerType
  item_id: string
  item_type: string
}

/**
 * A user taps on the global search bar
 *
 * This schema describes events sent to Segment from [[tappedGlobalSearchBar]]
 *
 */
export interface TappedGlobalSearchBar {
  action: ActionType.tappedGlobalSearchBar
  context_screen_owner_type: ScreenOwnerType
}

/**
 * A user taps a grouping of navigation pills on App
 *
 * This schema describes events sent to Segment from [[tappedNavigationPillsGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedNavigationPillsGroup",
 *    context_screen_owner_type: "artist",
 *    href: "/follows",
 *    title: "Follows",
 *  }
 * ```
 */
export interface TappedNavigationPillsGroup extends TappedEntityGroup {
  action: ActionType.tappedNavigationPillsGroup
  href: string
  title: string
}

/**
 * A user an item within a menu item group
 *
 * This schema describes events sent to Segment from [[tappedMenuItemGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedMenuItemGroup",
 *    context_module: "accountSettings",
 *    context_screen_owner_type: "artist",
 *    position: "6",
 *    subject: "Dark Mode",
 *  }
 * ```
 */
export interface TappedMenuItemGroup {
  action: ActionType.tappedMenuItemGroup
  context_module?: ContextModule
  context_screen_owner_type: ScreenOwnerType
  position: number
  subject: string
}
