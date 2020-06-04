import { ActionType } from "../Event"
import { ContextModule } from "../ContextModule"
import { ScreenOwnerType } from "../OwnerType"

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
 *  This schema describes events sent to Segment from [[tappedArtistGroup]]
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
 * A user taps a grouping of artworks on iOS
 *
 * This schema describes events sent to Segment from [[tappedArtworkGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedArtworkGroup",
 *    context_module: "newWorksByArtistsYouFollowRail",
 *    context_screen_owner_type: "home",
 *    destination_screen_owner_type: Artwork,
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
 * This schema describes events sent to Segment from [[tappedAuctionGroup]]
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
 * This schema describes events sent to Segment from [[tappedCollectionGroup]]
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
 * This schema describes events sent to Segment from [[tappedExploreGroup]]
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
 * This schema describes events sent to Segment from [[tappedFairGroup]]
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
 */
export interface TappedEntityGroup {
  action:
    | ActionType.tappedArtistGroup
    | ActionType.tappedArtworkGroup
    | ActionType.tappedAuctionGroup
    | ActionType.tappedCollectionGroup
    | ActionType.tappedExploreGroup
    | ActionType.tappedFairGroup
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  horizontal_slide_position?: number
  module_height?: EntityModuleHeight
  type: EntityModuleType
}

export type EntityModuleHeight = "single" | "double"
export type EntityModuleType = "thumbnail" | "header" | "stub"

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
