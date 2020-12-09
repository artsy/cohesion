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
 * This schema describes events sent to Segment from [[AddCollectedArtwork]]
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
 * This schema describes events sent to Segment from [[EditCollectedArtwork]]
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
 * This schema describes events sent to Segment from [[DeleteCollectedArtwork]]
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
 *    context_owner_id: "my-collection-id"
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
  context_owner_id: string
  destination_owner_type: OwnerType.myCollectionArtwork
  destination_owner_id: string
  destination_owner_slug: string
}
