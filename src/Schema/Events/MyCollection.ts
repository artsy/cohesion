import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing 'Add Collected Artwork' events
 * @packageDocumentation
 */

/**
 * A user taps "add artwork" to add an artwork to My Collection.
 *
 * This schema describes events sent to Segment from [[addCollectedArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "addCollectedArtwork",
 *    context_module: "myCollectionHome",
 *    context_owner_type: "myCollection"
 *  }
 * ```
 */
export interface AddCollectedArtwork {
  action: ActionType.addCollectedArtwork
  context_module: ContextModule.myCollectionHome
  context_owner_type: OwnerType.myCollection
}

/**
 * Schema describing 'Edit Collected Artwork' events
 * @packageDocumentation
 */

/**
 * A user taps "Edit" to edit an artwork in My Collection.
 *
 * This schema describes events sent to Segment from [[editCollectedArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "editCollectedArtwork",
 *    context_module: "myCollectionArtwork",
 *    context_owner_type: "myCollectionArtwork",
 *    context_owner_id: "my-artwork-id",
 *    context_owner_slug: "my-artwork-slug"
 *  }
 * ```
 */
export interface EditCollectedArtwork {
  action: ActionType.editCollectedArtwork
  context_module: ContextModule.myCollectionArtwork
  context_owner_type: OwnerType.myCollectionArtwork
  context_owner_id: string
  context_owner_slug: string
}

/**
 * Schema describing 'Delete Collected Artwork' events
 * @packageDocumentation
 */

/**
 * A user taps "delete artwork" to delete an artwork from My Collection.
 *
 * This schema describes events sent to Segment from [[deleteCollectedArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "deleteCollectedArtwork",
 *    context_module: "myCollectionArtwork",
 *    context_owner_type: "myCollectionArtwork"
 *    context_owner_id: "my-artwork-id",
 *    context_owner_slug: "my-artwork-slug"
 *  }
 * ```
 */
export interface DeleteCollectedArtwork {
  action: ActionType.deleteCollectedArtwork
  context_module: ContextModule.myCollectionArtwork
  context_owner_type: OwnerType.myCollectionArtwork
  context_owner_id: string
  context_owner_slug: string
}

/**
 * A user taps a collected artwork within My Collection
 *
 * This schema describes events sent to Segment from [[tappedCollectedArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedCollectedArtwork",
 *    context_module: "myCollectionHome",
 *    context_owner_type: "myCollection",
 *    destination_owner_type: "myCollectionArtwork"
 *    destination_owner_id: "my-collection-artwork-id"
 *    destination_owner_slug: "my-collection-artwork-slug"
 *  }
 * ```
 */
export interface TappedCollectedArtwork {
  action: ActionType.tappedCollectedArtwork
  context_module: ContextModule.myCollectionHome
  context_owner_type: OwnerType.myCollection
  context_owner_id?: string
  destination_owner_type: OwnerType.myCollectionArtwork
  destination_owner_id: string
  destination_owner_slug?: string
}

/**
 * A user taps the artwork image(s) within a MyCollectionArtwork screen
 *
 * This schema describes events sent to Segment from [[tappedCollectedArtworkImages]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedCollectedArtworkImages",
 *    context_module: "myCollectionArtwork",
 *    context_owner_type: "myCollectionArtwork",
 *    context_owner_id: "collected-artwork-id"
 *  }
 * ```
 */
export interface TappedCollectedArtworkImages {
  action: ActionType.tappedCollectedArtworkImages
  context_module: ContextModule.myCollectionArtwork
  context_owner_type: OwnerType.myCollectionArtwork
  context_owner_id: string
  context_owner_slug?: string
}

/**
 * A user taps on an artist in My Collection Add Artwork Add Artist
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
export interface TappedArtistSearchResult {
  action: ActionType.tappedMyCollectionAddArtworkArtist
  context_screen: OwnerType.myCollectionAddArtworkArtist
  context_module: ContextModule.myCollectionAddArtworkAddArtist
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
}
