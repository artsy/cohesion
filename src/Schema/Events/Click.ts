import { ActionType } from "."
import { ContextModule } from "../Values/ContextModule"
import { EntityModuleType } from "../Values/EntityModuleType"
import { OwnerType, PageOwnerType } from "../Values/OwnerType"

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
 * Shared interface for clicked group actions on web
 */
export interface ClickedEntityGroup {
  action:
    | ActionType.clickedArticleGroup
    | ActionType.clickedArtistGroup
    | ActionType.clickedArtistSeriesGroup
    | ActionType.clickedArtworkGroup
    | ActionType.clickedAuctionGroup
    | ActionType.clickedCollectionGroup
    | ActionType.clickedFairGroup
    | ActionType.clickedMainArtworkGrid
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
 * A user clicks the 'Add to Calendar' button on a timed-event page (auction, fair, etc.).
 *
 * This schema describes events sent to Segment from [[ClickedAddToCalendar]]
 *
 *  @example
 *  ```
 *  {
 *    action: "clickedAddToCalendar",
 *    context_module: "auctionHome",
 *    context_page_owner_type: "sale",
 *    context_page_owner_id: "5f99e0ba4c24bc000d02b8d7",
 *    context_page_owner_slug: "artsy-x-seoul-auction-contemporary-icons",
 *    subject: "google"
 *  }
 * ```
 */
export interface ClickedAddToCalendar {
  action: ActionType.clickedAddToCalendar
  context_module: ContextModule
  context_page_owner_type: PageOwnerType
  context_page_owner_id?: string
  context_page_owner_slug?: string
  subject: "Google" | "Outlook" | "iCal"
}
