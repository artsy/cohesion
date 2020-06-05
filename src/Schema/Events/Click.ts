import { ActionType } from "../Event"
import { ContextModule } from "../ContextModule"
import { PageOwnerType } from "../OwnerType"
import { EntityModuleType } from "../EntityModuleType"

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
 * A user clicks a grouping of artists on web
 *
 *  This schema describes events sent to Segment from [[clickedArtistGroup]]
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
 * A user clicks a grouping of artworks on web
 *
 * This schema describes events sent to Segment from [[clickedArtworkGroup]]
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
 * This schema describes events sent to Segment from [[clickedAuctionGroup]]
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
 * A user clicks a grouping of collections on web
 *
 * This schema describes events sent to Segment from [[clickedCollectionGroup]]
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
 * A user clicks a grouping of fairs on web
 *
 * This schema describes events sent to Segment from [[clickedFairGroup]]
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
 * Shared interface for clicked group actions on web
 */
export interface ClickedEntityGroup {
  action:
    | ActionType.clickedArtistGroup
    | ActionType.clickedArtworkGroup
    | ActionType.clickedAuctionGroup
    | ActionType.clickedCollectionGroup
    | ActionType.clickedFairGroup
  context_module: ContextModule
  context_screen_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  destination_page_owner_type: PageOwnerType
  destination_page_owner_id?: string
  destination_page_owner_slug?: string
  horizontal_slide_position?: number
  type: EntityModuleType
}
