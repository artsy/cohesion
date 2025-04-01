import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * When a user taps Offer Settings button
 *
 * This schema describes events sent to Segment from [[tappedOfferSettings]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedOfferSettings",
 *    context_owner_type: "favoritesSaves",
 *  }
 * ```
 */
export interface TappedOfferSettings {
  action: ActionType.tappedOfferSettings
  context_screen: OwnerType.favoritesSaves
}


/**
 * When a user taps Create New list button
 *
 * This schema describes events sent to Segment from [[tappedNewArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedNewArtworkList",
 *    context_owner_type: "favoritesSaves",
 *  }
 * ```
 */
export interface TappedNewArtworkList {
  action: ActionType.tappedNewArtworkList
  context_screen: OwnerType.favoritesSaves
}

/**
 * When a user taps on the Artworks List
 *
 * This schema describes events sent to Segment from [[tappedArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedArtworkList",
 *    destination_screen_owner_type: "artworkList",
 *    destination_screen_owner_id: '5d84bb32b8b3b8'
 *  }
 * ```
 */
export interface TappedArtworkList {
  action: ActionType.tappedArtworkList
  destination_screen_owner_type: OwnerType.artworkList
  destination_screen_owner_id: string
}


/**
 * A user selects a follow category
 *
 * This schema describes events sent to Segment from [[selectedFromDrawer]]
 *
 *  @example
 *  ```
 *  {
 *    action: "selectedFromDrawer",
 *    context_screen: "favoritesFollows",
 *    query: "artists",
 *  }
 * ```
 */
export interface SelectedFromDrawer {
  action: ActionType.selectedFromDrawer
  context_screen: OwnerType.favoritesFollows
  subject: "artists" | "galleries" | "categories" | "shows"
}


// tappedFollowsGroup

// tappedAlertsGroup