import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing 'Lists' events
 * @packageDocumentation
 */

/**
 * When a user adds an artwork to an artwork list
 *
 * This schema describes events sent to Segment from [[addedArtworkToArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "addedArtworkToArtworkList",
 *    context_owner_id: "641b795ae11bda000c80d58d",
 *    context_owner_slug: "banksy-gangsta-rat-unsigned-49",
 *    context_owner_type: "artwork",
 *    artwork_ids: ["641b795ae11bda000c80d58d"]
 *    owner_ids: ["770fa47d-8cc8-4267-93e7-2808544d2a98"]
 *  }
 * ```
 */
export interface AddedArtworkToArtworkList {
  action: ActionType.addedArtworkToArtworkList
  context_owner_id?: string
  context_owner_slug?: string
  context_owner_type: OwnerType
  artwork_ids: string[]
  owner_ids: string[]
}

/**
 * When a user creates an artwork list
 *
 * This schema describes events sent to Segment from [[createdArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "createdArtworkList",
 *    context_owner_id: "641b795ae11bda000c80d58d",
 *    context_owner_slug: "banksy-gangsta-rat-unsigned-49",
 *    context_owner_type: "artwork",
 *    owner_id: "770fa47d-8cc8-4267-93e7-2808544d2a98"
 *  }
 * ```
 */
export interface CreatedArtworkList {
  action: ActionType.createdArtworkList
  context_owner_id?: string
  context_owner_slug?: string
  context_owner_type: OwnerType
  owner_id: string
}

/**
 * When a user edits an artwork list
 *
 * This schema describes events sent to Segment from [[deletedArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "deletedArtworkList",
 *    context_owner_type: "saves",
 *    owner_id: "770fa47d-8cc8-4267-93e7-2808544d2a98"
 *  }
 * ```
 */
export interface DeletedArtworkList {
  action: ActionType.deletedArtworkList
  context_owner_type: OwnerType.saves
  owner_id: string
}

/**
 * When a user edits an artwork list
 *
 * This schema describes events sent to Segment from [[editedArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "editedArtworkList",
 *    context_owner_type: "saves",
 *    owner_id: "770fa47d-8cc8-4267-93e7-2808544d2a98"
 *  }
 * ```
 */
export interface EditedArtworkList {
  action: ActionType.editedArtworkList
  context_owner_type: OwnerType.saves
  owner_id: string
}

/**
 * When a user views an artwork list
 *
 * This schema describes events sent to Segment from [[viewedArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "viewedArtworkList",
 *    context_owner_type: "saves",
 *    owner_id: "770fa47d-8cc8-4267-93e7-2808544d2a98"
 *  }
 * ```
 */
export interface ViewedArtworkList {
  action: ActionType.viewedArtworkList
  context_owner_type: OwnerType.saves
  owner_id: string
}

/**
 * When a user views a shared artwork list
 *
 * This schema describes events sent to Segment from [[viewedSharedArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "viewedSharedArtworkList",
 *    context_owner_type: "saves",
 *    owner_id: "770fa47d-8cc8-4267-93e7-2808544d2a98"
 *  }
 * ```
 */
export interface ViewedSharedArtworkList {
  action: ActionType.viewedSharedArtworkList
  context_owner_type: OwnerType.saves
  owner_id: string
}

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
