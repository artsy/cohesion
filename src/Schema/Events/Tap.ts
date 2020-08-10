import { ActionType } from "."
import { ContextModule } from "../Values/ContextModule"
import { EntityModuleType } from "../Values/EntityModuleType"
import { ScreenOwnerType } from "../Values/OwnerType"
import { Tab } from "../Values/Tab"

/**
 * Schemas describing Tap events
 * @packageDocumentation
 */

/**
 *  A user taps a grouping of entities on iOS
 *
 *  Events are separated by entity type
 *
 */

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
 * A user taps a grouping of artist series on iOS
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
 *    featured: true,
 *    horizontal_slide_position: 1,
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedArtistSeriesGroup extends TappedEntityGroup {
  action: ActionType.tappedArtistSeriesGroup
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
 *  }
 * ```
 */
export interface TappedArtworkGroup extends TappedEntityGroup {
  action: ActionType.tappedArtworkGroup
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
 *  }
 * ```
 */
export interface TappedAuctionGroup extends TappedEntityGroup {
  action: ActionType.tappedAuctionGroup
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
 * Shared interface for tapped group actions in iOS
 *
 * This schema describes events sent to Segment from [[tappedEntityGroup]]
 */
export interface TappedEntityGroup {
  action:
    | ActionType.tappedArtistGroup
    | ActionType.tappedArtistSeriesGroup
    | ActionType.tappedArtworkGroup
    | ActionType.tappedAuctionGroup
    | ActionType.tappedCollectionGroup
    | ActionType.tappedExploreGroup
    | ActionType.tappedFairGroup
    | ActionType.tappedViewingRoomGroup
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  featured?: boolean
  horizontal_slide_position?: number
  module_height?: EntityModuleHeight
  type: EntityModuleType
}

export type EntityModuleHeight = "single" | "double"

/**
 * A user taps a Consign button in iOS
 *
 * This schema describes events sent to Segment from [[tappedConsign]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedConsign",
 *    context_module : "sellHeader",
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
 *  }
 * ```
 */
export interface TappedMainArtworkGrid {
  action: ActionType.tappedMainArtworkGrid
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
